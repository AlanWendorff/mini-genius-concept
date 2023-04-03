import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FunctionalParadigm from "./components/FunctionalParadigm";
import ObjectParadigm from "./components/ObjectParadigm";
import { FUNCTIONAL_PARADIGM, OBJECT_PARADIGM } from "./routes";
import "./styles/globals.scss";

const App = () => (
  <Router>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path={FUNCTIONAL_PARADIGM} element={<FunctionalParadigm />} />
      <Route path={OBJECT_PARADIGM} element={<ObjectParadigm />} />
    </Routes>
  </Router>
);
export default App;
