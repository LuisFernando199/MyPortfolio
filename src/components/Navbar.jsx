import React, { useState } from "react";
import { Link } from "react-scroll";

import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleClick = () => setHamburger(!hamburger);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#00000098] text-white">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "45%" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex text-lg ">
        <li className="hover:text-red-400">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-red-400">
          <Link to="about" smooth={true} duration={500}>
            Sobre mí
          </Link>
        </li>
        <li className="hover:text-red-400">
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="hover:text-red-400">
          <Link to="works" smooth={true} duration={500}>
          Proyectos
          </Link>
        </li>
        <li className="hover:text-red-400">
          <Link to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!hamburger ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu Movil */}
      <ul
        className={
          !hamburger
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre mí
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="works" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/luisfernando199/"
              target="_blanck"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/LuisFernando199"
              target="_blanck"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-yellow-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:luisfermartinez_91@hotmail.com"
              
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-slate-500">
            <a
              className="flex justify-between items-center w-full text-white"
              href="../assets/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
