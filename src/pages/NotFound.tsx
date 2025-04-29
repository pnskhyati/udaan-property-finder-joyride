
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Home } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-mint-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <div className="mb-8">
            <span className="block text-9xl font-bold text-mint-dark">404</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-3">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          
          <motion.a 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-mint rounded-lg font-medium hover:bg-mint-dark transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </motion.a>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
