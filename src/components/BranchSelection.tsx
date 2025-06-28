import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BranchCard from './BranchCard';

const BranchSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleBranchSelect = (branch: string) => {
    navigate(`/location/${branch.toLowerCase()}`);
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#F4A300] py-4 px-4 sm:py-8 sm:px-6 relative overflow-hidden"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Enhanced floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-6 h-6 bg-white/20 rounded-full"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute top-40 right-16 w-8 h-8 bg-white/15 rounded-full"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-4 h-4 bg-white/25 rounded-full"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2, duration: 7 }}
      />
      <motion.div
        className="absolute top-60 left-1/3 w-3 h-3 bg-white/30 rounded-full"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 0.5, duration: 5 }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center justify-center mb-6 sm:mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div className="relative">
              <motion.img 
                src="/Logo.jpeg" 
                alt="Mister Barbershop Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 mr-3 sm:mr-4 rounded-full bg-white p-2 shadow-lg"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(0,0,0,0.2)",
                    "0 8px 25px rgba(255,255,255,0.4)",
                    "0 4px 15px rgba(0,0,0,0.2)"
                  ]
                }}
              />
              {/* Orbiting elements around logo */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                  transformOrigin: "12px 12px"
                }}
              />
            </motion.div>
            
            <div className="text-left">
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#212529] tracking-wide"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                }}
              >
                MISTER BARBERSHOP
              </motion.h1>
              <motion.div
                className="h-1 bg-white rounded-full mt-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <BranchCard
              title="CITY"
              subtitle="Barnapsgatan 7, Jönköping"
              imageSrc="/Mister_Barbershop__City-removebg-preview.png"
              onClick={() => handleBranchSelect('CITY')}
            />
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <BranchCard
              title="ASECS"
              subtitle="Kompanigatan 36, Jönköping"
              imageSrc="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800"
              onClick={() => handleBranchSelect('ASECS')}
            />
          </motion.div>
        </motion.div>

        {/* Animated bottom accent */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="flex space-x-2"
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-white/60 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BranchSelection;