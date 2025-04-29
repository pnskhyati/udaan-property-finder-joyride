
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Search } from 'lucide-react';

interface CompanySearchProps {
  onBack: () => void;
}

const CompanySearch = ({ onBack }: CompanySearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<null | { found: boolean }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock search result
    setSearchResults({ found: searchTerm.length > 3 });
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
          <Building className="text-peach-dark h-6 w-6 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold">Company Property Search</h2>
        </div>
        <button 
          onClick={onBack}
          className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          ← Back
        </button>
      </div>

      <form onSubmit={handleSearch}>
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="company-name" className="block text-sm font-medium mb-1">
              Company Name or CIN Number
            </label>
            <div className="relative">
              <input
                id="company-name"
                type="text"
                className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:border-peach focus:ring focus:ring-peach/30 outline-none transition"
                placeholder="Enter company name or CIN number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              You can search by full company name or Corporate Identification Number (CIN)
            </p>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="state" className="block text-sm font-medium mb-1">
                State (Optional)
              </label>
              <select
                id="state"
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-peach focus:ring focus:ring-peach/30 outline-none transition"
              >
                <option value="">Any State</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="property-type" className="block text-sm font-medium mb-1">
                Property Type (Optional)
              </label>
              <select
                id="property-type"
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-peach focus:ring focus:ring-peach/30 outline-none transition"
              >
                <option value="">Any Type</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="residential">Residential</option>
                <option value="land">Land</option>
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-peach rounded-lg font-medium hover:bg-peach-dark transition-colors flex items-center justify-center"
            type="submit"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Company Properties
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
            <div className="bg-peach-light p-4 rounded-lg">
              <div className="flex items-center">
                <div className="bg-peach h-8 w-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Company Found</h4>
                  <p className="text-sm text-gray-600">Property listings are available</p>
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
                  <p className="text-sm text-gray-600">Please check the company details and try again</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CompanySearch;
