import "./Home.css";
import Header from "../Header/Header";
import Building from "../assets/building.png";
import Arrow from "../assets/arrow.png";
import Ideas from "../assets/ideas.png";
import Desol from "../assets/desol.png";
import Tower from "../assets/tower.png";
import Prototype from "../assets/prototype.png";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="relative">
        <img src={Building} className="w-full"></img>
        <div className="absolute bottom-0 top-20  w-full px-6">
          <h2 className="text-white font-bold text-5xl mb-4 w-10">
            Project Paramour
          </h2>
          <p className="text-white mb-16 w-80 leading-7">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <div className="bg-black flex p-6 justify-evenly w-64 ">
            <p className="text-white font-bold ">See Our Portfolio </p>
            <img src={Arrow} />
          </div>
        </div>
      </div>
      <hr className="w-10 h-0.5 bg-black opacity-20 my-12 mx-6" />
      <div className="px-6 ">
        <h2 className="font-bold text-5xl ">
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
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p className="my-6 text-gray font-bold leading-7">
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>
      <div className="relative">
        <img src={Ideas} className="w-full"></img>
        <div className="absolute bottom-0 top-40  w-full px-6">
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
      <div className="px-6 mt-16">
        <h2 className="text-black font-bold text-5xl mb-8 ">Featured</h2>
        <div className="relative mb-6">
          <img src={Desol} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6 py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Project Del Sol
            </h2>
            <p className="text-white"> View All Projects</p>
          </div>
        </div>
        <div className="relative mb-6">
          <img src={Tower} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6  py-4">
            <h2 className="text-white font-bold text-3xl mb-2 "> 228B Tower</h2>
            <p className="text-white"> View All Projects</p>
          </div>
        </div>

        <div className="relative mb-6">
          <img src={Prototype} className="w-full"></img>
          <div className="absolute bottom-0  w-full px-6  py-4">
            <h2 className="text-white font-bold text-3xl mb-2 ">
              Le Prototype
            </h2>
            <p className="text-white"> View All Projects</p>
          </div>
        </div>
      </div>
      <div className="mx-6">
        <div className="bg-black flex p-6 justify-evenly  w-full  m-auto ">
          <p className="text-white font-bold ">See All </p>
          <img src={Arrow} />
        </div>
      </div>
    </div>
  );
}

export default Home;
