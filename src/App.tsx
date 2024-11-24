import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import RequestAnalysis from './pages/RequestAnalysis';
import AnalysisConfirmation from './pages/RequestSuccess'; // Add this import

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-analysis" element={<RequestAnalysis />} />
          <Route path="/analysis-confirmation" element={<AnalysisConfirmation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;