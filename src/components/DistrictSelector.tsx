
import { useState } from 'react';
import { motion } from 'framer-motion';
import { City } from 'lucide-react';

interface DistrictSelectorProps {
  state: string;
  onDistrictSelect: (district: string) => void;
  onBack: () => void;
}

const DistrictSelector = ({ state, onDistrictSelect, onBack }: DistrictSelectorProps) => {
  // Mock districts based on state
  const districtsMap: Record<string, string[]> = {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "South Delhi", "West Delhi"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy", "Tirunelveli"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Prayagraj"]
  };

  const districts = districtsMap[state] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <City className="text-mint-dark h-6 w-6 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold">Select District in {state}</h2>
        </div>
        <button 
          onClick={onBack}
          className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          ← Back
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {districts.map((district) => (
          <motion.button 
            key={district}
            className="bg-mint-light hover:bg-mint p-4 rounded-xl card-hover text-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onDistrictSelect(district)}
          >
            <span className="font-medium">{district}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default DistrictSelector;
