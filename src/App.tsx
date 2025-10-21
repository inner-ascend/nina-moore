import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './i18n';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import frTranslations from './translations/fr.json';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import AboutPageNew from './components/pages/AboutPageNew';
import ContactPage from './components/pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

// Main Landing Page Component - Flodesk/Squarespace Style
function LandingPage() {
  const [language, setLanguage] = useState<'en' | 'es' | 'fr'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = language === 'es' ? esTranslations : language === 'fr' ? frTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="text-2xl font-serif text-black tracking-tight">
              Nina Moore
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              <Link to="/about" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                {t.navigation.about}
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
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60">
                {t.navigation.about}
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

      {/* Hero Section - Full Height with Image */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-stone-50 to-slate-100">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black mb-8 leading-tight tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-black/70 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            {t.hero.subtitle}
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            {t.navigation.bookNow}
          </Link>
        </div>
      </section>

      {/* Three Pillars - Spacious Grid */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {/* Pillar 1 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">01</div>
              <h3 className="text-3xl font-serif text-black">
                {t.pillars.pillar1.title}
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                {t.pillars.pillar1.description}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">02</div>
              <h3 className="text-3xl font-serif text-black">
                {t.pillars.pillar2.title}
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                {t.pillars.pillar2.description}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">03</div>
              <h3 className="text-3xl font-serif text-black">
                {t.pillars.pillar3.title}
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                {t.pillars.pillar3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE INVITATION - Image + Text Split */}
      <section className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-slate-100 rounded-sm"></div>

            {/* Text */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.invitation.title}
              </h2>
              <div className="space-y-6 text-lg text-black/70 leading-relaxed">
                <p>
                  {t.invitation.p1}
                </p>
                <p>
                  {t.invitation.p2}
                </p>
                <p>
                  {t.invitation.p3}
                </p>
                <p className="text-black font-medium text-xl">
                  {t.invitation.p4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="h-[70vh] bg-gradient-to-r from-stone-100 to-slate-50"></section>

      {/* Now is the time - Centered Text Block */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
            {t.transformation.title}
          </h2>
          <p className="text-2xl text-black/70 leading-relaxed">
            {t.transformation.subtitle}
          </p>
          <div className="space-y-6 text-lg text-black/60 leading-relaxed">
            <p>
              {t.transformation.description}
            </p>
          </div>
          <div className="text-2xl font-serif text-black space-y-3 pt-8">
            <p>{t.transformation.line1}</p>
            <p>{t.transformation.line2}</p>
            <p>{t.transformation.line3}</p>
          </div>
          <p className="text-3xl font-serif text-black/70 italic pt-6">
            {t.transformation.closing}
          </p>
        </div>
      </section>

      {/* Offering - Large Centered */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            {t.offering.title}
          </h2>
          <p className="text-4xl md:text-5xl font-serif tracking-tight">
            {t.offering.price}
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
            {t.offering.cta}
          </Link>
        </div>
      </section>

      {/* What does a session entail - Grid */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.sessions.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
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

      {/* Image + Three Themes Side by Side */}
      <section className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Text */}
            <div className="space-y-16">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.journey.title}
              </h2>

              {/* Transformation */}
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">{t.journey.themes.transformation.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {t.journey.themes.transformation.description}
                </p>
              </div>

              {/* Opening */}
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">{t.journey.themes.opening.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {t.journey.themes.opening.description}
                </p>
              </div>

              {/* Integration */}
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">{t.journey.themes.integration.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {t.journey.themes.integration.description}
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[3/4] bg-gradient-to-bl from-slate-100 to-stone-200 rounded-sm"></div>
          </div>
        </div>
      </section>

      {/* Full Width Quote/CTA */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif text-black leading-relaxed">
            {t.cta.title}
          </h2>
          <p className="text-xl text-black/60">
            {t.cta.subtitle}
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            {t.cta.button}
          </Link>
        </div>
      </section>

      {/* Testimonials - Large, Spacious */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.testimonials.title}
          </h2>

          <div className="space-y-32">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <blockquote className="space-y-8">
                  <p className="text-2xl md:text-3xl font-serif text-black leading-relaxed">
                    {testimonial.text1}
                  </p>
                  <p className="text-xl md:text-2xl font-serif text-black leading-relaxed">
                    {testimonial.text2}
                  </p>
                  <footer className="text-sm uppercase tracking-wider text-black/60">— {testimonial.name}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What type of work - Grid */}
      <section className="py-32 px-6 lg:px-12 bg-stone-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.workTypes.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
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

      {/* Final CTA - Centered Large */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-6xl md:text-7xl font-serif text-black">
            {t.finalCta.price}
          </h2>
          <p className="text-2xl text-black/70">
            {t.finalCta.subtitle}
          </p>
          <Link to="/contact" className="inline-block px-16 py-5 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            {t.finalCta.button}
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

// Main App with Routing
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPageNew />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
