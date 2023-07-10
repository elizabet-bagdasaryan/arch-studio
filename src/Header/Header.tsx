import "./Header.css";
import Logo from "../assets/Arch.svg";
import Hamburger from "../assets/hamburger.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleMenuVisibility() {
    setMenuVisible((prevState) => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="header">
        <Link to="/home">
          <img src={Logo} className="arch" />
        </Link>
        <img
          src={Hamburger}
          onClick={handleMenuVisibility}
          className="hamburger"
        />

        <div className="navbar">
          <Link to="/portfolio">
            <p>Portfolio</p>
          </Link>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>

      <div className={`menu-mobile ${menuVisible ? "visible" : ""}`}>
        <Link to="/portfolio">
          <p>Portfolio</p>
        </Link>
        <Link to="/about">
          <p>About Us</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </>
  );
}

export default Header;
