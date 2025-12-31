import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../constants';

const Portfolio: React.FC<{ onSeeAll?: () => void }> = ({ onSeeAll }) => {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_PROJECTS[0] | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Se a imagem falhar, removemos o src para mostrar o fundo elegante definido no container
    e.currentTarget.style.display = 'none';
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-cinema-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-500 uppercase tracking-[0.4em] text-[0.6rem] font-black mb-4 block">Artistic Curation</span>
            <h2 className="text-4xl md:text-7xl font-display text-white mb-6 md:mb-8 tracking-tighter">Obras Primas <br/><span className="italic font-serif font-light text-gold-500/80">Recentes</span></h2>
            <p className="text-gray-400 font-light text-base md:text-lg max-w-lg leading-relaxed">
              Cada filme é uma peça única de tapeçaria emocional, tecida com atenção obsessiva aos detalhes.
            </p>
          </div>
          <button 
            onClick={onSeeAll}
            className="group flex items-center gap-4 text-white hover:text-gold-400 transition-all border-b border-white/10 hover:border-gold-500 pb-2 text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.25em] md:tracking-[0.3em] font-black"
          >
            Explorar Galeria <ExternalLink size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-video overflow-hidden bg-gradient-to-br from-cinema-900 to-black cursor-pointer shadow-xl border border-white/5"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                onError={handleImageError}
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-gold-500/30 bg-black/40 backdrop-blur-md flex items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 scale-90 md:scale-75 md:group-hover:scale-100">
                  <Play className="fill-gold-500 text-gold-500 ml-1" size={24} md:size={32} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                    <span className="text-gold-500 text-[0.55rem] uppercase tracking-[0.3em] font-black">{project.category}</span>
                    <div className="w-6 md:w-8 h-[0.5px] bg-gold-500/30"></div>
                </div>
                <h3 className="text-2xl md:text-4xl font-serif text-white tracking-wide">{project.title}</h3>
                <p className="text-white/40 text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.2em] md:tracking-[0.3em] mt-1 font-bold">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black border border-white/10 shadow-3xl overflow-hidden rounded-sm">
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 text-white/40 hover:text-white bg-white/10 rounded-full p-2 transition-all"
                >
                    <X size={20} />
                </button>
                <div className="w-full h-full flex items-center justify-center flex-col gap-6">
                    <div className="w-20 h-20 rounded-full border border-gold-500/20 flex items-center justify-center animate-pulse">
                        <Play size={32} className="text-gold-500 ml-1" />
                    </div>
                    <div className="text-center px-6">
                      <h4 className="text-2xl md:text-4xl font-display text-white mb-2 tracking-wider">{selectedProject.title}</h4>
                      <p className="text-gold-500 font-sans tracking-[0.4em] text-[0.5rem] md:text-[0.6rem] uppercase font-black">Carregando Master 4K...</p>
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;