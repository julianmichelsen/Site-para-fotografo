
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0]; index: number }> = ({ testimonial, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-cinema-950 p-8 rounded-lg relative border border-white/5 hover:border-gold-500/20 transition-all duration-500 group"
    >
      <Quote className="text-gold-600/10 absolute top-6 right-6 w-12 h-12 group-hover:text-gold-600/20 transition-colors" />
      
      <p className="text-gray-300 italic font-serif mb-8 leading-relaxed relative z-10 min-h-[100px]">
        "{testimonial.text}"
      </p>
      
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden border border-gold-500/30 bg-cinema-900 flex-shrink-0 flex items-center justify-center shadow-inner relative">
          {!imageError ? (
            <img 
              src={testimonial.image} 
              alt="" // Vazio para evitar que o alt text vaze se a imagem quebrar
              onError={() => setImageError(true)}
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-cinema-800 flex items-center justify-center">
              <span className="text-gold-500 font-display text-xl font-bold select-none">{testimonial.name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-0">
          <h4 className="text-white font-display text-sm tracking-widest uppercase truncate">{testimonial.name}</h4>
          <span className="text-gold-500 text-[0.55rem] uppercase tracking-[0.2em] font-black mt-1 opacity-80">{testimonial.role}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-cinema-900 border-t border-white/5 relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold-500 uppercase tracking-[0.5em] text-[0.6rem] font-black mb-4 block">Ecos do Passado</span>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6 tracking-tighter">O Relato de <span className="italic font-serif font-light text-gold-500/80">Quem Viveu</span></h2>
          <div className="w-20 h-[1px] bg-gold-500/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;