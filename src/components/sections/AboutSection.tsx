import OptimizedImage from '../ui/OptimizedImage';
import enTranslations from '../../translations/en.json';

export default function AboutSection() {
  const t = enTranslations;

  return (
    <section id="about" className="scroll-mt-24">
      {/* Bio Section - Image + Text */}
      <div className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
              <div className="space-y-6 text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.about.bio.map((paragraph, index) => (
                  <p key={index} className={index === 4 ? "text-black font-medium text-3xl md:text-4xl leading-relaxed pt-6" : ""}>
                    {paragraph}
                  </p>
                ))}
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
            {/* Pillar 1: Somatic Embodiment */}
            <div className="space-y-6">
              <div className="text-5xl font-serif text-black/20">01</div>
              <h3 className="text-2xl font-serif text-black">
                Somatic Embodiment
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                True transformation happens not just in the mind, but in the body. We work with breath, sensation, movement, and energy to release what's stuck and integrate new ways of being.
              </p>
            </div>

            {/* Pillar 2: Sacred Union Principles */}
            <div className="space-y-6">
              <div className="text-5xl font-serif text-black/20">02</div>
              <h3 className="text-2xl font-serif text-black">
                Sacred Union Principles
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Whether working with individuals or couples, I bring the wisdom of sacred union—the integration of masculine and feminine, shadow and light, human and divine.
              </p>
            </div>

            {/* Pillar 3: Integration & Accountability */}
            <div className="space-y-6">
              <div className="text-5xl font-serif text-black/20">03</div>
              <h3 className="text-2xl font-serif text-black">
                Integration & Accountability
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Insight without integration is just entertainment. I provide practical tools, ongoing support, and loving accountability to ensure your transformation becomes real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
