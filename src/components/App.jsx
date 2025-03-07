import Cv from 'pages/Cv';
import SharedLayout from './SharedLayout';
import NotFound from '../pages/NotFound';
import Certificates from '../pages/Certificates';
import Projects from '../pages/Projects';
import About from '../pages/About';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Cv />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
