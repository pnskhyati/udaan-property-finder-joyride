
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';

interface PropertySearchProps {
  state: string;
  district: string;
  isUrban: boolean;
  onBack: () => void;
}

const PropertySearch = ({ state, district, isUrban, onBack }: PropertySearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<null | { found: boolean }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock search result
    setSearchResults({ found: searchQuery.length > 3 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MapPin className="text-mint-dark h-6 w-6 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold">Property Search</h2>
        </div>
        <button 
          onClick={onBack}
          className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="bg-mint-light/50 p-4 rounded-lg mb-6">
        <div className="flex items-center">
          <span className="text-sm font-medium mr-2">Location:</span>
          <span className="text-sm">{district}, {state} ({isUrban ? 'Urban' : 'Rural'})</span>
        </div>
      </div>

      <form onSubmit={handleSearch}>
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="property-id" className="block text-sm font-medium mb-1">
              {isUrban ? 'Property ID / Survey Number' : 'Khasra Number / Survey Number'}
            </label>
            <div className="relative">
              <input
                id="property-id"
                type="text"
                className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:border-mint focus:ring focus:ring-mint/30 outline-none transition"
                placeholder={isUrban ? "Enter property ID or survey number" : "Enter khasra number or survey number"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {isUrban 
                ? "You can find this on your property documents or tax receipts" 
                : "You can find this on your land records or revenue documents"}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-mint rounded-lg font-medium hover:bg-mint-dark transition-colors flex items-center justify-center"
            type="submit"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Property
          </motion.button>
        </div>
      </form>

      {searchResults && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-gray-100 pt-4"
        >
          <h3 className="text-lg font-medium mb-3">Search Results</h3>
          
          {searchResults.found ? (
            <div className="bg-mint-light/50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="bg-mint h-8 w-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Property Found</h4>
                  <p className="text-sm text-gray-600">Property details are available</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="bg-red-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">×</span>
                </div>
                <div>
                  <h4 className="font-medium">No Results Found</h4>
                  <p className="text-sm text-gray-600">Please check the property ID and try again</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default PropertySearch;
