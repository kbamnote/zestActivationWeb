import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Clients', href: '/clients' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-orange flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">Z</span>
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Zest Activation<span className="text-orange"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${location.pathname === link.href
                  ? 'text-orange'
                  : 'text-white/80 hover:text-orange'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 98765 43210</span>
            </a>
            <Link to="/signup">
              <Button
                variant="outline"
                className="border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
              >
                Start a project
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-heading font-semibold transition-colors ${location.pathname === link.href
                ? 'text-orange'
                : 'text-white hover:text-orange'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="mt-4 bg-orange hover:bg-orange-dark text-white px-8 py-6 text-lg">
              Start a project
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
