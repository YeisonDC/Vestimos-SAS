import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2933] text-gray-300 py-16 animate-fadeUp">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 tracking-wide">
            Vestimos SAS
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Precisión en aluminio, calidad que trasciende fronteras.
          </p>
        </div>

        {/* PRODUCTOS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Productos</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Lámina Lisa",
              "Lámina Estriada",
              "Lámina Perforada",
              "Lámina Anodizada",
              "Lámina Naval"
            ].map((item, i) => (
              <li key={i} className="hover:text-white transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* EMPRESA */}
        <div>
          <h3 className="text-white font-semibold mb-4">Empresa</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Sobre Nosotros",
              "Nuestra Historia",
              "Certificaciones",
              "Sostenibilidad"
            ].map((item, i) => (
              <li key={i} className="hover:text-white transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +57 300 123 4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> ventas@vestimos.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Zona Industrial, Colombia
            </li>
          </ul>
        </div>

      </div>

      {/* LINEA FINAL */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        © 2026 Vestimos SAS — Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;