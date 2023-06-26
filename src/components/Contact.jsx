import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#0d1f3b]  text-gray-300 flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/83af9ee4-86df-490a-bfa4-00e7dbff2686"
        method="POST"
        className="flex flex-col max-w-[600px] w-full text-black"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-400 text-gray-300">
            Contacto
          </p>
          <p className="py-4 text-lg text-gray-300">
            Envíame un mensaje o un email - luisfermartinez_91@hotmail.com.
          </p>
        </div>
        <input
          className="p-2 bg-slate-300"
          type="text"
          placeholder="Nombre"
          name="name"
        />
        <input
          className="my-4 p-2 bg-slate-300"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-slate-300"
          name="message"
          rows="10"
          placeholder="Mensaje..."
        ></textarea>
        <button className="bg-red-400 hover:bg-red-600 text-white text-lg font-bold py-2 px-4 rounded font-mono">
          Let's Go
        </button>
      </form>
    </div>
  );
};

export default Contact;
