
import Cv from 'pages/Cv';
import NotFound from "pages/NotFound";
import Hobby from "pages/Hobby";
import Projects from "pages/Projects";
import { Routes, Route } from "react-router-dom";
import Police from "pages/Police";
import SharedLayout from "./SharedLayout";
import Experience from 'pages/Experience';
import University from 'pages/University';



export const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Cv/>}/>
          <Route path="hobby" element={<Hobby/>}/>
          <Route path="experience" element={<Experience/>}>
            <Route path="police" element={<Police/>}/>
            <Route path="university" element={<University/>}/>
          </Route>
          <Route path="projects" element={<Projects/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
        {/*hooki: useState, useEffect, useContext, useRef, useMemo */}
        {/* 2. redux */}
        {/* 3. przepisać na TS i dodać styled.ts */}
        {/* 4. dodać testy */}
    </>
  );
};


//Parametry URL