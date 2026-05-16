import { motion } from "framer-motion";
import Banner_final from "./Banner_final";

const AluminioAleaciones = ({
  irACotizar,
  onAleacionesClick,
  onRopaClick,
  onFrutasClick,
}) => {
  const aleaciones = [
    {
      serie: "Serie 4000",
      composicion: "Aluminio + Silicio",
      descripcion:
        "Aleaciones utilizadas en procesos térmicos, soldadura y aplicaciones industriales especializadas.",
      aplicaciones: ["Soldadura", "Brazing", "Térmico"],
      badge: "Industrial",
      imagen: "/media/serie-4000.png",
    },
    {
      serie: "Serie 6000",
      composicion: "Aluminio + Magnesio + Silicio",
      descripcion:
        "Serie altamente versátil utilizada en construcción, perfiles y soluciones estructurales.",
      aplicaciones: ["Construcción", "Perfiles", "Transporte"],
      badge: "Versátil",
      imagen: "/media/serie-6000.png",
    },
    {
      serie: "Serie 7000",
      composicion: "Aluminio + Zinc",
      descripcion:
        "Aleaciones de alta resistencia utilizadas en aplicaciones industriales y estructurales exigentes.",
      aplicaciones: ["Alta resistencia", "Industrial", "Estructural"],
      badge: "Premium",
      imagen: "/media/serie-7000.png",
    },
    {
      serie: "Serie 8000",
      composicion: "Aluminio + Elementos Especiales",
      descripcion:
        "Aleaciones técnicas desarrolladas para aplicaciones específicas y procesos industriales avanzados.",
      aplicaciones: ["Industrial", "Especializado", "Técnico"],
      badge: "Especial",
      imagen: "/media/serie-8000.png",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -55 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 55 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const animationSettings = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <>
      <section className="w-full overflow-hidden bg-[#020817] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_35%)] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <motion.div
          variants={fadeUp}
          {...animationSettings}
          className="relative max-w-7xl mx-auto text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4">
            Producto Principal
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase mb-6">
            Aluminio y Aleaciones
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Comercializamos aluminio y aleaciones industriales para sectores
            manufactureros, estructurales y de comercio internacional.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div
            variants={fadeLeft}
            {...animationSettings}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-blue-500/20 blur-2xl rounded-3xl animate-pulse"></div>

            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.18)]">
              <img
                src="/media/serie-7000.png"
                alt="Aluminio industrial"
                className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[480px] object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} {...animationSettings}>
            <p className="text-blue-400 uppercase tracking-[3px] font-semibold mb-4">
              Soluciones Industriales
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Materiales diseñados para alto rendimiento
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              El aluminio es uno de los materiales más utilizados en la industria
              moderna gracias a su resistencia, ligereza y versatilidad.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Trabajamos con aleaciones de las series 4000, 6000, 7000 y 8000,
              utilizadas en sectores estructurales, manufactureros, logísticos e
              industriales.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                ["Alta resistencia", "Excelente desempeño para aplicaciones industriales."],
                ["Ligero y eficiente", "Reduce peso estructural manteniendo rendimiento."],
                ["Uso internacional", "Material ampliamente utilizado en mercados globales."],
                ["Versatilidad", "Aplicaciones industriales, técnicas y estructurales."],
              ].map(([title, text], index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-[#0F172A]/80 border border-white/5 rounded-2xl p-5 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1"
                >
                  <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto mt-28">
          <motion.div
            variants={fadeUp}
            {...animationSettings}
            className="text-center mb-14"
          >
            <p className="text-blue-400 uppercase tracking-[3px] font-semibold mb-3">
              Aplicaciones
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Industrias donde se utiliza
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              ["Construcción", "Estructuras, fachadas y soluciones arquitectónicas."],
              ["Manufactura", "Piezas industriales, maquinaria y producción técnica."],
              ["Transporte", "Componentes ligeros para sistemas de movilidad."],
              ["Comercio Exterior", "Distribución y comercialización internacional."],
            ].map(([title, text], index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#0F172A]/90 rounded-2xl p-6 border border-white/5 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_45px_rgba(37,99,235,0.18)]"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto mt-32">
          <motion.div
            variants={fadeUp}
            {...animationSettings}
            className="text-center mb-16"
          >
            <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4">
              Catálogo Industrial
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Series de Aleaciones
            </h2>

            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>

            <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Aleaciones clasificadas por composición, propiedades mecánicas y
              aplicaciones industriales.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 items-stretch"
          >
            {aleaciones.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative bg-[#081120] rounded-3xl overflow-hidden border border-blue-500/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(37,99,235,0.18)] flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-[220px] sm:h-[240px] shrink-0">
                  <img
                    src={item.imagen}
                    alt={item.serie}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-transparent to-transparent"></div>

                  <div className="absolute top-5 left-5 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-4 py-1 rounded-full text-sm text-blue-300">
                    {item.badge}
                  </div>
                </div>

                <div className="relative p-7 flex flex-col flex-1">
                  <p className="text-blue-400 text-sm uppercase tracking-[2px] font-semibold mb-2">
                    {item.composicion}
                  </p>

                  <h3 className="text-2xl font-bold mb-4">{item.serie}</h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-7">
                    {item.aplicaciones.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={irACotizar}
                    className="w-full mt-auto py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-white font-semibold transition-all duration-500 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    Solicitar información
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          {...animationSettings}
          className="relative max-w-7xl mx-auto mt-24"
        >
          <div className="bg-gradient-to-r from-[#0F172A] to-[#111827] border border-blue-500/20 rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)]">
            <p className="text-blue-400 uppercase tracking-[3px] font-semibold mb-4">
              Calidad Internacional
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Soluciones industriales con estándares globales
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              Ofrecemos materiales confiables para empresas que buscan calidad,
              logística eficiente y acompañamiento comercial internacional.
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

export default AluminioAleaciones;