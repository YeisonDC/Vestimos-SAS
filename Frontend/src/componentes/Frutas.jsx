import { motion } from "framer-motion";

const Frutas = () => {
  const frutas = [
    {
      nombre: "Piña",
      descripcion:
        "Exportación de piña fresca seleccionada bajo estándares internacionales.",
      imagen: "/media/pina.png",
      tags: ["Fresh", "Export", "Premium"],
    },

    {
      nombre: "Aguacate",
      descripcion:
        "Productos agrícolas de alta calidad para mercados globales.",
      imagen: "/media/aguacate.png",
      tags: ["Hass", "Internacional", "Calidad"],
    },

    {
      nombre: "Mango",
      descripcion:
        "Frutas tropicales con procesos de selección y logística especializada.",
      imagen: "/media/mango.png",
      tags: ["Tropical", "Exportación", "Fresh"],
    },

    {
      nombre: "Mix Frutal",
      descripcion:
        "Comercialización de frutas frescas para distribución internacional.",
      imagen: "/media/frutas-mix.png",
      tags: ["Global", "Natural", "Logística"],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-[#020817] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >

        <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4">
          Línea Comercial
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Frutas Frescas
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Comercialización y exportación de frutas frescas seleccionadas
          bajo estándares internacionales de calidad.
        </p>

      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">

        {frutas.map((item, index) => (

          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-[#081120] rounded-3xl overflow-hidden border border-blue-500/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
          >

            <div className="overflow-hidden h-[240px]">

              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-7">

              <h3 className="text-2xl font-bold mb-4">
                {item.nombre}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.descripcion}
              </p>

              <div className="flex flex-wrap gap-3">

                {item.tags.map((tag, tagIndex) => (

                  <span
                    key={tagIndex}
                    className="text-xs bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-300"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Frutas;