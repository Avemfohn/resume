import React, { useState } from "react";
import contactLogo from "./contactLogo.svg"


const FORM_ENDPOINT = "http://127.0.0.1:8000/api/contact/"; // TODO - fill on the later step

const ContactForm = () => {
   
  const [formValue, setFormValue] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const {email, subject, message} = formValue;

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          subject: subject,
          email: email,
          message: message,
          })})
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
      <div id="contact" class="grid overflow-hidden  md:grid-cols-2 grid-rows-1 gap-2 mx-auto items-center px-24 h-full mt-48 hide">
      <h1 class="font-mono text-7xl flex items-center mb-28">Contact</h1>
      <div></div>
      <div>
        <img src={contactLogo} alt="logo" class="w-96 h-96"/>
      </div>
      <div>
        <div>
          <h1 class="w-full mb-5 font-mono text-2xl text-sky-500">This message has been sent</h1>
        </div>
        <div>
          <h1 class="text-black  w-full font-mono font-bold text-2xl">Thank you</h1>
        </div>

    </div>
    </div>
      </>
    );
  }

  return (
    <div id="contact" class="grid overflow-hidden  md:grid-cols-2 grid-rows-1 gap-2 mx-auto items-center px-24 h-full mt-48 hide">
      <h1 class="font-mono text-7xl flex items-center mb-24">Contact</h1>
      <div></div>
      <div>
        <img src={contactLogo} alt="logo" class="w-48 h-48 md:w-96 md:h-96"/>
      </div>
      <div>
    <form
      onSubmit={handleSubmit}
      className="grid overflow-hidden grid-cols-1 grid-rows-2 gap-1 grid-flow-row"
    >
      <div className="mb-3 pt-0">
      <span class="uppercase text-sm text-gray-600 font-bold w-full">Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="w-full bg-gray-300 text-yellow-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-mono text-lg"
          required
        />
      </div>
      <div className="mb-3 pt-0 ">
      <span class="uppercase text-sm text-gray-600 font-bold w-full">Subject</span>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-mono text-lg txt-sk"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <span class="uppercase text-sm text-gray-600 font-bold w-full">Message</span>
        <textarea
          name="message"
          value={message}
          onChange={handleChange}
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-mono text-lg"
          required
        />
      </div>
      <div className="mb-3 pt-0 ">
        
        <button
          className="bg-blue-500  text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default ContactForm;