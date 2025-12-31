
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' 
          : 'bg-transparent py-8 md:py-10'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-3 items-center">
        
        {/* LOGO AREA */}
        <div className="flex justify-start">
          <button 
            onClick={() => { onNavigate('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
            className="flex flex-col items-start group relative z-50"
          >
            <span className="text-lg md:text-xl font-display font-medium text-white tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all duration-500 group-hover:text-gold-400">
              {COMPANY_NAME}
            </span>
            <span className="text-[0.5rem] text-gold-500 tracking-[0.4em] md:tracking-[0.6em] uppercase font-black opacity-80 mt-1">
              Fine Art Cinema
            </span>
          </button>
        </div>

        {/* NAVIGATION AREA (Desktop Center) */}
        <div className="hidden lg:flex items-center justify-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-[0.6rem] font-sans tracking-[0.25em] text-gray-400 hover:text-white transition-all uppercase relative group py-2"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </button>
          ))}
          <button 
            onClick={() => onNavigate('methodology')}
            className="text-[0.6rem] font-sans tracking-[0.25em] text-gold-500 hover:text-white transition-all uppercase border-b border-gold-500/20"
          >
            Metodologia
          </button>
        </div>

        {/* CTA AREA (Desktop Right) */}
        <div className="hidden lg:flex justify-end">
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="px-8 py-3 bg-transparent border border-gold-600/30 text-gold-400 hover:bg-gold-600 hover:text-black hover:border-gold-600 transition-all duration-500 font-serif italic text-xs tracking-widest rounded-sm"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex justify-end">
          <button className="text-white p-2 relative z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X strokeWidth={1.2} size={28} /> : <Menu strokeWidth={1.2} size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div 
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-10 text-center">
          {NAV_ITEMS.map((item, idx) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-white hover:text-gold-500 font-display uppercase tracking-[0.4em] text-xl transition-all duration-500"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate('methodology'); setIsOpen(false); }}
            className="text-gold-500 font-display uppercase tracking-[0.4em] text-xl"
          >
            Metodologia
          </button>
          <div className="pt-10 w-full">
            <a 
              href="#contact"
              onClick={() => { handleNavClick('#contact'); setIsOpen(false); }}
              className="block w-full py-6 border border-gold-500 text-gold-500 font-display uppercase tracking-widest text-xs"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
