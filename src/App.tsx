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
                About
              </Link>
              <Link to="/contact" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Contact
              </Link>
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'fr' : 'en')}
                className="text-xs uppercase tracking-wider text-black/40 hover:text-black transition-colors"
              >
                {language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'FR'}
              </button>
              <Link to="/contact" className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                Book Now
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
                About
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60">
                Contact
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider font-semibold">
                Book Now
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
            Nina Moore
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-black/70 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            Initiatory journeys, healing experiences, and transformative mentorship to awaken your deepest truth and power
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            Book Now
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
                You can already feel it
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                That quiet pull inside you, that whisper that you can rise above the loops and limitations.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">02</div>
              <h3 className="text-3xl font-serif text-black">
                You desire to transmute your story
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                You are ready to find the gold in the hardship and develop self mastery as you discover your uniqueness.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-6">
              <div className="text-4xl font-serif text-black/20">03</div>
              <h3 className="text-3xl font-serif text-black">
                You seek remembrance
              </h3>
              <p className="text-lg text-black/60 leading-relaxed">
                Of your power. Of your truth. Of the self you know you are underneath the layers of conditioning.
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
                The Invitation
              </h2>
              <div className="space-y-6 text-lg text-black/70 leading-relaxed">
                <p>
                  Every journey is different — because every soul arrives with its own story, its own wounds, its own readiness.
                </p>
                <p>
                  There is no script here, only attuned presence and deep listening.
                </p>
                <p>
                  When you step into this space, you are not coming to "fix yourself."
                </p>
                <p className="text-black font-medium text-xl">
                  You are entering a sacred container for remembering your truth, clearing what no longer serves you, and opening to the self you have not yet dared to fully embody.
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
            Now is the time for full embodied transformation
          </h2>
          <p className="text-2xl text-black/70 leading-relaxed">
            I am here to walk with you as you build your living temple.
          </p>
          <div className="space-y-6 text-lg text-black/60 leading-relaxed">
            <p>
              My work is to allow you to bridge your inner awakening and your outer life — helping you integrate your experiences, activate your true self, and embody the purpose you came here to live.
            </p>
          </div>
          <div className="text-2xl font-serif text-black space-y-3 pt-8">
            <p>This is more than coaching.</p>
            <p>This is not just healing.</p>
            <p>This is full-spectrum remembrance.</p>
          </div>
          <p className="text-3xl font-serif text-black/70 italic pt-6">
            It's a journey to find the way home to yourself.
          </p>
        </div>
      </section>

      {/* Offering - Large Centered */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Cycle of 4 sessions
          </h2>
          <p className="text-4xl md:text-5xl font-serif tracking-tight">
            $444
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
            Book Now
          </Link>
        </div>
      </section>

      {/* What does a session entail - Grid */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            What does a session entail?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { num: "01", title: "Deep exploration and integration", desc: "A safe, personalized space for self discovery" },
              { num: "02", title: "Energetic clearing and activation", desc: "Release of stuck energies and emotional blockages, activating your potential" },
              { num: "03", title: "Clarity and support", desc: "Intuitive, practical guidance challenging limiting beliefs and offering truth" },
              { num: "04", title: "Internal Harmony", desc: "Meeting different aspects of yourself to heal and create internal balance" },
              { num: "05", title: "Practical steps", desc: "Coaching focused strategies for actionable growth and empowerment" },
              { num: "06", title: "Holistic approach", desc: "Encompassing all layers of the self to reach a feeling of wholeness" },
              { num: "07", title: "Presence and honesty", desc: "Meeting your unique needs for you to be fully seen and gain new perspectives" },
            ].map((item) => (
              <div key={item.num} className="space-y-4">
                <div className="text-4xl font-serif text-black/20">{item.num}</div>
                <h3 className="text-2xl font-serif text-black">{item.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{item.desc}</p>
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
                A profound journey towards yourself
              </h2>

              {/* Transformation */}
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">Transformation</h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  Healing old patterns, stepping into leadership, transforming relationships, and creating conscious lives and communities.
                </p>
              </div>

              {/* Opening */}
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">Opening</h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  Every session is a portal: an opening, an invitation to become more of who you are and step into your full radiance and purpose.
                </p>
              </div>

              {/* Integration */}
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">Integration</h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  Transform your expression, identify your patterns, learn how to integrate your life experience, transform trauma into wisdom.
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
            Cycle of 4 sessions & ongoing support
          </h2>
          <p className="text-xl text-black/60">
            Our 30 minutes connection call will help determine your needs and objectives
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            Book Now
          </Link>
        </div>
      </section>

      {/* Testimonials - Large, Spacious */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            Client Testimonials
          </h2>

          <div className="space-y-32">
            {/* Cecile Gatto */}
            <div className="max-w-4xl mx-auto">
              <blockquote className="space-y-8">
                <p className="text-2xl md:text-3xl font-serif text-black leading-relaxed">
                  Nina has been guiding me with love and gentleness through the key passages of my life for the past four years. Through our sessions, I've gained growing autonomy and serenity in facing both challenges and joys. With an open heart, I've learned to welcome all parts of myself — both shadow and light — and to stay centered amidst life's turbulence.
                </p>
                <p className="text-xl md:text-2xl font-serif text-black leading-relaxed">
                  Today, I have a clear vision for my projects, a peaceful and loving relationship with my partner, renewed balance with those around me, and the confidence to make empowered choices.
                </p>
                <footer className="text-sm uppercase tracking-wider text-black/60">— Cecile Gatto</footer>
              </blockquote>
            </div>

            {/* Benjamin Barda */}
            <div className="max-w-4xl mx-auto">
              <blockquote className="space-y-8">
                <p className="text-2xl md:text-3xl font-serif text-black leading-relaxed">
                  With grace and incredible intuition, Nina opens wide the doors of consciousness. Through her clairvoyance, deep empathy, and refined listening, barriers within me dissolved, revealing new spaces of courage, joy, and poetry — reconnecting to life's magical sparks, feeling generously supported and inspired no matter the situation.
                </p>
                <p className="text-xl md:text-2xl font-serif text-black leading-relaxed">
                  It's about embracing existence in all its dimensions, making decisive choices, finding courage, and becoming the artist of your inner world.
                </p>
                <footer className="text-sm uppercase tracking-wider text-black/60">— Benjamin Barda</footer>
              </blockquote>
            </div>

            {/* Will Ashurst */}
            <div className="max-w-4xl mx-auto">
              <blockquote className="space-y-8">
                <p className="text-2xl md:text-3xl font-serif text-black leading-relaxed">
                  I have been working with Nina for the last year, and the clarity, perspective, and wisdom that I have gained through working with her has been profound. She gives me a great feeling that she understands me very well, and she interprets what I say with precision, love, and compassion.
                </p>
                <p className="text-xl md:text-2xl font-serif text-black leading-relaxed">
                  Together, we have moved through a lot of topics and areas of my life which I have wanted to shine light on. I plan to continue working with her, as the value and healing that I've gotten from spending time speaking to her has been deeply meaningful.
                </p>
                <footer className="text-sm uppercase tracking-wider text-black/60">— Will Ashurst</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What type of work - Grid */}
      <section className="py-32 px-6 lg:px-12 bg-stone-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            What type of work are we doing together
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { num: "01", title: "Life Changes", desc: "Break ups, breakthroughs, loss, awakenings" },
              { num: "02", title: "Psychedelic Integration", desc: "Medicine ceremonies, bad trips, self led journeys" },
              { num: "03", title: "Relationship Challenges", desc: "Sacred union, couples alchemy, shadow work" },
              { num: "04", title: "Purpose and Path", desc: "Finding yourself, dream work, vision, essence & gifts" },
              { num: "05", title: "Trauma and Heartbreaks", desc: "Rewriting the story, finding meaning, repatterning" },
              { num: "06", title: "Spiritual Quest", desc: "Connection to source, rituals, remembrance, soul and sacred" },
              { num: "07", title: "Creative Flow", desc: "Bringing back the spark, finding joy, self expression and trust" },
            ].map((item) => (
              <div key={item.num} className="space-y-4">
                <div className="text-4xl font-serif text-black/20">{item.num}</div>
                <h3 className="text-2xl font-serif text-black">{item.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Centered Large */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-6xl md:text-7xl font-serif text-black">
            $444
          </h2>
          <p className="text-2xl text-black/70">
            4 sessions + ongoing support
          </p>
          <Link to="/contact" className="inline-block px-16 py-5 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            Begin Now
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
                Email
              </a>
              <a href={`https://instagram.com/${t.footer.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
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
