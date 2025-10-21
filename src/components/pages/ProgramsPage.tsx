import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import enTranslations from '../../translations/en.json';
import esTranslations from '../../translations/es.json';
import frTranslations from '../../translations/fr.json';

export default function ProgramsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es' | 'fr'>('en');

  const t = language === 'es' ? esTranslations : language === 'fr' ? frTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="text-2xl font-serif text-black tracking-tight">
              Nina Moore
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              <Link to="/" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                {t.navigation.about}
              </Link>
              <Link to="/programs" className="text-sm uppercase tracking-wider text-black transition-colors">
                Programs
              </Link>
              <Link to="/contact" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                {t.navigation.contact}
              </Link>
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : language === 'fr' ? 'es' : 'en')}
                className="text-xs uppercase tracking-wider text-black/40 hover:text-black transition-colors"
              >
                {language === 'en' ? 'EN' : language === 'fr' ? 'FR' : 'ES'}
              </button>
              <Link to="/contact" className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.navigation.bookNow}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-6 border-t border-black/5">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60">
                Home
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60">
                {t.navigation.about}
              </Link>
              <Link to="/programs" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black">
                Programs
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60">
                {t.navigation.contact}
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider font-semibold">
                {t.navigation.bookNow}
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-stone-50 to-slate-100">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif text-black mb-8 leading-tight tracking-tight">
            Programs
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed">
            Sacred Union & Relationship Transformation
          </p>
        </div>
      </section>

      {/* Sacred Union Program */}
      <section className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 to-slate-100 rounded-sm"></div>

            {/* Program Description */}
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                Sacred Union
              </h2>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                A 4-week transformation program for couples ready to deepen their relationship and embark on a journey of profound healing and growth.
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                <p>
                  You've entered the most transformative relationship dynamic of your life and it's kicking your ass. This program is here to hold you through the wild ride, providing anchors to return to when challenges arise.
                </p>
                <p>
                  Together, we'll explore trust, unconditional love, communication, shadow work, and transgenerational trauma healing. This is not traditional couples therapy — this is soul-level work for partners ready to transform.
                </p>
              </div>

              <div className="pt-8">
                <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            4-Week Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Week 1 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">Week 1</div>
              <h3 className="text-3xl font-serif text-black">
                Building Trust & Unconditional Love
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                Setting intentions, exploring trust within yourself and your partner, understanding and practicing unconditional love, and identifying personal barriers to intimacy.
              </p>
            </div>

            {/* Week 2 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">Week 2</div>
              <h3 className="text-3xl font-serif text-black">
                Communication & Shadow Work
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                Practicing vulnerability, deepening emotional intimacy, identifying and acknowledging your shadows, and learning to embrace the parts of yourself you've hidden.
              </p>
            </div>

            {/* Week 3 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">Week 3</div>
              <h3 className="text-3xl font-serif text-black">
                Healing Transgenerational Trauma
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                Understanding inherited patterns, de-programming cellular trauma, and fostering inner growth together as you break free from limiting beliefs.
              </p>
            </div>

            {/* Week 4 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">Week 4</div>
              <h3 className="text-3xl font-serif text-black">
                Integration & Celebration
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                Embracing change together, building resilience, celebrating your progress, and anchoring the transformation into your daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center space-y-16">
          <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
            Core Principles
          </h2>

          <div className="space-y-12 text-xl md:text-2xl text-black/70 leading-relaxed">
            <p className="italic">
              Trust the process, knowing that there is a world of subtleties beyond the conscious relationship dogma.
            </p>
            <p>
              You're not healing only yourself. The work ripples far out — you are de-programming transgenerational trauma at a cellular, DNA level.
            </p>
            <p>
              Welcome the thunderstorms. Use the energy of challenges to bring transformation instead of avoiding them.
            </p>
            <p className="text-black font-medium text-3xl md:text-4xl pt-8">
              You are souls on a mission.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif leading-relaxed">
            Ready to transform your relationship?
          </h2>
          <p className="text-xl text-white/70">
            This program is for couples who trust their soul path and are ready to do the deep work.
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-serif text-black">
              Nina Moore
            </div>

            <div className="flex items-center gap-8 text-sm uppercase tracking-wider text-black/60">
              <a href={`mailto:${t.footer.email}`} className="hover:text-black transition-colors">
                {t.footer.links.email}
              </a>
              <a href={`https://instagram.com/${t.footer.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                {t.footer.links.instagram}
              </a>
              <Link to="/support" className="hover:text-black transition-colors">
                {t.footer.links.support}
              </Link>
              <Link to="/privacy" className="hover:text-black transition-colors">
                {t.footer.links.privacy}
              </Link>
            </div>
          </div>

          <div className="text-center mt-12 text-xs text-black/40">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
