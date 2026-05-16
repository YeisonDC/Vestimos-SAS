import { motion } from "framer-motion";
import Banner_final from "./Banner_final";

const Ropa = ({
  irACotizar,
  onAleacionesClick,
  onRopaClick,
  onFrutasClick,
}) => {
  return (
    <>
      <section className="relative w-full bg-[#020817] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">

        {/* EFECTOS DE FONDO */}
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
            Línea Comercial
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Exportación Prendas de Vestir
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Comercializamos y exportamos prendas de vestir para mercados
            nacionales e internacionales, con enfoque en calidad,
            abastecimiento y soluciones comerciales globales.
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
                src="/media/ropa-banner.png"
                alt="Exportación de ropa"
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
              Comercio Internacional Textil
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Soluciones textiles para mercados internacionales
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              En VESTIMOS JB impulsamos la exportación de prendas de vestir con soluciones confiables, 
              ágiles y adaptadas a las necesidades de cada cliente. 
              Conectamos la calidad y el talento de la industria textil con mercados nacionales e internacionales, 
              garantizando procesos eficientes, cumplimiento en cada entrega y altos estándares en cada prenda.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Trabajamos con procesos orientados a calidad comercial,
              logística, abastecimiento y acompañamiento para compradores
              y distribuidores internacionales.
            </p>

            {/* CARDS INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#081120]/90 border border-blue-500/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Exportación Textil
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Comercialización de prendas para mercados globales.
                </p>
              </div>

              <div className="bg-[#081120]/90 border border-blue-500/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Calidad Comercial
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Productos orientados a distribución y presentación profesional.
                </p>
              </div>

              <div className="bg-[#081120]/90 border border-blue-500/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Distribución Global
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Soluciones textiles para diferentes mercados internacionales.
                </p>
              </div>

              <div className="bg-[#081120]/90 border border-blue-500/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Comercio Exterior
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Procesos orientados a logística y exportación internacional.
                </p>
              </div>

            </div>

            {/* BOTÓN */}
            

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
          <div className="bg-gradient-to-r from-[#0F172A] to-[#111827] border border-blue-500/20 rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)]">

            <p className="text-blue-400 uppercase tracking-[3px] font-semibold mb-4">
              Abastecimiento Internacional
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Soluciones textiles con enfoque global
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              Acompañamos procesos de comercialización y exportación
              para empresas que buscan soluciones textiles confiables.
            </p>

            <button
              onClick={irACotizar}
              className="px-6 sm:px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-500 font-semibold shadow-[0_0_20px_rgba(37,99,235,0.30)]"
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

export default Ropa;