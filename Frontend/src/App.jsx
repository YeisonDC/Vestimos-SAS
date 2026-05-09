import React from 'react';
import Navbar from './componentes/navbar';
import Principal from './frames/principal';
import TarjetasProductos from './frames/tarjetas_productos';
import Servicios from './frames/servicios';
// Importaciones nuevas que traía la otra rama:
import AluminioAleaciones from "./componentes/Aleaciones";
import Ropa from "./componentes/Ropa";
import Frutas from "./componentes/Frutas";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050914] text-white font-sans">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2 Y 3. HERO Y ESTADÍSTICAS (Tu parte de Aluminios) */}
      <Principal />

      {/* 4. TARJETAS DE PRODUCTOS */}
      <TarjetasProductos />

      {/* 5. SECCIONES NUEVAS (Lo que traía Yesid) */}
      <div className="container mx-auto py-10 space-y-20">
        <AluminioAleaciones />
        <Ropa />
        <Frutas />
      </div>

      {/* 6. FOOTER DE SERVICIOS */}
      <Servicios />

    </div>
  );
}