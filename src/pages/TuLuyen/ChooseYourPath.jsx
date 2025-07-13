import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background/auth.png";

// Import path images
import medicalImage from "../../assets/path/medical_eng.png";
import businessImage from "../../assets/path/busness.png";
import tourismImage from "../../assets/path/tour_eng.png";
import scienceImage from "../../assets/path/Science_eng.png";
import educationImage from "../../assets/path/edu_eng.png";
import legalImage from "../../assets/path/legal_eng.png";

const ChooseYourPath = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(25, 23, 82, 0.7)",
      }}
    >
      <div className="w-full max-w-5xl px-6 py-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Choose Your Path
          </h1>
        </div>

        {/* Path Options - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
          {/* Medical English */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer h-80">
            <Link to="/tu-luyen/medical" className="h-full">
              <div className="p-6 flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                  <img 
                    src={medicalImage} 
                    alt="Medical English" 
                    className="w-24 h-24 object-contain mb-4" 
                  />
                  <h2 className="text-xl font-bold text-[#2B003F] mb-2 text-center">
                    Medical English
                  </h2>
                  <p className="text-sm text-gray-600 text-center h-12 overflow-hidden">
                    Master communication in healthcare settings.
                  </p>
                </div>
                <span className="bg-[#2B003F] text-white px-5 py-1.5 rounded-full hover:bg-[#3D0059] transition-colors duration-300 text-sm inline-block">
                  Select
                </span>
              </div>
            </Link>
          </div>

          {/* Business English */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer h-80">
            <Link to="/tu-luyen/business" className="h-full">
              <div className="p-6 flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                  <img 
                    src={businessImage} 
                    alt="Business English" 
                    className="w-24 h-24 object-contain mb-4" 
                  />
                  <h2 className="text-xl font-bold text-[#2B003F] mb-2 text-center">
                    Business English
                  </h2>
                  <p className="text-sm text-gray-600 text-center h-12 overflow-hidden">
                    Learn language for meetings, emails, and reports.
                  </p>
                </div>
                <span className="bg-[#2B003F] text-white px-5 py-1.5 rounded-full hover:bg-[#3D0059] transition-colors duration-300 text-sm inline-block">
                  Select
                </span>
              </div>
            </Link>
          </div>

          {/* Tourism & Hospitality */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer h-80">
            <Link to="/tu-luyen/tourism" className="h-full">
              <div className="p-6 flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                  <img 
                    src={tourismImage} 
                    alt="Tourism & Hospitality" 
                    className="w-24 h-24 object-contain mb-4" 
                  />
                  <h2 className="text-xl font-bold text-[#2B003F] mb-2 text-center">
                    Tourism & Hospitality
                  </h2>
                  <p className="text-sm text-gray-600 text-center h-12 overflow-hidden">
                    Welcome guests with confidence.
                  </p>
                </div>
                <span className="bg-[#2B003F] text-white px-5 py-1.5 rounded-full hover:bg-[#3D0059] transition-colors duration-300 text-sm inline-block">
                  Select
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Path Options - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Science & Tech */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer h-80">
            <Link to="/tu-luyen/science" className="h-full">
              <div className="p-6 flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                  <img 
                    src={scienceImage} 
                    alt="Science & Tech" 
                    className="w-24 h-24 object-contain mb-4" 
                  />
                  <h2 className="text-xl font-bold text-[#2B003F] mb-2 text-center">
                    Science & Tech
                  </h2>
                  <p className="text-sm text-gray-600 text-center h-12 overflow-hidden">
                    Explore the language of discovery and innovation.
                  </p>
                </div>
                <span className="bg-[#2B003F] text-white px-5 py-1.5 rounded-full hover:bg-[#3D0059] transition-colors duration-300 text-sm inline-block">
                  Select
                </span>
              </div>
            </Link>
          </div>

          {/* Education */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer h-80">
            <Link to="/tu-luyen/education" className="h-full">
              <div className="p-6 flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                  <img 
                    src={educationImage} 
                    alt="Education" 
                    className="w-24 h-24 object-contain mb-4" 
                  />
                  <h2 className="text-xl font-bold text-[#2B003F] mb-2 text-center">
                    Education
                  </h2>
                  <p className="text-sm text-gray-600 text-center h-12 overflow-hidden">
                    Communicate effectively in schools and universities.
                  </p>
                </div>
                <span className="bg-[#2B003F] text-white px-5 py-1.5 rounded-full hover:bg-[#3D0059] transition-colors duration-300 text-sm inline-block">
                  Select
                </span>
              </div>
            </Link>
          </div>

          {/* Legal English */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer h-80">
            <Link to="/tu-luyen/legal" className="h-full">
              <div className="p-6 flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                  <img 
                    src={legalImage} 
                    alt="Legal English" 
                    className="w-24 h-24 object-contain mb-4" 
                  />
                  <h2 className="text-xl font-bold text-[#2B003F] mb-2 text-center">
                    Legal English
                  </h2>
                  <p className="text-sm text-gray-600 text-center h-12 overflow-hidden">
                    Develop language for contracts, cases, and more.
                  </p>
                </div>
                <span className="bg-[#2B003F] text-white px-5 py-1.5 rounded-full hover:bg-[#3D0059] transition-colors duration-300 text-sm inline-block">
                  Select
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="absolute top-8 left-8 sm:top-10 sm:left-10 md:top-12 md:left-12">
          <Link
            to="/tu-luyen/practice-goal"
            className="bg-white text-[#2B003F] font-bold py-1.5 px-4 sm:py-2 sm:px-5 rounded-lg shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center"
          >
            <span className="text-lg sm:text-xl font-bold">BACK</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPath;