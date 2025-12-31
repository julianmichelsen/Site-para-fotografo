import React from 'react';
import { PACKAGES, WHATSAPP_LINK } from '../constants';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-cinema-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-10 pointer-events-none">
        <Sparkles className="w-full h-full text-gold-500/10 stroke-[0.5]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-28">
          <span className="text-gold-500 uppercase tracking-[0.6em] text-[0.65rem] font-black mb-6 block">Investimento Exclusivo</span>
          <h2 className="text-5xl md:text-7xl font-display text-white mb-10 tracking-tighter">Sua História Não Tem Preço, <br/><span className="italic font-serif font-light text-gold-500/80">Tem Valor.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light font-serif italic leading-relaxed opacity-70">
            Acreditamos que o registro do seu casamento é o único item que ganhará valor com o passar das décadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch max-w-7xl mx-auto">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col backdrop-blur-md rounded-sm transition-all duration-1000 group ${
                pkg.isPopular 
                  ? 'bg-white/[0.03] border border-gold-500/40 scale-105 z-10 shadow-[0_40px_100px_-20px_rgba(212,175,55,0.15)]' 
                  : 'bg-white/[0.01] border border-white/5 hover:border-white/20'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-black text-[0.6rem] font-black uppercase tracking-[0.4em] px-10 py-3 rounded-full whitespace-nowrap shadow-2xl">
                  Escolha das Noivas
                </div>
              )}
              
              <div className="p-12 flex-grow">
                <h3 className="text-3xl font-display text-white mb-3 uppercase tracking-widest">{pkg.name}</h3>
                <div className={`h-[1px] w-12 bg-gold-500 mb-8 transition-all duration-700 group-hover:w-24 ${pkg.isPopular ? 'opacity-100' : 'opacity-40'}`}></div>
                <p className="text-gray-400 text-sm mb-12 font-light leading-relaxed min-h-[70px]">
                  {pkg.description}
                </p>
                
                <div className="mb-12">
                   <p className="text-gold-500/50 text-[0.6rem] uppercase tracking-[0.4em] mb-4 font-black">Honra ao Investimento</p>
                   <div className="flex items-baseline gap-2">
                    <span className="text-[0.65rem] text-gold-500 font-bold tracking-widest">A PARTIR DE</span>
                    <p className="text-4xl font-display text-white tracking-tighter">{pkg.priceRange}</p>
                   </div>
                </div>

                <ul className="space-y-6 mb-12">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-4 text-[0.7rem] tracking-widest uppercase font-bold ${feature.included ? 'text-gray-300' : 'text-gray-700'}`}>
                       <Check size={14} className={feature.included ? 'text-gold-500 mt-0.5' : 'text-gray-800 mt-0.5'} strokeWidth={3} />
                       <span className={feature.included ? '' : 'line-through opacity-50'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-12 pt-0">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className={`group flex items-center justify-center gap-4 w-full py-6 text-center text-[0.7rem] font-black uppercase tracking-[0.4em] transition-all duration-700 ${
                    pkg.isPopular 
                      ? 'bg-gold-500 text-black hover:bg-white shadow-lg' 
                      : 'border border-white/10 text-white hover:border-gold-500 hover:text-gold-500'
                  }`}
                >
                  {pkg.ctaText}
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
                
                {pkg.isPopular && (
                   <div className="mt-8 flex items-center justify-center gap-3 text-[0.55rem] text-gold-500/60 uppercase tracking-[0.4em] font-black">
                      <ShieldCheck size={14} />
                      Datas Limitadas • 2024/2025
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;