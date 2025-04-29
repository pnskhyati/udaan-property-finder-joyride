
import { motion } from 'framer-motion';
import { Building, TreePine } from 'lucide-react';

interface AreaTypeToggleProps {
  isUrban: boolean;
  onToggle: (isUrban: boolean) => void;
  onBack: () => void;
  onNext: () => void;
}

const AreaTypeToggle = ({ isUrban, onToggle, onBack, onNext }: AreaTypeToggleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold">Property Area Type</h2>
        <button 
          onClick={onBack}
          className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <motion.button 
          className={`flex-1 p-6 rounded-xl transition-all flex flex-col items-center gap-3 ${isUrban ? 'bg-mint shadow-lg shadow-mint/20' : 'bg-mint-light'}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onToggle(true)}
        >
          <Building className={`w-8 h-8 ${isUrban ? 'text-foreground' : 'text-foreground/70'}`} />
          <span className="font-medium text-lg">Urban</span>
          <p className="text-sm text-foreground/70 text-center">
            City properties, apartments, and urban plots
          </p>
        </motion.button>

        <motion.button 
          className={`flex-1 p-6 rounded-xl transition-all flex flex-col items-center gap-3 ${!isUrban ? 'bg-mint shadow-lg shadow-mint/20' : 'bg-mint-light'}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onToggle(false)}
        >
          <TreePine className={`w-8 h-8 ${!isUrban ? 'text-foreground' : 'text-foreground/70'}`} />
          <span className="font-medium text-lg">Rural</span>
          <p className="text-sm text-foreground/70 text-center">
            Agricultural land, farms, and village properties
          </p>
        </motion.button>
      </div>

      <div className="flex justify-end">
        <motion.button 
          className="px-6 py-3 bg-mint rounded-lg font-medium hover:bg-mint-dark transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AreaTypeToggle;
