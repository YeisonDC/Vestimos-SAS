import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 5);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const irASeccion = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);

        section?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    } else {
      const section = document.getElementById(id);

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 transition-all duration-150 ${
          scrolling
            ? "bg-[#050914]/80 backdrop-blur-md border-b border-gray-800/50"
            : "bg-[#050914]/40 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4 cursor-pointer">
          <div className="w-12 h-12 overflow-hidden rounded flex items-center justify-center">
            <img
              src="/media/logo1.png"
              alt="Vestimos JB Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-widest leading-none">
              VESTIMOS JB SAS
            </h1>

            <p className="text-[10px] text-blue-500 font-semibold tracking-widest mt-1">
              COMERCIALIZADORA INTERNACIONAL
            </p>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-wider text-gray-300">
          <li>
            <Link
              to="/"
              className="text-blue-500 border-b-2 border-blue-500 pb-2"
            >
              INICIO
            </Link>
          </li>

          <li
            onClick={() => irASeccion("nosotros")}
            className="hover:text-white transition cursor-pointer pb-2"
          >
            NOSOTROS
          </li>

          <li
            onClick={() => irASeccion("productos")}
            className="hover:text-white transition cursor-pointer pb-2"
          >
            PRODUCTOS
          </li>

          <li
            onClick={() => irASeccion("exportacion")}
            className="hover:text-white transition cursor-pointer pb-2"
          >
            COMERCIO EXTERIOR
          </li>

          <li
            onClick={() => irASeccion("contacto")}
            className="hover:text-white transition cursor-pointer pb-2"
          >
            CONTACTO
          </li>
        </ul>

        {/* BOTÓN COTIZAR */}
        <button
          onClick={() => irASeccion("cotizar")}
          className="hidden lg:flex border border-gray-600 hover:border-white px-6 py-2.5 rounded text-[11px] font-bold tracking-wider transition items-center gap-2"
        >
          COTIZAR AHORA
        </button>

        {/* MOBILE */}
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
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* CLOSE */}
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </button>

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-white text-xl"
        >
          INICIO
        </Link>

        <button
          onClick={() => irASeccion("nosotros")}
          className="text-white text-xl"
        >
          NOSOTROS
        </button>

        <button
          onClick={() => irASeccion("productos")}
          className="text-white text-xl"
        >
          PRODUCTOS
        </button>

        <button
          onClick={() => irASeccion("exportacion")}
          className="text-white text-xl"
        >
          COMERCIO EXTERIOR
        </button>

        <button
          onClick={() => irASeccion("contacto")}
          className="text-white text-xl"
        >
          CONTACTO
        </button>

        <button
          onClick={() => irASeccion("cotizar")}
          className="mt-6 border border-gray-600 px-8 py-3 rounded text-white text-sm"
        >
          COTIZAR AHORA
        </button>
      </div>
    </>
  );
}