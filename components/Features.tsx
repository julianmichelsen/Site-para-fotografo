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
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Os 3 Pilares da Nossa Arte</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Users strokeWidth={1} />}
            title="Consultoria 90 Dias"
            description="Não chegamos apenas no dia. Acompanhamos vocês 3 meses antes para entender sua essência, sua história e o que realmente importa. Criamos conexão real."
            delay={0}
          />
          <FeatureCard 
            icon={<Clapperboard strokeWidth={1} />}
            title="Cinema, Não Vídeo"
            description="Edição com color grading profissional 4K, design de som imersivo e linguagem documental. Fugimos do 'vídeo de casamento padrão'."
            delay={0.2}
          />
          <FeatureCard 
            icon={<Heart strokeWidth={1} />}
            title="Garantia Emocional"
            description="Nossa promessa é ousada: Se vocês não chorarem, rirem ou se emocionarem ao assistir o filme, devolvemos seu investimento. Risco zero."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;