import React from 'react';

const Historia = () => {
  return (
    <section className="py-24 px-8 lg:px-16 bg-slate-50 font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Título pequeño */}
        <h2 
          data-aos="fade-right" 
          className="text-slate-400 uppercase tracking-[0.2em] text-xs font-bold mb-10"
        >
          Nuestra Historia
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Imágenes */}
          <div className="flex gap-4 lg:gap-6 h-[400px] sm:h-[500px] lg:h-[600px]">
            {/* Imagen 1 - Entra desde abajo primero */}
            <div 
              data-aos="fade-up" 
              className="w-2/5 h-full rounded-3xl overflow-hidden shadow-md"
            >
              <img 
                src="../media/maquina-corte.jpg" 
                alt="Proceso de fundición" 
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Imagen 2 - Entra desde abajo con un pequeño retraso */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="200" 
              className="w-3/5 h-full rounded-3xl overflow-hidden shadow-md"
            >
              <img 
                src="../media/planta-industrial.jpg" 
                alt="Planta industrial de aluminio" 
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Columna Derecha: Textos y Estadísticas */}
          <div className="flex flex-col justify-center">
            {/* Título Principal - Entra desde la izquierda */}
            <h3 
              data-aos="fade-left" 
              className="text-4xl lg:text-5xl xl:text-[3.25rem] font-black text-slate-900 leading-[1.1] mb-8"
            >
              Más de <span className="text-slate-500">29 años</span> de excelencia en aluminio industrial
            </h3>
            
            {/* Párrafos - Entran con un difuminado suave */}
            <div 
              data-aos="fade-in" 
              data-aos-delay="300" 
              className="space-y-6 text-slate-600 text-sm lg:text-base leading-relaxed mb-12 font-medium"
            >
              <p>
                Desde 1995, Aluminio Premium ha sido el referente en la fabricación y distribución de láminas de aluminio de alta calidad. Nuestra planta productiva de 25,000 m² combina tecnología de vanguardia con la experiencia de tres décadas en el sector metalúrgico.
              </p>
              <p>
                Atendemos industrias como la automotriz, aeronáutica, construcción, electrónica y packaging, ofreciendo soluciones personalizadas que cumplen con las normas más exigentes del mercado internacional.
              </p>
            </div>

            {/* Estadísticas - Hacen un efecto de zoom en cascada */}
            <div className="flex justify-between items-center pr-0 lg:pr-12">
              <div data-aos="zoom-in" data-aos-delay="400" className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">25K</p>
                <p className="text-[11px] text-slate-500 tracking-wider uppercase">m² de Planta</p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="550" className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">120</p>
                <p className="text-[11px] text-slate-500 tracking-wider uppercase">Empleados</p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="700" className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">15</p>
                <p className="text-[11px] text-slate-500 tracking-wider uppercase">Países Exportados</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Historia;