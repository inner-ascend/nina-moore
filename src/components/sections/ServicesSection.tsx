import enTranslations from '../../translations/en.json';

export default function ServicesSection() {
  const t = enTranslations;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="scroll-mt-24">
      {/* Intro */}
      <div className="py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-black mb-12">
            {t.services.hero.title}
          </h2>
          <p className="text-2xl md:text-3xl text-black/70 leading-relaxed">
            {t.services.intro}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-32 bg-stone-50">
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

              <button onClick={scrollToContact} className="block w-full px-8 py-4 bg-black text-white text-center text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.services.offerings.discoveryCall.cta}
              </button>
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

              <button onClick={scrollToContact} className="block w-full px-8 py-4 bg-black text-white text-center text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.services.offerings.singleSession.cta}
              </button>
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

              <button onClick={scrollToContact} className="block w-full px-8 py-4 bg-black text-white text-center text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.services.offerings.integrationPackage.cta}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* How Sessions Work */}
      <div className="py-32">
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
      </div>
    </section>
  );
}
