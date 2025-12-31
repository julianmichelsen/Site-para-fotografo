
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
    <section id="hero" ref={ref} className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black pb-12">
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinema de Casamento de Luxo" 
          className="w-full h-full object-cover opacity-60 md:opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-cinema-950" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* TAGLINE */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 md:mb-10">
            <div className="h-[0.5px] w-6 md:w-16 bg-gold-500/30"></div>
            <span className="text-gold-400/80 tracking-[0.4em] md:tracking-[0.6em] uppercase text-[0.5rem] md:text-[0.6rem] font-black whitespace-nowrap">
              Eternizando o Legado das Emoções
            </span>
            <div className="h-[0.5px] w-6 md:w-16 bg-gold-500/30"></div>
          </div>
          
          {/* TÍTULO PRINCIPAL */}
          <div className="relative inline-block mb-8 md:mb-10">
            <h1 className="flex flex-col items-center">
              <span className="text-5xl md:text-8xl lg:text-[8.5rem] font-display text-white leading-[0.8] tracking-tight uppercase px-4">
                O Cinema
              </span>
              <div className="relative mt-2 md:-mt-3 px-8">
                <div className="absolute inset-0 bg-gold-500/5 blur-[80px] rounded-full"></div>
                <span className="gold-text-gradient font-serif italic font-light text-3xl md:text-6xl lg:text-[6.5rem] relative z-20 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] block">
                  Da Sua Alma
                </span>
              </div>
            </h1>
          </div>

          {/* FRASE DESCRITIVA */}
          <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10 md:mb-14 font-sans tracking-wide px-4 text-balance">
            Não documentamos eventos, decantamos atmosferas. <br className="hidden md:block" />
            Esculpimos o tempo para que vocês possam vencer o esquecimento e 
            reviver a verdade de cada olhar... para sempre.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto group relative px-10 md:px-14 py-5 md:py-6 overflow-hidden bg-gold-600 hover:bg-gold-500 text-black font-black uppercase tracking-[0.3em] text-[0.6rem] md:text-[0.65rem] shadow-[0_15px_40px_-10px_rgba(212,175,55,0.3)] transition-all duration-500 rounded-sm text-center"
            >
              Iniciar Narrativa
            </a>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-5 md:py-6 text-white hover:text-gold-400 transition-all text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.3em] font-black border border-white/10 hover:border-gold-500/30 rounded-sm backdrop-blur-md"
            >
              <PlayCircle size={18} className="text-gold-500" />
              Explorar Acervo
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20 cursor-pointer flex flex-col items-center gap-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[0.35rem] uppercase tracking-[0.8em] font-black opacity-30">Descubra</span>
        <ChevronDown size={14} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
