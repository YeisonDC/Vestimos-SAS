import React from 'react';
import { motion } from 'framer-motion';

export default function Servicios() {

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6 }
    })
  };

  const servicios = [
    {
      title: "ASESORÍA EN COMERCIO EXTERIOR",
      text: "Te guiamos en cada paso del proceso internacional.",
      svg: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      )
    },
    {
      title: "IMPORTACIONES",
      text: "Gestionamos tus compras internacionales con eficiencia y seguridad.",
      svg: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      )
    },
    {
      title: "EXPORTACIONES",
      text: "Llevamos tus productos a nuevos mercados globales.",
      svg: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      )
    },
    {
      title: "ACOMPAÑAMIENTO LOGÍSTICO",
      text: "Soluciones logísticas integrales puerta a puerta.",
      svg: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      )
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-10 pb-16">

      <motion.h5
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center text-blue-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-10"
      >
        Nuestros Servicios
      </motion.h5>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {servicios.map((s, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            whileHover={{ y: -4 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 border border-gray-700/80 rounded-full flex-shrink-0 flex items-center justify-center bg-[#0A111E] text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {s.svg}
              </svg>
            </div>

            <div>
              <h6 className="font-bold text-[11px] tracking-wider mb-1.5">
                {s.title}
              </h6>

              <p className="text-gray-400 text-[11px] leading-relaxed">
                {s.text}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}