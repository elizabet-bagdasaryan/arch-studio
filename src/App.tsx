import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
