// Fetches Nina's latest public Instagram posts, downloads + optimizes the
// thumbnails locally (IG CDN urls expire), and writes public/ig/posts.json.
// Re-run + commit to refresh the feed:  node scripts/fetch-instagram.cjs
const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const USERNAME = 'nina__eterna';
const COUNT = 9;                 // posts to show (3x3 grid)
const APP_ID = '936619743392459'; // public web app id used by instagram.com

const root = path.join(__dirname, '..');
const imgDir = path.join(root, 'public/images/ig');
const outJson = path.join(root, 'public/ig/posts.json');

function get(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', ...headers } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location, headers).then(resolve, reject);
      }
      if (res.statusCode !== 200) return reject(new Error('HTTP ' + res.statusCode + ' for ' + url));
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function main() {
  fs.mkdirSync(imgDir, { recursive: true });
  fs.mkdirSync(path.dirname(outJson), { recursive: true });

  const cacheFile = path.join(__dirname, 'ig-profile.cache.json');
  const profileUrl = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`;
  let data;
  try {
    const raw = await get(profileUrl, { 'X-IG-App-ID': APP_ID });
    data = JSON.parse(raw.toString());
    fs.writeFileSync(cacheFile, JSON.stringify(data)); // refresh cache on success
  } catch (e) {
    if (!fs.existsSync(cacheFile)) throw e;
    console.warn('live fetch failed (' + e.message + ') — using cached profile json');
    data = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  }
  const edges = data.data.user.edge_owner_to_timeline_media.edges.slice(0, COUNT);

  const posts = [];
  for (const { node } of edges) {
    const src = node.thumbnail_src || node.display_url;
    const buf = await get(src);
    const file = `${node.shortcode}.jpg`;
    await sharp(buf)
      .resize(640, 640, { fit: 'cover', position: 'attention' })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(imgDir, file));

    const caption = (node.edge_media_to_caption.edges[0]?.node.text || '')
      .replace(/\s+/g, ' ').trim().slice(0, 120);
    posts.push({
      shortcode: node.shortcode,
      permalink: `https://www.instagram.com/p/${node.shortcode}/`,
      image: `/images/ig/${file}`,
      isVideo: !!node.is_video,
      caption,
    });
    console.log('  ✓', node.shortcode, node.is_video ? '(video)' : '');
  }

  fs.writeFileSync(outJson, JSON.stringify({ username: USERNAME, fetchedCount: posts.length, posts }, null, 2));
  console.log(`wrote ${posts.length} posts → public/ig/posts.json`);
}

main().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
