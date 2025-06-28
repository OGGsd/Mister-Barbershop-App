import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Heart, Award, Calendar, Shield, FileText } from 'lucide-react';
import BottomNavigation from './BottomNavigation';
import { motion } from 'framer-motion';

const OmOss: React.FC = () => {
  const navigate = useNavigate();

  // Owners first (top row)
  const owners = [
    {
      name: "Martin",
      role: "Ägare & Barberare",
      image: "/Martin.jpg"
    },
    {
      name: "Michael",
      role: "Ägare & Barberare", 
      image: "/Michael.jpg"
    },
    {
      name: "Ara",
      role: "Ägare & Barberare",
      image: "/Ara.jpg"
    }
  ];

  // Other barbers (second row)
  const barbers = [
    {
      name: "Ibrahem",
      role: "Barberare",
      image: "/Ibrahem.jpg"
    },
    {
      name: "Hanna", 
      role: "Barberare",
      image: "/Hanna.jpg"
    },
    {
      name: "Rifat",
      role: "Barberare",
      image: "/Rifat.jpg"
    },
    {
      name: "George M",
      role: "Barberare",
      image: "/George.jpg"
    }
  ];

  const renderTeamMember = (member: any, index: number) => (
    <motion.div 
      key={index} 
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
    >
      <div className="relative z-10">
        {/* Profile Image */}
        <div className="relative mb-4 mx-auto w-20 h-20 md:w-24 md:h-24">
          <img
            src={member.image}
            alt={member.name}
            className="relative w-full h-full rounded-full object-cover shadow-lg border-4 border-white transition-all duration-200"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div className="hidden relative w-full h-full bg-gradient-to-br from-[#F4A300] to-[#e6930a] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-white text-xl md:text-2xl font-bold">
              {member.name.charAt(0)}
            </span>
          </div>
        </div>
        
        {/* Name and Role */}
        <div className="text-center">
          <h4 className="text-base md:text-lg font-bold text-[#212529] mb-2 group-hover:text-[#F4A300] transition-colors duration-200">
            {member.name}
          </h4>
          <p className="text-xs md:text-sm text-gray-600 font-medium">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Content Area - Proper spacing for bottom nav */}
      <div className="flex-1 pb-20 overflow-y-auto">
        <div className="p-4 max-w-4xl mx-auto space-y-6">
          
          {/* Header section - matching InfoView */}
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

          {/* Main Story - matching InfoView card style */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Calendar size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#212529]">Vår Historia</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
              År 2009 slog vi upp dörrarna till Mr Barbershop i city, vår kärna. Idag är vår barbershop en av de mest populära herrsalongerna i Jönköping med en kundkrets som sträcker sig genom hela riket. Idag har detta gett oss möjligheten att expandera vår verksamhet och ta oss an nya utmaningar. Den 25 maj 2021, slår vi upp dörrarna till vår nya barbershop & boutique – Mr Barbershop Boutique.
            </p>
          </div>

          {/* Our Story - matching InfoView card style */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Heart size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#212529]">Vår Story</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                Inspirationen till att starta Mr Barbershop i city kom från USA & London & avsaknaden av något liknande i Sverige.
              </p>
              
              <div className="border-l-4 border-[#F4A300] pl-4 py-2 bg-gray-50 rounded-r-lg italic">
                "Vi ville skapa en plats för männen där man genom att kliva innanför vår dörr kan lämna vardagens bekymmer utanför, sätta sig en stund med en kopp kaffe i handen och få både hår och skägg omhändertaget enligt egna önskemål och krav"
              </div>
              
              <p>
                Efter några år på Barbershopen i city började man fundera på att utveckla konceptet och filade på idén om att starta igång en verksamhet på ett köpcentrum.
              </p>
              
              <p>
                Asecs köpcentrum blev platsen för andra satsningen – Mr Barbershop Boutique.
              </p>
              
              <p>
                En barbershop med barberare som precis som i stan välkomnar dig med ett leende och utför sitt arbete med stolthet & precision. Dessutom en plats där du kan hitta allt & lite till för dina behov – hud & hårvård, styling, accessoarer, perfekta gåvor till någon du tycker om & nischparfymer från världens alla hörn.
              </p>
              
              <div className="text-center py-2">
                <p className="text-lg font-bold text-[#F4A300] italic">
                  – Exklusivt men inte exkluderande –
                </p>
              </div>
            </div>
          </div>

          {/* Team Section - Simplified for faster loading */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#212529]">Vår Personal</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
              Teamet bakom Mister Barbershop består av passionerade, professionella barberare som alla har erfarenhet av den charmfulla kultur som barbershops innebär. Du kan lita på att alla är utbildade inom alla våra behandlingsformer – från klippning och rakning till skäggvård.
            </p>

            {/* Owners Row - 3 people */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {owners.map((member, index) => renderTeamMember(member, index))}
            </div>

            {/* Barbers Row - 4 people */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {barbers.map((member, index) => renderTeamMember(member, index + 3))}
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#212529]">Våra Värderingar</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <Heart size={14} className="mr-2 text-[#F4A300] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#212529] text-sm">Omtanke</h4>
                  <p className="text-xs text-gray-600">Vi bryr oss om varje kund</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award size={14} className="mr-2 text-[#F4A300] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#212529] text-sm">Precision</h4>
                  <p className="text-xs text-gray-600">Högsta noggrannhet i allt vi gör</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users size={14} className="mr-2 text-[#F4A300] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#212529] text-sm">Kärlek för handarbetet</h4>
                  <p className="text-xs text-gray-600">Passion för traditionellt hantverk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy and Terms of Use Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.button
              onClick={() => navigate('/privacy')}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 text-left"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield size={20} className="text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#212529]">Integritetspolicy</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Läs om hur vi hanterar dina personuppgifter och skyddar din integritet.
              </p>
            </motion.button>

            <motion.button
              onClick={() => navigate('/terms')}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 text-left"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText size={20} className="text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#212529]">Användarvillkor</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Läs våra villkor för användning av våra tjänster och webbplats.
              </p>
            </motion.button>
          </div>

        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </motion.div>
  );
};

export default OmOss;