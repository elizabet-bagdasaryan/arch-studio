import "./Footer.css";
import LogoFooter from "../assets/logo-footer.png";
import Arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className=" bg-graylight mt-28 footer ">
        <img src={LogoFooter} className="foot-logo"></img>
        <div className="text-gray font-bold text-center navbar-footer">
          <Link to="/home">
            <p>Portfolio</p>
          </Link>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <Link to="/portfolio">
          <div className="bg-black flex p-6 justify-evenly  w-64  m-auto portfolio-foot">
            <p className="text-white font-bold ">See Our Portfolio </p>
            <img src={Arrow} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
