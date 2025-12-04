import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './i18n';
import enTranslations from './translations/en.json';

// Section Components
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProgramsSection from './components/sections/ProgramsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
          <div className="flex items-center justify-between h-24">
            <button onClick={() => scrollToSection('hero')} className="text-2xl font-serif text-black tracking-tight">
              Nina Moore
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              <button onClick={() => scrollToSection('about')} className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                {t.navigation.about}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Programs
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
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
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-sm uppercase tracking-wider text-black/60 hover:text-black">
                Services
              </button>
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left py-2 text-sm uppercase tracking-wider text-black/60 hover:text-black">
                Programs
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-sm uppercase tracking-wider text-black font-semibold">
                {t.navigation.bookNow}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full Height with Image */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/DSC01844.JPG"
            alt="Nature landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto mb-12 drop-shadow-lg">
            {t.hero.subtitle}
          </p>
          <button onClick={() => scrollToSection('contact')} className="inline-block px-12 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Three Pillars - Who This Is For */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">01</div>
              <h3 className="text-3xl font-serif text-black">{t.pillars.pillar1.title}</h3>
              <p className="text-lg text-black/60 leading-relaxed">{t.pillars.pillar1.description}</p>
            </div>
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">02</div>
              <h3 className="text-3xl font-serif text-black">{t.pillars.pillar2.title}</h3>
              <p className="text-lg text-black/60 leading-relaxed">{t.pillars.pillar2.description}</p>
            </div>
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">03</div>
              <h3 className="text-3xl font-serif text-black">{t.pillars.pillar3.title}</h3>
              <p className="text-lg text-black/60 leading-relaxed">{t.pillars.pillar3.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial - Social Proof Early */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="space-y-8">
            <p className="text-2xl md:text-3xl font-serif text-black leading-relaxed">
              "{t.testimonials.items[0].text1}"
            </p>
            <footer className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-black/50">{t.testimonials.items[0].outcome}</p>
              <p className="text-lg font-serif text-black">— {t.testimonials.items[0].name}</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Discovery Call CTA - Primary Action */}
      <section className="py-24 bg-zinc-800 text-white">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Start with a Free Discovery Call</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <button onClick={() => scrollToSection('contact')} className="inline-block px-16 py-5 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all font-medium">
            Schedule Free Call
          </button>
          <p className="text-sm text-white/50">20 minutes • No pressure • No sales pitch</p>
        </div>
      </section>

      {/* How I Work - Image + Text Split */}
      <section className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img src="/images/invitation.JPG" alt="How I Work" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">{t.invitation.title}</h2>
              <div className="space-y-6 text-lg text-black/70 leading-relaxed">
                <p>{t.invitation.p1}</p>
                <p>{t.invitation.p2}</p>
                <p>{t.invitation.p3}</p>
                <p className="text-black font-medium text-xl">{t.invitation.p4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens in a Session - Grid */}
      <section className="py-32 px-6 lg:px-12 bg-stone-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">{t.sessions.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.sessions.items.map((item) => (
              <div key={item.num} className="space-y-4">
                <div className="text-4xl font-serif text-black/20">{item.num}</div>
                <h3 className="text-2xl font-serif text-black">{item.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="h-[60vh] relative overflow-hidden">
        <img src="/images/break.JPG" alt="Nature" className="w-full h-full object-cover" />
      </section>

      {/* What Clients Work On */}
      <section className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-16">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">{t.journey.title}</h2>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">{t.journey.themes.transformation.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{t.journey.themes.transformation.description}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">{t.journey.themes.opening.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{t.journey.themes.opening.description}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">{t.journey.themes.integration.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{t.journey.themes.integration.description}</p>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img src="/images/journey.JPG" alt="Journey" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Real Change Section */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">{t.transformation.title}</h2>
          <p className="text-2xl text-black/70 leading-relaxed">{t.transformation.subtitle}</p>
          <div className="space-y-6 text-lg text-black/60 leading-relaxed">
            <p>{t.transformation.description}</p>
          </div>
          <div className="text-2xl font-serif text-black space-y-3 pt-8">
            <p>{t.transformation.line1}</p>
            <p>{t.transformation.line2}</p>
            <p>{t.transformation.line3}</p>
          </div>
          <p className="text-3xl font-serif text-black/70 italic pt-6">{t.transformation.closing}</p>
        </div>
      </section>

      {/* Main Offering */}
      <section className="py-32 bg-zinc-800 text-white">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">{t.offering.title}</h2>
          <p className="text-4xl md:text-5xl font-serif tracking-tight">{t.offering.price}</p>
          <button onClick={() => scrollToSection('contact')} className="inline-block px-12 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
            {t.offering.cta}
          </button>
          <p className="text-sm text-white/50 pt-4">Limited availability • Start with free discovery call</p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* More Testimonials */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">{t.testimonials.title}</h2>
          <div className="space-y-24">
            {t.testimonials.items.slice(1).map((testimonial, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <blockquote className="space-y-8">
                  {'outcome' in testimonial && testimonial.outcome && (
                    <h3 className="text-base md:text-lg uppercase tracking-wider text-black/50 font-normal mb-6">
                      {testimonial.outcome}
                    </h3>
                  )}
                  <p className="text-2xl md:text-3xl font-serif text-black leading-relaxed">{testimonial.text1}</p>
                  <p className="text-xl font-serif text-black/70 leading-relaxed">{testimonial.text2}</p>
                  <footer className="text-sm uppercase tracking-wider text-black/60 pt-4">— {testimonial.name}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Work On - Grid */}
      <section className="py-32 px-6 lg:px-12 bg-stone-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">{t.workTypes.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.workTypes.items.map((item) => (
              <div key={item.num} className="space-y-4">
                <div className="text-4xl font-serif text-black/20">{item.num}</div>
                <h3 className="text-2xl font-serif text-black">{item.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-16">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <div key={index} className="border-b border-black/10">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left"
                >
                  <span className="text-xl font-serif text-black pr-8">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-black/40 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="pb-6 text-lg text-black/70 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Programs Section */}
      <ProgramsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Final CTA */}
      <section className="py-32 px-6 bg-zinc-800 text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Ready to Make Real Changes?
          </h2>
          <p className="text-2xl text-white/70">{t.finalCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('contact')} className="inline-block px-12 py-5 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
              Schedule Free Discovery Call
            </button>
            <button onClick={() => scrollToSection('programs')} className="inline-block px-12 py-5 border-2 border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all">
              Explore Programs
            </button>
          </div>
          <p className="text-sm text-white/40 pt-4">All sessions confidential. No pressure to commit.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
