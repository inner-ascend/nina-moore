import { Link } from 'react-router-dom';
import enTranslations from '../../translations/en.json';
import OptimizedImage from '../ui/OptimizedImage';
import Navigation from '../Navigation';

export default function AboutPage() {
  const t = enTranslations;

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage="about"
        translations={t}
      />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/about-hero.jpg"
            alt="About Nina Moore"
            className="w-full h-full object-cover"
            priority={true}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Bio Section - Image + Text */}
      <section className="py-32">
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
            <div className="space-y-10 text-xl md:text-2xl text-black/70 leading-relaxed">
              {t.about.bio.map((paragraph, index) => (
                <p key={index} className={index === 4 ? "text-black font-medium text-3xl md:text-4xl leading-relaxed pt-6" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* My Background Story */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-16 text-center">
            My Journey to This Work
          </h2>

          <div className="space-y-8 text-xl md:text-2xl text-black/70 leading-relaxed">
            <p>
              I didn't always walk this path. For years, I lived the life I thought I was supposed to live—the corporate career, the external achievements, the carefully constructed identity. But beneath it all, something was calling me home to myself.
            </p>

            <p>
              My own transformation began with what felt like a breakdown but was actually a breakthrough. Through my healing journey—working with plant medicine, somatic practices, and deep inner work—I discovered that our greatest wounds hold our greatest gifts. What I thought was falling apart was actually falling into place.
            </p>

            <p>
              This realization set me on a path of study and practice that has taken me across the world. I've sat with shamans in Peru, studied tantra in Bali, trained in somatic therapy, and learned from healers and teachers who embody the wisdom they share. Each experience deepened my capacity to hold space for transformation.
            </p>

            <p className="text-black font-medium text-2xl md:text-3xl pt-8">
              Now, I guide others through the passages I've walked myself—not from a place of having arrived, but from a commitment to walking this path with integrity, presence, and deep reverence for the mystery of becoming.
            </p>
          </div>
        </div>
      </section>

      {/* My Approach - Three Pillars */}
      <section className="py-32 bg-stone-50">
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
                True transformation happens not just in the mind, but in the body. We work with breath, sensation, movement, and energy to release what's stuck and integrate new ways of being. This is healing you can feel.
              </p>
            </div>

            {/* Pillar 2: Sacred Union Principles */}
            <div className="space-y-6">
              <div className="text-5xl font-serif text-black/20">02</div>
              <h3 className="text-2xl font-serif text-black">
                Sacred Union Principles
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Whether working with individuals or couples, I bring the wisdom of sacred union—the integration of masculine and feminine, shadow and light, human and divine. This is the path to wholeness and authentic power.
              </p>
            </div>

            {/* Pillar 3: Integration & Accountability */}
            <div className="space-y-6">
              <div className="text-5xl font-serif text-black/20">03</div>
              <h3 className="text-2xl font-serif text-black">
                Integration & Accountability
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Insight without integration is just entertainment. I provide practical tools, ongoing support, and loving accountability to ensure your transformation moves from our sessions into your actual life. This is where the magic becomes real.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-black/70 leading-relaxed italic">
              "This work is a sacred responsibility I don't take lightly. Every session is approached with full presence, deep listening, and a commitment to your highest unfolding."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/about-break.JPG"
            alt="Ready to begin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight drop-shadow-lg">
            Ready to begin your journey?
          </h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
            Let's Explore Working Together
          </Link>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="border-t border-black/10 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-serif text-black">
              Nina Moore
            </div>

            <div className="flex items-center gap-8 text-sm uppercase tracking-wider text-black/60">
              <a href="mailto:hello@nina-moore.com" className="hover:text-black transition-colors">
                Email
              </a>
              <a href="https://instagram.com/nina__eterna" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                Instagram
              </a>
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

          <div className="text-center mt-12 text-xs text-black/40">
            © 2025 Nina Moore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
