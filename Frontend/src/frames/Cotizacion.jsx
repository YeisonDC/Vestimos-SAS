import React from 'react';

const Cotizacion = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 p-6 font-sans overflow-hidden">
      
      {/* Patrón de puntos en el fondo para imitar la imagen exacta */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      {/* Contenedor del Formulario */}
      <div 
        data-aos="zoom-in" 
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-14"
      >
        
        {/* Títulos */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Solicite su cotización</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Complete el formulario y nuestro equipo le contactará en menos de 24 horas.
          </p>
        </div>

        <form className="space-y-8">
          
          {/* Fila 1: Nombre y Empresa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Nombre completo *"
              required
              className="w-full border-b border-slate-300 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 bg-transparent transition-colors"
            />
            <input
              type="text"
              placeholder="Empresa"
              className="w-full border-b border-slate-300 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 bg-transparent transition-colors"
            />
          </div>

          {/* Fila 2: Teléfono y Correo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="tel"
              placeholder="Teléfono *"
              required
              className="w-full border-b border-slate-300 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 bg-transparent transition-colors"
            />
            <input
              type="email"
              placeholder="Correo electrónico *"
              required
              className="w-full border-b border-slate-300 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 bg-transparent transition-colors"
            />
          </div>

          {/* Fila 3: Producto de interés (Select con flecha personalizada) */}
          <div className="relative">
            <select
              required
              defaultValue=""
              className="w-full border-b border-slate-300 py-2 text-sm text-slate-500 focus:text-slate-800 focus:outline-none focus:border-slate-800 bg-transparent transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>Producto de interés *</option>
              <option value="5052">Lámina Lisa 5052-H32</option>
              <option value="6061">Lámina Estructural 6061-T6</option>
              <option value="estriada">Lámina Estriada 3003-H14</option>
              <option value="otros">Otros productos</option>
            </select>
            {/* Ícono de flecha hacia abajo */}
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          {/* Fila 4: Textarea y contador */}
          <div className="relative pt-2">
            <textarea
              placeholder="Mensaje / Detalles del proyecto"
              rows="3"
              maxLength="500"
              className="w-full border-b border-slate-300 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 bg-transparent transition-colors resize-none"
            ></textarea>
            {/* Contador 0/500 */}
            <div className="absolute bottom-[-20px] right-0 text-[10px] text-slate-400 font-medium">
              0/500
            </div>
          </div>

          {/* Botón de Enviar */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-[#1e293b] text-white font-bold py-3.5 rounded hover:bg-slate-700 transition-colors flex justify-center items-center gap-2 shadow-md"
            >
              Enviar cotización
              {/* Ícono de avión de papel */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Cotizacion;