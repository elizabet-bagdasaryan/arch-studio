import "./Contact.css";
import Phone from "../assets/phone.png";
import PhoneTab from "../assets/phone-tab.png";
import Map from "../assets/map.png";
import View from "../assets/view.png";
import Arrow from "../assets/arrow.png";
import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (!message.trim()) {
      setMessageError(true);
      isValid = false;
    } else {
      setMessageError(false);
    }

    if (!email.trim()) {
      setEmailError(true);
      setEmailEmptyError(false);
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailEmptyError(true);
      setEmailError(false);
      isValid = false;
    } else {
      setEmailEmptyError(false);
      setEmailError(false);
    }
  };
  return (
    <div className="about">
      <div className="relative ">
        <img src={Phone} className="w-full mac-mob" />
        <img src={PhoneTab} className="w-full mac-tab" />
        <div className="absolute bg-white team p-6 py-16 text-black" id="team">
          <h1 className="text-graylight font-bold">Contact</h1>
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
        <div className="offices">
          <div>
            <h4 className="my-6 text-gray mt-16">Main Office</h4>
            <p className="my-6 text-gray  leading-7">
              Mail : archone@mail.com <br />
              Address : 1892 Chenoweth Drive TN <br />
              Phone : 123-456-3451
            </p>
          </div>
          <img src={View} />
        </div>
        <div className="offices">
          <div>
            <h4 className="my-6 text-gray l mt-16">Office II</h4>
            <p className="my-6 text-gray  leading-7">
              Mail : archtwo@mail.com <br />
              Address : 3399 Wines Lane TX
              <br />
              Phone : 832-123-4321
            </p>
          </div>
          <img src={View} />
        </div>
      </div>
      <img src={Map} className="w-full mt-20"></img>

      <div className="px-6 connect">
        <h2 className="font-bold text-4xl text-black ">
          {" "}
          Connect <br /> with us
        </h2>
        <form>
          <div className={nameError ? "error" : "container"}>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="error"> Can't be empty</span>}
          </div>

          <div className={emailError ? "error" : "container"}>
            <input
              className={emailError ? "error" : ""}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error">Can't be empty</span>}
            {emailEmptyError && (
              <span className="error">Should match email format</span>
            )}
          </div>

          <div className={messageError ? "error" : "container"}>
            <input
              className={messageError ? "error" : ""}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {messageError && <span className="error">Can't be empty</span>}
          </div>
          <div
            className="bg-black w-16 h-16 flex align-center justify-center arrow mr-6 "
            id="form-arrow"
            onClick={validateInputs}
          >
            <img src={Arrow} className="h-6 w-6 m-auto" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
