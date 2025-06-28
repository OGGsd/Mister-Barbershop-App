import React from 'react';
import { MapPin, Phone, Clock, Users, Scissors, Star, Facebook, Instagram, Mail, Globe } from 'lucide-react';

const InfoView: React.FC = () => {
  const serviceCategories = [
    {
      title: "Barn & Student",
      services: [
        {
          name: "Barnklippning, 0–12 år",
          description: "Vi klipper ditt barns hår efter de önskemål och krav som ni har för att uppnå det bästa resultatet. OBS: Upp till 12 år."
        },
        {
          name: "Studentklippning",
          description: "Vi klipper och stylar håret efter dina önskemål. Vid uppvisande av studentlegitimation får du dessutom vår studentrabatt. Ordinarie pris: +100 kr."
        },
        {
          name: "Studentklippning & skäggtrim, valfri längd",
          description: "Vi utför klippning och tvätt av håret samt skäggtrimning där vi formar och stylar skägget efter dina önskemål och krav för att uppnå det bästa resultatet."
        }
      ]
    },
    {
      title: "Pensionär",
      services: [
        {
          name: "Seniorklippning",
          description: "Vi vill att våra äldre kunder ska komma hit och bli väl omhändertagna då vi värnar om våra äldre. Vi utför klippningen och, om så önskas, styling av håret efter dina önskemål och krav. Tvättning av håret ingår i denna tjänst."
        },
        {
          name: "Seniorklippning & skäggtrim, valfri längd",
          description: "Klippning och skäggtrimning som vi utför efter dina önskemål och krav för att uppnå det bästa möjliga resultatet. Vi värnar om våra äldre, därför erbjuder vi en seniorrabatt."
        }
      ]
    },
    {
      title: "Klippning & Paket",
      services: [
        {
          name: "Klippning",
          description: "Klippningen utförs med ytterst perfektion och med omtanke för kundens önskemål. OBS: I denna tjänst ingår tvättning av håret och styling."
        },
        {
          name: "Klippning & skäggtrim, kort skägg, 0–2 cm",
          description: "Vi klipper håret och snyggar till skägget på ett professionellt vis."
        },
        {
          name: "Klippning & skäggtrim, långt skägg, över 2 cm",
          description: "Vi klipper håret och snyggar till skägget på ett professionellt vis."
        },
        {
          name: "Klippning och traditionell rakning",
          description: "Vi klipper och stylar håret och ger dig en slätrakning med kniv efter konstens alla regler."
        }
      ]
    },
    {
      title: "Snaggning",
      services: [
        {
          name: "Snaggning",
          description: "Vi utför en klassisk snaggning med maskin i valfri längd."
        },
        {
          name: "Snaggning med skinfade",
          description: "Vi utför en skarp skinfade med maskin i valfri längd."
        },
        {
          name: "Snaggning & skäggtrim",
          description: "Vi utför en klassisk snaggning med maskin i valfri längd. Skäggtrimningen utför vi efter dina önskemål och krav för att nå det bästa resultatet."
        },
        {
          name: "Snaggning & traditionell rakning",
          description: "Vi utför en klassisk snaggning med maskin i valfri längd. Rakningen utförs enligt traditionella metoder med kniv och vårdande produkter."
        },
        {
          name: "Snaggning med skinfade & skäggtrim",
          description: "Vi utför en skarp skinfade med maskin i valfri längd. Skäggtrimningen utför vi efter dina önskemål och krav för att nå det bästa resultatet."
        }
      ]
    },
    {
      title: "Huvudrakning & Rakning",
      services: [
        {
          name: "Huvudrakning",
          description: "Vi utför en klassisk traditionell huvudrakning med kniv och varm handduk samt vårdande produkter efteråt."
        },
        {
          name: "Huvudrakning & skäggtrim",
          description: "Huvudrakning på klassiskt vis med kniv och varm handduk samt vårdande produkter efteråt. Skäggtrimningen utför vi efter dina önskemål och krav."
        },
        {
          name: "Traditionell rakning",
          description: "En klassisk slätrakning för ansiktet med kniv, varm handduk samt vårdande produkter efteråt."
        },
        {
          name: "Traditionell huvud- och skäggrakning",
          description: "En klassisk slätrakning för huvudet och ansiktet med kniv, varm handduk samt vårdande produkter efteråt."
        }
      ]
    },
    {
      title: "Skäggtrim",
      services: [
        {
          name: "Skäggtrim, kort skägg, 0–2 cm",
          description: "Detta är en tjänst för de som har kortare skägg. Vi utför tjänsten efter dina önskemål och krav för att uppnå det bästa resultatet."
        },
        {
          name: "Skäggtrim, långt skägg, över 2 cm",
          description: "Herrar som vill ha sitt skägg rakat eller trimmat får det yttersta resultatet hos oss."
        }
      ]
    },
    {
      title: "Bröllop & Exklusivt",
      services: [
        {
          name: "Bröllops- & exklusiva paketet",
          description: "Under 70 minuter går vi igenom alla detaljer för att du ska vara så stilig och snygg som möjligt inför ett stort steg i livet. Vi tar hand om hår, skägg, hud, ögonbryn och mer därtill."
        }
      ]
    }
  ];

  const handlePhoneCall = () => {
    window.location.href = 'tel:036-71-19-12';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@mrbarbershop.se';
  };

  const handleWebsite = () => {
    // Force open in external browser for TWA/VKWebView/iOS Safari
    const url = 'https://www.mrbarbershop.se/';
    
    // Try multiple methods to ensure it opens in external browser
    try {
      // Method 1: Try to open in new window/tab
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      // Method 2: If popup blocked or TWA/VKWebView, use location
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = url;
      }
    } catch (error) {
      // Fallback: Direct navigation
      window.location.href = url;
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/Logo.jpeg" 
            alt="Mister Barbershop Logo" 
            className="w-16 h-16 mr-3 rounded-full bg-white p-2 shadow-lg"
          />
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold text-[#212529]">
              MISTER BARBERSHOP
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              ESTABLISHED 2009
            </p>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Scissors size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#212529]">Old School Barbering</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Vår barbershop är mer än bara en frisörsalong. Hit kommer du för en stunds avkoppling, 
          en god kopp kaffe, en pratstund & när sittningen är klar – en ny frisyr, en slätrakning, 
          eller kanske bara en uppfräschning! Med omtanke, precision, och med kärlek för det 
          handarbete som yrket kräver jobbar vi stenhårt för att uppfylla dina krav & önskemål.
        </p>
      </div>

      {/* Services section - matching the existing design style */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Star size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#212529]">Våra tjänster</h3>
        </div>
        
        <div className="space-y-6">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              <h4 className="text-base md:text-lg font-bold text-[#212529] mb-4 border-b border-gray-200 pb-2">
                {category.title}
              </h4>
              
              {/* Services in this category */}
              <div className="space-y-4 mb-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-[#212529] text-sm md:text-base mb-2">
                      {service.name}
                    </h5>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Locations - 2:1 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <MapPin size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">CITY</h3>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <MapPin size={14} className="mr-2 text-gray-500 mt-1 flex-shrink-0" />
              <span className="text-xs md:text-sm">Barnapsgatan 7<br />553 16, Jönköping</span>
            </div>
            <div className="flex items-center">
              <Phone size={14} className="mr-2 text-gray-500 flex-shrink-0" />
              <span className="text-xs md:text-sm">036-71 19 12</span>
            </div>
            <div className="flex items-start">
              <Clock size={14} className="mr-2 text-gray-500 mt-1 flex-shrink-0" />
              <span className="text-xs md:text-sm">
                Måndag – torsdag: 9 – 18<br />
                Fredag: 9-19<br />
                Lördag 10-15, Söndag: stängt
              </span>
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handlePhoneCall}
              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              title="Ring oss"
            >
              <Phone size={16} />
            </button>
            <button
              onClick={handleEmail}
              className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              title="Skicka e-post"
            >
              <Mail size={16} />
            </button>
            <a href="https://www.facebook.com/Mrbarbershoppp" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/mr.barbershop/" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <MapPin size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">ASECS</h3>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <MapPin size={14} className="mr-2 text-gray-500 mt-1 flex-shrink-0" />
              <span className="text-xs md:text-sm">
                Kompanigatan 36<br />
                (Mellan entré B & C)<br />
                553 05, Jönköping
              </span>
            </div>
            <div className="flex items-center">
              <Phone size={14} className="mr-2 text-gray-500 flex-shrink-0" />
              <span className="text-xs md:text-sm">036-71 19 12</span>
            </div>
            <div className="flex items-start">
              <Clock size={14} className="mr-2 text-gray-500 mt-1 flex-shrink-0" />
              <span className="text-xs md:text-sm">
                Måndag – fredag: 10 – 20<br />
                Lördag 10-18<br />
                Söndag: 11-17
              </span>
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handlePhoneCall}
              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              title="Ring oss"
            >
              <Phone size={16} />
            </button>
            <button
              onClick={handleEmail}
              className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              title="Skicka e-post"
            >
              <Mail size={16} />
            </button>
            <a href="https://www.facebook.com/mrbarbershopboutique" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/mrbarbershopboutique/" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Website Button - Full width below locations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-center">
          <button
            onClick={handleWebsite}
            className="flex items-center justify-center w-full max-w-md bg-gradient-to-r from-[#F4A300] to-[#e6930a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-[#e6930a] hover:to-[#d4840a] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Globe size={24} className="mr-3" />
            <span>Hemsida</span>
          </button>
        </div>
        <p className="text-center text-gray-600 text-sm mt-3">
          Besök vår officiella webbplats för mer information
        </p>
      </div>

      {/* Team */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Users size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#212529]">Vi Är Här För Dig!</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Du kan förvänta dig en avslappnad stund där fokus ligger helt på dig. Dina önskemål står i centrum, och varje detalj tas om hand med precision och omtanke. Efter din behandling kommer du att känna dig fräsch, välvårdad och stärkt – redo för vad som än väntar.
        </p>
      </div>
    </div>
  );
};

export default InfoView;