import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { QuoteForm } from './pages/QuoteForm';
import { CraftsmanLogin } from './pages/CraftsmanLogin';
import { UserLogin } from './pages/UserLogin';
import { GeminiChat } from './components/GeminiChat';

// Scroll to top wrapper
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
      <div className="flex flex-col min-h-screen text-gray-800 font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quote" element={<QuoteForm />} />
            <Route path="/craftsman-login" element={<CraftsmanLogin />} />
            <Route path="/login" element={<UserLogin />} />
          </Routes>
        </main>
        <Footer />
        <GeminiChat />
      </div>
    </HashRouter>
  );
};

export default App;
