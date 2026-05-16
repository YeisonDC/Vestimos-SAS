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
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const cards = [
    {
      title: "ALUMINIO Y ALEACIONES",
      desc: "Lingotes de aluminio de alta pureza y aleaciones para industrias exigentes.",
      img: "/media/Lingote.png",
      btn: onAleacionesClick,
      label: "Producto Principal",
    },
    {
      title: "PRENDAS DE VESTIR",
      desc: "Moda, calidad y tendencias para mercados globales.",
      img: "/media/ropa.png",
      btn: onRopaClick,
      label: "Línea Secundaria",
    },
    {
      title: "FRUTAS",
      desc: "Productos frescos y de calidad para el mundo.",
      img: "/media/frutas.png",
      btn: onFrutasClick,
      label: "Línea Secundaria",
    },
  ];

  return (
    <section
      id="productos"
      className="w-full max-w-[1900px] mx-auto px-6 md:px-12 py-10 scroll-mt-28"
    >

      <div
        className="
          grid grid-cols-1 md:grid-cols-3 gap-3

          max-md:flex
          max-md:overflow-x-auto
          max-md:gap-3
          max-md:scroll-smooth
          max-md:-mx-6
          max-md:px-4
          scrollbar-hide
        "
      >

        {cards.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            className="
              bg-[#0A111E]
              border border-gray-800/60
              rounded-xl
              p-8
              relative
              overflow-hidden
              h-[230px]

              max-md:min-w-[240px]
              max-md:w-[240px]
              max-md:flex-shrink-0
              max-md:p-5
            "
          >

            {/* IMAGE */}
            <div className="absolute right-[-50px] top-0 w-[62%] h-full z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A111E] via-[#0A111E]/50 to-transparent z-10"></div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover object-[85%_center]"
              />
            </div>

            {/* TEXT */}
            <div className="relative z-20 w-[55%] flex flex-col h-full justify-between">

              <div>
                <p className="text-blue-500 text-[9px] font-bold uppercase mb-2">
                  {item.label}
                </p>

                <h4 className="text-[16px] leading-tight font-bold text-white mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-[9px] leading-tight">
                  {item.desc}
                </p>
              </div>

              <button
                onClick={item.btn}
                className="text-[9px] text-white font-bold border border-gray-700 px-3 py-2 rounded hover:bg-gray-800 transition"
              >
                VER PRODUCTOS
              </button>
            </div>

          </motion.div>
        ))}

      </div>

      {/* HIDE SCROLLBAR */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}