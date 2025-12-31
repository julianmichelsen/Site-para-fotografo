
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pb-24 md:pb-32">
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinema de Casamento de Luxo" 
          className="w-full h-full object-cover opacity-60 md:opacity-75"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-cinema-950" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-36 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* TAGLINE */}
          <div className="flex items-center justify-center gap-6 md:gap-12 mb-12 md:mb-16">
            <div className="h-[0.5px] w-8 md:w-24 bg-gold-500/20"></div>
            <span className="text-gold-400/70 tracking-[0.4em] md:tracking-[0.8em] uppercase text-[0.5rem] md:text-[0.6rem] font-black whitespace-nowrap">
              Eternizando a Maior Obra de Arte
            </span>
            <div className="h-[0.5px] w-8 md:w-24 bg-gold-500/20"></div>
          </div>
          
          <div className="relative inline-block mb-12 md:mb-16">
            <h1 className="flex flex-col items-center">
              <span className="text-7xl md:text-9xl lg:text-[13rem] font-display text-white leading-[0.75] tracking-tight uppercase px-4">
                Cinema
              </span>
              <div className="relative mt-4 md:mt-[-0.02em] px-8">
                <div className="absolute inset-0 bg-gold-500/5 blur-[120px] rounded-full"></div>
                <span className="gold-text-gradient font-serif italic font-light text-4xl md:text-7xl lg:text-[10rem] relative z-20 drop-shadow-[0_15px_50px_rgba(0,0,0,0.7)] block">
                  De Emoções
                </span>
              </div>
            </h1>
          </div>

          <p className="max-w-xl mx-auto text-gray-400 text-base md:text-xl font-light leading-relaxed mb-16 md:mb-20 font-sans tracking-wide px-4 text-balance opacity-90">
            Não documentamos apenas eventos. Esculpimos o tempo para que vocês possam 
            vencer o esquecimento e reviver o arrepio... para sempre.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-14 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto group relative px-12 md:px-20 py-6 md:py-8 overflow-hidden bg-gold-600 hover:bg-gold-500 text-black font-black uppercase tracking-[0.4em] text-[0.65rem] md:text-[0.75rem] shadow-[0_25px_60px_-15px_rgba(212,175,55,0.4)] transition-all duration-500 rounded-sm text-center"
            >
              Iniciar Narrativa
            </a>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto flex items-center justify-center gap-5 px-10 md:px-14 py-6 md:py-8 text-white hover:text-gold-400 transition-all text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.4em] font-black border border-white/10 hover:border-gold-500/40 rounded-sm backdrop-blur-md"
            >
              <PlayCircle size={22} className="text-gold-500" />
              Explorar Acervo
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 cursor-pointer hidden xs:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-3">
            <span className="text-[0.4rem] md:text-[0.45rem] uppercase tracking-[1em] font-black opacity-40">The Legacy</span>
            <ChevronDown size={14} strokeWidth={1} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
