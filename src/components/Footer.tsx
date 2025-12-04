import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="text-2xl font-serif text-black">
            Nina Moore
          </Link>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm uppercase tracking-wider text-black/60">
            <Link to="/about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-black transition-colors">
              Services
            </Link>
            <Link to="/programs" className="hover:text-black transition-colors">
              Programs
            </Link>
            <Link to="/contact" className="hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sm uppercase tracking-wider text-black/60">
            <a href="mailto:hello@nina-moore.com" className="hover:text-black transition-colors">
              Email
            </a>
            <a href="https://instagram.com/nina__eterna" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <div className="text-center mt-12 text-xs text-black/40">
          © {new Date().getFullYear()} Nina Moore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
