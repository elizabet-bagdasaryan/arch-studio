import "./Header.css";
import Logo from "../assets/Arch.svg";
import Hamburger from "../assets/hamburger.svg";
function Header() {
  return (
    <>
      <div className="flex justify-between p-6">
        <img src={Logo}></img>
        <img src={Hamburger}></img>
      </div>
    </>
  );
}

export default Header;
