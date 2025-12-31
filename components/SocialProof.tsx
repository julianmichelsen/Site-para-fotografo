import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  const partners = [
    "PREMIADO INSPIRATION", "FEARLESS PHOTOGRAPHERS", "LENS CULTURE", "SERRA GAÚCHA", "DESTINATION WEDDING"
  ];

  return (
    <div className="bg-black py-10 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-30 grayscale hover:opacity-100 transition-opacity duration-1000">
          {partners.map((partner, i) => (
            <span key={i} className="text-[0.55rem] md:text-[0.7rem] font-display tracking-[0.6em] text-white whitespace-nowrap">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;