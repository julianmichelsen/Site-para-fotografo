import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Methodology from './components/Methodology';
import FullPortfolio from './components/FullPortfolio';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'methodology':
        return <Methodology onBack={() => setCurrentPage('home')} />;
      case 'portfolio':
        return <FullPortfolio onBack={() => setCurrentPage('home')} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <SocialProof />
            <Features />
            <About />
            <Portfolio onSeeAll={() => setCurrentPage('portfolio')} />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="bg-cinema-950 text-slate-100 min-h-screen selection:bg-gold-500 selection:text-black font-sans">
      <Navbar onNavigate={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      
      <Footer onNavigate={setCurrentPage} />
      
      {/* Botão de Contato Estilo Viewfinder de Câmera - Otimizado para Conversão */}
      <a 
        href="https://wa.me/5554999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] group"
        aria-label="Falar com o Diretor no WhatsApp"
      >
        <div className="relative flex items-center justify-center p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm shadow-2xl transition-all duration-500 group-hover:px-8 group-hover:border-gold-500/50">
          
          {/* Cantos do Viewfinder */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 group-hover:border-gold-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 group-hover:border-gold-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 group-hover:border-gold-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 group-hover:border-gold-500"></div>

          <div className="flex items-center gap-3">
            {/* Indicador REC */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-rec-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
              <span className="text-[0.6rem] font-black text-white tracking-[0.2em] font-sans">LIVE</span>
            </div>

            {/* Texto Expandível - Copy Refinada */}
            <div className="overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-500 ease-in-out whitespace-nowrap">
              <span className="text-[0.65rem] font-bold text-gold-500 uppercase tracking-[0.3em] ml-2">
                Eternizar Sua História
              </span>
            </div>

            {/* Ícone WhatsApp integrado */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              className="w-5 h-5 invert opacity-60 group-hover:opacity-100 transition-opacity ml-1" 
              alt="WhatsApp" 
            />
          </div>

          {/* Efeito de Scanline sutil */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
        </div>
      </a>
    </div>
  );
}

export default App;