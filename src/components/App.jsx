import Future from "pages/Future";
import Cv from 'pages/Cv';
import NotFound from "pages/NotFound";
import Past from "pages/Past";
import Projects from "pages/Projects";
import { Routes, Route } from "react-router-dom";
import Police from "pages/Police";
import Friends from "pages/Friends";
import Hobby from "pages/Hobby";
import SharedLayout from "./SharedLayout";



export const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Cv/>}/>
          <Route path="past" element={<Past/>}>
            <Route path="police" element={<Police/>}/>
            <Route path="hobby" element={<Hobby/>}/>
            <Route path="friends" element={<Friends/>}/>
          </Route>
          <Route path="projects" element={<Projects/>}/>
          <Route path="future" element={<Future/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
        {/* style które będą na każdej stronie/ header / footer */}
        {/* style do komponentu Future */}
        {/* style do komponentu Cv */}
        {/* style do komponentu NotFound */}
        {/* style do komponentu Past */}
        {/* style do komponentu Projects */}
        {/*hooki: useState, useEffect, useContext, useRef, useMemo */}
        {/* 2. redux */}
        {/* 3. przepisać na TS i dodać styled.ts */}
        {/* 4. dodać testy */}
    </>
  );
};


//Parametry URL