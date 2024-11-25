import React from 'react';

const Benefits: React.FC = () => (
  <section className="py-12 md:py-20">
    <div className="max-w-7xl mx-auto px-4">
      {/* Learn More Section */}
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row items-center bg-white">
        <div className="w-full md:w-1/2 px-4 md:px-12 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Learn More</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Discover how our custom fertilizer solutions can transform your farming practices. 
            Our advanced soil analysis technology provides precise recommendations for optimal crop growth.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/images/learn-more.jpg" alt="Learn More" className="w-full h-64 md:h-96 object-cover" />
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row items-center bg-gray-50">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img src="/images/who-we-are.jpg" alt="Who We Are" className="w-full h-64 md:h-96 object-cover" />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-12 mb-8 md:mb-0 order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Who We Are</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            A leading provider of sustainable agricultural solutions, committed to farmer success. 
            With decades of experience, we help farmers achieve optimal yields while protecting the environment.
          </p>
        </div>
      </div>

      {/* How We Do It Section */}
      <div className="flex flex-col md:flex-row items-center bg-white">
        <div className="w-full md:w-1/2 px-4 md:px-12 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">How We Do It</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Advanced soil analysis and custom fertilizer formulation for optimal results. 
            Our mobile labs come to your farm, analyze your soil, and provide tailored recommendations within 10 days.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/images/how-we-do-it.jpg" alt="How We Do It" className="w-full h-64 md:h-96 object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default Benefits;
