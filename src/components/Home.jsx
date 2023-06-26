import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0d1f3b] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl text-red-400">Hola, mi nombre es:</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-zinc-200">
          <span className="animated-text">Luis Fernando</span>
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#2d3ce9]">
          Soy Desarrollador Web.
        </h2>
        <p className="text-xl text-gray-400 py-4 max-w-[700px]">
          Titulado en 2023 en el Grado Superior de{" "}
          <b className="text-yellow-400">Desarrollo de Aplicaciones Web</b>, y
          con 9 años de experiencia en la solución de problemas como técnico
          electro-mecánico. Enfocado en crecer profesionalmente en el sector de
          la programación y su entorno.
        </p>
        <div>
          <button className="group text-lg  text-white border-2 px-6 py-3 my-2  rounded-lg flex items-center hover:bg-[#fa0eb7c0] hover:border-[#fa0eb7c0]">
            <Link to="works" smooth={true} duration={500}>
              Ver Trabajos
            </Link>
            <span className="group-hover:translate-x-2 duration-300">
              <HiArrowNarrowRight className="ml-2 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
