import { Link } from 'react-router-dom';
import enTranslations from '../../translations/en.json';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function TermsPage() {
  const t = enTranslations;

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        translations={t}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif text-black mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-black/60">
            Effective Date: January 1, 2025
          </p>
          <p className="text-lg text-black/60 mt-2">
            Last Updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-12">

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg text-black/70 leading-relaxed">
              Welcome to Nina Moore's coaching and facilitation services. By booking a session, program, or retreat with Nina Moore ("Coach," "I," "me"), you ("Client," "you") agree to be bound by these Terms of Service and the Client Agreement below.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              Please read these terms carefully before booking. If you do not agree with any part of these terms, please do not proceed with booking services.
            </p>
          </div>

          {/* Scope of Services */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">1. Scope of Services</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Nina Moore provides sacred intimacy coaching, somatic facilitation, kundalini activation, breathwork, and transformational coaching services. These services are offered for personal growth, self-discovery, relationship enhancement, and spiritual development.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              <strong>Important:</strong> These services are not a substitute for professional medical care, psychotherapy, or mental health treatment. This is coaching and facilitation, not therapy. If you are experiencing a mental health crisis, please contact a licensed mental health professional or emergency services.
            </p>
          </div>

          {/* Client Responsibilities */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">2. Client Responsibilities</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              As a client, you agree to:
            </p>
            <ul className="space-y-3 text-lg text-black/70 leading-relaxed ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Be responsible for your own choices, actions, and outcomes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Disclose any physical, mental, or emotional health conditions that may affect your participation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Inform the Coach if you are under the care of a medical or mental health professional</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Arrive on time and prepared for sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Treat the Coach with respect and professionalism</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Respect boundaries and honor the sacred nature of the work</span>
              </li>
            </ul>
          </div>

          {/* Payment Terms */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">3. Payment Terms</h2>

            <h3 className="text-xl font-serif text-black mt-6">Payment Methods</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              We accept payment via Venmo, Zelle, bank transfer, and credit card. Payment is required in full before your session or program begins, unless a payment plan has been pre-arranged.
            </p>

            <h3 className="text-xl font-serif text-black mt-6">Payment Plans</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              Payment plans are available for programs and packages over $1,000. Payment plan terms must be agreed upon in writing before services begin. All scheduled payments must be honored according to the agreed schedule.
            </p>

            <h3 className="text-xl font-serif text-black mt-6">Currency</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              All prices are listed in USD. Clients are responsible for any currency conversion fees.
            </p>
          </div>

          {/* Cancellation & Rescheduling */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">4. Cancellation & Rescheduling Policy</h2>

            <h3 className="text-xl font-serif text-black mt-6">Client Cancellations</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              If you need to cancel or reschedule a session, you must provide at least 48 hours advance notice. Cancellations made with less than 48 hours notice will be charged the full session fee.
            </p>

            <h3 className="text-xl font-serif text-black mt-6">No-Show Policy</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              If you miss a scheduled session without notice (no-show), you will be charged the full session fee and the session will be considered complete.
            </p>

            <h3 className="text-xl font-serif text-black mt-6">Coach Cancellations</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              In the rare event that the Coach must cancel or reschedule a session, you will be offered an alternative time or a full refund of that session's fee.
            </p>

            <h3 className="text-xl font-serif text-black mt-6">Emergency Exceptions</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              Exceptions to the cancellation policy may be made for genuine emergencies (serious illness, family emergency, etc.) at the Coach's discretion.
            </p>
          </div>

          {/* Refund Policy */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">5. Refund Policy</h2>

            <h3 className="text-xl font-serif text-black mt-6">Single Sessions</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              Single session fees are non-refundable once payment is made, except in the case of Coach cancellation. However, sessions may be rescheduled with proper notice as outlined above.
            </p>

            <h3 className="text-xl font-serif text-black mt-6">Programs & Packages</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              For multi-session programs and packages: If you cancel within 7 days of purchase and before the first session, you will receive a full refund. After the first session, refunds will be prorated based on unused sessions, minus a 20% administrative fee.
            </p>

            <h3 className="text-xl font-serif text-black mt-6">Retreats</h3>
            <p className="text-lg text-black/70 leading-relaxed">
              Retreat deposits are non-refundable. Retreat balance payments are refundable up to 30 days before the retreat start date, minus the deposit. Within 30 days of the retreat, all payments are non-refundable except in cases of documented emergency.
            </p>
          </div>

          {/* Confidentiality */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">6. Confidentiality</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              All information shared during sessions is held in strict confidence. The Coach will not disclose any information about your sessions, including the fact that you are a client, without your written consent.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              <strong>Exceptions:</strong> Confidentiality may be broken only if:
            </p>
            <ul className="space-y-3 text-lg text-black/70 leading-relaxed ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You provide written consent to share information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>There is a reasonable suspicion of child abuse or elder abuse</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You present an imminent danger to yourself or others</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Required by court order or subpoena</span>
              </li>
            </ul>
          </div>

          {/* Limitations of Liability */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">7. Limitations of Liability & Assumption of Risk</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              By participating in coaching, somatic work, breathwork, kundalini activation, or any other services offered, you acknowledge that:
            </p>
            <ul className="space-y-3 text-lg text-black/70 leading-relaxed ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You are voluntarily participating and assume all risks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Physical practices (breathwork, somatic work, movement) carry inherent risks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You are responsible for consulting appropriate medical professionals about any health concerns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>The Coach makes no guarantees about specific outcomes or results</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You will not hold the Coach liable for any physical, emotional, or psychological effects that may arise</span>
              </li>
            </ul>
            <p className="text-lg text-black/70 leading-relaxed mt-4">
              To the fullest extent permitted by law, Nina Moore shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to these services.
            </p>
          </div>

          {/* Code of Conduct */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">8. Code of Conduct & Boundaries</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              This is sacred work that requires clear boundaries and mutual respect. The following behaviors are grounds for immediate termination of services without refund:
            </p>
            <ul className="space-y-3 text-lg text-black/70 leading-relaxed ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Sexual harassment or inappropriate advances toward the Coach</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Threats, violence, or abusive behavior</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Arriving to sessions under the influence of alcohol or non-prescribed drugs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Persistent violation of agreed-upon boundaries</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Recording sessions without explicit written consent</span>
              </li>
            </ul>
          </div>

          {/* Health & Safety */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">9. Health & Safety Protocols</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              For in-person sessions and retreats:
            </p>
            <ul className="space-y-3 text-lg text-black/70 leading-relaxed ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Do not attend if you are experiencing symptoms of contagious illness</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Follow any health protocols that may be in place (COVID-19 or otherwise)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Notify the Coach of any physical limitations or injuries before sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>Speak up immediately if anything feels unsafe or uncomfortable during a session</span>
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">10. Intellectual Property</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              All materials, practices, content, and intellectual property shared during sessions remain the property of Nina Moore. You may not reproduce, distribute, or commercialize any materials, recordings, or teachings without explicit written permission.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">11. Dispute Resolution</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              In the event of any dispute arising from these services, both parties agree to first attempt resolution through good-faith discussion. If a resolution cannot be reached, both parties agree to mediation before pursuing any legal action.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which services are provided, without regard to conflict of law principles.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-black">12. Changes to Terms</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Nina Moore reserves the right to modify these Terms of Service at any time. Updated terms will be posted on this page with a new effective date. Continued use of services after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Agreement */}
          <div className="space-y-4 pt-8 border-t border-black/10">
            <h2 className="text-3xl font-serif text-black">Client Agreement</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              By booking a session, program, or retreat, you acknowledge that you have read, understood, and agree to these Terms of Service and Client Agreement. You confirm that:
            </p>
            <ul className="space-y-3 text-lg text-black/70 leading-relaxed ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You are at least 18 years of age</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You understand these services are not medical or psychological treatment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You assume full responsibility for your participation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You agree to honor payment, cancellation, and conduct policies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-2 h-2 bg-black/30 rounded-full flex-shrink-0"></span>
                <span>You release Nina Moore from liability as outlined in these terms</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 pt-8 border-t border-black/10">
            <h2 className="text-3xl font-serif text-black">Questions?</h2>
            <p className="text-lg text-black/70 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:hello@nina-moore.com" className="text-black underline hover:text-black/70">
                hello@nina-moore.com
              </a>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
