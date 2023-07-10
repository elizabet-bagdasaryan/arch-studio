import "./Contact.css";
import Phone from "../assets/phone.png";
import Map from "../assets/map.png";
import View from "../assets/view.png";
import Arrow from "../assets/arrow.png";

function Contact() {
  return (
    <>
      <div className="relative ">
        <img src={Phone} className="w-full" />
        <div className="absolute bg-white team p-6 py-16 text-black">
          <h2 className="font-bold text-4xl ">
            Tell us about <br /> your project
          </h2>
          <p className="my-6 text-gray font-bold leading-7">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>

      <div className=" px-6 details">
        <hr className="w-10 h-0.5 bg-black opacity-20 my-12 " />
        <h2 className="font-bold text-4xl text-black">
          Contact
          <br /> Details
        </h2>
        <h4 className="my-6 text-gray mt-16">Main Office</h4>
        <p className="my-6 text-gray  leading-7">
          Mail : archone@mail.com <br />
          Address : 1892 Chenoweth Drive TN <br />
          Phone : 123-456-3451
        </p>
        <img src={View} />
        <h4 className="my-6 text-gray l mt-16">Office II</h4>
        <p className="my-6 text-gray  leading-7">
          Mail : archtwo@mail.com <br />
          Address : 3399 Wines Lane TX
          <br />
          Phone : 832-123-4321
        </p>
        <img src={View} />
      </div>
      <img src={Map} className="w-full mt-20"></img>

      <div className="px-6 connect">
        <h2 className="font-bold text-4xl text-black ">
          {" "}
          Connect <br /> with us
        </h2>
        <form>
          <div className="container">
            <input type="text" placeholder="Name" />
          </div>
          <br />
          <div className="container">
            <input type="email" placeholder="Email" />
          </div>
          <br />
          <div className="container ">
            <input type="text" placeholder="Message" />
          </div>
          <div className="bg-black w-16 h-16 flex align-center justify-center arrow mr-6">
            <img src={Arrow} className="h-6 w-6 m-auto" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
