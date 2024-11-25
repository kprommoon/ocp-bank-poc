import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import RequestAnalysis from './pages/RequestAnalysis';
import AnalysisConfirmation from './pages/RequestSuccess';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs'; // Import the About Us page

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-analysis" element={<RequestAnalysis />} />
          <Route path="/analysis-confirmation" element={<AnalysisConfirmation />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} /> {/* Add this route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
