import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#F4A300] text-white py-4 px-4 shadow-lg sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={() => navigate('/om-oss')}
            className="mr-4 p-2 hover:bg-black hover:bg-opacity-20 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <img 
            src="/Logo.jpeg" 
            alt="Mister Barbershop Logo" 
            className="w-8 h-8 mr-3 rounded-full bg-white p-1"
          />
          <h1 className="text-lg md:text-xl font-bold">
            Integritetspolicy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto space-y-6">
        
        {/* Header section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-[#F4A300] rounded-full flex items-center justify-center mr-4">
              <Shield size={24} className="text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-bold text-[#212529]">
                Integritetspolicy
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Eye size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Inledning</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Mister Barbershop ("vi", "oss", "vårt") respekterar din integritet och är engagerade i att skydda dina personuppgifter. 
            Denna integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar din information när du använder våra tjänster 
            eller besöker våra salonger.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Database size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Information vi samlar in</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Personuppgifter</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Namn och kontaktuppgifter (telefonnummer, e-postadress)</li>
                <li>Bokningsinformation och behandlingshistorik</li>
                <li>Betalningsinformation (hanteras säkert via tredjepartstjänster)</li>
                <li>Kommunikation med oss via telefon, e-post eller sociala medier</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Teknisk information</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-adress och enhetsidentifierare</li>
                <li>Webbläsarinformation och användningsdata</li>
                <li>Cookies och liknande teknologier</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Lock size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Hur vi använder din information</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Hantera bokningar och tillhandahålla våra tjänster</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Kommunicera med dig om dina bokningar och våra tjänster</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Förbättra våra tjänster och kundupplevelse</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Skicka marknadsföringsinformation (endast med ditt samtycke)</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Uppfylla juridiska förpliktelser</span>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Shield size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Dataskydd och säkerhet</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
            Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, 
            förlust, förstörelse eller ändring. Detta inkluderar:
          </p>
          <div className="space-y-2 text-gray-700 text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Kryptering av känslig information</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Begränsad åtkomst till personuppgifter</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Regelbunden säkerhetsöversyn</span>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Eye size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Dina rättigheter</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
            Enligt GDPR har du följande rättigheter gällande dina personuppgifter:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Rätt till information</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Rätt till rättelse</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Rätt till radering</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Rätt till begränsning</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Rätt till dataportabilitet</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Rätt att invända</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Mail size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Kontakta oss</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
            Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, kontakta oss:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center">
              <Phone size={16} className="mr-3 text-[#F4A300]" />
              <span className="text-sm md:text-base">036-71 19 12</span>
            </div>
            <div className="flex items-start">
              <Mail size={16} className="mr-3 text-[#F4A300] mt-1" />
              <div className="text-sm md:text-base">
                <div>Mister Barbershop</div>
                <div>Barnapsgatan 7</div>
                <div>553 16 Jönköping</div>
              </div>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Database size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Ändringar av policyn</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Vi kan uppdatera denna integritetspolicy från tid till annan. Väsentliga ändringar kommer att meddelas via vår webbplats 
            eller genom direkt kommunikation. Vi rekommenderar att du regelbundet granskar denna policy för att hålla dig informerad 
            om hur vi skyddar din information.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;