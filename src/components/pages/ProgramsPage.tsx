import { Link } from 'react-router-dom';
import enTranslations from '../../translations/en.json';
import OptimizedImage from '../ui/OptimizedImage';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function ProgramsPage() {
  const t = enTranslations;

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage="programs"
        translations={t}
      />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/programs-hero.jpg"
            alt="Programs"
            className="w-full h-full object-cover"
            priority={true}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            {t.programs.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-lg">
            {t.programs.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Sacred Union Program */}
      <section className="py-32">
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
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.sacredUnion.title}
              </h2>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.sacredUnion.subtitle}
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                {t.programs.sacredUnion.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Pricing */}
              <div className="pt-8 pb-6 border-t border-b border-black/10">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-serif text-black">$888</span>
                  <span className="text-lg text-black/60">4-week journey</span>
                </div>
                <p className="mt-3 text-sm text-black/50">Includes 4 sessions + integration materials</p>
              </div>

              {/* Who This Is For */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-black">Who This Is For</h3>
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
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Those who sense there's more available in their partnership</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  Start Sacred Union Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundalini Transmission Program */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Program Description */}
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.kundalini.title}
              </h2>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                {t.programs.kundalini.subtitle}
              </p>

              <div className="space-y-6 text-lg text-black/60 leading-relaxed">
                {t.programs.kundalini.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Pricing */}
              <div className="pt-8 pb-6 border-t border-b border-black/10">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-serif text-black">$666</span>
                  <span className="text-lg text-black/60">4-week journey</span>
                </div>
                <p className="mt-3 text-sm text-black/50">Includes practices + integration support</p>
              </div>

              {/* Who This Is For */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-black">Who This Is For</h3>
                <ul className="space-y-3 text-base text-black/60">
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Creative professionals feeling blocked or disconnected from their essence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Seekers ready for profound transformation and awakening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Those drawn to embodied spirituality and energy work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Individuals wanting to unlock their full creative and life force potential</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  Unlock Your Creative Essence
                </Link>
              </div>
            </div>

            {/* Kundalini Image */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <OptimizedImage
                src="/images/kundalini.JPG"
                alt="Kundalini Transmission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Retreats Program */}
      <section className="py-32">
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
              <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                {t.programs.retreats.title}
              </h2>

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
                <h3 className="text-2xl font-serif text-black">Who This Is For</h3>
                <ul className="space-y-3 text-base text-black/60">
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Individuals or couples needing a deep reset away from daily life</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Those ready for intensive transformational work in sacred space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>People at major life transitions seeking clarity and integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Anyone wanting immersive healing in beautiful, intentional environments</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                  Reserve Your Retreat Spot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Offerings */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.programs.retreatOfferings.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {t.programs.retreatOfferings.items.map((item) => (
              <div key={item.num} className="space-y-6">
                <div className="text-4xl font-serif text-black/20">{item.num}</div>
                <h3 className="text-3xl font-serif text-black">
                  {item.title}
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Retreat Information */}
      <section className="py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-16">
            Retreat Details
          </h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* What's Included */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-black mb-4">What's Included</h3>
                <ul className="space-y-3 text-base text-black/60">
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Private accommodation in beautiful, intentional spaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>All meals prepared with local, nourishing ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Daily sessions and ceremonies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Integration materials and practices to take home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Pre-retreat preparation call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black/30">•</span>
                    <span>Two post-retreat integration sessions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sample Schedule */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif text-black mb-6">A Typical Retreat Day</h3>
                <div className="space-y-4 text-black/60">
                  <div className="flex gap-4">
                    <span className="text-sm font-mono text-black/40 w-20 flex-shrink-0">7:00 AM</span>
                    <p>Morning meditation and gentle movement</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-mono text-black/40 w-20 flex-shrink-0">8:30 AM</span>
                    <p>Nourishing breakfast together</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-mono text-black/40 w-20 flex-shrink-0">10:00 AM</span>
                    <p>Deep transformational session or workshop</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-mono text-black/40 w-20 flex-shrink-0">1:00 PM</span>
                    <p>Lunch and free time for integration</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-mono text-black/40 w-20 flex-shrink-0">4:00 PM</span>
                    <p>Afternoon practice or nature immersion</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-mono text-black/40 w-20 flex-shrink-0">7:00 PM</span>
                    <p>Dinner and evening ceremony</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-mono text-black/40 w-20 flex-shrink-0">9:00 PM</span>
                    <p>Optional sharing circle or rest</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 bg-stone-50 p-8 rounded-sm">
                <h3 className="text-2xl font-serif text-black mb-4">Preparation & Integration</h3>
                <p className="text-base text-black/60 leading-relaxed mb-4">
                  Your journey begins before you arrive. Each participant receives a preparation call to set intentions and prepare your body, mind, and spirit for the depth of transformation available.
                </p>
                <p className="text-base text-black/60 leading-relaxed">
                  Integration is just as important as the experience itself. Two follow-up sessions help you weave your insights into daily life and maintain momentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transmission Benefits */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.programs.experience.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {t.programs.experience.items.map((item) => (
              <div key={item.num} className="space-y-6">
                <div className="text-4xl font-serif text-black/20">{item.num}</div>
                <h3 className="text-3xl font-serif text-black">
                  {item.title}
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="h-[60vh] relative overflow-hidden">
        <OptimizedImage
          src="/images/programs-break.jpg"
          alt="Sacred experience"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Sacred Union Program Structure */}
      <section className="py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.programs.fourWeek.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {t.programs.fourWeek.weeks.map((week) => (
              <div key={week.num} className="space-y-6">
                <div className="text-4xl font-serif text-black/20">{week.num}</div>
                <h3 className="text-3xl font-serif text-black">
                  {week.title}
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {week.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center space-y-16">
          <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">
            {t.programs.principles.title}
          </h2>

          <div className="space-y-12 text-xl md:text-2xl text-black/70 leading-relaxed">
            {t.programs.principles.items.map((item, index) => (
              <p key={index} className={index === 0 ? "italic" : index === 3 ? "text-black font-medium text-3xl md:text-4xl pt-8" : ""}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>




      {/* CTA */}
      <section className="py-32 bg-zinc-800 text-white">
        <div className="container mx-auto max-w-4xl text-center px-6 space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif leading-relaxed">
            {t.programs.cta.title}
          </h2>
          <p className="text-xl text-white/70">
            {t.programs.cta.subtitle}
          </p>
          <Link to="/contact" className="inline-block px-12 py-4 bg-white text-black text-sm uppercase tracking-wider hover:bg-white/90 transition-all">
            Let's Explore Working Together
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
