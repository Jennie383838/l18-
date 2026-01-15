import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Diplomas from "./components/Diplomas";
import Diploma from "./components/Diploma";
import Module from "./components/Module";
import Register from "./components/Register";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

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
