import { Link } from 'react-router-dom';
import { useState } from 'react';
import enTranslations from '../../translations/en.json';
import esTranslations from '../../translations/es.json';
import frTranslations from '../../translations/fr.json';
import OptimizedImage from '../ui/OptimizedImage';
import Navigation from '../Navigation';

export default function ProgramsPage() {
  const [language, setLanguage] = useState<'en' | 'es' | 'fr'>('en');

  const t = language === 'es' ? esTranslations : language === 'fr' ? frTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage="programs"
        translations={t}
        language={language}
        onLanguageChange={setLanguage}
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

              {/* Pricing */}
              <div className="pt-8 pb-6 border-t border-b border-black/10 space-y-4">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-serif text-black">$3,333</span>
                    <span className="text-base text-black/60">Private 1:1 Retreat</span>
                  </div>
                  <p className="mt-1 text-sm text-black/50">3-day immersive experience</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-serif text-black">$5,555</span>
                    <span className="text-base text-black/60">Couples Retreat</span>
                  </div>
                  <p className="mt-1 text-sm text-black/50">3-day journey for 2 people</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-serif text-black">$2,222</span>
                    <span className="text-base text-black/60">Small Group Retreat</span>
                  </div>
                  <p className="mt-1 text-sm text-black/50">5-day experience, per person (max 6 people)</p>
                </div>
                <p className="text-xs text-black/40 pt-2">All retreats include accommodation, meals, sessions, and integration support</p>
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
            {/* Locations & Dates */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif text-black mb-6">2025 Retreat Locations</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-black/20 pl-6">
                    <p className="text-sm uppercase tracking-wider text-black/50 mb-2">May 15-20</p>
                    <p className="text-xl font-serif text-black">Bali, Indonesia</p>
                    <p className="text-sm text-black/60 mt-1">Small Group Retreat (4 spots remaining)</p>
                  </div>
                  <div className="border-l-2 border-black/20 pl-6">
                    <p className="text-sm uppercase tracking-wider text-black/50 mb-2">August 10-13</p>
                    <p className="text-xl font-serif text-black">Algarve, Portugal</p>
                    <p className="text-sm text-black/60 mt-1">Couples Retreat (Private bookings available)</p>
                  </div>
                  <div className="border-l-2 border-black/20 pl-6">
                    <p className="text-sm uppercase tracking-wider text-black/50 mb-2">November 1-6</p>
                    <p className="text-xl font-serif text-black">Costa Rica</p>
                    <p className="text-sm text-black/60 mt-1">Small Group Retreat (6 spots available)</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
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

      {/* Program Comparison Table */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-16">
            Compare Programs
          </h2>

          {/* Mobile: Stacked Cards */}
          <div className="md:hidden space-y-8">
            {/* Sacred Union Card */}
            <div className="bg-white p-6 rounded-sm border border-black/10">
              <h3 className="text-2xl font-serif text-black mb-6">Sacred Union</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Duration</span>
                  <span className="text-black font-medium">4 weeks</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Format</span>
                  <span className="text-black font-medium">Couples</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Sessions</span>
                  <span className="text-black font-medium">4 sessions</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Investment</span>
                  <span className="text-black font-medium">$888</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Best For</span>
                  <span className="text-black font-medium text-right">Relationship depth</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-black/50">Includes</span>
                  <span className="text-black font-medium text-right">Materials + Integration</span>
                </div>
              </div>
            </div>

            {/* Kundalini Card */}
            <div className="bg-white p-6 rounded-sm border border-black/10">
              <h3 className="text-2xl font-serif text-black mb-6">Reignite Your Creativity</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Duration</span>
                  <span className="text-black font-medium">4 weeks</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Format</span>
                  <span className="text-black font-medium">Individual</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Sessions</span>
                  <span className="text-black font-medium">4 sessions</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Investment</span>
                  <span className="text-black font-medium">$666</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Best For</span>
                  <span className="text-black font-medium text-right">Creative awakening</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-black/50">Includes</span>
                  <span className="text-black font-medium text-right">Practices + Integration</span>
                </div>
              </div>
            </div>

            {/* Private Retreat Card */}
            <div className="bg-white p-6 rounded-sm border border-black/10">
              <h3 className="text-2xl font-serif text-black mb-6">Private 1:1 Retreat</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Duration</span>
                  <span className="text-black font-medium">3 days</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Format</span>
                  <span className="text-black font-medium">Individual</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Sessions</span>
                  <span className="text-black font-medium">Immersive</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Investment</span>
                  <span className="text-black font-medium">$3,333</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Best For</span>
                  <span className="text-black font-medium text-right">Deep reset</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-black/50">Includes</span>
                  <span className="text-black font-medium text-right">All-inclusive</span>
                </div>
              </div>
            </div>

            {/* Group Retreat Card */}
            <div className="bg-white p-6 rounded-sm border border-black/10">
              <h3 className="text-2xl font-serif text-black mb-6">Small Group Retreat</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Duration</span>
                  <span className="text-black font-medium">5 days</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Format</span>
                  <span className="text-black font-medium">Small Group</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Sessions</span>
                  <span className="text-black font-medium">Immersive</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Investment</span>
                  <span className="text-black font-medium">$2,222</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5">
                  <span className="text-black/50">Best For</span>
                  <span className="text-black font-medium text-right">Community healing</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-black/50">Includes</span>
                  <span className="text-black font-medium text-right">All-inclusive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-6 px-4 text-sm uppercase tracking-wider text-black/50 font-normal">Feature</th>
                  <th className="text-center py-6 px-4">
                    <span className="text-2xl font-serif text-black block mb-2">Sacred Union</span>
                    <span className="text-sm text-black/50">Couples</span>
                  </th>
                  <th className="text-center py-6 px-4">
                    <span className="text-2xl font-serif text-black block mb-2">Reignite Creativity</span>
                    <span className="text-sm text-black/50">Individual</span>
                  </th>
                  <th className="text-center py-6 px-4">
                    <span className="text-2xl font-serif text-black block mb-2">1:1 Retreat</span>
                    <span className="text-sm text-black/50">Individual</span>
                  </th>
                  <th className="text-center py-6 px-4">
                    <span className="text-2xl font-serif text-black block mb-2">Group Retreat</span>
                    <span className="text-sm text-black/50">Small Group</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-b border-black/10">
                  <td className="text-left py-6 px-4 text-black/70">Duration</td>
                  <td className="py-6 px-4 text-black font-medium">4 weeks</td>
                  <td className="py-6 px-4 text-black font-medium">4 weeks</td>
                  <td className="py-6 px-4 text-black font-medium">3 days</td>
                  <td className="py-6 px-4 text-black font-medium">5 days</td>
                </tr>
                <tr className="border-b border-black/10 bg-stone-50">
                  <td className="text-left py-6 px-4 text-black/70">Sessions</td>
                  <td className="py-6 px-4 text-black font-medium">4 sessions</td>
                  <td className="py-6 px-4 text-black font-medium">4 sessions</td>
                  <td className="py-6 px-4 text-black font-medium">Immersive</td>
                  <td className="py-6 px-4 text-black font-medium">Immersive</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="text-left py-6 px-4 text-black/70">Investment</td>
                  <td className="py-6 px-4">
                    <span className="text-3xl font-serif text-black">$888</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="text-3xl font-serif text-black">$666</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="text-3xl font-serif text-black">$3,333</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="text-3xl font-serif text-black">$2,222</span>
                  </td>
                </tr>
                <tr className="border-b border-black/10 bg-stone-50">
                  <td className="text-left py-6 px-4 text-black/70">Best For</td>
                  <td className="py-6 px-4 text-black text-sm">Deepening<br/>intimacy</td>
                  <td className="py-6 px-4 text-black text-sm">Creative<br/>awakening</td>
                  <td className="py-6 px-4 text-black text-sm">Intensive<br/>reset</td>
                  <td className="py-6 px-4 text-black text-sm">Community<br/>healing</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="text-left py-6 px-4 text-black/70">What's Included</td>
                  <td className="py-6 px-4 text-black text-sm">Materials +<br/>Integration</td>
                  <td className="py-6 px-4 text-black text-sm">Practices +<br/>Integration</td>
                  <td className="py-6 px-4 text-black text-sm">Accommodation +<br/>Meals + Sessions</td>
                  <td className="py-6 px-4 text-black text-sm">Accommodation +<br/>Meals + Sessions</td>
                </tr>
                <tr>
                  <td className="text-left py-6 px-4 text-black/70">Integration Support</td>
                  <td className="py-6 px-4 text-black">✓</td>
                  <td className="py-6 px-4 text-black">✓</td>
                  <td className="py-6 px-4 text-black">✓</td>
                  <td className="py-6 px-4 text-black">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <p className="text-black/60 text-sm">Not sure which program is right for you?</p>
            <Link to="/contact" className="inline-block mt-4 px-8 py-3 border border-black text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all">
              Schedule Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Investment & Payment */}
      <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-16">
            {t.programs.payment.title}
          </h2>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-black">{t.programs.payment.howToBook.title}</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                {t.programs.payment.howToBook.description}
              </p>
              <Link to="/getting-started" className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                {t.programs.payment.howToBook.cta}
              </Link>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-black">{t.programs.payment.options.title}</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                {t.programs.payment.options.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-black">{t.programs.payment.plans.title}</h3>
              <div className="text-lg text-black/70 leading-relaxed space-y-3">
                <p>{t.programs.payment.plans.description}</p>
                <ul className="space-y-2 ml-6">
                  {t.programs.payment.plans.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-black">{t.programs.payment.cancellation.title}</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                {t.programs.payment.cancellation.description} <Link to="/terms" className="underline hover:text-black/60">{t.programs.payment.cancellation.link}</Link> {t.programs.payment.cancellation.suffix}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-serif text-black text-center mb-24">
            {t.programs.testimonials.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {t.programs.testimonials.items.map((testimonial, index) => (
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

      {/* Footer */}
      <footer className="border-t border-black/10 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-serif text-black">
              Nina Moore
            </div>

            <div className="flex items-center gap-8 text-sm uppercase tracking-wider text-black/60">
              <a href={`mailto:${t.footer.email}`} className="hover:text-black transition-colors">
                {t.footer.links.email}
              </a>
              <a href={`https://instagram.com/${t.footer.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
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
