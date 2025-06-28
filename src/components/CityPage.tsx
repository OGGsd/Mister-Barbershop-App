import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import BookingIframe from './BookingIframe';

interface Service {
  name: string;
  duration: string;
  price: string;
  bookingUrl: string;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

const CityPage: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      title: "Barn & Student",
      services: [
        { 
          name: "Barnklippning (0–12 år)", 
          duration: "30 min", 
          price: "375–400 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/barn-klippning-0-12-ar-145404"
        },
        { 
          name: "Studentklippning", 
          duration: "40 min", 
          price: "från 395 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/student-klippning-145406"
        },
        { 
          name: "Studentklippning & Skäggtrim", 
          duration: "60 min", 
          price: "595 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/student-klippning-skagg-trim-valfri-langd-145409"
        }
      ]
    },
    {
      title: "Pensionär",
      services: [
        { 
          name: "Klippning", 
          duration: "30 min", 
          price: "395 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/pensionar-klippning-145407"
        },
        { 
          name: "Klippning & Skäggtrim", 
          duration: "50 min", 
          price: "500 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/pensionar-klippning-trim-av-skagg-valfri-langd-145411"
        }
      ]
    },
    {
      title: "Klippning & Paket",
      services: [
        { 
          name: "Klippning", 
          duration: "40 min", 
          price: "495 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/klippning-1049248"
        },
        { 
          name: "Klippning & Skäggtrim (kort)", 
          duration: "60 min", 
          price: "665 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/klippning-skagg-trim-kort-skagg-0-2-cm-348669"
        },
        { 
          name: "Klippning & Skäggtrim (långt)", 
          duration: "60 min", 
          price: "700 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/klippning-skagg-trim-langt-skagg-over-2-cm-348670"
        },
        { 
          name: "Klippning & Traditionell Rakning", 
          duration: "60 min", 
          price: "665 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/klippning-traditionell-rakning-med-kniv-145398"
        }
      ]
    },
    {
      title: "Snaggning",
      services: [
        { 
          name: "Snaggning", 
          duration: "20 min", 
          price: "220 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/snaggning-145400"
        },
        { 
          name: "Snaggning med Skinfade", 
          duration: "30 min", 
          price: "375 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/snaggning-med-skinfade-145412"
        },
        { 
          name: "Snaggning & Skäggtrim", 
          duration: "40 min", 
          price: "500 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/snaggning-skagg-trim-145401"
        },
        { 
          name: "Snaggning & Traditionell Rakning", 
          duration: "40 min", 
          price: "565 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/snaggning-traditionell-rakning-med-kniv-145402"
        },
        { 
          name: "Snaggning med Skinfade & Skäggtrim", 
          duration: "50 min", 
          price: "645 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/snaggning-med-skinfade-skagg-trim-1059861"
        }
      ]
    },
    {
      title: "Huvudrakning & Rakning",
      services: [
        { 
          name: "Huvudrakning", 
          duration: "30 min", 
          price: "350 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/huvud-rakning-145396"
        },
        { 
          name: "Huvudrakning & Skäggtrim", 
          duration: "50 min", 
          price: "645 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/huvud-rakning-skagg-trim-145408"
        },
        { 
          name: "Huvudrakning & Traditionell Rakning", 
          duration: "50 min", 
          price: "645 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/huvudrakning-traditionell-rakning-1078190"
        },
        { 
          name: "Traditionell Rakning", 
          duration: "30 min", 
          price: "335 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/traditionell-rakning-med-kniv-145403"
        }
      ]
    },
    {
      title: "Skäggtrim",
      services: [
        { 
          name: "Skäggtrim (kort skägg)", 
          duration: "30 min", 
          price: "295 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/skagg-trim-kort-skagg-0-2-cm-348671"
        },
        { 
          name: "Skäggtrim (långt skägg)", 
          duration: "30 min", 
          price: "345 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/skagg-trim-over-2-cm-351203"
        }
      ]
    },
    {
      title: "Bröllop & Exklusivt",
      services: [
        { 
          name: "Bröllop & Exklusiva Paketet", 
          duration: "70 min", 
          price: "899 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/mister-barbershop-city-16192/brollop-exklusiva-paketet-145413"
        }
      ]
    }
  ];

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  const handleBookingClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeBookingIframe = () => {
    setSelectedService(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const serviceVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <>
      <motion.div 
        className="p-4 max-w-4xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Service Categories */}
        <div className="space-y-3">
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              variants={categoryVariants}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Category Header */}
              <motion.button
                onClick={() => toggleCategory(category.title)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center">
                  <div className="text-left">
                    <motion.h4 
                      className="text-base font-bold text-[#212529]"
                      whileHover={{ color: "#F4A300" }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.title}
                    </motion.h4>
                    <span className="text-xs text-gray-500">
                      {category.services.length} tjänst{category.services.length > 1 ? 'er' : ''}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === category.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedCategory === category.title ? (
                    <ChevronUp size={20} className="text-[#F4A300]" />
                  ) : (
                    <ChevronDown size={20} className="text-[#F4A300]" />
                  )}
                </motion.div>
              </motion.button>

              {/* Services List with smooth expand/collapse */}
              <AnimatePresence>
                {expandedCategory === category.title && (
                  <motion.div 
                    className="border-t border-gray-100 bg-gray-50"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {category.services.map((service, serviceIndex) => (
                        <motion.div 
                          key={serviceIndex} 
                          className="p-4 border-b border-gray-200 last:border-b-0 bg-white mx-2 mb-2 last:mb-0 rounded-lg shadow-sm"
                          variants={serviceVariants}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 4px 15px rgba(244, 163, 0, 0.1)"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h5 className="font-semibold text-[#212529] text-sm leading-tight flex-1 mr-3">
                              {service.name}
                            </h5>
                            <div className="text-right flex-shrink-0">
                              <motion.div 
                                className="font-bold text-[#F4A300] text-sm"
                                whileHover={{ scale: 1.05 }}
                              >
                                {service.price}
                              </motion.div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-600">
                              <Clock size={12} className="mr-1" />
                              <span className="text-xs">{service.duration}</span>
                            </div>
                            <motion.button 
                              onClick={() => handleBookingClick(service)}
                              className="bg-[#F4A300] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#e6930a] transition-colors duration-200 shadow-md"
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 4px 15px rgba(244, 163, 0, 0.3)"
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              BOKA
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Booking Iframe Modal with animation */}
      <AnimatePresence>
        {selectedService && (
          <BookingIframe
            bookingUrl={selectedService.bookingUrl}
            serviceName={selectedService.name}
            onClose={closeBookingIframe}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CityPage;