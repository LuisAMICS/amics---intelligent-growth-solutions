import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import SystemsPage from './pages/SystemsPage';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import ServicesPage from './pages/ServicesPage';
import SecurityPage from './pages/SecurityPage';
import ChatWidget from './components/ChatWidget';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/systems" element={<SystemsPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/terms" element={<TermsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </HashRouter>
  );
};

export default App;