import React from 'react';
import { Globe, Handshake, Package, ShieldCheck, Users } from 'lucide-react';

export default function Principal() {
  return (
    <div className="font-['Montserrat',sans-serif]">
      
      {/* 2. HERO SECTION */}
      <header className="relative w-full h-[490px] flex items-center bg-[#050914] overflow-hidden">
        
        {/* Contenedor de la imagen */}
        <div 
          className="absolute right-0 top-0 h-full w-[60%] z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/media/exportacion2.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-[#050914]/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050914] to-transparent"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5">
          <div className="max-w-2xl">
            <p className="text-[#3b82f6] text-[11px] font-bold tracking-[0.2em] mb-2 uppercase">Comercializadora Internacional</p>
            
            {/* TÍTULO CORREGIDO */}
            <h2 className="leading-[1.1] mb-3">
              {/* Capa 1: Blanca y "gorda" (font-black) */}
              <span className="whitespace-nowrap text-gray-100 font-semibold text-5xl lg:text-[45px] tracking-tight drop-shadow-md">
                CONECTAMOS EMPRESAS
              </span>
              <br />
              {/* Capa 2: Gris metalizado y tipografía más "fina" (font-medium) */}
              <span className="
                font-medium 
                text-[40px] lg:text-[39px] 
                tracking-tight 
                text-transparent 
                bg-clip-text 
                bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600
                drop-shadow-sm
              ">
                Y VENDEMOS PRODUCTOS<br />DE LA MEJOR CALIDAD
              </span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-md pr-10 font-medium">
              Somos una comercializadora internacional especializada en la importación y exportación de productos de alta calidad. Conectamos oportunidades, generamos valor y llevamos lo mejor de colombia a tu empresa.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-[#1e40af] hover:bg-blue-600 px-8 py-3.5 rounded text-xs font-bold tracking-wider transition flex items-center gap-2 text-white">
                CONOCE MÁS <span>→</span>
              </button>
              <button className="border border-gray-600 hover:bg-white/5 px-8 py-3.5 rounded text-xs font-bold tracking-wider transition flex items-center gap-2 text-white">
                NUESTROS SERVICIOS <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. BARRA DE ESTADÍSTICAS */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-15 -mt-10">
        <div className="bg-[#0A111E] border border-gray-800/80 rounded-xl flex flex-wrap lg:flex-nowrap items-center justify-between p-6 shadow-2xl shadow-black/50 divide-x divide-gray-800/60">
          
          <div className="flex items-center gap-4 px-6 w-full lg:w-auto">
            <div className="w-12 h-12 border border-gray-700/50 rounded-full flex items-center justify-center bg-gray-800/20">
              <Globe className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white tracking-widest">30+</h3>
              <p className="text-[11px] text-gray-400 leading-tight mt-1 font-medium">Países en nuestra<br/>red comercial</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 w-full lg:w-auto">
            <div className="w-12 h-12 border border-gray-700/50 rounded-full flex items-center justify-center bg-gray-800/20">
              <Handshake className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white tracking-widest">500+</h3>
              <p className="text-[11px] text-gray-400 leading-tight mt-1 font-medium">Clientes<br/>satisfechos</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 w-full lg:w-auto">
            <div className="w-12 h-12 border border-gray-700/50 rounded-full flex items-center justify-center bg-gray-800/20">
              <Package className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white tracking-widest">1000+</h3>
              <p className="text-[11px] text-gray-400 leading-tight mt-1 font-medium">Operaciones<br/>exitosas</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 w-full lg:w-auto">
            <div className="w-12 h-12 border border-gray-700/50 rounded-full flex items-center justify-center bg-gray-800/20">
              <ShieldCheck className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white tracking-widest">15+</h3>
              <p className="text-[11px] text-gray-400 leading-tight mt-1 font-medium">Años de experiencia<br/>en el mercado</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 w-full lg:w-auto">
            <div className="w-12 h-12 border border-gray-700/50 rounded-full flex items-center justify-center bg-gray-800/20">
              <Users className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white tracking-wider">Equipo experto</h3>
              <p className="text-[11px] text-gray-400 leading-tight mt-1 font-medium">Comprometidos con<br/>tu crecimiento</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}