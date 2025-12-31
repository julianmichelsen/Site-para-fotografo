import React from 'react';
import { COMPANY_NAME, NAV_ITEMS } from '../constants';
import { Instagram, Youtube, Facebook, MapPin, Mail, Film } from 'lucide-react';

const Footer: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-black py-20 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
                <Film className="text-gold-500" size={24} />
                <h3 className="text-2xl font-display text-white tracking-[0.2em] uppercase">{COMPANY_NAME}</h3>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed font-light">
              Especialista em capturar a essência da alma humana através de lentes cinematográficas. 
              Baseado na Serra Gaúcha, atendendo o mundo.
            </p>
            <div className="flex gap-4">
               {[Instagram, Youtube, Facebook].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center text-gray-500 hover:text-gold-500 hover:border-gold-500 hover:-translate-y-1 transition-all duration-300">
                     <Icon size={18} />
                   </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold-500 text-[0.6rem] uppercase tracking-[0.4em] font-black mb-8">Navegação</h4>
            <ul className="space-y-4 text-xs text-gray-500">
               {NAV_ITEMS.map(item => (
                   <li key={item.label}>
                       <a href={item.href} className="hover:text-white transition-colors uppercase tracking-[0.2em]">{item.label}</a>
                   </li>
               ))}
               <li>
                  <button onClick={() => onNavigate?.('methodology')} className="hover:text-white transition-colors uppercase tracking-[0.2em]">Metodologia</button>
               </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 text-[0.6rem] uppercase tracking-[0.4em] font-black mb-8">Escritório</h4>
            <ul className="space-y-6 text-xs text-gray-500">
                <li className="flex items-start gap-4">
                    <MapPin size={16} className="text-gold-500 flex-shrink-0" />
                    <span className="leading-relaxed tracking-wider">Garibaldi, RS - Vale dos Vinhedos<br/>Serra Gaúcha, Brasil</span>
                </li>
                <li className="flex items-center gap-4">
                    <Mail size={16} className="text-gold-500 flex-shrink-0" />
                    <a href="mailto:contato@robsonquadros.com" className="hover:text-white transition-colors tracking-wider">contato@robsonquadros.com</a>
                </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[0.6rem] text-gray-700 uppercase tracking-widest">&copy; {new Date().getFullYear()} {COMPANY_NAME}. Fine Art Filmmaking.</p>
          <div className="flex gap-8 text-[0.6rem] text-gray-700 uppercase tracking-widest">
             <a href="#" className="hover:text-gray-400 transition-colors">Privacidade</a>
             <a href="#" className="hover:text-gray-400 transition-colors">Termos</a>
             <span className="text-gray-800">Desenvolvido com Alma</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;