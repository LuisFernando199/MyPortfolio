import React from "react";
import GitHub from "../assets/github.png";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import JS from "../assets/javascript.png";
import Php from "../assets/php.png";
import ReactImage from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Myadmin from "../assets/myadmin.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0d1f3b]  text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p  className="text-4xl font-bold inline border-b-4 border-red-400">Habilidades</p>
          <p className="text-lg py-4">Estas son las tecnologías con las que trabajo.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="logo html" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="logo css" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="logo js" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Php} alt="logo php" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImage} alt="logo react" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="logo github" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="logo Tailwind" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={Myadmin} alt="logo Myadmin" />
            <p className="my-4">PhpMyADMIN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
