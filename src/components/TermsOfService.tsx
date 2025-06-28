import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, CreditCard, AlertTriangle, Clock, Users, Shield } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
            Användarvillkor
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto space-y-6">
        
        {/* Header section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-[#F4A300] rounded-full flex items-center justify-center mr-4">
              <FileText size={24} className="text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-bold text-[#212529]">
                Användarvillkor
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
              <FileText size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Allmänna villkor</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Välkommen till Mister Barbershop! Dessa användarvillkor ("Villkor") reglerar din användning av våra tjänster, 
            webbplats och besök på våra salonger. Genom att använda våra tjänster accepterar du dessa villkor i sin helhet.
          </p>
        </div>

        {/* Booking Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Calendar size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Bokningsvillkor</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Bokning och bekräftelse</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Alla bokningar måste bekräftas av oss för att vara giltiga</li>
                <li>Du kommer att få en bekräftelse via SMS eller e-post</li>
                <li>Bokningar kan göras online, via telefon eller i salongen</li>
                <li>Vi förbehåller oss rätten att avböja bokningar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Avbokning och ändring</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Avbokning eller ändring måste göras minst 24 timmar i förväg</li>
                <li>Sen avbokning (mindre än 24 timmar) kan medföra en avgift</li>
                <li>Utebliven tid utan avbokning debiteras fullt pris</li>
                <li>Kontakta oss på 036-71 19 12 för avbokning eller ändring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <CreditCard size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Betalningsvillkor</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Betalning sker efter utförd tjänst i salongen</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Vi accepterar kontanter, kort och Swish</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Priser kan ändras utan föregående meddelande</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Aktuella priser finns på vår webbplats och i salongen</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Dricks är frivilligt och uppskattas</span>
            </div>
          </div>
        </div>

        {/* Service Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Users size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Tjänstevillkor</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Våra tjänster</h4>
              <p className="mb-2">Vi erbjuder professionella barberartjänster inklusive:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Herrklippning och styling</li>
                <li>Skägg- och mustaschtrimning</li>
                <li>Traditionell rakning</li>
                <li>Ansiktsbehandlingar</li>
                <li>Hårvårdsprodukter och accessoarer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Kvalitet och garanti</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Vi strävar efter högsta kvalitet i alla våra tjänster</li>
                <li>Om du inte är nöjd, kontakta oss inom 48 timmar</li>
                <li>Vi erbjuder kompletterande service vid behov</li>
                <li>Allergiska reaktioner eller hudproblem måste meddelas i förväg</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conduct and Safety */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Shield size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Uppförande och säkerhet</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Förväntad uppförande</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Respektfullt bemötande av personal och andra kunder</li>
                <li>Punktlighet till bokade tider</li>
                <li>Följ personalens instruktioner och säkerhetsriktlinjer</li>
                <li>Meddela allergier eller hudproblem innan behandling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Hälsa och säkerhet</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Vi följer alla hälso- och säkerhetsföreskrifter</li>
                <li>Sterilisering av verktyg enligt branschstandard</li>
                <li>Vid sjukdom, vänligen avboka din tid</li>
                <li>Vi förbehåller oss rätten att neka service vid hälsoproblem</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Liability */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <AlertTriangle size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Ansvarsbegränsning</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <p>
              Mister Barbershop ansvarar inte för:
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Allergiska reaktioner som inte meddelats i förväg</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Personliga tillhörigheter som försvinner eller skadas</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Resultat som inte motsvarar orealistiska förväntningar</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Indirekta skador eller följdskador</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Disputes */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Clock size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Kontakt och tvister</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Klagomål och reklamationer</h4>
              <p className="mb-2">
                Vid klagomål eller reklamationer, kontakta oss omedelbart:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Telefon: 036-71 19 12</li>
                <li>Besök någon av våra salonger</li>
                <li>Kontakta oss via sociala medier</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#212529] mb-2">Tillämplig lag</h4>
              <p>
                Dessa villkor regleras av svensk lag. Eventuella tvister ska i första hand lösas genom förhandling. 
                Om detta inte är möjligt, ska tvisten avgöras av svensk domstol.
              </p>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#F4A300] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <FileText size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#212529]">Ändringar av villkoren</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Vi förbehåller oss rätten att ändra dessa villkor när som helst. Väsentliga ändringar kommer att meddelas 
            via vår webbplats eller genom direkt kommunikation. Fortsatt användning av våra tjänster efter ändringar 
            innebär att du accepterar de nya villkoren.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;