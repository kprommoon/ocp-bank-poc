import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen md:h-[800px]">
      {/* Background container */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Farm Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content container */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4">
        <div className="h-full flex flex-col items-center justify-center pt-16">
          {/* Cards container - positioned higher */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
            <div className="bg-white bg-opacity-95 rounded-xl p-6 md:p-8 transform hover:-translate-y-2 transition-transform shadow-lg">
              <div className="text-center space-y-2">
                <h2 className="text-lg md:text-xl font-medium text-gray-800">Increase your yield by</h2>
                <p className="text-2xl md:text-4xl font-bold text-ocp">100,000 Baht</p>
                <p className="text-gray-600">per Acre</p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-95 rounded-xl p-6 md:p-8 transform hover:-translate-y-2 transition-transform shadow-lg">
              <div className="text-center space-y-2">
                <h2 className="text-lg md:text-xl font-medium text-gray-800">Support over</h2>
                <p className="text-2xl md:text-4xl font-bold text-ocp">50 types</p>
                <p className="text-gray-600">of crops</p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-95 rounded-xl p-6 md:p-8 transform hover:-translate-y-2 transition-transform shadow-lg">
              <div className="text-center space-y-2">
                <h2 className="text-lg md:text-xl font-medium text-gray-800">Our Goal</h2>
                <p className="text-lg md:text-xl font-bold text-ocp">Carbon Neutral</p>
                <p className="text-gray-600 text-sm">100% Carbon Neutral by 2040</p>
              </div>
            </div>
          </div>
          
          {/* CTA container */}
          <div className="text-center space-y-4 mt-12">
            <button 
              onClick={() => navigate('/request-analysis')}
              className="bg-ocp text-white text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-ocp-dark transition-colors shadow-lg"
            >
              Request Analysis Now
            </button>
            <p className="text-base md:text-lg text-white drop-shadow-md">Results arrive within 10 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
