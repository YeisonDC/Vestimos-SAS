import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled 
        ? "bg-black/90 shadow-md border-b border-yellow-500/30" 
        : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Vestimos <span className="text-yellow-400">SAS</span>
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-white">
          <a href="#inicio" className="hover:text-yellow-400 transition">Inicio</a>
          <a href="#productos" className="hover:text-yellow-400 transition">Productos</a>
          <a href="#nosotros" className="hover:text-yellow-400 transition">Nosotros</a>
          <a href="#exportaciones" className="hover:text-yellow-400 transition">Exportaciones</a>
          <a href="#contacto" className="hover:text-yellow-400 transition">Contacto</a>
        </nav>

        {/* BOTÓN */}
        <a 
          href="#contacto"
          className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-semibold transition"
        >
          Cotizar
        </a>

        {/* BOTÓN MOBILE */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black/95 text-white flex flex-col items-center gap-6 py-6">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#exportaciones">Exportaciones</a>
          <a href="#contacto">Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Banner;