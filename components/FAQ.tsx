import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Vocês atendem fora da Serra Gaúcha?",
    a: "Sim. O cinema não tem fronteiras. Já realizamos produções em diversos estados e estamos disponíveis para Destination Weddings em todo o mundo."
  },
  {
    q: "Qual o prazo de entrega do filme?",
    a: "A arte não pode ser apressada, mas entendemos a ansiedade. O teaser é entregue em até 48 horas, e o filme completo passa por uma curadoria minuciosa de até 90 dias."
  },
  {
    q: "Como é escolhida a trilha sonora?",
    a: "A trilha é a alma do filme. Nós licenciamos músicas exclusivas baseadas na energia do casal captada durante nossa consultoria narrativa."
  },
  {
    q: "Vocês trabalham com drone?",
    a: "Sim, imagens aéreas em 4K estão inclusas nos pacotes Narrativa e Legado, trazendo uma perspectiva épica para a sua história."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-cinema-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-[0.4em] text-[0.6rem] font-black mb-4 block">Dúvidas Frequentes</span>
          <h2 className="text-4xl md:text-5xl font-display text-white tracking-tighter">Perguntas <span className="italic font-serif font-light text-gold-500/80">Comuns</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className="text-white font-serif text-lg md:text-xl group-hover:text-gold-400 transition-colors">{faq.q}</span>
                {openIndex === i ? <Minus className="text-gold-500" size={20} /> : <Plus className="text-gold-500" size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-400 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;