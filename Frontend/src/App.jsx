import React from 'react';

import Navbar from './componentes/Navbar';
import Principal from './frames/principal';
import TarjetasProductos from './frames/tarjetas_productos';
import Servicios from './frames/servicios';
import Exportacion from './frames/exportacion';
import Cotizar from './frames/Cotizar';
import Banner_final from './componentes/Banner_final';

import AluminioAleaciones from "./componentes/Aleaciones";
import Ropa from "./componentes/Ropa";
import Frutas from "./componentes/Frutas";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050914] text-white font-sans pt-[45px]">

      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO */}
      <Principal />

      {/* 3. TARJETAS */}
      <TarjetasProductos />

      {/* 4. SERVICIOS */}
      <Servicios />

      {/* 5. EXPORTACIÓN */}
      <Exportacion />

      {/* 6. COTIZAR */}
      <Cotizar />

      {/* 8. BANNER FINAL */}
      <Banner_final />

    </div>
  );
}