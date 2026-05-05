import React from 'react';

const Navbar = () => {
  return (
    <nav data-aos="fade-down" className="flex justify-between items-center px-8 lg:px-16 py-6 border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
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
  );
};

export default Navbar;