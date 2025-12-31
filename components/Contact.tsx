import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cinema-950 to-black relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gold-600/5 radial-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12 md:p-16 shadow-2xl">
          
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            Vamos Contar a Sua História?
          </h2>
          
          <p className="text-gray-300 text-lg mb-10 font-light max-w-2xl mx-auto">
            A agenda é limitada para garantir a exclusividade e a qualidade cinematográfica de cada projeto. 
            Agende sua consultoria gratuita de 30 minutos e vamos conversar sobre seu sonho.
          </p>

          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gold-600 hover:bg-gold-500 text-black font-bold text-lg rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-gold-500/30"
          >
            Agendar Consultoria Gratuita
            <ArrowRight size={20} />
          </a>
          
          <p className="mt-6 text-gray-500 text-sm">
            Sem compromisso. Apenas uma conversa entre amigos sobre o seu grande dia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;