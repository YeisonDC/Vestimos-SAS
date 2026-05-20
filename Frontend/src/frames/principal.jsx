import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Handshake, Package, ShieldCheck, Users } from 'lucide-react';

export default function Principal() {

  const irANosotros = () => {
    const el = document.getElementById("nosotros");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const irAProductos = () => {
    const el = document.getElementById("productos");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="font-['Montserrat',sans-serif]">

      {/* HERO */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.9 }}
        className="relative w-full h-[490px] max-md:h-[700px] flex items-center bg-[#050914] overflow-hidden"
      >

        {/* IMAGEN HERO */}
        <div
          className="
            absolute right-0 top-0 h-full
            w-[60%]
            max-md:w-full
            z-0
            bg-no-repeat
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: "url('/media/exportacion2.png')"
          }}
        >

          {/* IMAGEN SOLO PARA MÓVIL */}
          <div
            className="
              hidden
              max-md:block
              absolute
              inset-0
              bg-no-repeat
              bg-cover
              bg-center
            "
            style={{
              backgroundImage: "url('/media/exportacion3.png')"
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-[#050914]/40 max-md:via-[#050914]/80 to-transparent"></div>

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

            <h2 className="leading-[1.05] mb-3 max-md:pr-2">

              <span
                className="
                  text-gray-100
                  font-semibold
                  text-5xl
                  lg:text-[45px]
                  tracking-tight
                  block

                  max-md:text-[clamp(1.5rem,7vw,2.2rem)]
                  max-md:leading-tight
                "
              >
                CONECTAMOS EMPRESAS
              </span>

              <span
                className="
                  font-medium
                  text-[40px]
                  lg:text-[39px]
                  tracking-tight
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-b
                  from-gray-200
                  via-gray-400
                  to-gray-600
                  block
                  mt-1

                  max-md:text-[clamp(1rem,5vw,1.5rem)]
                  max-md:leading-snug
                "
              >
                Y VENDEMOS PRODUCTOS
                <br />
                DE LA MEJOR CALIDAD
              </span>

            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-md pr-10 max-md:pr-0 font-medium">
              Somos una comercializadora internacional especializada en la importación y exportación de productos de alta calidad.
              Conectamos oportunidades, generamos valor y llevamos lo mejor de Colombia a tu empresa.
            </p>

            <div className="flex gap-4 max-md:flex-col">

              <button
                onClick={irANosotros}
                className="bg-[#1e40af] hover:bg-blue-600 px-8 py-3.5 rounded text-xs font-bold tracking-wider text-white"
              >
                CONOCE MÁS
              </button>

              <button
                onClick={irAProductos}
                className="border border-gray-600 hover:bg-white/5 px-8 py-3.5 rounded text-xs font-bold tracking-wider text-white"
              >
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
        className="relative z-20 w-full max-w-7xl mx-auto px-15 max-md:px-0 -mt-10"
      >
        <div className="
          bg-[#0A111E]
          border border-gray-800/80
          rounded-xl
          flex flex-wrap lg:flex-nowrap
          items-center
          justify-between
          p-6
          shadow-2xl shadow-black/50
          divide-x divide-gray-800/60

          max-md:flex-nowrap
          max-md:overflow-x-auto
          max-md:gap-4
          max-md:px-4
          max-md:rounded-none
          max-md:border-x-0
          max-md:scroll-smooth
          scrollbar-hide
        ">

          {[
            { icon: <Globe />, title: '5+', text: 'Países en nuestra\nred comercial' },
            { icon: <Handshake />, title: '120+', text: 'Toneladas exportadas' },
            { icon: <Package />, title: '4', text: 'Tipos de aleaciones\ncomercializadas' },
            { icon: <ShieldCheck />, title: '15+', text: 'Años de experiencia\nen el mercado' },
            { icon: <Users />, title: 'Red global', text: 'Equipo y aliados\ninternacionales activos' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="
                flex items-center gap-4 px-6 w-full lg:w-auto
                max-md:flex-shrink-0
                max-md:min-w-[260px]
                max-md:w-[260px]
                max-md:bg-[#111827]
                max-md:border
                max-md:border-gray-800
                max-md:rounded-xl
                max-md:px-5
                max-md:py-5
              "
            >
              <div className="w-12 h-12 border border-gray-700/50 rounded-full flex items-center justify-center bg-gray-800/20 text-gray-400">
                {item.icon}
              </div>

              <div>
                <h3 className={`${index === 4 ? 'text-sm tracking-wider' : 'text-2xl tracking-widest'} font-medium text-white`}>
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

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
}