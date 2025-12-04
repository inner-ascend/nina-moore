import OptimizedImage from '../ui/OptimizedImage';
import enTranslations from '../../translations/en.json';

export default function AboutSection() {
  const t = enTranslations;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="scroll-mt-24">
      {/* Bio Section - Image + Text */}
      <div className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Bio Portrait */}
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <OptimizedImage
                src="/images/about-bio.JPG"
                alt="Nina Moore"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bio Text */}
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.about.title}
              </h2>
              <div className="space-y-6 text-lg text-black/70 leading-relaxed">
                {t.about.bio.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Credentials */}
              <div className="pt-8 border-t border-black/10">
                <h3 className="text-xl font-serif text-black mb-6">
                  {t.about.credentials.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.about.credentials.items.map((item, index) => (
                    <li key={index} className="flex items-start text-black/60">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <button
                  onClick={scrollToContact}
                  className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all"
                >
                  {t.about.cta.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Approach - Three Pillars */}
      <div className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-16 text-center">
            My Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Pillar 1: Somatic Work */}
            <div className="space-y-6">
              <div className="text-5xl font-serif text-black/20">01</div>
              <h3 className="text-2xl font-serif text-black">
                Body-Based Work
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                We work with breath, sensation, and movement—not just conversation. Real change happens when insights land in your body, not just your mind.
              </p>
            </div>

            {/* Pillar 2: Honest Reflection */}
            <div className="space-y-6">
              <div className="text-5xl font-serif text-black/20">02</div>
              <h3 className="text-2xl font-serif text-black">
                Honest Reflection
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                I won't just validate you. I'll challenge limiting patterns, ask hard questions, and help you see what you might be avoiding. Growth requires honesty.
              </p>
            </div>

            {/* Pillar 3: Practical Tools */}
            <div className="space-y-6">
              <div className="text-5xl font-serif text-black/20">03</div>
              <h3 className="text-2xl font-serif text-black">
                Practical Tools
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                You leave every session with specific practices and next steps. Insight without action is just entertainment. We focus on real, lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
