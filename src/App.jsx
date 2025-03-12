
// import {  lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';

import NotFound from './pages/NotFound';
import Cv from './pages/Cv';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import About from './pages/About';

// Dynamiczne importy
// const NotFound = lazy(() => import('./pages/NotFound'))
// const Cv = lazy(() => import('./pages/Cv'))
// const Certificates = lazy(() => import('./pages/Certificates'));
// const Projects = lazy(() => import('./pages/Projects'));
// const About = lazy(() => import('./pages/About'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/portfolio" />} />
      <Route path="/portfolio" element={<SharedLayout />}>
        <Route index element={<Cv />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
};
