// src/components/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Welcome to RP SOI  Course Enrolment Portal " />} />

        <Route path="/diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
