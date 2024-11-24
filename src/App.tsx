import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
// import Home from './pages/Home';
// We'll temporarily use Home as a placeholder for RequestAnalysis
// until we implement it properly
import SoilAnalysisForm from './components/forms/SoilAnalysisForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/request-analysis" element={<SoilAnalysisForm />} /> */}
          <Route path="/" element={<SoilAnalysisForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;