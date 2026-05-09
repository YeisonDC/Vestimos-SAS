import React from 'react';

export default function TarjetasProductos() {
  return (
    <section className="w-full max-w-7xl mx-auto px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: ALUMINIO */}
        <div className="bg-[#0A111E] border border-gray-800/60 rounded-xl p-8 relative overflow-hidden h-[300px]">
          
          {/* Contenedor de la Imagen y el Degradado (Fondo) */}
          <div className="absolute right-0 top-0 w-[60%] h-full z-0">
            {/* Este degradado es el que hace que la imagen se funda perfecto con la tarjeta */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A111E] from-10% via-[#0A111E]/80 to-transparent z-10"></div>
            <img 
              src="https://ibrame.com.br/wp-content/uploads/2022/10/industria-de-metais-%E2%80%93-ibrame-121.jpg" 
              alt="Aluminio" 
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* Contenido de Texto (Frente) */}
          <div className="relative z-20 w-[65%] flex flex-col h-full justify-between">
            <div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-wider mb-2">Producto Principal</p>
              <h4 className="text-[20px] font-bold leading-[1.1] mb-3 text-white">ALUMINIO<br/>Y ALEACIONES</h4>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-[95%]">Lingotes de aluminio de alta pureza y aleaciones para industrias exigentes.</p>
            </div>
            <button className="text-[10px] text-white font-bold tracking-[0.1em] border border-gray-700 w-fit px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition">
              VER PRODUCTOS <span>→</span>
            </button>
          </div>
        </div>

        {/* Card 2: ROPA */}
        <div className="bg-[#0A111E] border border-gray-800/60 rounded-xl p-8 relative overflow-hidden h-[300px]">
          
          <div className="absolute right-0 top-0 w-[60%] h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A111E] from-10% via-[#0A111E]/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop" 
              alt="Ropa" 
              className="w-full  h-full object-cover object-right"
            />
          </div>

          <div className="relative z-20 w-[65%] flex flex-col h-full justify-between">
            <div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-wider mb-2">Línea Secundaria</p>
              <h4 className="text-[26px] font-bold leading-[1.1] mb-3 text-white">ROPA</h4>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-[95%]">Moda, calidad y tendencias para mercados globales.</p>
            </div>
            <button className="text-[10px] text-white font-bold tracking-[0.1em] border border-gray-700 w-fit px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition">
              VER PRODUCTOS <span>→</span>
            </button>
          </div>
        </div>

        {/* Card 3: FRUTAS */}
        <div className="bg-[#0A111E] border border-gray-800/60 rounded-xl p-8 relative overflow-hidden h-[300px]">
          
          <div className="absolute right-0 top-0 w-[60%] h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A111E] from-10% via-[#0A111E]/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop" 
              alt="Frutas" 
              className="w-full h-full object-cover object-right"
            />
          </div>

          <div className="relative z-20 w-[65%] flex flex-col h-full justify-between">
            <div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-wider mb-2">Línea Secundaria</p>
              <h4 className="text-[26px] font-bold leading-[1.1] mb-3 text-white">FRUTAS</h4>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-[95%]">Productos frescos y de calidad para el mundo.</p>
            </div>
            <button className="text-[10px] text-white font-bold tracking-[0.1em] border border-gray-700 w-fit px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition">
              VER PRODUCTOS <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}