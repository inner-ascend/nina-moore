import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage?: 'home' | 'about' | 'services' | 'programs' | 'contact';
  translations: {
    navigation: {
      about: string;
      contact: string;
      bookNow: string;
    };
  };
}

export default function Navigation({ currentPage, translations }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (page: string) => currentPage === page;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="text-2xl font-serif text-black tracking-tight">
            Nina Moore
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              to="/"
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive('home') ? 'text-black' : 'text-black/60 hover:text-black'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive('about') ? 'text-black' : 'text-black/60 hover:text-black'
              }`}
            >
              {translations.navigation.about}
            </Link>
            <Link
              to="/services"
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive('services') ? 'text-black' : 'text-black/60 hover:text-black'
              }`}
            >
              Services
            </Link>
            <Link
              to="/programs"
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive('programs') ? 'text-black' : 'text-black/60 hover:text-black'
              }`}
            >
              Programs
            </Link>
            <Link
              to="/contact"
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive('contact') ? 'text-black' : 'text-black/60 hover:text-black'
              }`}
            >
              {translations.navigation.contact}
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-all">
              {translations.navigation.bookNow}
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
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider ${
                isActive('home') ? 'text-black' : 'text-black/60'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider ${
                isActive('about') ? 'text-black' : 'text-black/60'
              }`}
            >
              {translations.navigation.about}
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider ${
                isActive('services') ? 'text-black' : 'text-black/60'
              }`}
            >
              Services
            </Link>
            <Link
              to="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider ${
                isActive('programs') ? 'text-black' : 'text-black/60'
              }`}
            >
              Programs
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider ${
                isActive('contact') ? 'text-black' : 'text-black/60'
              }`}
            >
              {translations.navigation.contact}
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-semibold"
            >
              {translations.navigation.bookNow}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
