import OptimizedImage from '../ui/OptimizedImage';
import enTranslations from '../../translations/en.json';

export default function ProgramsSection() {
  const t = enTranslations;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="scroll-mt-24">
      {/* Section Header */}
      <div className="py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-black mb-8">
            {t.programs.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
            {t.programs.hero.subtitle}
          </p>
        </div>
      </div>

      {/* Creative Unblocking Program */}
      <div className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Program Description */}
            <div className="space-y-8 order-2 lg:order-1">
              <h3 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.kundalini.title}
              </h3>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.kundalini.subtitle}
              </p>

              <div className="space-y-4 text-lg text-black/60 leading-relaxed">
                {t.programs.kundalini.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* What We Work On */}
              <div className="space-y-4">
                <h4 className="text-xl font-serif text-black">{t.programs.kundalini.whatWeWorkOn.title}</h4>
                <ul className="space-y-2 text-base text-black/60">
                  {t.programs.kundalini.whatWeWorkOn.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-black/30">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Structure */}
              <div className="space-y-2">
                <h4 className="text-xl font-serif text-black">{t.programs.kundalini.structure.title}</h4>
                <p className="text-base text-black/60">{t.programs.kundalini.structure.description}</p>
              </div>

              {/* Investment */}
              <div className="space-y-2 p-6 bg-stone-50 border border-black/10">
                <h4 className="text-xl font-serif text-black">{t.programs.kundalini.investment.title}</h4>
                <p className="text-lg text-black">{t.programs.kundalini.investment.price}</p>
              </div>

              {/* Who This Is For */}
              <div className="space-y-4">
                <h4 className="text-xl font-serif text-black">{t.programs.kundalini.whoFor.title}</h4>
                <ul className="space-y-2 text-base text-black/60">
                  {t.programs.kundalini.whoFor.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-black/30">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button onClick={scrollToContact} className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  {t.programs.kundalini.cta}
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden order-1 lg:order-2">
              <OptimizedImage
                src="/images/kundalini.JPG"
                alt="Creative Unblocking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Private Retreats */}
      <div className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <OptimizedImage
                src="/images/retreats.JPG"
                alt="Private Retreats"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Program Description */}
            <div className="space-y-8">
              <h3 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.retreats.title}
              </h3>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.retreats.subtitle}
              </p>

              <div className="space-y-4 text-lg text-black/60 leading-relaxed">
                {t.programs.retreats.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* What's Included */}
              <div className="space-y-4">
                <h4 className="text-xl font-serif text-black">{t.programs.retreats.whatsIncluded.title}</h4>
                <ul className="space-y-2 text-base text-black/60">
                  {t.programs.retreats.whatsIncluded.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-black/30">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Format Options */}
              <div className="space-y-4">
                <h4 className="text-xl font-serif text-black">{t.programs.retreats.formats.title}</h4>
                <ul className="space-y-2 text-base text-black/60">
                  {t.programs.retreats.formats.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-black/30">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Investment */}
              <div className="space-y-3 p-6 bg-white border border-black/10">
                <h4 className="text-xl font-serif text-black">{t.programs.retreats.investment.title}</h4>
                <ul className="space-y-1 text-lg text-black">
                  {t.programs.retreats.investment.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm text-black/50 pt-2">{t.programs.retreats.investment.note}</p>
              </div>

              {/* Who This Is For */}
              <div className="space-y-4">
                <h4 className="text-xl font-serif text-black">{t.programs.retreats.whoFor.title}</h4>
                <ul className="space-y-2 text-base text-black/60">
                  {t.programs.retreats.whoFor.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-black/30">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button onClick={scrollToContact} className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  {t.programs.retreats.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
