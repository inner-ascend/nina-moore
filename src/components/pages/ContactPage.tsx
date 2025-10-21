import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_pwk84sr',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Contact from nina-moore.com',
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-serif text-black">
              Nina Moore
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link to="/" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm uppercase tracking-wider text-black transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-black"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-6 pb-4 space-y-4">
              <Link
                to="/"
                className="block text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-sm uppercase tracking-wider text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-stone-100 to-slate-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }}
          ></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif text-black mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-black/60 font-light max-w-2xl mx-auto">
            Let's begin the conversation
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16 space-y-6 text-center">
            <p className="text-lg text-black/70 leading-relaxed">
              I welcome you to reach out if you feel called to this work. Whether you're seeking guidance through a life transition, integration support after a psychedelic experience, or simply curious to learn more about working together.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              I typically respond within 24-48 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-6 py-4 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors"
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-6 py-4 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={8}
                className="w-full px-6 py-4 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors resize-none"
                placeholder="Tell me what brings you here..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-12 py-5 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <span>Sending...</span>
              ) : status === 'success' ? (
                <span>Message Sent ✓</span>
              ) : status === 'error' ? (
                <span>Error - Please Try Again</span>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <p className="text-sm uppercase tracking-wider text-black/50 mb-3">Email</p>
            <a
              href="mailto:hello@nina-moore.com"
              className="text-2xl font-serif text-black hover:text-black/70 transition-colors"
            >
              hello@nina-moore.com
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider text-black/50 mb-3">Instagram</p>
            <a
              href="https://instagram.com/nina__eterna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-serif text-black hover:text-black/70 transition-colors"
            >
              @nina__eterna
            </a>
          </div>

          <div className="pt-12">
            <p className="text-lg text-black/60 font-light italic">
              Sessions available in English, Spanish, and French
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif text-black mb-2">Nina Moore</h3>
              <p className="text-sm text-black/50">Coaching & Integration</p>
            </div>

            <div className="flex space-x-8 text-sm text-black/60">
              <Link to="/support" className="hover:text-black transition-colors">
                Support
              </Link>
              <Link to="/privacy" className="hover:text-black transition-colors">
                Privacy
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-black/5 text-center text-sm text-black/40">
            © {new Date().getFullYear()} Nina Moore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
