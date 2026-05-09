import React from 'react';
import Navbar from './componentes/navbar';
import Principal from './frames/principal';
import TarjetasProductos from './frames/tarjetas_productos';
import Servicios from './frames/servicios'; // <-- Importación de los servicios

export default function VestimosWeb() {
  return (
    <div className="min-h-screen bg-[#050914] text-white font-sans">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2 Y 3. HERO Y ESTADÍSTICAS */}
      <Principal />

      {/* 4. TARJETAS DE PRODUCTOS */}
      <TarjetasProductos />

      {/* 5. FOOTER DE SERVICIOS */}
      <Servicios />

    </div>
  );
}