
import { useState } from 'react';
import StateSelector from '@/components/StateSelector';
import DistrictSelector from '@/components/DistrictSelector';
import AreaTypeToggle from '@/components/AreaTypeToggle';
import SearchTypeSelector from '@/components/SearchTypeSelector';
import PropertySearch from '@/components/PropertySearch';
import CompanySearch from '@/components/CompanySearch';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home } from 'lucide-react';

type Step = 'state' | 'district' | 'area-type' | 'search-type' | 'property-search' | 'company-search';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('state');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [isUrban, setIsUrban] = useState<boolean>(true);
  
  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setCurrentStep('district');
  };
  
  const handleDistrictSelect = (district: string) => {
    setSelectedDistrict(district);
    setCurrentStep('area-type');
  };
  
  const handleAreaTypeContinue = () => {
    setCurrentStep('search-type');
  };
  
  const handleSearchTypeSelect = (type: 'property' | 'company') => {
    if (type === 'property') {
      setCurrentStep('property-search');
    } else {
      setCurrentStep('company-search');
    }
  };
  
  const goBack = () => {
    switch (currentStep) {
      case 'district':
        setCurrentStep('state');
        break;
      case 'area-type':
        setCurrentStep('district');
        break;
      case 'search-type':
        setCurrentStep('area-type');
        break;
      case 'property-search':
      case 'company-search':
        setCurrentStep('search-type');
        break;
      default:
        setCurrentStep('state');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-mint-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 flex flex-wrap items-center text-sm text-gray-500">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
            {selectedState && (
              <>
                <span className="mx-2">›</span>
                <span>{selectedState}</span>
              </>
            )}
            {selectedDistrict && (
              <>
                <span className="mx-2">›</span>
                <span>{selectedDistrict}</span>
              </>
            )}
            {currentStep === 'area-type' && (
              <>
                <span className="mx-2">›</span>
                <span>Area Type</span>
              </>
            )}
            {currentStep === 'search-type' && (
              <>
                <span className="mx-2">›</span>
                <span>Search Type</span>
              </>
            )}
            {currentStep === 'property-search' && (
              <>
                <span className="mx-2">›</span>
                <span>Property Search</span>
              </>
            )}
            {currentStep === 'company-search' && (
              <>
                <span className="mx-2">›</span>
                <span>Company Search</span>
              </>
            )}
          </div>
          
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-mint-dark transition-all duration-500"
                style={{ 
                  width: currentStep === 'state' ? '20%' : 
                         currentStep === 'district' ? '40%' : 
                         currentStep === 'area-type' ? '60%' : 
                         currentStep === 'search-type' ? '80%' : 
                         '100%' 
                }}
              ></div>
            </div>
          </div>

          {/* Current step component */}
          <div className="mb-10">
            {currentStep === 'state' && (
              <StateSelector onStateSelect={handleStateSelect} />
            )}
            
            {currentStep === 'district' && (
              <DistrictSelector 
                state={selectedState}
                onDistrictSelect={handleDistrictSelect}
                onBack={goBack}
              />
            )}
            
            {currentStep === 'area-type' && (
              <AreaTypeToggle 
                isUrban={isUrban}
                onToggle={setIsUrban}
                onBack={goBack}
                onNext={handleAreaTypeContinue}
              />
            )}
            
            {currentStep === 'search-type' && (
              <SearchTypeSelector
                onSearchTypeSelect={handleSearchTypeSelect}
                onBack={goBack}
              />
            )}
            
            {currentStep === 'property-search' && (
              <PropertySearch
                state={selectedState}
                district={selectedDistrict}
                isUrban={isUrban}
                onBack={goBack}
              />
            )}
            
            {currentStep === 'company-search' && (
              <CompanySearch onBack={goBack} />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
