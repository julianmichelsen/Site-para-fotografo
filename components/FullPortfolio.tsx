import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Film, PlayCircle } from 'lucide-react';

const allWorks = [
  { id: 1, title: "Isadora & Guilherme", location: "Caminhos de Pedra, RS", category: "Filme Completo", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, title: "Valentina & Ricardo", location: "Vinícola Lovara, RS", category: "Teaser", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" },
  { id: 3, title: "Beatriz & Arthur", location: "Vale dos Vinhedos, RS", category: "Filme Completo", img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200" },
  { id: 4, title: "Gabriela & Felipe", location: "Gramado, RS", category: "Teaser", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200" },
  { id: 5, title: "Raízes e Promessas", location: "Pinto Bandeira, RS", category: "Trailer", img: "https://images.unsplash.com/photo-1460974296241-82302de0111e?auto=format&fit=crop&q=80&w=1200" },
  { id: 6, title: "Sob as Estrelas", location: "Farroupilha, RS", category: "Filme Completo", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200" },
];

const FullPortfolio: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="pt-32 pb-32 min-h-screen bg-cinema-950">
      <div className="container mx-auto px-6">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-4 text-gold-500 mb-20 hover:gap-6 transition-all group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          <span className="uppercase tracking-[0.4em] text-[0.65rem] font-black">Voltar para a Experiência</span>
        </motion.button>

        <div className="text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Film className="w-12 h-12 text-gold-500/20 mx-auto mb-8 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-display text-white mb-8 tracking-tighter leading-tight">
              O Acervo <br/>
              <span className="gold-text-gradient italic font-serif font-light">Eternizado</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed font-sans opacity-70">
              Navegue por fragmentos de histórias reais. Cada filme listado abaixo foi esculpido para 
              vencer a barreira do tempo e se tornar uma joia de família.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allWorks.map((work, i) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] bg-gradient-to-br from-cinema-900 to-black overflow-hidden rounded-sm shadow-2xl border border-white/5 cursor-pointer"
            >
              <img 
                src={work.img} 
                alt={work.title}
                onError={handleImageError}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-100">
                <div className="w-24 h-24 rounded-full border border-gold-500/30 bg-black/40 backdrop-blur-md flex items-center justify-center">
                   <PlayCircle className="text-gold-500 w-12 h-12" strokeWidth={1} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-[1px] bg-gold-500"></div>
                  <span className="text-gold-500 text-[0.6rem] uppercase tracking-[0.5em] font-black">{work.category}</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-2 tracking-wide">{work.title}</h3>
                <p className="text-white/40 text-[0.6rem] uppercase tracking-[0.3em] font-bold">{work.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullPortfolio;