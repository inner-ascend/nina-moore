import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cosmic-900/50 border-b border-mystic-purple/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-mystic-violet animate-glow" />
              <span className="text-xl font-serif bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
                Nina Moore
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <Link to="/" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
                Home
              </Link>
              <Link to="/contact" className="px-6 py-2 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/40 via-cosmic-900/60 to-sacred-green/30">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif font-light text-sacred-moon mb-8 animate-fadeIn">
            About me
          </h1>
        </div>
      </div>

      {/* Bio Content */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-indigo-deep/80 leading-relaxed text-lg">
              <p>
                I am in service of the collective awakening and the expansion of consciousness.
              </p>
              <p>
                I value the aliveness of emotions, embodied wisdom, and authentic pathways to freedom.
              </p>
              <p>
                My field of expertise encompasses a wide array of methods and skills that I have nourished through years of practice and self-inquiry.
              </p>
              <p>
                As a practitioner and human being, I meet people heart to heart and offer deep presence for growth, healing, and self-realization.
              </p>
              <p className="text-indigo-deep font-medium text-xl">
                I believe that each individual carries a unique and invaluable gift into the world, waiting to be unraveled.
              </p>
              <p>
                I am devoted to living in integrity with what wants to be expressed through each of us.
              </p>
            </div>

            <div className="text-center mt-16">
              <Link to="/contact" className="inline-block px-10 py-4 bg-sacred-gold text-cosmic-900 rounded-full font-semibold hover:bg-sacred-glow transition-all text-lg">
                Work with me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-20 border-t border-mystic-purple/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="text-4xl text-sacred-gold/40 animate-breathe mb-8">⊹</div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-mystic-violet animate-glow" />
              <span className="text-xl font-serif bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
                Nina Moore
              </span>
            </div>

            <p className="text-sm">
              <a href="mailto:hello@nina-moore.com" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors font-serif">
                hello@nina-moore.com
              </a>
            </p>

            <div className="flex items-center justify-center gap-6 text-sm">
              <a href="https://instagram.com/nina__eterna" target="_blank" rel="noopener noreferrer" className="text-mystic-lavender/60 hover:text-mystic-violet transition-colors font-serif">
                Instagram
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm mt-8">
              <Link to="/support" className="text-mystic-lavender/50 hover:text-sacred-gold transition-colors font-serif">
                Support
              </Link>
              <span className="text-mystic-purple/40">•</span>
              <Link to="/privacy" className="text-mystic-lavender/50 hover:text-sacred-gold transition-colors font-serif">
                Privacy
              </Link>
            </div>

            <p className="text-xs text-mystic-lavender/40 mt-4">
              © 2025 Nina Moore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
