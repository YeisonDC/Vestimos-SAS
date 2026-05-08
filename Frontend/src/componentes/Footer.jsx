import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-yellow-500/20">

      {/* 🔹 SECCIÓN 1: COLUMNAS */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

  {/* PRODUCTOS */}
  <div className="space-y-4">
    <h3 className="text-yellow-400 font-semibold">Productos</h3>
    <div className="w-12 h-[2px] bg-yellow-400/40 mx-auto md:mx-0"></div>

    <ul className="space-y-3 text-gray-400">
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Perfiles de aluminio
      </li>
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Piezas industriales
      </li>
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Fundición a medida
      </li>
    </ul>
  </div>

  {/* EMPRESA */}
  <div className="space-y-4">
    <h3 className="text-yellow-400 font-semibold">Empresa</h3>
    <div className="w-12 h-[2px] bg-yellow-400/40 mx-auto md:mx-0"></div>

    <ul className="space-y-3 text-gray-400">
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Sobre nosotros
      </li>
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Nuestra historia
      </li>
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Misión y visión
      </li>
    </ul>
  </div>

  {/* SERVICIOS */}
  <div className="space-y-4">
    <h3 className="text-yellow-400 font-semibold">Servicios</h3>
    <div className="w-12 h-[2px] bg-yellow-400/40 mx-auto md:mx-0"></div>

    <ul className="space-y-3 text-gray-400">
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Diseño de piezas
      </li>
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Producción industrial
      </li>
      <li className="hover:text-yellow-400 transition duration-300 hover:translate-x-1">
        Exportación
      </li>
    </ul>
  </div>

  {/* CONTACTO */}
  <div className="space-y-4">
    <h3 className="text-yellow-400 font-semibold">Contacto</h3>
    <div className="w-12 h-[2px] bg-yellow-400/40 mx-auto md:mx-0"></div>

    <ul className="space-y-3 text-gray-400">
      <li className="hover:text-yellow-400 transition">📍 Colombia</li>
      <li className="hover:text-yellow-400 transition">📞 +57 300 000 0000</li>
      <li className="hover:text-yellow-400 transition">✉️ contacto@vestimos.com</li>
    </ul>
  </div>

</div>

      {/*  SEPARADOR SUTIL */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

      {/*  SECCIÓN 2: LOGO GRANDE */}
      <div className="relative w-full flex flex-col items-center justify-center py-16">

        <h2 className="absolute text-[60px] md:text-[120px] lg:text-[160px] font-bold text-white/5 select-none">
          VESTIMOS
        </h2>

        <img 
          src="/media/Logo.png" 
          alt="Logo Vestimos SAS"
          className="relative w-[180px] md:w-[300px] lg:w-[400px] object-contain drop-shadow-[0_0_25px_rgba(250,204,21,0.3)]"
        />

      </div>

      {/*  SEPARADOR SUTIL */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>

      {/*  SECCIÓN 3: FINAL */}
      <div className="py-6 flex flex-col items-center gap-4">

        {/* REDES */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400 transition hover:bg-yellow-400 hover:text-black hover:scale-110">
            <FaLinkedin size={18} />
          </a>

          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400 transition hover:bg-yellow-400 hover:text-black hover:scale-110">
            <FaFacebook size={18} />
          </a>

          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400 transition hover:bg-yellow-400 hover:text-black hover:scale-110">
            <FaInstagram size={18} />
          </a>

          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400 transition hover:bg-yellow-400 hover:text-black hover:scale-110">
            <FaYoutube size={18} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Vestimos SAS. Todos los derechos reservados.
        </p>

        {/* POWERED */}
        <p className="text-sm text-gray-400 text-center">
          Powered by{" "}
          <a
            href="https://www.instagram.com/cordilleratechoficial?igsh=MWw1bHhiODNmcDExZw=="
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-yellow-400 font-semibold group hover:text-yellow-300"
          >
            Cordillera Tech
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </p>

      </div>

    </footer>
  );
};

export default Footer;