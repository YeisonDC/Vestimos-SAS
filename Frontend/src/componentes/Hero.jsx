import React from "react";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="public/videos/FUNDIDO-V1.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute w-full h-full bg-black/60"></div>

      {/* CONTENIDO */}
      <div className="relative text-center text-blue-400 px-4">
       <h2 className="text-2xl font-bold text-white tracking-wide animate-fadeUp">
        Vestimos <span className="text-yellow-400">SAS</span>
      </h2>
      <p className="text-xl mb-6 animate-fadeUp delay-200 text-white">
        ingenieria en aluminio en soluciones que cruzan fronteras
      </p>

       <a 
       href="#productos"
       className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105"
       >
        VER PRODUCTOS
        </a>
      </div>

    </section>
  );
};

export default Hero;