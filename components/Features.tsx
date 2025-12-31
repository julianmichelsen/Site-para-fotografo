
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Clapperboard, Heart, Users } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-lg hover:border-gold-500/30 transition-colors duration-500 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="w-12 h-12 mb-6 text-gold-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed font-sans font-light">
        {description}
      </p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="features" className="py-24 bg-cinema-900 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          animate={controls}
          variants={variants}
          className="text-center mb-16"
        >
          <span className="text-gold-500 uppercase tracking-[0.5em] text-[0.6rem] font-black mb-4 block">Manifesto Artístico</span>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4 tracking-tighter">O Essencial é Invisível aos Olhos</h2>
          <div className="w-24 h-[1px] bg-gold-500/40 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Users strokeWidth={1} />}
            title="Curadoria de Conexão"
            description="Não somos estranhos com câmeras. Acompanhamos sua jornada 90 dias antes para que a nossa lente seja uma extensão da sua própria intimidade."
            delay={0}
          />
          <FeatureCard 
            icon={<Clapperboard strokeWidth={1} />}
            title="Linguagem Autoral"
            description="Fugimos de fórmulas genéricas. Nossa edição utiliza design de som imersivo e color grading orgânico para criar uma atmosfera de cinema real."
            delay={0.2}
          />
          <FeatureCard 
            icon={<Heart strokeWidth={1} />}
            title="Patrimônio Eterno"
            description="Criamos obras para serem assistidas daqui a 50 anos. Nossa promessa é a emoção pura: se o filme não tocar sua alma, nossa missão não foi cumprida."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
