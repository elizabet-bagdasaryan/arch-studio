import "./Home.css";
import Building from "../assets/building.png";
import Arrow from "../assets/arrow.png";
import Ideas from "../assets/ideas.png";
import IdeasTab from "../assets/ideas-tab.png";
import Desol from "../assets/desol.png";
import Tower from "../assets/tower.png";
import Prototype from "../assets/prototype.png";
import DesolTab from "../assets/desol-tablet.png";
import TowerTab from "../assets/tower-tablet.png";
import PrototypeTab from "../assets/prototype-tablet.png";
import HomeDesk from "../assets/home-desk.png";
import IdeasDesk from "../assets/ideas-desk.png";
import DesolDesk from "../assets/desol-desk.jpg";
import TowerDesk from "../assets/tower-desk.png";
import PrototypeDesk from "../assets/prototype-desk.png";
import { Link } from "react-router-dom";
import Welcome from "../assets/welcome.png";
import { useState } from "react";
import FederalHome from "../assets/federal-home.png";
import StationHome from "../assets/station-home.png";
import TrinityHome from "../assets/trinity-home.png";
import { useEffect } from "react";

interface Project {
  src: string;
  title: string;
  description: string;
}

const images: { [key: number]: Project } = {
  1: {
    src: HomeDesk,
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  2: {
    src: StationHome,
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  3: {
    src: FederalHome,
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
  4: {
    src: TrinityHome,
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
};

function Home() {
  const [selectedImage, setSelectedImage] = useState<number>(1);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1336);
    };
    window.addEventListener("resize", handleResize);

    setIsMobileView(window.innerWidth <= 1336);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (imageNumber: number) => {
    setSelectedImage(imageNumber);
  };

  const renderTitle = () => {
    if (isMobileView) {
      return "Project Paramour";
    } else {
      return images[selectedImage].title;
    }
  };

  const renderDescription = () => {
    if (isMobileView) {
      return "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.";
    } else {
      return images[selectedImage].description;
    }
  };
  return (
    <div className="overflow-x-hidden home">
      <div className="relative param">
        <img src={Building} className="w-full mob-build"></img>
        <img src={images[selectedImage].src} className="w-full desk" />
        <div className="absolute bottom-0 top-20 w-full px-6" id="param-text">
          <h2 className="text-white font-bold text-5xl mb-4 w-10" id="headers">
            {renderTitle()}
          </h2>
          <p className="text-white mb-16 w-80 leading-7" id="paragraph">
            {renderDescription()}
          </p>
          <Link to="/portfolio">
            <div className="bg-black flex p-6 justify-evenly w-64" id="button">
              <p className="text-white font-bold">See Our Portfolio </p>
              <img src={Arrow} />
            </div>
          </Link>
        </div>
        <div className="gallery">
          <p
            className={selectedImage === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            01
          </p>
          <p
            className={selectedImage === 2 ? "active" : ""}
            onClick={() => handleClick(2)}
          >
            02
          </p>
          <p
            className={selectedImage === 3 ? "active" : ""}
            onClick={() => handleClick(3)}
          >
            03
          </p>
          <p
            className={selectedImage === 4 ? "active" : ""}
            onClick={() => handleClick(4)}
          >
            04
          </p>
        </div>
      </div>

      <hr className="w-10 h-0.5 bg-black opacity-20 my-12 mx-6" />
      <div className="px-6 welcome">
        <div>
          <h1 className="text-graylight font-bold">Welcome</h1>
          <h2 className="font-bold text-5xl text-black">
            Welcome to <br />
            Arch Studio
          </h2>
          <p className="my-6 text-gray font-bold leading-7">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="my-6 text-gray font-bold leading-7">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="my-6 text-gray font-bold leading-7">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <img src={Welcome} />
      </div>
      <div className="relative">
        <img src={Ideas} className="w-full small-mob"></img>
        <img src={IdeasTab} className="w-full small-tab"></img>
        <img src={IdeasDesk} className="w-full desk"></img>
        <div className="absolute bottom-0 top-40  w-full px-6" id="small-team">
          <h2 className="text-white font-bold text-5xl mb-8 ">
            Small team, <br />
            big ideas
          </h2>

          <div className="bg-black flex p-6 justify-evenly w-48 ">
            <p className="text-white font-bold ">About Us </p>
            <img src={Arrow} />
          </div>
        </div>
      </div>
      <div className="px-6 mt-16" id="home-feat">
        <div className="flex justify-between ">
          <h2 className="text-black font-bold text-5xl mb-8 ">Featured</h2>
          <Link to="/portfolio">
            <div className="mx-6 see-all-tab">
              <div className="bg-black flex p-6 justify-evenly  w-52 ">
                <p className="text-white font-bold ">See All </p>
                <img src={Arrow} />
              </div>
            </div>
          </Link>
        </div>
        <div className="projects">
          <div className="relative mb-6">
            <img src={Desol} className="w-full mob"></img>
            <img src={DesolTab} className="tab"></img>
            <img src={DesolDesk} className="desk"></img>
            <div className="absolute bottom-0  w-full px-6 py-4" id="home-div">
              <h3 className="text-white font-bold text-3xl mb-2 ">
                Project Del Sol
              </h3>
              <p className="text-white"> View All Projects</p>
            </div>
          </div>
          <div className="relative mb-6">
            <img src={Tower} className="w-full mob"></img>
            <img src={TowerTab} className="tab"></img>
            <img src={TowerDesk} className="desk"></img>
            <div className="absolute bottom-0  w-full px-6  py-4" id="home-div">
              <h3 className="text-white font-bold text-3xl mb-2 ">
                {" "}
                228B Tower
              </h3>
              <p className="text-white"> View All Projects</p>
            </div>
          </div>

          <div className="relative mb-6">
            <img src={Prototype} className="w-full mob"></img>
            <img src={PrototypeTab} className="tab"></img>
            <img src={PrototypeDesk} className="desk"></img>
            <div className="absolute bottom-0  w-full px-6  py-4" id="home-div">
              <h3 className="text-white font-bold text-3xl mb-2 ">
                Le Prototype
              </h3>
              <p className="text-white"> View All Projects</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/portfolio">
        <div className="mx-6 see-all-mob">
          <div className="bg-black flex p-6 justify-evenly  w-full  m-auto ">
            <p className="text-white font-bold ">See All </p>
            <img src={Arrow} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;
