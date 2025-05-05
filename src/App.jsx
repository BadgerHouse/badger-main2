import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import './App.css';
import './components/Transitions.css';
import SoftwareDepartment from './pages/SoftwareDepartment';
import VisualDepartment from './pages/VisualDepartment';
import MarketingDepartment from './pages/MarketingDepartment';

const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null); // HATAYI ÇÖZEN SATIR

  return (
    <div className="App">
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="fade"
          nodeRef={nodeRef} // findDOMNode hatasını engeller
          unmountOnExit
        >
          <div ref={nodeRef} className="page-transition-wrapper">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/departments/software" element={<SoftwareDepartment />} />
              <Route path="/departments/visual" element={<VisualDepartment />} />
              <Route path="/departments/marketing" element={<MarketingDepartment />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
    <Router>
      <AnimatedRoutes />
    </Router>
    </LanguageProvider>
  );
}

export default App;
