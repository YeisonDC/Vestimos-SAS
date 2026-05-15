import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Handshake,
  Package,
  ShieldCheck,
  Users,
} from 'lucide-react';

export default function Principal() {
  return (
    <div
      id="productos"
      className="font-['Montserrat',sans-serif] scroll-mt-28"
    >
      {/* HERO */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.9 }}
        className="relative w-full h-[490px] flex items-center bg-[#050914] overflow-hidden"
      >
        <div
          className="absolute right-0 top-0 h-full w-[60%] z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/exportacion2.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-[#050914]/40 to-transparent"></div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050914] to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <p className="text-[#3b82f6] text-[11px] font-bold tracking-[0.2em] mb-2 uppercase">
              Comercializadora Internacional
            </p>

            <h2 className="leading-[1.1] mb-3">
              <span className="whitespace-nowrap text-gray-100 font-semibold text-5xl lg:text-[45px] tracking-tight">
                CONECTAMOS EMPRESAS
              </span>

              <br />

              <span className="font-medium text-[40px] lg:text-[39px] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600">
                Y VENDEMOS PRODUCTOS
                <br />
                DE LA MEJOR CALIDAD
              </span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-md pr-10 font-medium">
              Somos una comercializadora internacional especializada
              en la importación y exportación de productos de alta
              calidad. Conectamos oportunidades, generamos valor y
              llevamos lo mejor de colombia a tu empresa.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#1e40af] hover:bg-blue-600 px-8 py-3.5 rounded text-xs font-bold tracking-wider text-white">
                CONOCE MÁS
              </button>

              <button className="border border-gray-600 hover:bg-white/5 px-8 py-3.5 rounded text-xs font-bold tracking-wider text-white">
                NUESTROS SERVICIOS
              </button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* ESTADÍSTICAS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-7xl mx-auto px-15 -mt-10"
      >
        <div className="bg-[#0A111E] border border-gray-800/80 rounded-xl flex flex-wrap lg:flex-nowrap items-center justify-between p-6 shadow-2xl shadow-black/50 divide-x divide-gray-800/60">
          {[
            {
              icon: <Globe />,
              title: '5+',
              text: 'Países en nuestra\nred comercial',
            },
            {
              icon: <Handshake />,
              title: '500+',
              text: 'Clientes\nsatisfechos',
            },
            {
              icon: <Package />,
              title: '1000+',
              text: 'Operaciones\nexitosas',
            },
            {
              icon: <ShieldCheck />,
              title: '15+',
              text: 'Años de experiencia\nen el mercado',
            },
            {
              icon: <Users />,
              title: 'Equipo experto',
              text: 'Comprometidos con\ntu crecimiento',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="flex items-center gap-4 px-6 w-full lg:w-auto"
            >
              <div className="w-12 h-12 border border-gray-700/50 rounded-full flex items-center justify-center bg-gray-800/20 text-gray-400">
                {item.icon}
              </div>

              <div>
                <h3
                  className={`${
                    index === 4
                      ? 'text-sm tracking-wider'
                      : 'text-2xl tracking-widest'
                  } font-medium text-white`}
                >
                  {item.title}
                </h3>

                <p className="text-[11px] text-gray-400 leading-tight mt-1 font-medium whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}