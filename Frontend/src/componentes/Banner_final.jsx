import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Banner_final() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800/50 bg-[#050914]">

      {/* fondo igual navbar */}
      <div className="absolute inset-0 bg-[#050914]/40 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* MARCA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-bold tracking-widest text-white">
              VESTIMOS JB SAS
            </h2>

            <p className="mt-5 text-sm text-gray-300 leading-relaxed">
              Especialistas en comercio internacional, exportaciones,
              importaciones y soluciones logísticas.
            </p>

            {/* redes */}
            <div className="flex items-center gap-3 mt-6">

              {[
                FaInstagram,
                FaFacebookF,
                FaLinkedinIn
              ].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded border border-gray-700 hover:border-white transition flex items-center justify-center"
                >
                  <Icon className="text-blue-500 w-4 h-4" />
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* SERVICIOS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h3 className="text-white font-bold tracking-wider text-sm">
              SERVICIOS
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">

              {[
                "Exportación de aluminio",
                "Exportación de frutas",
                "Exportación textil",
                "Importaciones",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}

            </ul>
          </motion.div>

          {/* EMPRESA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h3 className="text-white font-bold tracking-wider text-sm">
              EMPRESA
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">

              {[
                "Nosotros",
                "Procesos logísticos",
                "Cobertura internacional",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}

            </ul>
          </motion.div>

          {/* CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="text-white font-bold tracking-wider text-sm">
              CONTACTO
            </h3>

            <div className="mt-5 space-y-4 text-sm text-gray-300">

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                Colombia
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                +57 300 000 0000
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                contacto@vestimosjb.com
              </div>

            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="border-t border-gray-800/50 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >

          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Vestimos JB SAS
          </p>

          <p className="text-sm text-gray-300">
            Comercio Internacional • Logística • Exportaciones
          </p>

        </motion.div>

      </div>
    </footer>
  );
}