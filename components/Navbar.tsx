import React, { useState, useEffect } from 'react';
import { NavSection } from '../types';
import { Menu, X, Home, Info, Clock, Users, FileText, Calendar, Building2, Phone, Search } from 'lucide-react';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', value: NavSection.HOME, icon: <Home className="w-4 h-4" /> },
    { label: 'About', value: NavSection.ABOUT, icon: <Info className="w-4 h-4" /> },
    { label: 'Timeline', value: NavSection.TIMELINE, icon: <Clock className="w-4 h-4" /> },
    { label: 'Committee', value: NavSection.COMMITTEE, icon: <Users className="w-4 h-4" /> },
    { label: 'Submission', value: NavSection.SUBMISSION, icon: <FileText className="w-4 h-4" /> },
    { label: 'Contact', value: NavSection.CONTACT, icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-gray-200 py-2 text-gray-800' 
          : 'bg-transparent border-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Brand */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => onNavigate(NavSection.HOME)}
          >
            <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary'}`}>
              <span className="font-bold text-xl tracking-tighter">IAMSC</span>
            </div>
            <span className={`font-serif font-bold text-xl ${scrolled ? 'text-brand-primary' : 'text-white'}`}>
              2026
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => onNavigate(link.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${currentSection === link.value 
                    ? (scrolled ? 'bg-brand-light text-brand-primary shadow-inner' : 'bg-white/20 text-white backdrop-blur-sm') 
                    : (scrolled ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/10 text-white/90')
                  }
                `}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            ))}
            
            <button className={`ml-4 p-2 rounded-full transition-colors ${scrolled ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-bold text-2xl text-brand-primary">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
              <X size={24} />
            </button>
          </div>
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  onNavigate(link.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-4 w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all
                  ${currentSection === link.value 
                    ? 'bg-brand-light text-brand-primary border border-brand-primary/20' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <span className={`p-2 rounded-lg ${currentSection === link.value ? 'bg-brand-primary/10 text-brand-primary' : 'bg-gray-100 text-gray-500'}`}>
                  {link.icon}
                </span>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;