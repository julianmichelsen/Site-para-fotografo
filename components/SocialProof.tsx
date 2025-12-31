
import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  const partners = [
    "PREMIADO INSPIRATION", "FEARLESS PHOTOGRAPHERS", "LENS CULTURE", "SERRA GAÚCHA", "DESTINATION WEDDING"
  ];

  return (
    <section className="bg-black py-12 md:py-16 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-24 gap-y-8 opacity-40 grayscale hover:opacity-100 transition-all duration-[2s] ease-out">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <span className="text-[0.6rem] md:text-[0.75rem] font-display tracking-[0.5em] text-white whitespace-nowrap uppercase">
                {partner}
              </span>
              {i < partners.length - 1 && (
                <div className="hidden md:block w-1 h-1 rounded-full bg-gold-600/40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
