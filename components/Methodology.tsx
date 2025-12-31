import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Camera, Sparkles, ArrowLeft } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare />,
    title: "Dia 0: O Primeiro Encontro",
    description: "Nesta etapa, não falamos de pacotes. Falamos sobre vocês. Quero entender seus medos, suas expectativas e o que faz seus corações baterem mais forte."
  },
  {
    icon: <Calendar />,
    title: "Dia 30: Planejamento Narrativo",
    description: "Criamos o 'Moodboard' do seu filme. Definimos a trilha sonora ideal e os pontos focais da cobertura baseado na dinâmica da sua família."
  },
  {
    icon: <Camera />,
    title: "Dia 60: Ensaio de Conexão",
    description: "Um dia para vocês se acostumarem com as câmeras. Criamos intimidade para que, no grande dia, eu seja apenas um amigo registrando momentos reais."
  },
  {
    icon: <Sparkles />,
    title: "O Dia: Invisibilidade Presencial",
    description: "Eu e minha equipe atuamos de forma discreta. Capturamos a essência sem interferir na experiência. O filme é reflexo da sua liberdade."
  }
];

const Methodology: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-cinema-950">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gold-500 mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={20} />
          <span className="uppercase tracking-widest text-xs font-bold">Voltar para Início</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-6">Nossa Metodologia</h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              O filme começa muito antes do 'Sim'. Descubra como transformamos 
              planejamento em poesia visual através dos nossos 90 dias de consultoria.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-24 h-24 flex-shrink-0 bg-white/5 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 shadow-2xl">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 32, strokeWidth: 1 })}
                </div>
                <div className={`flex-grow text-center ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-serif text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-white/5 border border-gold-500/20 rounded-2xl text-center">
            <h4 className="text-2xl font-display text-white mb-6">Pronta para viver essa jornada?</h4>
            <a 
              href="https://wa.me/5554999999999" 
              className="inline-block px-10 py-4 bg-gold-600 text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition-all rounded-sm"
            >
              Falar com Robson Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;