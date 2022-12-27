import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About Little Lemon
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <a href="/" className="nav-item">
          What?
        </a>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage className="main-body"/>}></Route>
        <Route path="/about" element={<AboutLittleLemon className="main-body"/>}></Route>
        <Route path="/contact" element={<Contact className="main-body"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
