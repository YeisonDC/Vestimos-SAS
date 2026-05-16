import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative py-24 bg-[#050816] overflow-hidden"
    >
      {/* fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[#050816]/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Nosotros
          </h2>

          <p className="mt-4 text-gray-400 text-sm max-w-2xl mx-auto">
            Construimos relaciones comerciales internacionales basadas en confianza, calidad y crecimiento sostenible.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* MISIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-[#0A111E] border border-gray-800/60 rounded-2xl p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Target className="text-blue-400 w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Misión
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Facilitar el comercio internacional conectando empresas con oportunidades globales,
              ofreciendo soluciones eficientes en importación y exportación de productos como aluminio,
              textiles y frutas, garantizando calidad, cumplimiento y crecimiento sostenible para nuestros clientes.
            </p>
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-[#0A111E] border border-gray-800/60 rounded-2xl p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Eye className="text-blue-400 w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Visión
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Ser una comercializadora internacional líder en Latinoamérica,
              reconocida por su eficiencia logística, integridad empresarial y capacidad de
              conectar mercados globales, impulsando el crecimiento de nuestros aliados estratégicos.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}