import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './i18n';
import enTranslations from './translations/en.json';

// Section Components
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = enTranslations;

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle hash on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-linen">
      {/* Navigation - Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-linen/95 backdrop-blur-sm border-b border-divider">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('hero')} className="text-xl font-serif text-text-primary tracking-tight">
              Nina Moore
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('about')} className="text-sm uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors">
                {t.navigation.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 bg-ground text-white text-sm uppercase tracking-wider hover:bg-ground/90 transition-all rounded-full">
                {t.navigation.bookNow}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-text-primary"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-4 border-t border-divider">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-sm uppercase tracking-wider text-text-secondary hover:text-text-primary">
                {t.navigation.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-sm uppercase tracking-wider text-text-primary font-semibold">
                {t.navigation.bookNow}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 md:pt-48 pb-32">
        <div className="absolute inset-0">
          <img
            src="/images/DSC01844.JPG"
            alt="Nature landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ground/70 via-ground/40 to-ground/20"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
            {t.hero.description}
          </p>
          <div className="space-y-1 mb-8">
            <p className="text-base text-white/70 italic">{t.hero.statement1}</p>
            <p className="text-base text-white/70 italic">{t.hero.statement2}</p>
          </div>
          <div className="space-y-3">
            <button onClick={() => scrollToSection('contact')} className="inline-block px-10 py-4 bg-white text-ground text-sm uppercase tracking-wider hover:bg-white/90 transition-all rounded-full">
              {t.hero.cta}
            </button>
            <p className="text-sm text-white/60">{t.hero.ctaSubtitle}</p>
          </div>
        </div>
      </section>

      {/* ========== INVITATION ========== */}
      <section className="py-24 md:py-32 px-6 bg-linen">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-8 leading-tight text-center">
            {t.invitation.title}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10 text-center">
            {t.invitation.intro}
          </p>
          <p className="text-base text-text-tertiary uppercase tracking-wider mb-6">
            {t.invitation.subtitle}
          </p>
          <div className="space-y-3 mb-10">
            {t.invitation.lines.map((line, index) => (
              <p key={index} className="text-lg text-text-secondary leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <p className="text-xl text-text-primary leading-relaxed text-center italic">
            {t.invitation.closing}
          </p>
        </div>
      </section>

      {/* ========== HOW I WORK ========== */}
      <section className="py-24 md:py-32 px-6 bg-linen-dark">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary text-center mb-10">
            {t.howIWork.title}
          </h2>
          <div className="text-center space-y-4 mb-16">
            <p className="text-lg text-text-secondary">{t.howIWork.intro1}</p>
            <p className="text-lg text-text-secondary italic">{t.howIWork.intro2}</p>
            <p className="text-lg text-text-secondary italic">{t.howIWork.intro3}</p>
          </div>
          <p className="text-base text-text-tertiary uppercase tracking-wider mb-10 text-center">
            {t.howIWork.pillarsIntro}
          </p>
          <div className="space-y-12">
            {t.howIWork.pillars.map((pillar, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-2xl font-serif text-text-primary">{pillar.title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VISUAL BREAK ========== */}
      <div className="h-48 md:h-64 overflow-hidden">
        <img
          src="/images/optimized/break2.webp"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* ========== WAYS TO WORK TOGETHER ========== */}
      <section id="programs" className="py-24 md:py-32 px-6 bg-linen scroll-mt-24">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary text-center mb-6">
            {t.waysToWork.title}
          </h2>
          <p className="text-lg text-text-secondary text-center mb-16">
            {t.waysToWork.intro}
          </p>

          {/* Discovery Call */}
          <div className="mb-12 pb-12 border-b border-divider">
            <h3 className="text-2xl font-serif text-text-primary mb-3">{t.waysToWork.discoveryCall.title}</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-3">{t.waysToWork.discoveryCall.description}</p>
            <p className="text-base text-text-tertiary italic">{t.waysToWork.discoveryCall.note}</p>
          </div>

          {/* Single Session */}
          <div className="mb-12 pb-12 border-b border-divider">
            <h3 className="text-2xl font-serif text-text-primary mb-3">{t.waysToWork.sessions.title}</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">{t.waysToWork.sessions.description}</p>
            <p className="text-lg text-text-primary font-medium">{t.waysToWork.sessions.price}</p>
          </div>

          {/* 4-Session Cycle */}
          <div className="mb-12 pb-12 border-b border-divider">
            <h3 className="text-2xl font-serif text-text-primary mb-3">{t.waysToWork.fourSessions.title}</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">{t.waysToWork.fourSessions.description}</p>
            <p className="text-lg text-text-primary font-medium mb-2">{t.waysToWork.fourSessions.price}</p>
            <p className="text-base text-text-tertiary italic">{t.waysToWork.fourSessions.pacing}</p>
          </div>

          {/* Closing */}
          <p className="text-lg text-text-secondary italic text-center">
            {t.waysToWork.closing}
          </p>
        </div>
      </section>

      {/* ========== NOT RIGHT FOR YOU ========== */}
      <section className="py-24 px-6 bg-linen-dark">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary text-center mb-10">
            {t.notRightFor.title}
          </h2>
          <div className="space-y-4 mb-10">
            {t.notRightFor.lines.map((line, index) => (
              <p key={index} className="text-lg text-text-secondary leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <div className="text-center space-y-2">
            <p className="text-xl text-text-primary italic">{t.notRightFor.closing1}</p>
            <p className="text-xl text-text-primary italic">{t.notRightFor.closing2}</p>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="py-24 md:py-32 px-6 bg-linen scroll-mt-24">
        <div className="container mx-auto max-w-2xl text-center">
          <img
            src="/images/optimized/about-bio-desktop.webp"
            alt="Nina Moore"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-10"
          />
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-10">{t.about.title}</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-6">{t.about.bio}</p>
          <p className="text-lg text-text-tertiary">{t.about.languages}</p>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <ContactSection />

      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  );
}

export default App;
