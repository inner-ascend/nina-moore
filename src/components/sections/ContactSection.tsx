import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
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
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      {/* Contact Form Section */}
      <div className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-black mb-8">
              Let's Connect
            </h2>
            <p className="text-xl text-black/70 leading-relaxed">
              Ready to begin your journey? Reach out and let's explore working together.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center space-y-8 py-16">
              <div className="inline-block p-6 bg-gradient-to-br from-stone-100 to-slate-50 rounded-full">
                <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-serif text-black">
                  Thank you for reaching out
                </h3>
                <p className="text-xl text-black/70 font-light leading-relaxed max-w-xl mx-auto">
                  Your message has been received. I'll respond personally within 24-48 hours.
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
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white border border-black/10 text-black focus:outline-none focus:border-black/30 transition-colors appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '12px' }}
                >
                  <option value="">Select a service...</option>
                  <option value="Discovery Call (Free 20-min)">Discovery Call (Free 20-min)</option>
                  <option value="Single Session">Single Session</option>
                  <option value="Couples Session">Couples Session</option>
                  <option value="Integration Package">Integration Package</option>
                  <option value="Sacred Union Program">Sacred Union Program</option>
                  <option value="Kundalini Transmission">Kundalini Transmission Program</option>
                  <option value="Retreat Inquiry">Retreat Inquiry</option>
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
                  Tell Me About What You're Seeking *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors resize-none"
                  placeholder="Share what brings you here, what you're hoping to explore, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-12 py-5 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'error' ? 'Error - Please Try Again' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Direct Contact Info */}
      <div className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-sm uppercase tracking-wider text-black/50 mb-2">Email</p>
              <a
                href="mailto:hello@nina-moore.com"
                className="text-xl font-serif text-black hover:text-black/70 transition-colors"
              >
                hello@nina-moore.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-black/50 mb-2">Instagram</p>
              <a
                href="https://instagram.com/nina__eterna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-serif text-black hover:text-black/70 transition-colors"
              >
                @nina__eterna
              </a>
            </div>
          </div>

          <p className="text-sm text-black/50 italic">
            Sessions available in English, Spanish, and French
          </p>
        </div>
      </div>
    </section>
  );
}
