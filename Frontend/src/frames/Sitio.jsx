import React from 'react';

export default function VestimosApp() {
  return (
    <div className="min-h-screen bg-[#050B14] text-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-[#050B14]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-600 rounded flex items-center justify-center transform -skew-x-12">
            <span className="text-2xl font-black text-[#050B14] italic">V</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-widest leading-none">VESTIMOS SAS</h1>
            <p className="text-[9px] text-blue-500 tracking-widest mt-1">COMERCIALIZADORA INTERNACIONAL</p>
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-wider text-gray-400">
          <li className="text-blue-500 border-b-2 border-blue-500 pb-1 cursor-pointer">INICIO</li>
          <li className="hover:text-white transition cursor-pointer">NOSOTROS</li>
          <li className="hover:text-white transition cursor-pointer flex items-center gap-1">
            PRODUCTOS 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </li>
          <li className="hover:text-white transition cursor-pointer">SERVICIOS</li>
          <li className="hover:text-white transition cursor-pointer">COMERCIO EXTERIOR</li>
          <li className="hover:text-white transition cursor-pointer">CONTACTO</li>
        </ul>

        <button className="hidden md:flex items-center gap-2 border border-gray-600 hover:border-white px-5 py-2 rounded text-[11px] font-bold tracking-wider transition">
          COTIZAR AHORA <span className="text-lg leading-none">→</span>
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-[80vh] flex items-center px-8 lg:px-16 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
            alt="Puerto industrial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <p className="text-blue-500 text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Comercializadora Internacional</p>
          <h2 className="text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            CONECTAMOS EMPRESAS<br />
            <span className="text-gray-300">Y VENDEMOS PRODUCTOS<br />DE LA MEJOR CALIDAD</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
            Somos una comercializadora internacional especializada en la importación y exportación de productos de alta calidad. Conectamos oportunidades, generamos valor y llevamos lo mejor del mundo a tu empresa.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#1e40af] hover:bg-blue-600 px-6 py-3 rounded flex items-center gap-2 text-xs font-bold tracking-wider transition">
              CONOCE MÁS <span>→</span>
            </button>
            <button className="border border-gray-600 hover:bg-white/5 px-6 py-3 rounded flex items-center gap-2 text-xs font-bold tracking-wider transition backdrop-blur-sm">
              NUESTROS SERVICIOS <span>→</span>
            </button>
          </div>
        </div>
      </header>

      {/* STATS SECTION */}
      <section className="relative z-20 -mt-10 px-8 mx-auto">
        <div className="bg-[#0A1220] border border-gray-800 rounded-lg grid grid-cols-2 md:grid-cols-5 gap-6 p-8 divide-x divide-gray-800">
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-1">30+</h3>
            <p className="text-[10px] text-gray-500">Países en nuestra<br/>red comercial</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-1">500+</h3>
            <p className="text-[10px] text-gray-500">Clientes<br/>satisfechos</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-1">1000+</h3>
            <p className="text-[10px] text-gray-500">Operaciones<br/>exitosas</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-1">15+</h3>
            <p className="text-[10px] text-gray-500">Años de experiencia<br/>en el mercado</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h3 className="text-sm font-bold mt-2">Equipo experto</h3>
            <p className="text-[10px] text-gray-500">Comprometidos con<br/>tu crecimiento</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS CARDS */}
      <section className="px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#0A1220] border border-gray-800 rounded-lg p-8 relative overflow-hidden group hover:border-gray-600 transition">
            <div className="relative z-10 w-2/3">
              <p className="text-blue-500 text-[9px] font-bold uppercase mb-2">Producto Principal</p>
              <h4 className="text-2xl font-bold leading-tight mb-3">ALUMINIO<br/>Y ALEACIONES</h4>
              <p className="text-gray-400 text-xs mb-8">Lingotes de aluminio de alta pureza y aleaciones para industrias exigentes.</p>
              <button className="text-[10px] font-bold tracking-wider border-b border-gray-600 pb-1 flex items-center gap-2 group-hover:text-blue-400 group-hover:border-blue-400 transition">
                VER PRODUCTOS <span>→</span>
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=400&auto=format&fit=crop" 
              alt="Aluminio" 
              className="absolute -right-10 -bottom-10 w-64 object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition duration-500 rounded"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#0A1220] border border-gray-800 rounded-lg p-8 relative overflow-hidden group hover:border-gray-600 transition">
            <div className="relative z-10 w-2/3">
              <p className="text-blue-500 text-[9px] font-bold uppercase mb-2">Línea Secundaria</p>
              <h4 className="text-2xl font-bold leading-tight mb-3">ROPA</h4>
              <p className="text-gray-400 text-xs mb-8">Moda, calidad y tendencias para mercados globales.</p>
              <button className="text-[10px] font-bold tracking-wider border-b border-gray-600 pb-1 flex items-center gap-2 group-hover:text-blue-400 group-hover:border-blue-400 transition">
                VER PRODUCTOS <span>→</span>
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop" 
              alt="Ropa" 
              className="absolute -right-8 -bottom-8 w-56 object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition duration-500 rounded"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-[#0A1220] border border-gray-800 rounded-lg p-8 relative overflow-hidden group hover:border-gray-600 transition">
            <div className="relative z-10 w-2/3">
              <p className="text-blue-500 text-[9px] font-bold uppercase mb-2">Línea Secundaria</p>
              <h4 className="text-2xl font-bold leading-tight mb-3">FRUTAS</h4>
              <p className="text-gray-400 text-xs mb-8">Productos frescos y de calidad para el mundo.</p>
              <button className="text-[10px] font-bold tracking-wider border-b border-gray-600 pb-1 flex items-center gap-2 group-hover:text-blue-400 group-hover:border-blue-400 transition">
                VER PRODUCTOS <span>→</span>
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop" 
              alt="Frutas" 
              className="absolute -right-10 -bottom-10 w-64 object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition duration-500 rounded"
            />
          </div>

        </div>
      </section>

      {/* SERVICES BOTTOM BAR */}
      <section className="px-8 pb-12">
        <h5 className="text-center text-blue-500 text-xs font-bold tracking-widest uppercase mb-8">Nuestros Servicios</h5>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 border border-gray-700 rounded flex-shrink-0 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h6 className="font-bold text-[11px] mb-1">ASESORÍA EN COMERCIO EXTERIOR</h6>
              <p className="text-gray-500 text-[10px]">Te guiamos en cada paso del proceso internacional.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 border border-gray-700 rounded flex-shrink-0 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
            <div>
              <h6 className="font-bold text-[11px] mb-1">IMPORTACIONES</h6>
              <p className="text-gray-500 text-[10px]">Gestionamos tus compras internacionales con eficiencia y seguridad.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 border border-gray-700 rounded flex-shrink-0 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            </div>
            <div>
              <h6 className="font-bold text-[11px] mb-1">EXPORTACIONES</h6>
              <p className="text-gray-500 text-[10px]">Llevamos tus productos a nuevos mercados globales.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 border border-gray-700 rounded flex-shrink-0 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
            </div>
            <div>
              <h6 className="font-bold text-[11px] mb-1">ACOMPAÑAMIENTO LOGÍSTICO</h6>
              <p className="text-gray-500 text-[10px]">Soluciones logísticas integrales puerta a puerta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-black/50 transition-transform hover:scale-110 z-50 cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 21.002a9.76 9.76 0 0 1-4.965-1.354l-.356-.211-3.687.966.985-3.593-.231-.368A9.73 9.73 0 0 1 2.27 12.04c0-5.38 4.38-9.762 9.763-9.762 2.607 0 5.06.1016 6.904 2.86 1.844 1.843 2.86 4.296 2.86 6.903-.001 5.38-4.381 9.761-9.766 9.761zm-4.46-2.585l.31.183a7.804 7.804 0 0 0 4.15 1.182c4.298 0 7.8-3.502 7.8-7.801 0-2.083-.81-4.041-2.28-5.513-1.472-1.472-3.432-2.283-5.518-2.283-4.299 0-7.8 3.502-7.8 7.801 0 1.455.393 2.87 1.14 4.108l.2.32-.58 2.115 2.164-.567c-.001-.001-.001-.001-.001 0zm8.006-5.834c-.218-.11-1.29-.637-1.488-.71-.198-.073-.343-.11-.488.11-.145.218-.564.71-.692.855-.126.145-.253.164-.471.054-.218-.11-.918-.339-1.751-1.084-.648-.58-1.086-1.297-1.213-1.515-.126-.218-.013-.336.096-.445.098-.098.218-.255.326-.382.11-.127.145-.218.218-.364.073-.145.036-.273-.018-.382-.054-.11-.488-1.182-.668-1.618-.176-.425-.355-.368-.488-.374-.126-.006-.272-.006-.418-.006-.145 0-.382.054-.582.273-.198.218-.762.745-.762 1.818 0 1.073.782 2.109.89 2.254.11.145 1.536 2.345 3.722 3.29.519.225.924.36 1.24.46.52.165.993.141 1.368.086.42-.061 1.29-.527 1.472-1.036.182-.51.182-.945.126-1.036-.053-.092-.198-.146-.416-.255z"/>
        </svg>
      </a>

    </div>
  );
}