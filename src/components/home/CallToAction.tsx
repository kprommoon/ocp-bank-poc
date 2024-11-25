import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
          Ready to maximize your farm's potential?
        </h2>
        <button 
          onClick={() => navigate('/request-analysis')}
          className="bg-ocp text-white text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-ocp-dark transition-colors"
        >
          Start Your Analysis Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
