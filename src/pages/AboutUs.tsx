import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          A Journey of Positive Impact
        </h1>

        {/* Introduction Section */}
        <p className="text-lg text-gray-700 mb-6">
          OCP was founded in Morocco in 1920 as the Office Chérifien des Phosphates. We started with a single mine at Khouribga. Our operations now span five continents, and we work throughout the value chain, from mining and manufacturing to education and community development.
        </p>

        {/* Image Section */}
        <div className="mb-8">
          <img
            src="https://www.ocpgroup.ma/sites/default/files/styles/wide_x1_max_w1440/public/2024-10/OCP_Infographic_History_0.png?itok=JXi_YfYo"
            alt="OCP History Infographic"
            className="w-full h-auto"
          />
        </div>

        {/* History Sections */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          A Brief History of OCP
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          OCP began phosphate production in March 1921 in Khouribga, with exports via the port at Casablanca later that year. A second mine opened in Youssoufia in 1931, and a third in Benguerir in 1976. The company also diversified into phosphate processing, opening chemical facilities in Safi (1965) and Jorf Lasfar (1984).
        </p>
        <p className="text-lg text-gray-700 mb-6">
          In 2008, the company became the OCP Group S.A., owned by the Moroccan Government and the Banque Populaire du Maroc. Our continued success has depended on relationships with our community, a commitment to lessening our impact on our precious environment, and the opportunity to partner with innovative local businesses.
        </p>

        {/* Quote Section */}
        <div className="border-l-4 border-ocp pl-4 mb-6">
          <p className="text-xl italic text-gray-800">
            "Our biggest asset is not phosphate, but our people."
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            — Dr. Mostafa Terrab
          </p>
        </div>

        {/* Our People Section */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our People Shaped Our History
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our people have been a catalyst for growth in Morocco. As the country's largest employer, we have been able to channel the extraordinary talents of thousands of people to build universities and green cities, create jobs, and implement farming and community outreach programs throughout the country. These programs have allowed us to share our prosperity with the communities we live and work alongside.
        </p>

        {/* Historical Image */}
        <div className="mb-8">
          <img
            src="/images/OCP_History_1923_Image.jpg" // You'll need to save this image in your project
            alt="Sultan Moulay Youssef's visit to the mining center of Khouribga in 1923"
            className="w-full h-auto"
          />
          <p className="text-sm text-gray-600 mt-2 italic text-center">
            Sultan Moulay Youssef's visit to the mining center of Khouribga in 1923
          </p>
        </div>

        {/* Future Section */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          OCP Today and in the Future
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          With sole access to more than 70% of the world's phosphate reserves, OCP takes its role as custodian seriously. We are a state-owned company which adheres to international standards, driven by long-term performance. With our legacy of growth and delivering value, we always challenge ourselves to go further and do better – working to create a sustainable future for both our mining operations and our communities.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
