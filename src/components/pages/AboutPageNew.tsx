import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import enTranslations from '../../translations/en.json';
import esTranslations from '../../translations/es.json';
import frTranslations from '../../translations/fr.json';

export default function AboutPage() {
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
              <Link to="/about" className="text-sm uppercase tracking-wider text-black transition-colors">
                {t.navigation.about}
              </Link>
              <Link to="/programs" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
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
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black">
                {t.navigation.about}
              </Link>
              <Link to="/programs" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60">
                Programs
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60">
                {t.navigation.contact}
              </Link>
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : language === 'fr' ? 'es' : 'en')}
                className="block text-xs uppercase tracking-wider text-black/40 hover:text-black transition-colors"
              >
                {language === 'en' ? 'EN' : language === 'fr' ? 'FR' : 'ES'}
              </button>
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

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif text-black mb-8 leading-tight tracking-tight">
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Bio Section - Image + Text */}
      <section className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-slate-100 rounded-sm"></div>

            {/* Bio Text */}
            <div className="space-y-10 text-xl md:text-2xl text-black/70 leading-relaxed">
              {t.about.bio.map((paragraph, index) => (
                <p key={index} className={index === 4 ? "text-black font-medium text-3xl md:text-4xl leading-relaxed pt-6" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="h-[60vh] bg-gradient-to-r from-stone-100 to-slate-50"></section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
            {t.about.cta.title}
          </h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            {t.about.cta.button}
          </Link>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="border-t border-black/10 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-serif text-black">
              Nina Moore
            </div>

            <div className="flex items-center gap-8 text-sm uppercase tracking-wider text-black/60">
              <a href="mailto:hello@nina-moore.com" className="hover:text-black transition-colors">
                Email
              </a>
              <a href="https://instagram.com/nina__eterna" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                Instagram
              </a>
              <Link to="/support" className="hover:text-black transition-colors">
                Support
              </Link>
              <Link to="/privacy" className="hover:text-black transition-colors">
                Privacy
              </Link>
            </div>
          </div>

          <div className="text-center mt-12 text-xs text-black/40">
            © 2025 Nina Moore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
