import React, { useEffect, useState } from 'react';

export default function Navbar({ onInicioClick }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 transition-all duration-150 ${
      scrolling
        ? 'bg-[#050914]/80 backdrop-blur-md border-b border-gray-800/50'
        : 'bg-[#050914]/40 backdrop-blur-sm border-b border-transparent'
    }`}>

      {/* Logo y Título */}
      <div
        onClick={onInicioClick}
        className="flex items-center gap-4 cursor-pointer"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center -skew-x-12">
          <span className="text-3xl font-black text-[#050914] italic skew-x-12">
            V
          </span>
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-widest leading-none">
            VESTIMOS JB SAS
          </h1>
          <p className="text-[10px] text-blue-500 font-semibold tracking-widest mt-1">
            COMERCIALIZADORA INTERNACIONAL
          </p>
        </div>
      </div>

      {/* Links */}
      <ul className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-wider text-gray-300">
        <li
          onClick={onInicioClick}
          className="text-blue-500 border-b-2 border-blue-500 pb-2 cursor-pointer"
        >
          INICIO
        </li>

        <li className="hover:text-white transition cursor-pointer pb-2">
          NOSOTROS
        </li>

        <li className="hover:text-white transition cursor-pointer pb-2">
          PRODUCTOS
        </li>

        <li className="hover:text-white transition cursor-pointer pb-2">
          SERVICIOS
        </li>

        <li className="hover:text-white transition cursor-pointer pb-2">
          COMERCIO EXTERIOR
        </li>

        <li className="hover:text-white transition cursor-pointer pb-2">
          CONTACTO
        </li>
      </ul>

      {/* Botón */}
      <button className="border border-gray-600 hover:border-white px-6 py-2.5 rounded text-[11px] font-bold tracking-wider transition flex items-center gap-2">
        COTIZAR AHORA
      </button>
    </nav>
  );
}