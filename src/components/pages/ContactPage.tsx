import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import enTranslations from '../../translations/en.json';
import OptimizedImage from '../ui/OptimizedImage';
import Navigation from '../Navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredContact: 'email' as 'email' | 'phone' | 'whatsapp',
    timezone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showCalendar, setShowCalendar] = useState(false);

  const t = enTranslations;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_pwk84sr',
        'template_tpdn8r5',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          preferred_contact: formData.preferredContact,
          timezone: formData.timezone,
          subject: `New ${formData.service || 'General'} Inquiry from nina-moore.com`,
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', preferredContact: 'email', timezone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage="contact"
        translations={t}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/IMG_0136.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
            priority={true}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-lg">{t.contact.hero.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-lg">
            {t.contact.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          {status === 'success' ? (
            // Success Message
            <div className="text-center space-y-8 py-16">
              <div className="inline-block p-6 bg-gradient-to-br from-stone-100 to-slate-50 rounded-full">
                <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif text-black">
                  Thank you for reaching out
                </h2>
                <p className="text-xl text-black/70 font-light leading-relaxed max-w-xl mx-auto">
                  Your message has been received. I'll respond personally within 24-48 hours.
                </p>
                <p className="text-lg text-black/50 italic pt-4">
                  Check your inbox for a confirmation email
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 border border-black/20 text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            // Contact Form
            <>
              <div className="mb-16 space-y-6 text-center">
                <p className="text-lg text-black/70 leading-relaxed">
                  I welcome you to reach out if you feel called to this work. Whether you're seeking guidance through a life transition, integration support after a psychedelic experience, or simply curious to learn more about working together.
                </p>
                <p className="text-lg text-black/70 leading-relaxed">
                  I typically respond within 24-48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                      Your Name *
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
                      Email *
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
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="timezone" className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                      Your Timezone (Optional)
                    </label>
                    <input
                      type="text"
                      id="timezone"
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="w-full px-6 py-4 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors"
                      placeholder="e.g., PST, EST, CET"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                    I'm Interested In *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (e.target.value === 'Discovery Call (Free 20-min)') {
                        setShowCalendar(true);
                      }
                    }}
                    required
                    className="w-full px-6 py-4 bg-white border border-black/10 text-black focus:outline-none focus:border-black/30 transition-colors appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '12px' }}
                  >
                    <option value="">Select a service...</option>
                    <option value="Sacred Union (Couples Journey)">Sacred Union (Couples Journey)</option>
                    <option value="Reignite Your Creativity (Individual)">Reignite Your Creativity (Individual Journey)</option>
                    <option value="Private 1:1 Retreat">Private 1:1 Retreat</option>
                    <option value="Couples Retreat">Couples Retreat</option>
                    <option value="Small Group Retreat">Small Group Retreat</option>
                    <option value="Discovery Call (Free 20-min)">Discovery Call (Free 20-min consultation)</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as 'email' | 'phone' | 'whatsapp' })}
                        className="w-4 h-4 text-black border-black/30 focus:ring-black"
                      />
                      <span className="text-black/70">Email</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as 'email' | 'phone' | 'whatsapp' })}
                        className="w-4 h-4 text-black border-black/30 focus:ring-black"
                      />
                      <span className="text-black/70">Phone</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as 'email' | 'phone' | 'whatsapp' })}
                        className="w-4 h-4 text-black border-black/30 focus:ring-black"
                      />
                      <span className="text-black/70">WhatsApp</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-black/60 mb-3">
                    Tell Us About What You're Seeking *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={8}
                    className="w-full px-6 py-4 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors resize-none"
                    placeholder="Share what brings you here, what you're hoping to explore, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-12 py-5 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span>Sending...</span>
                  ) : status === 'error' ? (
                    <span>Error - Please Try Again</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Calendly Booking Section */}
      {showCalendar && (
        <section className="py-32 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-black">
                Book Your Discovery Call
              </h2>
              <p className="text-lg text-black/70">
                Choose a time that works best for you. This is a complimentary 20-minute conversation to explore if we're a good fit to work together.
              </p>
              <button
                onClick={() => setShowCalendar(false)}
                className="text-sm uppercase tracking-wider text-black/50 hover:text-black underline"
              >
                Hide Calendar
              </button>
            </div>

            {/* Calendly Inline Widget */}
            <div className="bg-white rounded-sm border border-black/10 overflow-hidden" style={{ minHeight: '630px' }}>
              <iframe
                src="https://calendly.com/nina-moore/discovery-call"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule Discovery Call"
                className="w-full"
              ></iframe>
            </div>

            <p className="text-center mt-8 text-sm text-black/50">
              Don't see a time that works? <a href="mailto:hello@nina-moore.com" className="underline hover:text-black">Email me</a> and we'll find something that fits.
            </p>
          </div>
        </section>
      )}

      {/* Alternative: Quick Calendar CTA */}
      {!showCalendar && (
        <section className="py-20 px-6 bg-stone-50">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-serif text-black">
              Want to schedule a discovery call?
            </h3>
            <p className="text-black/70">
              Free 20-minute consultation to see if we're aligned
            </p>
            <button
              onClick={() => setShowCalendar(true)}
              className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all"
            >
              View Available Times
            </button>
          </div>
        </section>
      )}

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
              <Link to="/terms" className="hover:text-black transition-colors">
                Terms
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
