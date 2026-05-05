import React from 'react';
import ReactCountryFlag from "react-country-flag";

const Exportaciones = () => {
  // Datos de los países usando el código ISO oficial para que la librería muestre la bandera exacta
  const paises = [
    { id: 1, pais: 'Ecuador', texto: 'Láminas en Ecuador', codigo: 'EC' },
    { id: 2, pais: 'Perú', texto: 'Láminas en Perú', codigo: 'PE' },
    { id: 3, pais: 'Bolivia', texto: 'Láminas en Bolivia', codigo: 'BO' },
    { id: 4, pais: 'Rep. Dominicana', texto: 'Láminas en Rep. Dominicana', codigo: 'DO' },
    { id: 5, pais: 'Honduras', texto: 'Láminas en Honduras', codigo: 'HN' },
  ];

  return (
    <section className="py-24 px-8 lg:px-16 bg-slate-200 font-sans relative overflow-hidden">
      
      {/* Fondo industrial sutil */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale">
        <img 
          src="../media/almacen.png" 
          alt="Textura industrial" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor Principal (Tarjeta blanca tipo cristal) */}
      <div className="max-w-[1400px] mx-auto relative z-10 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Columna Izquierda: Textos y Banderas */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            
            <h2 data-aos="fade-right" className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-6">
              ¿Aún no sabes cuál es la mejor <span className="text-slate-500">lámina</span> para tu negocio?
            </h2>
            
            <p data-aos="fade-right" data-aos-delay="100" className="text-slate-600 mb-8 leading-relaxed font-medium">
              Hemos creado un contenido para ayudarte a elegir, en él podrás encontrar usos para diferentes <span className="text-slate-900 font-bold underline decoration-slate-400 underline-offset-4">clases de aleaciones</span> según su material, funciones o medidas, y recomendaciones para solucionar las necesidades relacionadas con el uso del aluminio en diversas industrias.
            </p>
            
            <p data-aos="fade-right" data-aos-delay="200" className="text-slate-900 font-bold mb-10 text-lg">
              Esta información seguro te será muy útil. ¡Léenos!
            </p>

            {/* Cuadrícula de Países */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
              {paises.map((item, index) => (
                <div 
                  key={item.id} 
                  data-aos="fade-up" 
                  data-aos-delay={300 + (index * 100)}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Espacio para la bandera usando la librería */}
                  <div className="w-12 h-8 bg-slate-200 rounded-sm overflow-hidden mb-3 shadow-sm border border-slate-300 group-hover:shadow-md transition-shadow">
                    <ReactCountryFlag 
                      countryCode={item.codigo} 
                      svg 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      // Mantenemos tu efecto: medio gris por defecto, a todo color al pasar el ratón
                      className="grayscale-[50%] group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Enlace con flecha */}
                  <div className="flex items-center text-slate-800 font-bold text-xs sm:text-sm group-hover:text-slate-500 transition-colors">
                    <span>{item.texto}</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Imagen del usuario en la laptop */}
          <div data-aos="fade-left" data-aos-delay="400" className="relative hidden lg:block bg-slate-100 min-h-[500px]">
            <img 
              src="../media/usuario-laptop.jpg" 
              alt="Catálogo en línea" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" 
            />
            {/* Degradado para fusionar suavemente la foto con el área blanca de la izquierda */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/90 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Exportaciones;