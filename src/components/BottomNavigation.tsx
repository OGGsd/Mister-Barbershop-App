import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Info, MapPin, ArrowLeftRight, Building2, Store } from 'lucide-react';

interface BottomNavigationProps {
  activeTab?: 'boka' | 'info';
  onTabChange?: (tab: 'boka' | 'info') => void;
  currentBranch?: string;
  onBranchToggle?: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  activeTab, 
  onTabChange, 
  currentBranch = 'CITY',
  onBranchToggle 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current page
  const isOmOssPage = location.pathname === '/om-oss';
  const isLocationPage = location.pathname.includes('/location/');

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleOmOssClick = () => {
    navigate('/om-oss');
    // Scroll to top after navigation
    setTimeout(scrollToTop, 100);
  };

  const handleBokaClick = () => {
    if (isLocationPage && onTabChange) {
      onTabChange('boka');
      scrollToTop();
    } else {
      navigate('/location/city');
      setTimeout(scrollToTop, 100);
    }
  };

  const handleInfoClick = () => {
    if (isLocationPage && onTabChange) {
      onTabChange('info');
      scrollToTop();
    } else {
      navigate('/location/city?tab=info');
      setTimeout(scrollToTop, 100);
    }
  };

  const handleBranchToggle = () => {
    if (onBranchToggle) {
      onBranchToggle();
      scrollToTop();
    }
  };

  // Optimized animation variants - much faster
  const navItemVariants = {
    inactive: { 
      scale: 1,
      y: 0,
      color: "#6b7280"
    },
    active: { 
      scale: 1.1,
      y: -2,
      color: "#F4A300",
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    }
  };

  const toggleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      <div className="flex max-w-4xl mx-auto">
        {/* Om Oss */}
        <motion.button
          onClick={handleOmOssClick}
          className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition-all duration-150 ${
            isOmOssPage 
              ? 'text-[#F4A300] bg-orange-50 border-t-2 border-[#F4A300]' 
              : 'text-gray-600 hover:text-[#F4A300]'
          }`}
          style={{ minHeight: '64px', minWidth: '48px' }}
          variants={navItemVariants}
          animate={isOmOssPage ? "active" : "inactive"}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <Users size={22} className="mb-1" />
          </motion.div>
          <span className="text-xs font-medium">Om Oss</span>
          
          {/* Fast active indicator */}
          <AnimatePresence>
            {isOmOssPage && (
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#F4A300] rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 32, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.button>

        {/* Boka / Location Toggle */}
        <div className="flex-1 flex flex-col items-center justify-center py-2 px-2" style={{ minHeight: '64px' }}>
          <AnimatePresence mode="wait">
            {isLocationPage && activeTab === 'boka' ? (
              // Simplified Location Toggle
              <motion.div 
                className="relative"
                variants={toggleVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Simplified Toggle Button */}
                <motion.div 
                  className="relative w-24 h-10 rounded-2xl cursor-pointer bg-gradient-to-r from-[#F4A300] to-[#e6930a] shadow-lg"
                  onClick={handleBranchToggle}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                >
                  {/* Fast Sliding Indicator */}
                  <motion.div 
                    className="absolute top-1 w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center"
                    animate={{
                      left: currentBranch === 'CITY' ? 4 : 60
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                  >
                    {currentBranch === 'CITY' ? (
                      <Building2 size={14} className="text-[#F4A300]" />
                    ) : (
                      <Store size={14} className="text-[#F4A300]" />
                    )}
                  </motion.div>

                  {/* Simple Location Labels */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center text-xs font-bold"
                    key={currentBranch}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="text-white font-extrabold tracking-wider select-none">
                      {currentBranch}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Simple Label */}
                <motion.div 
                  className="mt-2 text-center"
                  key={`label-${currentBranch}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-xs font-semibold text-[#F4A300]">
                    {currentBranch}
                  </span>
                </motion.div>
              </motion.div>
            ) : (
              // Regular Boka Button
              <motion.button
                onClick={handleBokaClick}
                className={`flex flex-col items-center justify-center py-3 px-2 transition-all duration-150 ${
                  isLocationPage && activeTab === 'boka'
                    ? 'text-[#F4A300] bg-orange-50 border-t-2 border-[#F4A300]' 
                    : 'text-gray-600 hover:text-[#F4A300]'
                }`}
                variants={navItemVariants}
                animate={isLocationPage && activeTab === 'boka' ? "active" : "inactive"}
                whileTap={{ scale: 0.95 }}
                initial="inactive"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.1 }}
                >
                  <MapPin size={22} className="mb-1" />
                </motion.div>
                <span className="text-xs font-medium">Boka</span>
                
                {/* Fast active indicator */}
                <AnimatePresence>
                  {isLocationPage && activeTab === 'boka' && (
                    <motion.div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#F4A300] rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 32, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Info */}
        <motion.button
          onClick={handleInfoClick}
          className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition-all duration-150 ${
            (isLocationPage && activeTab === 'info')
              ? 'text-[#F4A300] bg-orange-50 border-t-2 border-[#F4A300]' 
              : 'text-gray-600 hover:text-[#F4A300]'
          }`}
          style={{ minHeight: '64px', minWidth: '48px' }}
          variants={navItemVariants}
          animate={isLocationPage && activeTab === 'info' ? "active" : "inactive"}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <Info size={22} className="mb-1" />
          </motion.div>
          <span className="text-xs font-medium">Info</span>
          
          {/* Fast active indicator */}
          <AnimatePresence>
            {isLocationPage && activeTab === 'info' && (
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#F4A300] rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 32, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BottomNavigation;