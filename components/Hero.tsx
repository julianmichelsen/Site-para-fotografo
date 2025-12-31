
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
    <section id="hero" ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinema de Casamento de Luxo na Serra Gaúcha por Robson Quadros" 
          className="w-full h-full object-cover opacity-60 md:opacity-70"
          loading="eager" // Carrega imediatamente para melhorar o LCP na Vercel
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-cinema-950" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-10">
            <div className="h-[1px] w-8 md:w-16 bg-gold-500/30"></div>
            <span className="text-gold-400 tracking-[0.4em] md:tracking-[0.8em] uppercase text-[0.5rem] md:text-[0.6rem] font-bold">
              Para quem entende que o amor é a maior obra de arte
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-gold-500/30"></div>
          </div>
          
          <div className="relative inline-block mb-8 md:mb-12">
            <h1 className="flex flex-col items-center">
              <span className="text-5xl md:text-9xl lg:text-[11rem] font-display text-white leading-[0.85] tracking-tight uppercase px-4">
                Cinema
              </span>
              <div className="relative mt-[-0.1em] md:mt-[-0.15em] px-8">
                <div className="absolute inset-0 bg-gold-500/10 blur-3xl rounded-full"></div>
                <span className="gold-text-gradient font-serif italic font-light text-4xl md:text-7xl lg:text-[8.5rem] relative z-20 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] block pb-4">
                  De Emoções
                </span>
              </div>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-xl font-light leading-relaxed mb-10 md:mb-16 font-sans tracking-wide px-4">
            Não documentamos apenas eventos. Esculpimos o tempo para que vocês possam <br className="hidden md:block" /> 
            vencer o esquecimento e reviver o arrepio... para sempre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto group relative px-8 md:px-14 py-4 md:py-6 overflow-hidden bg-gold-600 hover:bg-gold-500 text-black font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[0.6rem] md:text-[0.7rem] shadow-xl transition-all duration-500 rounded-sm text-center"
            >
              Iniciar Minha Narrativa
            </a>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-6 text-white hover:text-gold-400 transition-all text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold border border-white/20 hover:border-gold-500/50 rounded-sm backdrop-blur-sm"
            >
              <PlayCircle size={18} className="text-gold-500" />
              Explorar Acervo
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/40 cursor-pointer hidden xs:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-[0.4rem] md:text-[0.5rem] uppercase tracking-[0.6em] md:tracking-[0.8em] font-black">Scroll para o Cinema</span>
            <ChevronDown size={14} strokeWidth={1} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;