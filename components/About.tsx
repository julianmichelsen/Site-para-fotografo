
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-black overflow-hidden relative">
      <div className="absolute top-1/4 -left-20 w-48 md:w-96 h-48 md:h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-40">
          
          <div className="w-full lg:w-1/2 relative px-4 md:px-0">
            <motion.div 
              style={{ y: y1 }}
              className="relative z-20 aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border border-white/5 group bg-cinema-900"
            >
              <div className="absolute inset-0 bg-gold-900/5 mix-blend-overlay z-10 pointer-events-none" />
              <img 
                src="https://i.postimg.cc/C50p8361/Produc-a-o-fluindo-e-um-clique-no-meio-do-processo-ceresoliphoto.jpg" 
                alt="Robson Quadros Filmmaker" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[3s] ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black via-black/20 to-transparent z-20">
                <p className="text-gold-500 font-display text-[0.5rem] md:text-[0.6rem] tracking-[0.5em] uppercase font-black mb-1">Director of Photography</p>
                <p className="text-white/40 text-[0.4rem] md:text-[0.45rem] tracking-[0.3em] uppercase">Est. 2017 • Serra Gaúcha • Brazil</p>
              </div>
            </motion.div>
            <motion.div 
              style={{ y: y2 }}
              className="absolute -top-8 -right-8 md:-top-16 md:-right-16 w-full h-full border border-gold-500/10 -z-10 rounded-sm" 
            />
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
            >
              <div className="inline-flex items-center gap-6 mb-10 md:mb-14">
                <span className="w-8 md:w-12 h-[1px] bg-gold-500/40"></span>
                <span className="text-gold-500 uppercase tracking-[0.6em] text-[0.6rem] md:text-[0.7rem] font-black">A Identidade</span>
              </div>
              
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-display text-white mb-10 md:mb-14 tracking-tighter leading-[0.85] text-balance">
                Robson <br />
                <span className="gold-text-gradient font-serif italic font-light">Quadros</span>
              </h2>
              
              <div className="space-y-8 md:space-y-10 text-gray-400 font-light text-lg md:text-xl leading-relaxed font-sans max-w-xl text-balance">
                <p>
                  Minha busca é pela vibração invisível do momento. No luxo do silêncio e na pureza da luz natural, eu encontro a verdade de quem vocês são. Não sigo fórmulas, sigo almas.
                </p>
                
                <div className="relative py-12 px-8 md:px-12 bg-white/[0.02] border border-white/5 rounded-sm">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-500/20" />
                  <p className="italic text-white font-serif text-2xl md:text-3xl leading-relaxed relative z-10 tracking-tight">
                    "O verdadeiro cinema Fine Art nasce quando a técnica se torna invisível para que a emoção seja a protagonista."
                  </p>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-500/20" />
                </div>
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-12">
                 <div className="group">
                    <span className="block text-4xl md:text-5xl font-display text-white group-hover:text-gold-400 transition-colors">150+</span>
                    <span className="text-[0.5rem] text-gold-500/40 uppercase tracking-[0.4em] font-black">Patrimônios Criados</span>
                 </div>
                 <div className="group">
                    <span className="block text-4xl md:text-5xl font-display text-white group-hover:text-gold-400 transition-colors">12</span>
                    <span className="text-[0.5rem] text-gold-500/40 uppercase tracking-[0.4em] font-black">Prêmios de Cinema</span>
                 </div>
                 <div className="group col-span-2 md:col-span-1">
                    <span className="block text-4xl md:text-5xl font-display text-white group-hover:text-gold-400 transition-colors">07</span>
                    <span className="text-[0.5rem] text-gold-500/40 uppercase tracking-[0.4em] font-black">Anos de Legado</span>
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
