import { Link } from 'react-router-dom';
import OptimizedImage from '../ui/OptimizedImage';
import Navigation from '../Navigation';
import enTranslations from '../../translations/en.json';

export default function ServicesPage() {
  const t = enTranslations;

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage="services"
        translations={t}
      />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/journey.JPG"
            alt="Services"
            className="w-full h-full object-cover"
            priority={true}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            {t.services.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-lg">
            {t.services.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <p className="text-2xl md:text-3xl text-black/70 leading-relaxed">
            {t.services.intro}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

            {/* Discovery Call */}
            <div className="bg-white p-10 lg:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-4xl font-serif text-black">{t.services.offerings.discoveryCall.title}</h3>
                  <span className="text-lg text-black/50">{t.services.offerings.discoveryCall.duration}</span>
                </div>
                <div className="text-3xl font-serif text-black">{t.services.offerings.discoveryCall.price}</div>
              </div>

              <p className="text-lg text-black/70 leading-relaxed">
                {t.services.offerings.discoveryCall.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-black/60">{t.services.offerings.discoveryCall.coverTitle}</h4>
                <ul className="space-y-2 text-black/70">
                  {t.services.offerings.discoveryCall.cover.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="block w-full px-8 py-4 bg-black text-white text-center text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.services.offerings.discoveryCall.cta}
              </Link>
            </div>

            {/* Single Session */}
            <div className="bg-white p-10 lg:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-4xl font-serif text-black">{t.services.offerings.singleSession.title}</h3>
                  <span className="text-lg text-black/50">{t.services.offerings.singleSession.duration}</span>
                </div>
                <div className="text-3xl font-serif text-black">{t.services.offerings.singleSession.price}</div>
              </div>

              <p className="text-lg text-black/70 leading-relaxed">
                {t.services.offerings.singleSession.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-black/60">{t.services.offerings.singleSession.bestForTitle}</h4>
                <ul className="space-y-2 text-black/70">
                  {t.services.offerings.singleSession.bestFor.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="block w-full px-8 py-4 bg-black text-white text-center text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.services.offerings.singleSession.cta}
              </Link>
            </div>

            {/* Couples Session */}
            <div className="bg-white p-10 lg:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-4xl font-serif text-black">{t.services.offerings.couplesSession.title}</h3>
                  <span className="text-lg text-black/50">{t.services.offerings.couplesSession.duration}</span>
                </div>
                <div className="text-3xl font-serif text-black">{t.services.offerings.couplesSession.price}</div>
              </div>

              <p className="text-lg text-black/70 leading-relaxed">
                {t.services.offerings.couplesSession.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-black/60">{t.services.offerings.couplesSession.bestForTitle}</h4>
                <ul className="space-y-2 text-black/70">
                  {t.services.offerings.couplesSession.bestFor.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="block w-full px-8 py-4 bg-black text-white text-center text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.services.offerings.couplesSession.cta}
              </Link>
            </div>

            {/* Integration Package */}
            <div className="bg-white p-10 lg:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-4xl font-serif text-black">{t.services.offerings.integrationPackage.title}</h3>
                  <span className="text-lg text-black/50">{t.services.offerings.integrationPackage.duration}</span>
                </div>
                <div className="text-3xl font-serif text-black">{t.services.offerings.integrationPackage.price}</div>
              </div>

              <p className="text-lg text-black/70 leading-relaxed">
                {t.services.offerings.integrationPackage.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-black/60">{t.services.offerings.integrationPackage.includedTitle}</h4>
                <ul className="space-y-2 text-black/70">
                  {t.services.offerings.integrationPackage.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="block w-full px-8 py-4 bg-black text-white text-center text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.services.offerings.integrationPackage.cta}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* How Sessions Work */}
      <section className="py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.services.howItWorks.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {t.services.howItWorks.steps.map((step, index) => (
              <div key={index} className="space-y-6">
                <div className="text-5xl font-serif text-black/20">{step.num}</div>
                <h3 className="text-3xl font-serif text-black">
                  {step.title}
                </h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="h-[60vh] relative overflow-hidden">
        <OptimizedImage
          src="/images/break.JPG"
          alt="Transformation"
          className="w-full h-full object-cover"
        />
      </section>

      {/* What to Expect */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-16">
            {t.services.whatToExpect.title}
          </h2>

          <div className="space-y-12 text-xl md:text-2xl text-black/70 leading-relaxed">
            {t.services.whatToExpect.paragraphs.map((paragraph, index) => (
              <p key={index}>
                <strong className="text-black">{paragraph.bold}</strong> {paragraph.text}
              </p>
            ))}

            <p className="text-black font-medium text-3xl md:text-4xl pt-8">
              {t.services.whatToExpect.closing}
            </p>
          </div>
        </div>
      </section>

      {/* Ready for Longer-Term Work */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12 text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
            {t.services.deeperWork.title}
          </h2>
          <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
            {t.services.deeperWork.description}
          </p>
          <Link to="/programs" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            {t.services.deeperWork.cta}
          </Link>
        </div>
      </section>

      {/* Payment & Booking */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-16">
            {t.services.payment.title}
          </h2>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-black">{t.services.payment.howToBook.title}</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                {t.services.payment.howToBook.description}
              </p>
              <Link to="/getting-started" className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.services.payment.howToBook.cta}
              </Link>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-black">{t.services.payment.methods.title}</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                {t.services.payment.methods.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-black">{t.services.payment.plans.title}</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                {t.services.payment.plans.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-black">{t.services.payment.cancellation.title}</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                {t.services.payment.cancellation.description} <Link to="/terms" className="underline hover:text-black/60">{t.services.payment.cancellation.link}</Link> {t.services.payment.cancellation.suffix}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.services.testimonials.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {t.services.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 space-y-6">
                <p className="text-lg text-black/70 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="space-y-1">
                  <div className="font-medium text-black">{testimonial.name}</div>
                  <div className="text-sm text-black/50">{testimonial.program}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif text-black leading-relaxed">
            {t.services.finalCta.title}
          </h2>
          <p className="text-xl text-black/70">
            {t.services.finalCta.subtitle}
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
            {t.services.finalCta.button}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-serif text-black">
              Nina Moore
            </div>

            <div className="flex items-center gap-8 text-sm uppercase tracking-wider text-black/60">
              <a href="mailto:hello@nina-moore.com" className="hover:text-black transition-colors">
                {t.footer.links.email}
              </a>
              <a href="https://instagram.com/nina__eterna" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                {t.footer.links.instagram}
              </a>
              <Link to="/support" className="hover:text-black transition-colors">
                {t.footer.links.support}
              </Link>
              <Link to="/privacy" className="hover:text-black transition-colors">
                {t.footer.links.privacy}
              </Link>
              <Link to="/terms" className="hover:text-black transition-colors">
                Terms
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
