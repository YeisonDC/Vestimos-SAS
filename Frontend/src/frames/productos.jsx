import React from 'react';

const Productos = () => {
  const productos = [
    { 
      id: 1, 
      nombre: 'Lámina de Aluminio 5052-H32', 
      especificaciones: 'Espesor: 1.5mm | 1250x2500mm',
      tipo: 'Lámina Lisa', 
      img: '../media/cilindros.jpg' 
    },
    { 
      id: 2, 
      nombre: 'Lámina de Aluminio 6061-T6', 
      especificaciones: 'Espesor: 3.0mm | 1500x3000mm',
      tipo: 'Lámina Lisa', 
      img: '../media/laminas.png' 
    },
    { 
      id: 3, 
      nombre: 'Lámina Estriada 3003-H14', 
      especificaciones: 'Espesor: 2.0mm | 1220x2440mm',
      tipo: 'Lámina Estriada', 
      img: '../media/laminas_2.png' 
    },
    { 
      id: 4, 
      nombre: 'Lámina de Aluminio 1050-O', 
      especificaciones: 'Espesor: 0.8mm | 1000x2000mm',
      tipo: 'Lámina Fina', 
      img: '../media/lamina1050.jpg' 
    },
    
    { 
      id: 5, 
      nombre: 'Lámina de Aluminio 7075-T6', 
      especificaciones: 'Espesor: 5.0mm | 1000x2000mm',
      tipo: 'Lámina Estructural', 
      img: '../media/lamina7075.jpg' 
    },
    { 
      id: 6, 
      nombre: 'Lámina Perforada 5052', 
      especificaciones: 'Espesor: 1.2mm | 1200x2400mm',
      tipo: 'Lámina Perforada', 
      img: '../media/laminaperforada.jpg' 
    },
    { 
      id: 7, 
      nombre: 'Bobina de Aluminio 1100', 
      especificaciones: 'Espesor: 0.5mm | Ancho 1000mm',
      tipo: 'Lámina en Bobina', 
      img: '../media/bobina1100.jpg' 
    },
    { 
      id: 8, 
      nombre: 'Lámina Naval 5086-H116', 
      especificaciones: 'Espesor: 4.0mm | 1500x3000mm',
      tipo: 'Lámina Lisa', 
      img: '../media/laminanaval.jpg' 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* Navbar - Fondo claro */}
      <nav className="flex justify-between items-center px-8 lg:px-16 py-6 border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 p-2 rounded-full">
            <span className="text-white font-bold px-1">A</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none text-slate-900">ALUMINIO</h1>
            <p className="text-[10px] text-slate-500 tracking-widest font-medium">PREMIUM</p>
          </div>
        </div>
        
        <ul className="hidden lg:flex gap-8 text-sm font-medium text-slate-600">
          <li className="hover:text-slate-900 cursor-pointer transition">Inicio</li>
          <li className="text-slate-900 font-bold cursor-pointer">Productos</li>
          <li className="hover:text-slate-900 cursor-pointer transition">Características</li>
          <li className="hover:text-slate-900 cursor-pointer transition">Nosotros</li>
          <li className="hover:text-slate-900 cursor-pointer transition">Contacto</li>
        </ul>

        <button className="bg-slate-800 hover:bg-slate-700 px-6 py-2 rounded-full text-white font-bold text-sm transition-all shadow-md">
          Cotizar Ahora
        </button>
      </nav>

      {/* Header - Mismas proporciones, colores invertidos */}
      <header className="px-8 lg:px-16 py-16 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-xl">
          <h2 className="text-slate-500 uppercase tracking-[0.15em] text-sm font-bold mb-3">
            Catálogo de Productos
          </h2>
          <h3 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
            Nuestros <span className="text-slate-500">Productos</span>
          </h3>
        </div>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-lg text-right md:text-left">
          Amplia gama de distintas aleaciones de aluminio en diferentes espesores y acabados para satisfacer las necesidades más exigentes de la industria.
        </p>
      </header>

      {/* Grid de Productos - Tarjetas Gigantes */}
      <section className="px-8 lg:px-16 pb-24 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {productos.map((prod) => (
          <div 
            key={prod.id} 
            className="group relative overflow-hidden rounded-2xl bg-slate-200 aspect-[4/5] sm:aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Etiqueta Superior Derecha (Píldora) */}
            <div className="absolute top-5 right-5 z-10 bg-white/90 backdrop-blur-sm text-slate-800 font-bold text-xs px-4 py-1.5 rounded-full shadow-sm">
              {prod.tipo}
            </div>
            
            {/* Imagen de fondo ocupando toda la tarjeta */}
            <img 
              src={prod.img} 
              alt={prod.nombre} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Degradado oscuro en la parte inferior para que las letras resalten */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>

            {/* Textos inferiores iguales a la imagen */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h4 className="text-white text-xl font-bold mb-1">
                {prod.nombre}
              </h4>
              <p className="text-slate-300 text-sm font-light">
                {prod.especificaciones}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Productos;