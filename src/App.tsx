import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import RequestDemo from './pages/Request';
function App() {
  useEffect(() => {
    document.title = "VisitWise | Customer Recognition System";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-secondary">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-demo" element={<RequestDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;