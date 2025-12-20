import { useState } from 'react';
import emailjs from '@emailjs/browser';
import enTranslations from '../../translations/en.json';

export default function ContactSection() {
  const t = enTranslations;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
          subject: `New Inquiry from nina-moore.com`,
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-stone-50 scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-black/70 leading-relaxed mb-8">
            {t.contact.intro}
          </p>

          {/* What we'll explore */}
          <div className="text-left max-w-md mx-auto mb-8">
            <p className="text-base text-black/50 uppercase tracking-wider mb-4">{t.contact.exploreTitle}</p>
            <ul className="space-y-2">
              {t.contact.exploreItems.map((item, index) => (
                <li key={index} className="flex items-start text-lg text-black/70">
                  <span className="mr-4 text-black/30">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-black/60 italic">{t.contact.note}</p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <a
            href="https://calendly.com/nina-moore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all"
          >
            {t.contact.cta}
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 my-16"></div>

        {/* Contact Form */}
        {status === 'success' ? (
          <div className="text-center space-y-6 py-12">
            <div className="inline-block p-4 bg-white rounded-full">
              <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-serif text-black">{t.contact.success.title}</h3>
              <p className="text-lg text-black/70">{t.contact.success.message}</p>
            </div>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 border border-black/20 text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              {t.contact.success.button}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider text-black/60 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wider text-black/60 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider text-black/60 mb-2">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-black/10 text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-colors resize-none"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? t.contact.form.sending : status === 'error' ? t.contact.form.error : t.contact.form.send}
            </button>
          </form>
        )}

        {/* Contact Info */}
        <div className="mt-16 pt-16 border-t border-black/10">
          <div className="flex flex-wrap justify-center gap-12 mb-8">
            <div className="text-center">
              <p className="text-sm uppercase tracking-wider text-black/50 mb-2">{t.contact.info.email}</p>
              <a
                href={`mailto:${t.footer.email}`}
                className="text-lg text-black hover:text-black/70 transition-colors"
              >
                {t.footer.email}
              </a>
            </div>

            <div className="text-center">
              <p className="text-sm uppercase tracking-wider text-black/50 mb-2">{t.contact.info.instagram}</p>
              <a
                href="https://instagram.com/nina__eterna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-black hover:text-black/70 transition-colors"
              >
                {t.footer.social.instagram}
              </a>
            </div>
          </div>

          <p className="text-sm text-black/50 text-center italic">
            {t.contact.boundary}
          </p>
        </div>
      </div>
    </section>
  );
}
