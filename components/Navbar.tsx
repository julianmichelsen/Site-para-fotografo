import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';
import { Menu, X, Film } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      onNavigate('home');
      // Delay to allow DOM rendering before scroll
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-cinema-950/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
          <Film className="w-6 h-6 text-gold-500 group-hover:rotate-12 transition-transform" />
          <div className="flex flex-col text-left">
            <span className="text-xl font-display font-semibold text-white tracking-[0.2em] uppercase">
              {COMPANY_NAME}
            </span>
            <span className="text-[0.6rem] text-gold-500 tracking-[0.5em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              Fine Art Cinema
            </span>
          </div>
        </button>

        <div className="hidden lg:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-[0.7rem] font-sans tracking-[0.25em] text-gray-400 hover:text-gold-400 transition-all uppercase relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-gold-500 after:left-0 after:-bottom-2 after:transition-all hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('methodology')}
            className="text-[0.7rem] font-sans tracking-[0.25em] text-gold-500 hover:text-white transition-colors uppercase border-b border-gold-500/30 pb-1"
          >
            Metodologia
          </button>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="px-8 py-3 bg-white/5 border border-gold-500/50 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-500 font-serif italic text-sm"
          >
            Solicitar Orçamento
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-cinema-950 border-t border-white/10 p-10 flex flex-col space-y-6 shadow-2xl h-screen">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-white hover:text-gold-500 py-2 border-b border-white/5 font-display uppercase tracking-widest text-lg text-left"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate('methodology'); setIsOpen(false); }}
            className="text-gold-500 py-2 border-b border-white/5 font-display uppercase tracking-widest text-lg text-left"
          >
            Como Trabalhamos
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;