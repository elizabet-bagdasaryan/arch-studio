import "./Portfolio.css";
import Desol from "../assets/desol.png";
import Tower from "../assets/tower.png";
import Prototype from "../assets/prototype.png";
import Station from "../assets/station.png";
import Building from "../assets/building.jpg";
import Federal from "../assets/federal.jpg";
import Grand from "../assets/grand.jpg";
import Netcry from "../assets/netcry.jpg";
import Hypers from "../assets/hypers.png";
import Sxiv from "../assets/sxiv.png";
import Trinity from "../assets/trinity.png";
import Paramour from "../assets/paramour.png";
function Portfolio() {
  return (
    <>
      <div className="px-6">
        <div className="relative mb-6">
          <img src={Station} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Seraph Station
            </h2>
            <p className="text-white"> September 2019</p>
          </div>
        </div>
        <div className="relative mb-6">
          <img src={Building} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              EEbox Building
            </h2>
            <p className="text-white"> August 2017</p>
          </div>
        </div>
        <div className="relative mb-6">
          <img src={Federal} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Federal II Tower
            </h2>
            <p className="text-white">March 2017</p>
          </div>
        </div>
        <div className="relative mb-6">
          <img src={Desol} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Project Del Sol
            </h2>
            <p className="text-white"> VJanuary 2016</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Prototype} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6  py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Le Prototype
            </h2>
            <p className="text-white">October 2015</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Tower} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6  py-4">
            <h2 className="text-white font-bold text-3xl mb-2 "> 228B Tower</h2>
            <p className="text-white"> April 2015</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Grand} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Grand Edelweiss Hotel
            </h2>
            <p className="text-white"> December 2013</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Netcry} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Netcry Tower
            </h2>
            <p className="text-white"> December 2013</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Hypers} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">Hypers</h2>
            <p className="text-white"> January 2012</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Sxiv} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">SXIV Tower</h2>
            <p className="text-white"> March 2011</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Trinity} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Trinity Bank Tower
            </h2>
            <p className="text-white"> September 2010</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Paramour} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Project Paramour
            </h2>
            <p className="text-white"> February 2008</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
