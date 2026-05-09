import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800/60 bg-[#050914] z-50 relative">
      {/* Logo y Título */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center transform -skew-x-12">
          <span className="text-3xl font-black text-[#050914] italic transform skew-x-12">V</span>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-widest leading-none">VESTIMOS JB SAS</h1>
          <p className="text-[10px] text-blue-500 font-semibold tracking-widest mt-1">COMERCIALIZADORA INTERNACIONAL</p>
        </div>
      </div>

      {/* Links */}
      <ul className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-wider text-gray-400">
        <li className="text-blue-500 border-b-2 border-blue-500 pb-2 cursor-pointer">INICIO</li>
        <li className="hover:text-white transition cursor-pointer pb-2">NOSOTROS</li>
        <li className="hover:text-white transition cursor-pointer pb-2 flex items-center gap-1">
          PRODUCTOS 
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </li>
        <li className="hover:text-white transition cursor-pointer pb-2">SERVICIOS</li>
        <li className="hover:text-white transition cursor-pointer pb-2">COMERCIO EXTERIOR</li>
        <li className="hover:text-white transition cursor-pointer pb-2">CONTACTO</li>
      </ul>

      {/* Botón Cotizar */}
      <button className="border border-gray-600 hover:border-white px-6 py-2.5 rounded text-[11px] font-bold tracking-wider transition flex items-center gap-2">
        COTIZAR AHORA <span className="text-sm"></span>
      </button>
    </nav>
  );
}