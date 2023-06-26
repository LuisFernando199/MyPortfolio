import React from "react";

import Savings from "../assets/ahorro.png";
import Crypto from "../assets/crypto.png";
import Gastos from "../assets/gastos.png";
import Passwords from "../assets/passwords.png";
import Todolist from "../assets/todolist.png";
import Vet from "../assets/vet.png";
import Weather from "../assets/weather.png";

const Works = () => {
  return (
    <div name="works" className="w-full md:h-screen bg-black text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-red-600">
            Proyectos
          </p>
          <p className="text-lg py-6">Aquí puedes ver algunos proyectos hechos con <span className="text-yellow-400">React y JavaScript</span> </p>
        </div>
        {/**Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/**Item */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                App React Weather
              </span>
              <div className="pt-8 text-center">
                <a target="_blanck" href="https://quiet-horse-c9b30e.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blanck" href="https://github.com/LuisFernando199/weather-with-react-js">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/**Item */}
          <div
            style={{ backgroundImage: `url(${Vet})` }}
            className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                App React Veterinario
              </span>
              <div className="pt-8 text-center">
                <a target="_blanck" href="https://glittery-buttercream-7f7fc4.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blanck" href="https://github.com/LuisFernando199/citas-veterinaria">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/**Item */}
          <div
            style={{ backgroundImage: `url(${Crypto})` }}
            className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                App React Criptomonedas
              </span>
              <div className="pt-8 text-center">
                <a target="_blanck" href="https://subtle-arithmetic-63a970.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blanck" href="https://github.com/LuisFernando199/criptomonedas">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/**Item */}
          <div
            style={{ backgroundImage: `url(${Todolist})` }}
            className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                App React ToDoList
              </span>
              <div className="pt-8 text-center">
                <a target="_blanck" href="https://dapper-sundae-c7021f.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/**Item */}
          <div
            style={{ backgroundImage: `url(${Gastos})` }}
            className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                App React Calculadora Gastos
              </span>
              <div className="pt-8 text-center">
                <a target="_blanck" href="https://prismatic-begonia-be8bc6.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blanck" href="https://github.com/LuisFernando199/Calculadora-de-ahorros">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/**Item */}
          <div
            style={{ backgroundImage: `url(${Passwords})` }}
            className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                App React Generador Password
              </span>
              <div className="pt-8 text-center">
                <a target="_blanck" href="https://visionary-cassata-e4de7b.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blanck" href="https://github.com/LuisFernando199/Generador-de-Contrase-a">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
