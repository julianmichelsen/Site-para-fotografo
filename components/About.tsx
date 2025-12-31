import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-black overflow-hidden relative">
      <div className="absolute top-1/4 -left-20 w-48 md:w-96 h-48 md:h-96 bg-gold-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
          
          <div className="w-full lg:w-1/2 relative px-4 md:px-0">
            <motion.div 
              style={{ y: y1 }}
              className="relative z-20 aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border border-white/10 group bg-cinema-900"
            >
              <div className="absolute inset-0 bg-gold-900/10 mix-blend-overlay z-10 pointer-events-none" />
              
              <img 
                src="https://i.postimg.cc/C50p8361/Produc-a-o-fluindo-e-um-clique-no-meio-do-processo-ceresoliphoto.jpg" 
                alt="Robson Quadros Filmmaker - Direção de Fotografia" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out opacity-90 group-hover:opacity-100"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-black via-black/40 to-transparent z-20">
                <p className="text-gold-500 font-display text-[0.4rem] md:text-[0.5rem] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold mb-1">Director of Photography</p>
                <p className="text-white/40 text-[0.35rem] md:text-[0.4rem] tracking-[0.2em] md:tracking-[0.3em] uppercase">Est. 2017 • Serra Gaúcha • Brazil</p>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-full h-full border border-gold-500/20 -z-10 rounded-sm" 
            />
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-4 mb-6 md:mb-8">
                <span className="w-6 md:w-10 h-[1px] bg-gold-500"></span>
                <span className="text-gold-500 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[0.5rem] md:text-[0.6rem] font-black">A Identidade</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-display text-white mb-8 md:mb-10 tracking-tighter leading-[0.9]">
                Robson <br />
                <span className="gold-text-gradient font-serif italic font-light opacity-90">Quadros</span>
              </h2>
              
              <div className="space-y-6 md:space-y-8 text-gray-400 font-light text-base md:text-lg leading-relaxed font-sans max-w-xl">
                <p>
                  Minha busca é pela vibração invisível do momento. No luxo do silêncio e na pureza da luz natural, eu encontro a verdade de quem vocês são. Não sigo fórmulas, sigo almas.
                </p>
                
                <div className="relative py-8 md:py-12 px-6 md:px-10 bg-white/5 md:bg-transparent rounded-sm">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold-500/30" />
                  <p className="italic text-white font-serif text-xl md:text-2xl leading-relaxed relative z-10">
                    "O verdadeiro cinema Fine Art nasce quando a técnica se torna invisível para que a emoção seja a única protagonista."
                  </p>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold-500/30" />
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/5 pt-10">
                 <div className="group">
                    <span className="block text-3xl md:text-4xl font-display text-white group-hover:text-gold-400">150+</span>
                    <span className="text-[0.45rem] text-gold-500/40 uppercase tracking-[0.3em] font-black">Patrimônios Criados</span>
                 </div>
                 <div className="group">
                    <span className="block text-3xl md:text-4xl font-display text-white group-hover:text-gold-400">12</span>
                    <span className="text-[0.45rem] text-gold-500/40 uppercase tracking-[0.3em] font-black">Prêmios de Cinema</span>
                 </div>
                 <div className="group col-span-2 md:col-span-1">
                    <span className="block text-3xl md:text-4xl font-display text-white group-hover:text-gold-400">07</span>
                    <span className="text-[0.45rem] text-gold-500/40 uppercase tracking-[0.3em] font-black">Anos de Legado</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;