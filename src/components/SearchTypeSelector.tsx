
import { motion } from 'framer-motion';
import { Search, Building } from 'lucide-react';

interface SearchTypeSelectorProps {
  onSearchTypeSelect: (type: 'property' | 'company') => void;
  onBack: () => void;
}

const SearchTypeSelector = ({ onSearchTypeSelect, onBack }: SearchTypeSelectorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Search className="text-mint-dark h-6 w-6 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold">What are you searching for?</h2>
        </div>
        <button 
          onClick={onBack}
          className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <motion.div 
          className="flex-1 border border-mint rounded-xl p-6 hover:border-mint-dark cursor-pointer card-hover"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSearchTypeSelect('property')}
        >
          <div className="bg-mint-light w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-mint-dark" />
          </div>
          <h3 className="text-lg font-medium mb-2">Property Details</h3>
          <p className="text-sm text-foreground/70 mb-4">
            Search for property details using khasra number, survey number, or property ID.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <span className="bg-mint-light w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              View ownership records
            </li>
            <li className="flex items-center">
              <span className="bg-mint-light w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              Check property boundaries
            </li>
            <li className="flex items-center">
              <span className="bg-mint-light w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              Verify property status
            </li>
          </ul>
          <button className="w-full mt-6 py-3 bg-mint rounded-lg font-medium hover:bg-mint-dark transition-colors">
            Select
          </button>
        </motion.div>

        <motion.div 
          className="flex-1 border border-peach rounded-xl p-6 hover:border-peach-dark cursor-pointer card-hover"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSearchTypeSelect('company')}
        >
          <div className="bg-peach-light w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Building className="w-6 h-6 text-peach-dark" />
          </div>
          <h3 className="text-lg font-medium mb-2">Company-Linked Property</h3>
          <p className="text-sm text-foreground/70 mb-4">
            Search for properties linked to specific companies or organizations.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <span className="bg-peach-light w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              Find company assets
            </li>
            <li className="flex items-center">
              <span className="bg-peach-light w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              View corporate holdings
            </li>
            <li className="flex items-center">
              <span className="bg-peach-light w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              Check mortgage status
            </li>
          </ul>
          <button className="w-full mt-6 py-3 bg-peach rounded-lg font-medium hover:bg-peach-dark transition-colors">
            Select
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SearchTypeSelector;
