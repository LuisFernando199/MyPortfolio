import React from "react";

const AboutMe = () => {
  return (
    <div name="about" className="bg-black w-full h-screen text-white">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              Sobre Mí
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">Hola soy LuisFe, encantado de conocerte.</p>
          </div>
          <div>
            <p className="text-lg">Como titulado en Desarrollo de Aplicaciones Web (DAW) con 31 años y con una verdadera pasión por el desarrollo web y el diseño, mi objetivo es crear experiencias digitales cautivadoras que hagan brillar a las marcas. Con un enfoque en el front-end, mi especialidad es transformar ideas en interfaces visualmente atractivas y altamente funcionales.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
