import Future from "pages/Future";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";
import Past from "pages/Past";
import Present from "pages/Present";
import { Routes, Route } from "react-router-dom";
import Police from "components/Police";
import Friends from "components/Friends";
import Hobby from "components/Hobby";
import SharedLayout from "./SharedLayout";



export const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Menu/>}/>
          <Route path="past" element={<Past/>}>
            <Route path="police" element={<Police/>}/>
            <Route path="hobby" element={<Hobby/>}/>
            <Route path="friends" element={<Friends/>}/>
          </Route>
          <Route path="present" element={<Present/>}/>
          <Route path="future" element={<Future/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>

    </>
  );
};


//Parametry URL