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
    <div className="min-h-screen bg-white">
      {/* Navigation - Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('hero')} className="text-xl font-serif text-black tracking-tight">
              Nina Moore
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('about')} className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                {t.navigation.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.navigation.bookNow}
              </button>
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
            <div className="md:hidden py-6 space-y-4 border-t border-black/5">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-sm uppercase tracking-wider text-black/60 hover:text-black">
                {t.navigation.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-sm uppercase tracking-wider text-black font-semibold">
                {t.navigation.bookNow}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center py-32">
        <div className="absolute inset-0">
          <img
            src="/images/DSC01844.JPG"
            alt="Nature landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            {t.hero.description}
          </p>
          <div className="space-y-2 mb-10">
            <p className="text-lg text-white/90 italic">{t.hero.statement1}</p>
            <p className="text-lg text-white/90 italic">{t.hero.statement2}</p>
          </div>
          <div className="space-y-3">
            <button onClick={() => scrollToSection('contact')} className="inline-block px-10 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
              {t.hero.cta}
            </button>
            <p className="text-sm text-white/60">{t.hero.ctaSubtitle}</p>
          </div>
        </div>
      </section>

      {/* ========== INVITATION ========== */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-8 leading-tight text-center">
            {t.invitation.title}
          </h2>
          <p className="text-lg text-black/70 leading-relaxed mb-10 text-center">
            {t.invitation.intro}
          </p>
          <p className="text-base text-black/50 uppercase tracking-wider mb-6">
            {t.invitation.subtitle}
          </p>
          <ul className="space-y-4 mb-10">
            {t.invitation.items.map((item, index) => (
              <li key={index} className="flex items-start text-lg text-black/70">
                <span className="mr-4 text-black/30">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl text-black leading-relaxed text-center italic">
            {t.invitation.closing}
          </p>
        </div>
      </section>

      {/* ========== HOW I WORK ========== */}
      <section className="py-24 md:py-32 px-6 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-10">
            {t.howIWork.title}
          </h2>
          <div className="text-center space-y-4 mb-16">
            <p className="text-lg text-black/70">{t.howIWork.intro1}</p>
            <p className="text-lg text-black/70 italic">{t.howIWork.intro2}</p>
            <p className="text-lg text-black/70 italic">{t.howIWork.intro3}</p>
          </div>
          <p className="text-base text-black/50 uppercase tracking-wider mb-10 text-center">
            {t.howIWork.pillarsIntro}
          </p>
          <div className="space-y-12">
            {t.howIWork.pillars.map((pillar, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-2xl font-serif text-black">{pillar.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WAYS TO WORK TOGETHER ========== */}
      <section id="programs" className="py-24 md:py-32 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-16">
            {t.waysToWork.title}
          </h2>

          {/* Discovery Call */}
          <div className="mb-16 pb-16 border-b border-black/10">
            <h3 className="text-2xl font-serif text-black mb-4">{t.waysToWork.discoveryCall.title}</h3>
            <p className="text-lg text-black/70 leading-relaxed mb-4">{t.waysToWork.discoveryCall.description}</p>
            <p className="text-base text-black/50 italic">{t.waysToWork.discoveryCall.note}</p>
          </div>

          {/* 1:1 Sessions */}
          <div className="mb-16 pb-16 border-b border-black/10">
            <h3 className="text-2xl font-serif text-black mb-4">{t.waysToWork.sessions.title}</h3>
            <p className="text-base text-black/50 uppercase tracking-wider mb-4">{t.waysToWork.sessions.intro}</p>
            <ul className="space-y-2 mb-6">
              {t.waysToWork.sessions.items.map((item, index) => (
                <li key={index} className="flex items-start text-lg text-black/70">
                  <span className="mr-4 text-black/30">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-black/70 mb-4">{t.waysToWork.sessions.format}</p>
            <p className="text-lg text-black font-medium">{t.waysToWork.sessions.duration} · {t.waysToWork.sessions.price}</p>
          </div>

          {/* Integration Package */}
          <div className="mb-16 pb-16 border-b border-black/10">
            <h3 className="text-2xl font-serif text-black mb-4">{t.waysToWork.integration.title}</h3>
            <p className="text-lg text-black/70 leading-relaxed mb-4">{t.waysToWork.integration.description}</p>
            <p className="text-lg text-black font-medium mb-6">{t.waysToWork.integration.duration} · {t.waysToWork.integration.price}</p>
            <p className="text-base text-black/50 uppercase tracking-wider mb-3">{t.waysToWork.integration.includesTitle}</p>
            <ul className="space-y-2">
              {t.waysToWork.integration.includes.map((item, index) => (
                <li key={index} className="flex items-start text-lg text-black/70">
                  <span className="mr-4 text-black/30">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ongoing Containers & Retreats */}
          <div>
            <h3 className="text-2xl font-serif text-black mb-4">{t.waysToWork.containers.title}</h3>
            <p className="text-lg text-black/70 leading-relaxed mb-6">{t.waysToWork.containers.description}</p>
            <p className="text-base text-black/50 uppercase tracking-wider mb-3">{t.waysToWork.containers.includesTitle}</p>
            <ul className="space-y-2 mb-6">
              {t.waysToWork.containers.includes.map((item, index) => (
                <li key={index} className="flex items-start text-lg text-black/70">
                  <span className="mr-4 text-black/30">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-black/50 italic">{t.waysToWork.containers.note}</p>
          </div>
        </div>
      </section>

      {/* ========== NOT RIGHT FOR YOU ========== */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-serif text-black text-center mb-10">
            {t.notRightFor.title}
          </h2>
          <ul className="space-y-3 mb-10">
            {t.notRightFor.items.map((item, index) => (
              <li key={index} className="flex items-start text-lg text-black/60">
                <span className="mr-4 text-black/30">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-center space-y-2">
            <p className="text-xl text-black italic">{t.notRightFor.closing1}</p>
            <p className="text-xl text-black italic">{t.notRightFor.closing2}</p>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="py-24 md:py-32 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-10">{t.about.title}</h2>
          <p className="text-xl text-black/70 leading-relaxed mb-6">{t.about.bio}</p>
          <p className="text-lg text-black/50">{t.about.languages}</p>
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
