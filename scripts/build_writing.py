#!/usr/bin/env python3
"""Refresh the essay list on writing/index.html from Nina's Substack RSS feed.

Run from anywhere:  python3 scripts/build_writing.py  (CI runs it before every build and once a day)
It fetches the feed once, renders the latest essays (title, date, short excerpt,
link to Substack) and replaces whatever sits between the feed:start / feed:end
comments in writing/index.html. Nothing else in the page is touched.

- Feed unreachable: the page is left as it is (the last good list, or the
  "Read on Substack" fallback) and the script exits with code 1.
- Feed reachable but empty: the list is replaced by the "Read on Substack" fallback.
Standard library only.
"""
import html
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
from pathlib import Path

FEED = "https://ninamoore.substack.com/feed"
SUBSTACK = "https://ninamoore.substack.com"
PAGE = Path(__file__).resolve().parent.parent / "site" / "writing" / "index.html"
LIMIT = 10          # how many essays to show
EXCERPT_CHARS = 180  # only used when a post has no subtitle
START = "<!-- feed:start · written by tools/build_writing.py, re-run it to refresh -->"
END = "<!-- feed:end -->"
CONTENT_NS = "{http://purl.org/rss/1.0/modules/content/}encoded"

FALLBACK = (
    f'<p class="essays-empty"><a class="go" href="{SUBSTACK}">Read on Substack '
    '<span class="arr" aria-hidden="true">→</span></a></p>'
)


def fetch(url):
    """Return the feed bytes, or None if it can't be reached."""
    req = urllib.request.Request(url, headers={"User-Agent": "site-builder/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.read()
    except Exception as e:  # network, DNS, HTTP errors: all mean "keep the page as is"
        print(f"feed unreachable: {e}", file=sys.stderr)
        return None


def clip(text, n):
    """Cut plain text at a word boundary, adding an ellipsis when shortened."""
    text = " ".join(text.split())
    if len(text) <= n:
        return text
    return text[:n].rsplit(" ", 1)[0].rstrip(",;:—-") + "…"


def parse(xml_bytes):
    """Feed XML -> list of {title, date, excerpt, link}, newest first, Substack links only."""
    root = ET.fromstring(xml_bytes)
    items = []
    for it in root.iter("item"):
        title = " ".join((it.findtext("title") or "").split())
        link = (it.findtext("link") or "").strip()
        # the feed is outside data: only ever link to her Substack
        if not title or not link.startswith(SUBSTACK + "/"):
            continue
        try:
            date = parsedate_to_datetime(it.findtext("pubDate") or "")
        except (TypeError, ValueError):
            date = None
        # Substack puts the post subtitle in <description>; fall back to the body text
        excerpt = (it.findtext("description") or "").strip()
        if not excerpt:
            body = re.sub(r"<[^>]+>", " ", it.findtext(CONTENT_NS) or "")
            excerpt = clip(html.unescape(body), EXCERPT_CHARS)
        items.append({"title": title, "date": date, "excerpt": " ".join(excerpt.split()), "link": link})
    items.sort(key=lambda x: x["date"].timestamp() if x["date"] else 0, reverse=True)
    return items


def render(items):
    """List markup for the page (escaped), or the fallback link when there is nothing."""
    if not items:
        return FALLBACK
    rows = []
    for x in items[:LIMIT]:
        e = html.escape
        date = (
            f'<time class="essay__date" datetime="{x["date"]:%Y-%m-%d}">{x["date"].day} {x["date"]:%b %Y}</time>'
            if x["date"] else '<span class="essay__date"></span>'
        )
        sub = f'\n      <p class="essay__sub">{e(x["excerpt"])}</p>' if x["excerpt"] else ""
        rows.append(
            f'  <li class="essay">\n    {date}\n    <div>\n'
            f'      <h3 class="essay__title"><a href="{e(x["link"], quote=True)}">{e(x["title"])}</a></h3>{sub}\n'
            f'    </div>\n    <span class="essay__arr" aria-hidden="true">→</span>\n  </li>'
        )
    more = (
        f'<p class="essays-more"><a class="go" href="{SUBSTACK}">Read on Substack '
        '<span class="arr" aria-hidden="true">→</span></a></p>'
    )
    return '<ol class="essays">\n' + "\n".join(rows) + "\n</ol>\n" + more


def write(page, block):
    """Replace the text between the two markers; refuse if they aren't there."""
    s = page.read_text()
    i, j = s.find(START), s.find(END)
    if i < 0 or j < i:
        sys.exit(f"markers not found in {page}")
    page.write_text(s[: i + len(START)] + "\n" + block + "\n" + s[j:])


def self_check():
    """Tiny offline check: parsing keeps Substack links, drops others, escapes text."""
    sample = b"""<rss><channel>
      <item><title>A &amp; B &lt;i&gt;</title><link>https://ninamoore.substack.com/p/x</link>
        <pubDate>Mon, 16 Nov 2026 23:17:20 GMT</pubDate><description>Sub</description></item>
      <item><title>Elsewhere</title><link>https://evil.example/p</link></item>
    </channel></rss>"""
    got = parse(sample)
    assert [x["title"] for x in got] == ["A & B <i>"], got
    out = render(got)
    assert "A &amp; B &lt;i&gt;" in out and "evil" not in out and "16 Nov 2026" in out, out
    assert render([]) == FALLBACK


if __name__ == "__main__":
    self_check()
    data = fetch(FEED)
    if data is None:
        sys.exit(1)  # leave the page untouched
    try:
        items = parse(data)
    except ET.ParseError as e:
        sys.exit(f"feed is not valid XML ({e}); page left as it is")
    write(PAGE, render(items))
    print(f"wrote {min(len(items), LIMIT)} of {len(items)} essays to {PAGE.relative_to(PAGE.parent.parent)}")
