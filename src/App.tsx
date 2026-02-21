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
              <a href="https://calendly.com/ninamoorerising/free-discovery" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-ground text-white text-sm uppercase tracking-wider hover:bg-ground/90 transition-all rounded-full">
                {t.navigation.bookNow}
              </a>
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
              <a href="https://calendly.com/ninamoorerising/free-discovery" target="_blank" rel="noopener noreferrer" className="block w-full text-left py-2 text-sm uppercase tracking-wider text-text-primary font-semibold" onClick={() => setMobileMenuOpen(false)}>
                {t.navigation.bookNow}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24">
        <div className="absolute inset-0">
          <img
            src="/images/DSC01844.JPG"
            alt="Nature landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ground/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl font-serif text-white/90 leading-relaxed mb-8 italic">
            {t.hero.subtitle}
          </p>
          <a href="https://calendly.com/ninamoorerising/free-discovery" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-white/80 text-white text-sm uppercase tracking-wider hover:bg-white hover:text-ground transition-all">
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* ========== INVITATION ========== */}
      <section className="py-24 md:py-32 px-6 bg-linen">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-10 leading-tight text-center">
            {t.invitation.title}
          </h2>
          <div className="space-y-3 mb-10 text-center">
            {t.invitation.lines.map((line, index) => (
              <p key={index} className="text-lg text-text-secondary leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-serif text-text-primary leading-relaxed text-center italic">
            {t.invitation.closing}
          </p>
        </div>
      </section>

      {/* ========== PARALLAX IMAGE BREAK ========== */}
      <div className="h-64 md:h-96 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: 'url(/images/optimized/about-break.webp)' }}
        />
        <div className="absolute inset-0 bg-ground/20" />
      </div>

      {/* ========== HOW I WORK ========== */}
      <section className="py-24 md:py-32 px-6 bg-linen-dark">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="hidden md:block">
              <img
                src="/images/optimized/kundalini.webp"
                alt="How I work"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-6">
                {t.howIWork.title}
              </h2>
              <p className="text-lg text-text-secondary mb-8">{t.howIWork.intro1}</p>
              <p className="text-base text-text-tertiary uppercase tracking-wider mb-6">
                {t.howIWork.pillarsIntro}
              </p>
              <div className="space-y-6">
                {t.howIWork.pillars.map((pillar, index) => (
                  <div key={index} className="border-l-2 border-clay pl-5">
                    <h3 className="text-xl font-serif italic text-text-primary mb-2">{pillar.title}</h3>
                    <p className="text-base text-text-secondary leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT A SESSION CAN HOLD ========== */}
      <section className="py-24 md:py-32 px-6 bg-linen">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-6 leading-tight">
                {t.sessionEntails.title}
              </h2>
              <p className="text-lg text-text-secondary mb-8">{t.sessionEntails.intro}</p>
              <div className="space-y-3">
                {t.sessionEntails.items.map((item, index) => (
                  <p key={index} className="text-lg text-text-secondary leading-relaxed flex items-start">
                    <span className="mr-3 text-clay">•</span>
                    {item.title}
                  </p>
                ))}
              </div>
              <p className="text-lg font-serif text-text-secondary italic mt-8">{t.sessionEntails.closing}</p>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/optimized/journey.webp"
                alt="Session atmosphere"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT TYPE OF WORK ========== */}
      <section className="py-24 md:py-32 px-6 bg-linen-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="hidden md:block pt-16">
              <img
                src="/images/optimized/invitation.webp"
                alt="Work together"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-10 leading-tight">
                {t.workTypes.title}
              </h2>
              <div className="space-y-6">
                {t.workTypes.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-sm text-text-tertiary font-medium">{item.num}</span>
                    <div>
                      <h3 className="text-base font-medium text-text-primary mb-1">{item.title}</h3>
                      <p className="text-base text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://calendly.com/ninamoorerising/free-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 px-8 py-3 border border-text-primary text-text-primary text-sm uppercase tracking-wider hover:bg-text-primary hover:text-white transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

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
            <p className="text-base text-text-tertiary italic mb-6">{t.waysToWork.discoveryCall.note}</p>
            <a
              href="https://calendly.com/ninamoorerising/free-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-ground text-white text-sm uppercase tracking-wider hover:bg-ground/90 transition-all rounded-full"
            >
              Schedule a Free Call
            </a>
          </div>

          {/* Single Session */}
          <div className="mb-12 pb-12 border-b border-divider">
            <h3 className="text-2xl font-serif text-text-primary mb-3">{t.waysToWork.sessions.title}</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">{t.waysToWork.sessions.description}</p>
            <p className="text-lg text-text-primary font-medium mb-6">{t.waysToWork.sessions.price}</p>
            <a
              href="https://calendly.com/ninamoorerising/1-1-session-with-nina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-text-primary text-text-primary text-sm uppercase tracking-wider hover:bg-text-primary hover:text-white transition-all rounded-full"
            >
              Book a Session
            </a>
          </div>

          {/* 4-Session Cycle */}
          <div className="mb-12 pb-12 border-b border-divider">
            <h3 className="text-2xl font-serif text-text-primary mb-3">{t.waysToWork.fourSessions.title}</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">{t.waysToWork.fourSessions.description}</p>
            <p className="text-lg text-text-primary font-medium mb-2">{t.waysToWork.fourSessions.price}</p>
            <p className="text-base text-text-tertiary italic mb-6">{t.waysToWork.fourSessions.pacing}</p>
            <a
              href="https://calendly.com/ninamoorerising/1-1-session-with-nina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-text-primary text-text-primary text-sm uppercase tracking-wider hover:bg-text-primary hover:text-white transition-all rounded-full"
            >
              Book the Cycle
            </a>
          </div>

          {/* Closing */}
          <p className="text-lg text-text-secondary italic text-center">
            {t.waysToWork.closing}
          </p>
        </div>
      </section>

      {/* ========== PARALLAX IMAGE BREAK 2 ========== */}
      <div className="h-64 md:h-96 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: 'url(/images/optimized/break2.webp)' }}
        />
        <div className="absolute inset-0 bg-ground/20" />
      </div>

      {/* ========== THIS WORK IS FOR ========== */}
      <section className="py-24 px-6 bg-linen-dark">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary text-center mb-10">
            {t.thisWorkIsFor.title}
          </h2>
          <div className="space-y-4 mb-10 text-center">
            {t.thisWorkIsFor.lines.map((line, index) => (
              <p key={index} className="text-lg text-text-secondary leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <div className="text-center space-y-2">
            <p className="text-2xl md:text-3xl font-serif text-text-primary italic">{t.thisWorkIsFor.closing1}</p>
            <p className="text-2xl md:text-3xl font-serif text-text-primary italic">{t.thisWorkIsFor.closing2}</p>
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
