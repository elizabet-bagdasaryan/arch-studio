import "./About.css";
import Macbook from "../assets/macbook.png";
import Jake from "../assets/jake.png";
import Thompson from "../assets/thompson.png";
import Jackson from "../assets/jackson.png";
import Maria from "../assets/maria.png";

function About() {
  return (
    <>
      <div className="relative">
        <img src={Macbook} className="w-full" />
        <div className="absolute bg-white team p-6 py-16 ">
          <h2 className="font-bold text-4xl text-black">
            Your team of <br /> professionals
          </h2>
          <p className="my-6 text-gray font-bold leading-7">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>

      <div className="heritage px-6">
        <hr className="w-10 h-0.5 bg-black opacity-20 my-12 " />
        <h2 className="font-bold text-4xl text-black">
          Our <br /> Heritage
        </h2>
        <p className="my-6 text-gray font-bold leading-7">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p className="my-6 text-gray font-bold leading-7">
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className="my-6 text-gray font-bold leading-7">
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>

      <div className="px-6 leaders">
        <h2 className="font-bold text-4xl text-black mt-28 mb-14">
          The <br /> Leaders
        </h2>

        <div>
          <img src={Jake} className="w-full"></img>
          <h3 className="font-bold text-2xl text-black mt-4">Jake Richards</h3>
          <p className="text-black opacity-75 font-bold">Chief Architect</p>
        </div>
        <div>
          <img src={Thompson} className="w-full"></img>
          <h3 className="font-bold text-2xl text-black mt-4">Thompson Smith</h3>
          <p className="text-black opacity-75 font-bold">Head of Finance</p>
        </div>
        <div>
          <img src={Jackson} className="w-full"></img>
          <h3 className="font-bold text-2xl text-black mt-4">Jackson Rourke</h3>
          <p className="text-black opacity-75 font-bold">Lead Designer</p>
        </div>
        <div>
          <img src={Maria} className="w-full"></img>
          <h3 className="font-bold text-2xl text-black mt-4">Maria Simpson</h3>
          <p className="text-black opacity-75 font-bold">Senior Architect</p>
        </div>
      </div>
    </>
  );
}

export default About;
