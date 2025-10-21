import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {/* Our Commitment */}
            <div>
              <h2 className="text-4xl font-serif text-black mb-8">Our Commitment to Your Privacy</h2>
              <p className="text-lg text-black/70 leading-relaxed">
                At Nina Moore, we deeply respect your privacy and the sacred nature of the work we do together.
                This policy outlines how we collect, use, and protect your personal information.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">Information We Collect</h2>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>
                  <strong className="text-black">Contact Information:</strong> Name, email address, phone number when you reach out or book a session.
                </p>
                <p>
                  <strong className="text-black">Session Information:</strong> Notes from our sessions together, which are kept strictly confidential.
                </p>
                <p>
                  <strong className="text-black">Health Information:</strong> Any health-related information you choose to share to ensure your safety and wellbeing during our work together.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">How We Use Your Information</h2>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>Your information is used solely to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Communicate with you about sessions and bookings</li>
                  <li>Provide personalized guidance and support</li>
                  <li>Ensure your safety during our work together</li>
                  <li>Send occasional updates if you've opted in</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">Data Protection</h2>
              <p className="text-lg text-black/70 leading-relaxed">
                All personal information is stored securely and never shared with third parties without your explicit consent.
                Session notes are kept confidential and used only to support your journey.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">Your Rights</h2>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request a copy of your personal information</li>
                  <li>Request corrections to your information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of communications at any time</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">Cookies</h2>
              <p className="text-lg text-black/70 leading-relaxed">
                This website uses minimal cookies for basic functionality. We do not use tracking or advertising cookies.
              </p>
            </div>

            {/* Medical Disclaimer */}
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">Medical Disclaimer</h2>
              <p className="text-lg text-black/70 leading-relaxed">
                The services offered by Nina Moore are complementary practices and are not a substitute
                for medical or psychological treatment. Any health information shared is kept confidential and
                is used solely to ensure your safety during our work together.
              </p>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-black/10">
              <h2 className="text-3xl font-serif text-black mb-6">Questions About Privacy</h2>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                If you have any questions about this privacy policy or how we handle your information,
                please contact us:
              </p>
              <a
                href="mailto:hello@nina-moore.com"
                className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all"
              >
                hello@nina-moore.com
              </a>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-16 border-t border-black/10">
              <p className="text-sm text-black/40">
                Last updated: January 2025
              </p>
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
