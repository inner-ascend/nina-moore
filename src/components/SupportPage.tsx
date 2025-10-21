import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                About
              </Link>
              <Link to="/contact" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Contact
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
                About
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-stone-50 to-slate-100">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif text-black mb-4 leading-tight tracking-tight">
            Support
          </h1>
          <p className="text-xl text-black/60">Questions about your journey? We're here to help.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Contact Section */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif text-black mb-8">Get in Touch</h2>
            <p className="text-xl text-black/60 mb-8">
              For questions about services, bookings, or your journey with us:
            </p>
            <a
              href="mailto:hello@nina-moore.com"
              className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all"
            >
              hello@nina-moore.com
            </a>
          </div>

          {/* Instagram */}
          <div className="text-center mb-24 pb-24 border-b border-black/10">
            <p className="text-lg text-black/60 mb-4">Follow the journey:</p>
            <a
              href="https://instagram.com/nina__eterna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-black hover:text-black/60 transition-colors text-lg"
            >
              @nina__eterna
            </a>
          </div>

          {/* Common Questions */}
          <div>
            <h2 className="text-4xl font-serif text-black mb-16 text-center">
              Common Questions
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-black mb-4">
                  How do I book a session?
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  Click any "Book now" button on the website to reach the contact page. We'll schedule a 30-minute connection call to determine your needs and see if we're a good fit.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-black mb-4">
                  What is the investment?
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  The cycle of 4 sessions is $444. This includes ongoing support between sessions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-black mb-4">
                  Are sessions online or in-person?
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  Sessions are available both online and in-person. We'll discuss your preference during the connection call.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-black mb-4">
                  What if I need to reschedule?
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  Please provide at least 24 hours notice for rescheduling. Email hello@nina-moore.com with your request.
                </p>
              </div>
            </div>
          </div>
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
