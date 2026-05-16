import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onInicioClick }) {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 transition-all duration-150 ${
          scrolling
            ? 'bg-[#050914]/80 backdrop-blur-md border-b border-gray-800/50'
            : 'bg-[#050914]/40 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        {/* LOGO */}
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

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-wider text-gray-300">
          <li
            onClick={onInicioClick}
            className="text-blue-500 border-b-2 border-blue-500 pb-2 cursor-pointer"
          >
            INICIO
          </li>

          <li
            onClick={() => scrollToSection('nosotros')}
            className="hover:text-white transition cursor-pointer pb-2"
          >
            NOSOTROS
          </li>

          <li
            onClick={() => scrollToSection('productos')}
            className="hover:text-white transition cursor-pointer pb-2"
          >
            PRODUCTOS
          </li>

          <li
            onClick={() => scrollToSection('exportacion')}
            className="hover:text-white transition cursor-pointer pb-2"
          >
            COMERCIO EXTERIOR
          </li>

          <li
            onClick={() => scrollToSection('contacto')}
            className="hover:text-white transition cursor-pointer pb-2"
          >
            CONTACTO
          </li>
        </ul>

        {/* BOTÓN COTIZAR (DESKTOP) */}
        <button
          onClick={() => scrollToSection('cotizar')}
          className="hidden lg:flex border border-gray-600 hover:border-white px-6 py-2.5 rounded text-[11px] font-bold tracking-wider transition items-center gap-2"
        >
          COTIZAR AHORA
        </button>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-50 bg-[#050914]/95 backdrop-blur-xl
          flex flex-col justify-center items-center gap-8
          transition-all duration-300
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* CLOSE */}
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </button>

        <button onClick={onInicioClick} className="text-white text-xl">
          INICIO
        </button>

        <button
          onClick={() => scrollToSection('nosotros')}
          className="text-white text-xl"
        >
          NOSOTROS
        </button>

        <button onClick={() => scrollToSection('productos')} className="text-white text-xl">
          PRODUCTOS
        </button>

        <button onClick={() => scrollToSection('exportacion')} className="text-white text-xl">
          COMERCIO EXTERIOR
        </button>

        <button onClick={() => scrollToSection('contacto')} className="text-white text-xl">
          CONTACTO
        </button>

        <button
          onClick={() => scrollToSection('cotizar')}
          className="mt-6 border border-gray-600 px-8 py-3 rounded text-white text-sm"
        >
          COTIZAR AHORA
        </button>
      </div>
    </>
  );
}