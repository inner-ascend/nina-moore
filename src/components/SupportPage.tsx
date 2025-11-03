import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="text-2xl font-serif text-black tracking-tight">
              Nina Moore
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              <Link to="/" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                About
              </Link>
              <Link to="/programs" className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Programs
              </Link>
              <Link to="/contact" className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
                Book Discovery Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-6 border-t border-black/5">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                About
              </Link>
              <Link to="/programs" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                Programs
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider font-semibold text-black">
                Book Discovery Call
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-stone-50 to-slate-100">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif text-black mb-4 leading-tight tracking-tight">
            Support
          </h1>
          <p className="text-xl text-black/60">Questions about your journey? We're here to help.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Contact Section */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif text-black mb-8">Get in Touch</h2>
            <p className="text-xl text-black/60 mb-8">
              For questions about services, bookings, or your journey with us:
            </p>
            <a
              href="mailto:hello@nina-moore.com"
              className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all"
            >
              hello@nina-moore.com
            </a>
          </div>

          {/* Instagram */}
          <div className="text-center mb-24 pb-24 border-b border-black/10">
            <p className="text-lg text-black/60 mb-4">Follow the journey:</p>
            <a
              href="https://instagram.com/nina__eterna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-black hover:text-black/60 transition-colors text-lg"
            >
              @nina__eterna
            </a>
          </div>

          {/* Common Questions - Organized by Category */}
          <div>
            <h2 className="text-4xl font-serif text-black mb-16 text-center">
              Frequently Asked Questions
            </h2>

            {/* Getting Started */}
            <div className="mb-16">
              <h3 className="text-sm uppercase tracking-wider text-black/40 mb-8 pb-4 border-b border-black/10">
                Getting Started
              </h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    How do I know which program is right for me?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Start with a free discovery call where we'll explore what you're seeking and which path feels most aligned. Sacred Union is for couples, Kundalini is for individual creative awakening, and retreats offer immersive transformation. If you're unsure, the discovery call will provide clarity.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What happens in a discovery call?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    This is a complimentary 20-minute conversation where we connect, discuss what you're seeking, explore if we're a good fit, and answer any questions you have. There's no pressure or obligation—just an honest, heart-centered conversation about your journey.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    Do I need any preparation before starting?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    No special preparation is needed. Come as you are. For retreats, you'll receive a preparation call and guidelines to help you arrive ready. For ongoing sessions, simply come with an open heart and willingness to explore.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What if I'm nervous or uncertain?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Feeling nervous is completely natural and welcome. This work requires vulnerability. We move at your pace, and there's no pressure to go deeper than feels right. Your safety and comfort are paramount.
                  </p>
                </div>
              </div>
            </div>

            {/* About the Work */}
            <div className="mb-16">
              <h3 className="text-sm uppercase tracking-wider text-black/40 mb-8 pb-4 border-b border-black/10">
                About the Work
              </h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What is your approach to transformation?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    I work with somatic embodiment, sacred union principles, and integration practices. This means we engage your body, emotions, mind, and spirit—not just talking about change, but feeling and embodying it. Every session is attuned to what wants to emerge in the moment.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    Is this work spiritual or therapeutic?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    It's both. I integrate spiritual wisdom with trauma-informed practices, somatic therapy, and practical coaching. We address the whole person—healing wounds while awakening your deepest potential and purpose.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    How is this different from traditional therapy?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    While therapy often focuses on healing the past, this work includes that while also activating your future potential. We work with energy, consciousness, and embodiment—creating transformation that's visceral and lasting, not just cognitive understanding.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What happens in a typical session?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Each session is unique and responsive to what's alive for you. We might include deep inquiry, somatic practices, breathwork, energy work, parts work, or practical strategy. Sessions typically run 60-90 minutes and create space for both excavation and integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Logistics */}
            <div className="mb-16">
              <h3 className="text-sm uppercase tracking-wider text-black/40 mb-8 pb-4 border-b border-black/10">
                Logistics
              </h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    Are sessions online or in-person?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Both options are available. Online sessions are conducted via Zoom and are just as powerful as in-person work. For in-person sessions, we meet in sacred spaces in select locations. Retreats take place in Bali, Portugal, and Costa Rica.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What platform do you use for online sessions?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    We use Zoom for online sessions. You'll receive a private link before each session. Make sure you're in a quiet, private space where you feel safe to be vulnerable and won't be interrupted.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What if I need to reschedule?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Please provide at least 24 hours notice for rescheduling. Contact me at hello@nina-moore.com and we'll find a new time. Last-minute cancellations (less than 24 hours) may forfeit the session depending on circumstances.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What is your cancellation policy?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    For ongoing sessions: 24 hours notice required for rescheduling. For retreats: Deposits are non-refundable. Full payment is due 30 days before the retreat. Cancellations within 30 days forfeit 50% of the investment. See full terms during booking.
                  </p>
                </div>
              </div>
            </div>

            {/* Investment & Commitment */}
            <div className="mb-16">
              <h3 className="text-sm uppercase tracking-wider text-black/40 mb-8 pb-4 border-b border-black/10">
                Investment & Commitment
              </h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What is the investment?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed mb-4">
                    Pricing varies by program:
                  </p>
                  <ul className="text-lg text-black/60 leading-relaxed space-y-2 ml-6">
                    <li>• Sacred Union (Couples): $888 for 4-week journey</li>
                    <li>• Reignite Your Creativity: $666 for 4-week journey</li>
                    <li>• Private 1:1 Retreat: $3,333 (3 days, all-inclusive)</li>
                    <li>• Couples Retreat: $5,555 (3 days, all-inclusive)</li>
                    <li>• Small Group Retreat: $2,222 per person (5 days)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    Do you offer payment plans?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Yes, payment plans are available for programs over $1,000. We can arrange 2-3 installments depending on the program. Discuss this during your discovery call or contact me directly.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    How long does transformation take?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Transformation is not linear. Some clients experience profound shifts in the first session. Most complete the initial 4-week cycle and many continue for 3-6 months or longer. The deepest work happens when you commit to the process and trust the unfolding.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What's the time commitment?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    For 4-week programs: One 60-90 minute session per week plus daily practices (10-20 minutes). For retreats: Full immersion during the retreat days plus pre/post integration sessions. The real commitment is to yourself and your growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety & Privacy */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-black/40 mb-8 pb-4 border-b border-black/10">
                Safety & Privacy
              </h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    Is this work safe for trauma survivors?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Yes. I'm trained in trauma-informed practices and we move at a pace that feels safe for you. You're always in control of how deep we go. If you have complex trauma or PTSD, I may recommend working with a therapist alongside this work.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    How do you ensure confidentiality?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Everything shared in our sessions is completely confidential. I don't share any information about clients without explicit permission. Your privacy is sacred. See our <Link to="/privacy" className="underline hover:text-black">privacy policy</Link> for full details.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif text-black mb-4">
                    What if I need to pause our work?
                  </h4>
                  <p className="text-lg text-black/60 leading-relaxed">
                    Life happens. If you need to pause, just communicate openly. We can take a break and resume when you're ready. Integration periods are also natural and necessary parts of the journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
