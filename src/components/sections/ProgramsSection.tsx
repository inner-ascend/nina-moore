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

      {/* Sacred Union Program */}
      <div className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Sacred Union Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <OptimizedImage
                src="/images/sacred-union.JPG"
                alt="Sacred Union"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Program Description */}
            <div className="space-y-10">
              <h3 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.sacredUnion.title}
              </h3>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.sacredUnion.subtitle}
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                {t.programs.sacredUnion.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Who This Is For */}
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-black">Who This Is For</h4>
                <ul className="space-y-3 text-base text-black/60">
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Committed couples seeking deeper intimacy and authentic connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Partners ready to heal relationship wounds and patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Couples navigating transitions and wanting to grow together</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button onClick={scrollToContact} className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  Start Sacred Union Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kundalini Transmission Program */}
      <div className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Program Description */}
            <div className="space-y-10 order-2 lg:order-1">
              <h3 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.kundalini.title}
              </h3>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.kundalini.subtitle}
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                {t.programs.kundalini.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Who This Is For */}
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-black">Who This Is For</h4>
                <ul className="space-y-3 text-base text-black/60">
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Creative professionals feeling blocked or disconnected</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Seekers ready for profound transformation and awakening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Those drawn to embodied spirituality and energy work</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button onClick={scrollToContact} className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  Unlock Your Creative Essence
                </button>
              </div>
            </div>

            {/* Kundalini Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden order-1 lg:order-2">
              <OptimizedImage
                src="/images/kundalini.JPG"
                alt="Kundalini Transmission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Immersive Retreats */}
      <div className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Retreats Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <OptimizedImage
                src="/images/retreats.JPG"
                alt="Immersive Retreats"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Program Description */}
            <div className="space-y-10">
              <h3 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.retreats.title}
              </h3>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.retreats.subtitle}
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                {t.programs.retreats.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Who This Is For */}
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-black">Who This Is For</h4>
                <ul className="space-y-3 text-base text-black/60">
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Individuals or couples needing a deep reset</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Those ready for intensive transformational work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>People at major life transitions seeking clarity</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button onClick={scrollToContact} className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  Inquire About Retreats
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
