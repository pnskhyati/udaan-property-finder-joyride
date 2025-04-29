
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

interface StateSelectorProps {
  onStateSelect: (state: string) => void;
}

const StateSelector = ({ onStateSelect }: StateSelectorProps) => {
  const states = [
    { name: "Maharashtra", emoji: "🏙️" },
    { name: "Delhi", emoji: "🏛️" },
    { name: "Karnataka", emoji: "🌆" },
    { name: "Tamil Nadu", emoji: "🏯" },
    { name: "Gujarat", emoji: "🏭" },
    { name: "Uttar Pradesh", emoji: "🏕️" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
    >
      <div className="flex items-center mb-6">
        <Building className="text-mint-dark h-6 w-6 mr-3" />
        <h2 className="text-xl md:text-2xl font-bold">Where's your property located?</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {states.map((state) => (
          <motion.button 
            key={state.name}
            className="bg-mint-light hover:bg-mint p-4 rounded-xl card-hover flex flex-col items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onStateSelect(state.name)}
          >
            <span className="text-2xl mb-2">{state.emoji}</span>
            <span className="font-medium">{state.name}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default StateSelector;
