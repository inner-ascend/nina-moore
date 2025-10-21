import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sparkles, Globe, Menu, X } from 'lucide-react';
import './i18n';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import caTranslations from './translations/ca.json';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import AboutPageNew from './components/pages/AboutPageNew';
import ContactPage from './components/pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

// Main Landing Page Component
function LandingPage() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon overflow-hidden relative">
      {/* Cosmic aurora background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/4 -right-4 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      </div>

      {/* Sacred geometry overlay */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cosmic-900/50 border-b border-mystic-purple/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-mystic-violet animate-glow" />
                <span className="text-xl font-serif bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
                  Nina Moore
                </span>
              </Link>

              {/* Nav Links - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-6">
                <Link to="/about" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
                  About
                </Link>
                <Link to="/contact" className="px-6 py-2 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all">
                  Contact
                </Link>
              </div>

              {/* Right Side: Language + Mobile Menu */}
              <div className="flex items-center gap-4">
                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 hover:bg-mystic-purple/30 transition-all"
                >
                  <Globe className="w-4 h-4 text-sacred-gold" />
                  <span className="text-sm font-medium text-sacred-moon">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-mystic-lavender hover:text-sacred-gold transition-colors"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden py-4 space-y-3 border-t border-mystic-purple/20">
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-mystic-lavender/80 hover:text-sacred-gold transition-colors">
                  About
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sacred-gold font-semibold">
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Full-Screen Hero */}
        <div className="h-screen relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/40 via-cosmic-900/60 to-sacred-green/30">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-sacred-moon mb-6 animate-fadeIn">
              Nina Moore
            </h1>
            <p className="text-xl md:text-2xl text-sacred-moon/80 font-light tracking-wide mb-8 max-w-4xl mx-auto leading-relaxed">
              Initiatory journeys, healing experiences, and transformative mentorship to awaken your deepest truth and power
            </p>
            <Link to="/contact" className="inline-block px-8 py-4 bg-sacred-gold text-cosmic-900 rounded-full font-semibold hover:bg-sacred-glow transition-all">
              Book now
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-sacred-moon/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-sacred-moon/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Three Pillars Section */}
        <div className="bg-gradient-to-b from-black via-cosmic-900/90 to-cosmic-900 py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12">
                {/* Pillar 1 */}
                <div className="text-center space-y-6">
                  <div className="text-3xl text-sacred-gold/40">✧</div>
                  <h3 className="text-2xl font-serif text-sacred-moon">
                    You can already feel it
                  </h3>
                  <p className="text-sacred-moon/70 leading-relaxed">
                    That quiet pull inside you, that whisper that you can rise above the loops and limitations.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="text-center space-y-6">
                  <div className="text-3xl text-sacred-gold/40">⊹</div>
                  <h3 className="text-2xl font-serif text-sacred-moon">
                    You desire to transmute your story
                  </h3>
                  <p className="text-sacred-moon/70 leading-relaxed">
                    You are ready to find the gold in the hardship and develop self mastery as you discover your uniqueness.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="text-center space-y-6">
                  <div className="text-3xl text-sacred-gold/40">⊛</div>
                  <h3 className="text-2xl font-serif text-sacred-moon">
                    You seek remembrance
                  </h3>
                  <p className="text-sacred-moon/70 leading-relaxed">
                    Of your power. Of your truth. Of the self you know you are underneath the layers of conditioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* THE INVITATION Section */}
        <div className="bg-sacred-cream py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="text-4xl text-sacred-gold/40 mb-6">⊹</div>
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep mb-8">
                THE INVITATION
              </h2>
              <div className="space-y-6 text-indigo-deep/70 leading-relaxed text-lg">
                <p>
                  Every journey is different — because every soul arrives with its own story, its own wounds, its own readiness.
                </p>
                <p>
                  There is no script here, only attuned presence and deep listening.
                </p>
                <p>
                  When you step into this space, you are not coming to "fix yourself."
                </p>
                <p className="text-indigo-deep font-medium">
                  You are entering a sacred container for remembering your truth, clearing what no longer serves you, and opening to the self you have not yet dared to fully embody.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Now is the time Section */}
        <div className="bg-white py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-indigo-deep mb-6">
                Now is the time for full embodied transformation
              </h2>
              <p className="text-xl text-indigo-deep/70 leading-relaxed">
                I am here to walk with you as you build your living temple.
              </p>
              <p className="text-lg text-indigo-deep/70 leading-relaxed">
                My work is to allow you to bridge your inner awakening and your outer life — helping you integrate your experiences, activate your true self, and embody the purpose you came here to live.
              </p>
              <div className="text-lg text-indigo-deep/80 font-medium space-y-3 pt-8">
                <p>This is more than coaching.</p>
                <p>This is not just healing.</p>
                <p>This is full-spectrum remembrance.</p>
              </div>
              <p className="text-xl text-indigo-deep/70 italic pt-6">
                It's a journey to find the way home to yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Offering Section - Cycle of 4 sessions */}
        <div className="bg-gradient-to-b from-white via-sacred-cream to-white py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep mb-4">
                Cycle of 4 sessions
              </h2>
              <p className="text-2xl text-sacred-gold font-medium mb-12">$444</p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-sacred-gold text-cosmic-900 rounded-full font-semibold hover:bg-sacred-glow transition-all text-lg">
                Book now
              </Link>
            </div>
          </div>
        </div>

        {/* What does a session entail? */}
        <div className="bg-white py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep text-center mb-20">
                What does a session entail?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Session Component 1 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">01</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Deep exploration and integration
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    A safe, personalized space for self discovery
                  </p>
                </div>

                {/* Session Component 2 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">02</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Energetic clearing and activation
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Release of stuck energies and emotional blockages, activating your potential
                  </p>
                </div>

                {/* Session Component 3 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">03</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Clarity and support
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Intuitive, practical guidance challenging limiting beliefs and offering truth
                  </p>
                </div>

                {/* Session Component 4 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">04</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Internal Harmony
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Meeting different aspects of yourself to heal and create internal balance
                  </p>
                </div>

                {/* Session Component 5 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">05</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Practical steps
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Coaching focused strategies for actionable growth and empowerment
                  </p>
                </div>

                {/* Session Component 6 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">06</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Holistic approach
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Encompassing all layers of the self to reach a feeling of wholeness
                  </p>
                </div>

                {/* Session Component 7 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">07</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Presence and honesty
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Meeting your unique needs for you to be fully seen and gain new perspectives
                  </p>
                </div>
              </div>

              <div className="text-center mt-16">
                <Link to="/contact" className="inline-block px-10 py-4 bg-indigo-deep text-sacred-cream rounded-full hover:bg-indigo-deep/90 transition-colors font-medium text-lg">
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* A profound journey Section */}
        <div className="bg-sacred-cream py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep text-center mb-20">
                A profound journey towards yourself
              </h2>

              <div className="grid md:grid-cols-3 gap-12">
                {/* Transformation */}
                <div className="text-center space-y-6">
                  <div className="text-3xl text-sacred-gold">✧</div>
                  <h3 className="text-2xl font-serif text-indigo-deep">
                    Transformation
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Healing old patterns, stepping into leadership, transforming relationships, and creating conscious lives and communities.
                  </p>
                </div>

                {/* Opening */}
                <div className="text-center space-y-6">
                  <div className="text-3xl text-sacred-gold">⊹</div>
                  <h3 className="text-2xl font-serif text-indigo-deep">
                    Opening
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Every session is a portal: an opening, an invitation to become more of who you are and step into your full radiance and purpose.
                  </p>
                </div>

                {/* Integration */}
                <div className="text-center space-y-6">
                  <div className="text-3xl text-sacred-gold">⊛</div>
                  <h3 className="text-2xl font-serif text-indigo-deep">
                    Integration
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Transform your expression, identify your patterns, learn how to integrate your life experience, transform trauma into wisdom.
                  </p>
                </div>
              </div>

              <div className="text-center mt-16">
                <Link to="/contact" className="inline-block text-sacred-green hover:text-indigo-deep transition-colors font-medium text-lg">
                  Start the journey →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Cycle of 4 sessions */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep">
                Cycle of 4 sessions & ongoing support
              </h2>
              <p className="text-xl text-indigo-deep/70">
                Our 30 minutes connection call will help determine your needs and objectives
              </p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-sacred-gold text-cosmic-900 rounded-full font-semibold hover:bg-sacred-glow transition-all text-lg">
                Book now
              </Link>
            </div>
          </div>
        </div>

        {/* CLIENT TESTIMONIALS */}
        <div className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/50 via-cosmic-900/60 to-black/70"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon text-center mb-20">
                CLIENT TESTIMONIALS
              </h2>

              <div className="space-y-20">
                {/* Cecile Gatto */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl font-serif text-sacred-moon leading-relaxed mb-6">
                    Nina has been guiding me with love and gentleness through the key passages of my life for the past four years. Through our sessions, I've gained growing autonomy and serenity in facing both challenges and joys. With an open heart, I've learned to welcome all parts of myself — both shadow and light — and to stay centered amidst life's turbulence.
                  </p>
                  <p className="text-xl font-serif text-sacred-moon leading-relaxed mb-8">
                    Today, I have a clear vision for my projects, a peaceful and loving relationship with my partner, renewed balance with those around me, and the confidence to make empowered choices.
                  </p>
                  <p className="text-sacred-gold text-lg">— Cecile Gatto</p>
                </div>

                {/* Benjamin Barda */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl font-serif text-sacred-moon leading-relaxed mb-6">
                    With grace and incredible intuition, Nina opens wide the doors of consciousness. Through her clairvoyance, deep empathy, and refined listening, barriers within me dissolved, revealing new spaces of courage, joy, and poetry — reconnecting to life's magical sparks, feeling generously supported and inspired no matter the situation.
                  </p>
                  <p className="text-xl font-serif text-sacred-moon leading-relaxed mb-8">
                    It's about embracing existence in all its dimensions, making decisive choices, finding courage, and becoming the artist of your inner world.
                  </p>
                  <p className="text-sacred-gold text-lg">— Benjamin Barda</p>
                </div>

                {/* Will Ashurst */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl font-serif text-sacred-moon leading-relaxed mb-6">
                    I have been working with Nina for the last year, and the clarity, perspective, and wisdom that I have gained through working with her has been profound. She gives me a great feeling that she understands me very well, and she interprets what I say with precision, love, and compassion.
                  </p>
                  <p className="text-xl font-serif text-sacred-moon leading-relaxed mb-8">
                    Together, we have moved through a lot of topics and areas of my life which I have wanted to shine light on. I plan to continue working with her, as the value and healing that I've gotten from spending time speaking to her has been deeply meaningful.
                  </p>
                  <p className="text-sacred-gold text-lg">— Will Ashurst</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What type of work Section */}
        <div className="bg-sacred-cream py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep text-center mb-20">
                What type of work are we doing together
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Work Type 1 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">01</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Life Changes
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Break ups, breakthroughs, loss, awakenings
                  </p>
                </div>

                {/* Work Type 2 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">02</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Psychedelic Integration
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Medicine ceremonies, bad trips, self led journeys
                  </p>
                </div>

                {/* Work Type 3 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">03</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Relationship Challenges
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Sacred union, couples alchemy, shadow work
                  </p>
                </div>

                {/* Work Type 4 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">04</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Purpose and Path
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Finding yourself, dream work, vision, essence & gifts
                  </p>
                </div>

                {/* Work Type 5 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">05</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Trauma and Heartbreaks
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Rewriting the story, finding meaning, repatterning
                  </p>
                </div>

                {/* Work Type 6 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">06</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Spiritual Quest
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Connection to source, rituals, remembrance, soul and sacred
                  </p>
                </div>

                {/* Work Type 7 */}
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">07</div>
                  <h3 className="text-xl font-serif text-indigo-deep">
                    Creative Flow
                  </h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Bringing back the spark, finding joy, self expression and trust
                  </p>
                </div>
              </div>

              <div className="text-center mt-16">
                <Link to="/contact" className="inline-block px-10 py-4 bg-indigo-deep text-sacred-cream rounded-full hover:bg-indigo-deep/90 transition-colors font-medium text-lg">
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-5xl md:text-6xl font-serif text-indigo-deep">
                €340
              </h2>
              <p className="text-xl text-indigo-deep/70">
                4 sessions + ONGOING SUPPORT
              </p>
              <Link to="/contact" className="inline-block px-12 py-5 bg-sacred-gold text-cosmic-900 rounded-full font-semibold hover:bg-sacred-glow transition-all text-xl">
                Begin now
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-20 border-t border-mystic-purple/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-4xl text-sacred-gold/40 animate-breathe mb-8">⊹</div>
            </div>

            <div className="text-center space-y-6 mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-mystic-violet animate-glow" />
                <span className="text-xl font-serif bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
                  Nina Moore
                </span>
              </div>

              <p className="text-sm">
                <a href={`mailto:${t.footer.email}`} className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors font-serif">
                  {t.footer.email}
                </a>
              </p>

              <div className="flex items-center justify-center gap-6 text-sm">
                <a href={`https://instagram.com/${t.footer.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-mystic-lavender/60 hover:text-mystic-violet transition-colors font-serif">
                  Instagram
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm mb-8">
              <Link to="/support" className="text-mystic-lavender/50 hover:text-sacred-gold transition-colors font-serif">
                Support
              </Link>
              <span className="text-mystic-purple/40">•</span>
              <Link to="/privacy" className="text-mystic-lavender/50 hover:text-sacred-gold transition-colors font-serif">
                Privacy
              </Link>
            </div>

            <div className="text-center space-y-2">
              <p className="text-xs text-mystic-lavender/40 mt-4">
                © 2025 Nina Moore. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
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
