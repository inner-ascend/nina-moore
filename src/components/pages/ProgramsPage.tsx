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
                {t.programs.title}
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
        <div className="absolute inset-0">
          <img
            src="/images/programs-hero.jpg"
            alt="Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            {t.programs.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-lg">
            {t.programs.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Sacred Union Program */}
      <section className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Sacred Union Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/images/sacred-union.JPG"
                alt="Sacred Union"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Program Description */}
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.sacredUnion.title}
              </h2>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.sacredUnion.subtitle}
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                {t.programs.sacredUnion.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8">
                <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  {t.programs.sacredUnion.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundalini Transmission Program */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Program Description */}
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.kundalini.title}
              </h2>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.kundalini.subtitle}
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                {t.programs.kundalini.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8">
                <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  {t.programs.kundalini.cta}
                </Link>
              </div>
            </div>

            {/* Kundalini Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/images/kundalini.JPG"
                alt="Kundalini Transmission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Retreats Program */}
      <section className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Retreats Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/images/retreats.JPG"
                alt="Immersive Retreats"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Program Description */}
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.retreats.title}
              </h2>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.retreats.subtitle}
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                {t.programs.retreats.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8">
                <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  {t.programs.retreats.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Offerings */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.programs.retreatOfferings.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {t.programs.retreatOfferings.items.map((item) => (
              <div key={item.num} className="space-y-6">
                <div className="text-4xl font-serif text-black/20">{item.num}</div>
                <h3 className="text-3xl font-serif text-black">
                  {item.title}
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/programs-break.jpg"
          alt="Sacred experience"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Transmission Benefits */}
      <section className="py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.programs.experience.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {t.programs.experience.items.map((item) => (
              <div key={item.num} className="space-y-6">
                <div className="text-4xl font-serif text-black/20">{item.num}</div>
                <h3 className="text-3xl font-serif text-black">
                  {item.title}
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Union Program Structure */}
      <section className="py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.programs.fourWeek.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {t.programs.fourWeek.weeks.map((week) => (
              <div key={week.num} className="space-y-6">
                <div className="text-4xl font-serif text-black/20">{week.num}</div>
                <h3 className="text-3xl font-serif text-black">
                  {week.title}
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {week.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center space-y-16">
          <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
            {t.programs.principles.title}
          </h2>

          <div className="space-y-12 text-xl md:text-2xl text-black/70 leading-relaxed">
            {t.programs.principles.items.map((item, index) => (
              <p key={index} className={index === 0 ? "italic" : index === 3 ? "text-black font-medium text-3xl md:text-4xl pt-8" : ""}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-zinc-800 text-white">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif leading-relaxed">
            {t.programs.cta.title}
          </h2>
          <p className="text-xl text-white/70">
            {t.programs.cta.subtitle}
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
            {t.programs.cta.button}
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
