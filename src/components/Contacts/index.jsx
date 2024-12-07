import { faLinkedin, faSquareFacebook, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";



function Contacts() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch(error) {
      setStatus("ERROR",error);
    }
  };

  return (
    <div id="contact" className="">
      <div className="text-center mb-10">
        <h2 className="text-2xl lg:text-3xl my-10 text-white pb-3 border-b-2 inline-block border-white">
          Contact
        </h2>
      </div>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 md:col-span-3 lg:col-span-2 text-center h-60 flex flex-col justify-center rounded p-6 bg-red-400/10 box-block">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-7 text-amber-600 ">Call Me!</h3>
          <p className="text-white font-semibold text-lg lg:text-xl mb-2"><a href="tel:+91 638 033 8098">+91 638 033 8098</a></p>
          <p className="text-white font-semibold text-lg lg:text-xl"><a href="mailto:gohardjency@gmail.com">gohardjency@gmail.com</a></p>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 text-center h-60 flex flex-col justify-center rounded p-6 bg-red-400/10 box-block">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-7 text-amber-600 ">Address</h3>
          <p className="text-white font-semibold text-lg lg:text-xl">5/4B East street, Periyavarseeli, Lalgudi, Trichy, TamilNadu, India</p>
        </div>
        <div className="col-span-6 md:col-span-6 lg:col-span-2 text-center h-60 flex flex-col justify-center rounded p-6 bg-red-400/10 box-block">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-7 text-amber-600 ">Ping Me</h3>
          <div className="flex justify-center gap-4">
          <p className="text-white font-semibold text-3xl lg:text-4xl"><FontAwesomeIcon icon={faLinkedin} /></p>
          <p className="text-white font-semibold text-3xl lg:text-4xl"><FontAwesomeIcon icon={faSquareGithub} /></p>
          <p className="text-white font-semibold text-3xl lg:text-4xl"><FontAwesomeIcon icon={faSquareFacebook} /></p>

          </div>
         
        </div>
      </div>
      <div className="grid lg:grid-cols-4 my-10 gap-6">
        <div className="col-span-4 lg:col-span-2">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-7 text-amber-600 ">Just Say Hello</h3>
          <p className="text-white text-lg lg:text-xl">
            I&apos;m always excited to explore new opportunities and collaborate on innovative projects. Let&apos;s connect to share ideas and turn them into reality. Whether it&apos;s a partnership or just a friendly chat, I&apos;d love to hear from you. Together, we can create something truly incredible!
          </p>
        </div>
        <div className="col-span-4 lg:col-span-2">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-7 text-amber-600 ">Send a Message</h3>
          <form action="https://formspree.io/f/xkgneggw" method="POST" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
        </div>            
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded" type="submit">Send</button>
      </form>
      {status === "SUCCESS" && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      {status === "ERROR" && <p className="text-red-500 mt-4">Oops! Something went wrong. Please try again.</p>}
        </div>
      </div>
    </div>
  )
}

export default Contacts
