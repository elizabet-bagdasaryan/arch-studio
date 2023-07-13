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

import DesolTab from "../assets/desol-tablet.png";
import TowerTab from "../assets/tower-tablet.png";
import PrototypeTab from "../assets/prototype-tablet.png";
import StationTab from "../assets/sttaion-tab.png";
import BuildingTab from "../assets/eebox-tablet.png";
import FederalTab from "../assets/federal-tablet.png";
import GrandTab from "../assets/grand-tablet.png";
import NetcryTab from "../assets/netcry-tablet.png";
import HypersTab from "../assets/hypers-tablet.png";
import SxivTab from "../assets/sxiv-tablet.png";
import TrinityTab from "../assets/trinity-tablet.png";
import ParamourTab from "../assets/paramour-tablet.jpg";

import DesolDesk from "../assets/desol-desk.jpg";
import TowerDesk from "../assets/tower-desk.png";
import PrototypeDesk from "../assets/prototype-desk.png";
import StationDesk from "../assets/station-desk.jpg";
import BuildingDesk from "../assets/building-desk.jpg";
import FederalDesk from "../assets/federal-desk.png";
import GrandDesk from "../assets/grand-desk.jpg";
import NetcryDesk from "../assets/netcry-desk.png";
import HypersDesk from "../assets/hypers-desk.jpg";
import SxivDesk from "../assets/sxiv-desk.png";
import TrinityDesk from "../assets/trinity-desk.png";
import ParamourDesk from "../assets/paramour-desk.jpg";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="px-6 portfolios">
        <div className="relative mb-6">
          <img src={Station} className="w-full mob"></img>
          <img src={StationTab} className="tab"></img>
          <img src={StationDesk} className="desk" id="station"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Seraph Station
            </h2>
            <p className="text-white"> September 2019</p>
          </div>
        </div>
        <div className="relative mb-6">
          <img src={Building} className="w-full  mob"></img>
          <img src={BuildingTab} className="tab"></img>
          <img src={BuildingDesk} className="desk" id="eebox"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Eebox Building
            </h2>
            <p className="text-white"> August 2017</p>
          </div>
        </div>
        <div className="relative mb-6">
          <img src={Federal} className="w-full mob"></img>
          <img src={FederalTab} className="tab"></img>
          <img src={FederalDesk} className="desk" id="federal"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Federal II Tower
            </h2>
            <p className="text-white">March 2017</p>
          </div>
        </div>
        <div className="relative mb-6">
          <img src={Desol} className="w-full mob"></img>
          <img src={DesolTab} className="tab"></img>
          <img src={DesolDesk} className="desk" id="desol"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Project Del Sol
            </h2>
            <p className="text-white"> VJanuary 2016</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Prototype} className="w-full mob"></img>
          <img src={PrototypeTab} className="tab"></img>
          <img src={PrototypeDesk} className="desk" id="prototype"></img>
          <div className="absolute bottom-0  w-full px-6  py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Le Prototype
            </h2>
            <p className="text-white">October 2015</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Tower} className="w-full mob"></img>
          <img src={TowerTab} className="tab"></img>
          <img src={TowerDesk} className="desk" id="tower"></img>
          <div className="absolute bottom-0  w-full px-6  py-4">
            <h2 className="text-white font-bold text-3xl mb-2 "> 228B Tower</h2>
            <p className="text-white"> April 2015</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Grand} className="w-full mob"></img>
          <img src={GrandTab} className="tab"></img>
          <img src={GrandDesk} className="desk" id="grand"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Grand Edelweiss Hotel
            </h2>
            <p className="text-white"> December 2013</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Netcry} className="w-full mob"></img>
          <img src={NetcryTab} className="tab"></img>
          <img src={NetcryDesk} className="desk" id="netcry"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Netcry Tower
            </h2>
            <p className="text-white"> December 2013</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Hypers} className="w-full mob"></img>
          <img src={HypersTab} className="tab"></img>
          <img src={HypersDesk} className="desk" id="hypers"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">Hypers</h2>
            <p className="text-white"> January 2012</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Sxiv} className="w-full mob"></img>
          <img src={SxivTab} className="tab"></img>
          <img src={SxivDesk} className="desk " id="sxiv"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">SXIV Tower</h2>
            <p className="text-white"> March 2011</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Trinity} className="w-full mob"></img>
          <img src={TrinityTab} className="tab"></img>
          <img src={TrinityDesk} className="desk" id="trinity"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Trinity Bank Tower
            </h2>
            <p className="text-white"> September 2010</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Paramour} className="w-full mob"></img>
          <img src={ParamourTab} className="tab"></img>
          <img src={ParamourDesk} className="desk" id="paramour"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Project Paramour
            </h2>
            <p className="text-white"> February 2008</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
