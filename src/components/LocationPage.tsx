import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNavigation from './BottomNavigation';
import BookingView from './BookingView';
import InfoView from './InfoView';

const LocationPage: React.FC = () => {
  const { branch } = useParams<{ branch: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'boka' | 'info'>('boka');
  const [currentBranch, setCurrentBranch] = useState(branch?.toUpperCase() || 'CITY');

  // Check if we should start on info tab (when navigating from Om Oss -> Info)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('tab') === 'info') {
      setActiveTab('info');
      // Clean up the URL by removing the query parameter
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  const handleBranchToggle = () => {
    const newBranch = currentBranch === 'CITY' ? 'ASECS' : 'CITY';
    setCurrentBranch(newBranch);
    navigate(`/location/${newBranch.toLowerCase()}`, { replace: true });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'boka':
        return <BookingView branch={currentBranch} />;
      case 'info':
        return <InfoView />;
      default:
        return <BookingView branch={currentBranch} />;
    }
  };

  // Optimized animation variants - much faster and simpler
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header - Only show on booking tab with fast animation */}
      <AnimatePresence>
        {activeTab === 'boka' && (
          <motion.div 
            className="bg-gradient-to-r from-[#F4A300] via-[#f5a623] to-[#e6930a] text-white py-4 px-4 shadow-lg sticky top-0 z-40"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div 
              className="max-w-4xl mx-auto flex items-center justify-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.1 }}
            >
              <motion.img 
                src="/Logo.jpeg" 
                alt="Mister Barbershop Logo" 
                className="w-8 h-8 mr-3 rounded-full bg-white p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              />
              <motion.h1 
                className="text-lg md:text-xl font-bold text-center"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                Mister Barbershop - {currentBranch}
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area with fast transitions */}
      <div className={`flex-1 pb-20 overflow-y-auto ${activeTab === 'boka' ? '' : 'pt-0'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation with fast slide-up */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.2,
          ease: "easeOut"
        }}
      >
        <BottomNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          currentBranch={currentBranch}
          onBranchToggle={handleBranchToggle}
        />
      </motion.div>
    </motion.div>
  );
};

export default LocationPage;