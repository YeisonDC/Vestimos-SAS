import React from 'react';
import { motion } from 'framer-motion';

export default function TarjetasProductos({
  onAleacionesClick,
  onRopaClick,
  onFrutasClick,
}) {
  const cardAnim = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 }
    })
  };

  return (
    <section className="w-full max-w-[1900px] mx-auto px-6 md:px-12 py-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

        {/* CARD 1 */}
        <motion.div
          custom={0}
          variants={cardAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          className="bg-[#0A111E] border border-gray-800/60 rounded-xl p-8 relative overflow-hidden h-[230px]"
        >
          <div className="absolute right-[-50px] top-0 w-[62%] h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A111E] via-[#0A111E]/50 to-transparent z-10"></div>
            <img
              src="/media/Lingote.png"
              alt="Aluminio y aleaciones"
              className="w-full h-full object-cover object-[85%_center]"
            />
          </div>

          <div className="relative z-20 w-[45%] flex flex-col h-full justify-between">
            <div>
              <p className="text-blue-500 text-[10px] font-bold uppercase mb-2">
                Producto Principal
              </p>

              <h4 className="text-[20px] font-bold text-white leading-[1.1] mb-3">
                ALUMINIO<br />Y ALEACIONES
              </h4>

              <p className="text-gray-400 text-[10px]">
                Lingotes de aluminio de alta pureza y aleaciones para industrias exigentes.
              </p>
            </div>

            <button
              onClick={onAleacionesClick}
              className="text-[10px] text-white font-bold border border-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              VER PRODUCTOS
            </button>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          custom={1}
          variants={cardAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          className="bg-[#0A111E] border border-gray-800/60 rounded-xl p-8 relative overflow-hidden h-[230px]"
        >
          <div className="absolute right-[-50px] top-0 w-[62%] h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A111E] via-[#0A111E]/10 to-transparent z-10"></div>
            <img
              src="/media/ropa.png"
              alt="Prendas de vestir"
              className="w-full h-full object-cover object-[80%_center]"
            />
          </div>

          <div className="relative z-20 w-[45%] flex flex-col h-full justify-between">
            <div>
              <p className="text-blue-500 text-[10px] font-bold uppercase mb-2">
                Línea Secundaria
              </p>

              <h4 className="text-[20px] font-bold text-white mb-3">
                PRENDAS DE VESTIR
              </h4>

              <p className="text-gray-400 text-[11px]">
                Moda, calidad y tendencias para mercados globales.
              </p>
            </div>

            <button
              onClick={onRopaClick}
              className="text-[10px] text-white font-bold border border-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              VER PRODUCTOS
            </button>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          custom={2}
          variants={cardAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          className="bg-[#0A111E] border border-gray-800/60 rounded-xl p-8 relative overflow-hidden h-[230px]"
        >
          <div className="absolute right-[-50px] top-0 w-[62%] h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A111E] via-[#0A111E]/50 to-transparent z-10"></div>
            <img
              src="/media/frutas.png"
              alt="Frutas"
              className="w-full h-full object-cover object-[85%_center]"
            />
          </div>

          <div className="relative z-20 w-[45%] flex flex-col h-full justify-between">
            <div>
              <p className="text-blue-500 text-[10px] font-bold uppercase mb-2">
                Línea Secundaria
              </p>

              <h4 className="text-[20px] font-bold text-white mb-3">
                FRUTAS
              </h4>

              <p className="text-gray-400 text-[11px]">
                Productos frescos y de calidad para el mundo.
              </p>
            </div>

            <button
              onClick={onFrutasClick}
              className="text-[10px] text-white font-bold border border-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              VER PRODUCTOS
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}