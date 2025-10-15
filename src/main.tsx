import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/Pages/DXT-020 About Me';
import ProjectPage from './components/Pages/DXT - 030 Projects';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
