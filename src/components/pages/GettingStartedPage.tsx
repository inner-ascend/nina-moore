import { Link } from 'react-router-dom';
import { useState } from 'react';
import enTranslations from '../../translations/en.json';
import esTranslations from '../../translations/es.json';
import frTranslations from '../../translations/fr.json';
import Navigation from '../Navigation';

export default function GettingStartedPage() {
  const [language, setLanguage] = useState<'en' | 'es' | 'fr'>('en');

  const t = language === 'es' ? esTranslations : language === 'fr' ? frTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={undefined}
        translations={t}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif text-black leading-tight">
            Getting Started
          </h1>
          <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
            Your complete guide to booking and preparing for your transformational journey
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-24">
            The Booking Process
          </h2>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-serif text-black/20">01</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-serif text-black">Choose Your Path</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  Explore our <Link to="/services" className="underline hover:text-black">Services</Link> (individual sessions) or <Link to="/programs" className="underline hover:text-black">Programs</Link> (transformational journeys). Not sure what's right for you? That's what the discovery call is for.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-serif text-black/20">02</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-serif text-black">Schedule Your Discovery Call</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  Book a free 20-minute discovery call via our <Link to="/contact" className="underline hover:text-black">contact page</Link>. During this call, we'll discuss what you're seeking, answer your questions, and explore if we're a good fit to work together.
                </p>
                <p className="text-lg text-black/70 leading-relaxed">
                  Alternatively, if you already know what you want, you can submit an inquiry directly for any service or program.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-serif text-black/20">03</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-serif text-black">Receive Confirmation</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  Within 24-48 hours, you'll receive an email with next steps. For discovery calls, you'll get calendar availability. For program inquiries, you'll receive detailed information about the program structure, investment, and start dates.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-serif text-black/20">04</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-serif text-black">Book Your Session or Program</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  Once we've connected and you're ready to move forward, you'll receive a booking confirmation with available dates and times. Choose what works best for your schedule.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-serif text-black/20">05</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-serif text-black">Complete Payment</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  Payment is required before your first session to secure your spot. You'll receive payment instructions via email with multiple convenient options (see Payment Methods below).
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-serif text-black/20">06</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-serif text-black">Complete Your Intake Form</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  After payment, you'll receive an intake form to help me understand your needs, intentions, and any relevant health or background information. This ensures our session is tailored specifically to you.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-serif text-black/20">07</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-serif text-black">Prepare for Your Session</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  You'll receive a preparation guide with practical tips on how to prepare physically, mentally, and energetically. This might include suggestions for what to eat (or avoid), how to set your space, and practices to ground yourself.
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-serif text-black/20">08</div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-serif text-black">Your Session or Program Begins</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  Show up with an open heart and trust the process. Whether online or in-person, come as you are—this is your sacred time for transformation and deep inner work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-16">
            Payment Methods
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-black">Accepted Payment Options</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                We offer multiple convenient payment methods to make your investment in yourself as smooth as possible:
              </p>
              <ul className="space-y-3 text-lg text-black/70 leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span><strong>Venmo</strong> - Quick and easy mobile payment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span><strong>Zelle</strong> - Direct bank-to-bank transfer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span><strong>Bank Transfer</strong> - Traditional wire or ACH transfer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span><strong>Credit Card</strong> - Secure online payment processing</span>
                </li>
              </ul>
              <p className="text-lg text-black/70 leading-relaxed pt-4">
                Specific payment instructions and account details will be provided after you book your session or program.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-black">Payment Plans</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Payment plans are available for programs and packages over $1,000. This allows you to invest in your transformation without financial strain.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                Payment plan options:
              </p>
              <ul className="space-y-3 text-lg text-black/70 leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>2-payment plan (50% upfront, 50% midway through program)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>3-payment plan (distributed evenly across program duration)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Custom plans can be discussed on a case-by-case basis</span>
                </li>
              </ul>
              <p className="text-lg text-black/70 leading-relaxed pt-4">
                Payment plan terms must be agreed upon in writing before the program begins, and all scheduled payments must be honored.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-black">Payment Timing</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Payment is required in full before your session or program begins, unless a payment plan has been pre-arranged. This ensures your spot is secured and allows us to fully commit our energy to your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Policies */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-16">
            Important Policies
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Cancellation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-black">Cancellation & Rescheduling</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Life happens. If you need to reschedule, please provide at least 48 hours notice. Cancellations with less than 48 hours notice will be charged the full session fee.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                No-shows (missing a session without notice) will be charged in full and the session will be considered complete.
              </p>
            </div>

            {/* Refunds */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-black">Refund Policy</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Single sessions are non-refundable but can be rescheduled with proper notice.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                Programs: Full refund within 7 days of purchase if no sessions have occurred. After the first session, prorated refunds available minus 20% administrative fee.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-black">Confidentiality</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Everything you share is held in sacred confidence. Your sessions, content, and the fact that you're a client are completely private unless you provide written consent to share.
              </p>
            </div>

            {/* Health & Safety */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-black">Health & Safety</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Please disclose any health conditions, medications, or concerns during your intake. If you're working with a therapist or doctor, this work can beautifully complement that care but does not replace it.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-black/60">
              For complete details, please review our{' '}
              <Link to="/terms" className="underline hover:text-black">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-16">
            Preparing for Your Session
          </h2>

          <div className="space-y-8 text-lg text-black/70 leading-relaxed">
            <p>
              You'll receive a detailed preparation guide after booking, but here are some general tips to help you show up fully:
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-black">Physical Preparation</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Eat a light, nourishing meal 2-3 hours before your session</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Stay hydrated but avoid caffeine 4 hours prior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Wear comfortable, loose-fitting clothing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Avoid alcohol or recreational substances for 24 hours prior</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-black">Mental & Emotional Preparation</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Set a clear intention for what you want to explore or heal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Journal or reflect on what's calling you to this work</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Release expectations and trust the process</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Give yourself space after—no back-to-back meetings</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-black">For Virtual Sessions</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Find a private, quiet space where you won't be disturbed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Test your internet connection and video/audio beforehand</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Have a yoga mat, blanket, or comfortable floor space available</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black/30 rounded-full flex-shrink-0"></span>
                  <span>Create sacred space—candles, incense, whatever feels right</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-black">How do I know which service or program is right for me?</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Start with a free discovery call. We'll discuss where you are, what you're seeking, and I'll recommend the best path forward. There's no pressure—just honest guidance.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-black">Are sessions in-person or virtual?</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Both! Individual sessions are typically virtual via Zoom. Programs can be hybrid. Retreats are in-person at beautiful locations. We'll discuss what works best during your discovery call.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-black">How quickly will I see results?</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Many clients experience shifts during or immediately after the first session. Deeper transformation unfolds over time with consistent practice and integration. This is not a quick fix—it's a sacred unfolding.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-black">What if I need to reschedule?</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Life happens. Just give me 48 hours notice and we'll find another time that works. Late cancellations (under 48 hours) are charged in full.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-black">Is this therapy or coaching?</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                This is coaching and somatic facilitation, not therapy. If you're working with a therapist, this work can beautifully complement that. If you're experiencing a mental health crisis, please seek appropriate professional support.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-black">Do you offer sliding scale or scholarships?</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                I occasionally offer limited sliding scale spots for those experiencing genuine financial hardship. Please reach out directly to discuss your situation.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-black/60 mb-4">
              More questions? Check our full{' '}
              <Link to="/support" className="underline hover:text-black">
                FAQ & Support page
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
            Ready to Begin?
          </h2>
          <p className="text-xl text-black/70 leading-relaxed">
            Your transformation awaits. Take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
              Schedule Discovery Call
            </Link>
            <Link to="/services" className="inline-block px-12 py-4 border-2 border-black text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all">
              View Services
            </Link>
          </div>
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
            © {new Date().getFullYear()} Nina Moore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
