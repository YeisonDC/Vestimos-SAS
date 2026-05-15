import { motion } from "framer-motion";
import Banner_final from "./Banner_final";

const Frutas = ({
  irACotizar,
  onAleacionesClick,
  onRopaClick,
  onFrutasClick,
}) => {
  return (
    <>
      <section className="relative w-full bg-[#020817] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">

        {/* EFECTOS */}
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4">
            Línea Agrícola
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Exportación de Frutas
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Comercializamos y exportamos frutas frescas para mercados
            nacionales e internacionales, garantizando calidad,
            logística eficiente y procesos confiables de distribución.
          </p>
        </motion.div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-blue-500/10 blur-3xl rounded-3xl"></div>

            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 shadow-[0_0_45px_rgba(37,99,235,0.15)]">
              <img
                src="/media/frutas-banner.png"
                alt="Exportación de frutas"
                className="w-full h-[320px] sm:h-[420px] object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* INFORMACIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4">
              Comercio Internacional Agrícola
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Soluciones agrícolas para mercados globales
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              Nuestra línea agrícola está enfocada en la comercialización
              y exportación de frutas frescas para diferentes mercados
              nacionales e internacionales.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Trabajamos con procesos orientados a conservación,
              calidad comercial, abastecimiento y logística para
              compradores y distribuidores internacionales.
            </p>

            {/* CARDS INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#081120]/90 border border-blue-500/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Exportación Agrícola
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Comercialización de frutas para mercados internacionales.
                </p>
              </div>

              <div className="bg-[#081120]/90 border border-blue-500/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Calidad Premium
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Productos frescos bajo estándares de calidad internacional.
                </p>
              </div>

              <div className="bg-[#081120]/90 border border-blue-500/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Distribución Global
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Soluciones agrícolas para diferentes mercados globales.
                </p>
              </div>

              <div className="bg-[#081120]/90 border border-blue-500/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Logística Internacional
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Procesos orientados a conservación y exportación eficiente.
                </p>
              </div>

            </div>

            
            

          </motion.div>
        </div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto mt-24"
        >
          <div className="bg-gradient-to-r from-[#0F172A] to-[#111827] border border-blue-500/20 rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)]">

            <p className="text-blue-400 uppercase tracking-[3px] font-semibold mb-4">
              Exportación Internacional
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Frutas frescas para mercados globales
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Acompañamos procesos de comercialización y exportación
              agrícola para empresas y compradores internacionales.
            </p>
            <button
             onClick={irACotizar}
             className="mt-8 px-6 sm:px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-500 font-semibold shadow-[0_0_20px_rgba(37,99,235,0.30)]"
            >
              Solicitar cotización
           </button>

          </div>
        </motion.div>

      </section>

      <Banner_final
        onAleacionesClick={onAleacionesClick}
        onRopaClick={onRopaClick}
        onFrutasClick={onFrutasClick}
      />
    </>
  );
};

export default Frutas;