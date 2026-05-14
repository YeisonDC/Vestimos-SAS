import React, { useRef, useState } from 'react';

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
  const [paginaActiva, setPaginaActiva] = useState("home");
  const cotizarRef = useRef(null);

  const cambiarPagina = (pagina) => {
    setPaginaActiva(pagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irACotizar = () => {
    setPaginaActiva("home");

    setTimeout(() => {
      cotizarRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#050914] text-white font-sans pt-[45px]">

      <Navbar onInicioClick={() => cambiarPagina("home")} />

      {paginaActiva === "home" && (
        <>
          <Principal />

          <TarjetasProductos
            onAleacionesClick={() => cambiarPagina("aleaciones")}
            onRopaClick={() => cambiarPagina("ropa")}
            onFrutasClick={() => cambiarPagina("frutas")}
          />

          <Servicios />
          <Exportacion />

          <div ref={cotizarRef}>
            <Cotizar />
          </div>

          <Banner_final
            onAleacionesClick={() => cambiarPagina("aleaciones")}
            onRopaClick={() => cambiarPagina("ropa")}
            onFrutasClick={() => cambiarPagina("frutas")}
          />
        </>
      )}

      {paginaActiva === "aleaciones" && (
        <AluminioAleaciones
          irACotizar={irACotizar}
          onAleacionesClick={() => cambiarPagina("aleaciones")}
          onRopaClick={() => cambiarPagina("ropa")}
          onFrutasClick={() => cambiarPagina("frutas")}
        />
      )}

      {paginaActiva === "ropa" && (
        <Ropa
          irACotizar={irACotizar}
          onAleacionesClick={() => cambiarPagina("aleaciones")}
          onRopaClick={() => cambiarPagina("ropa")}
          onFrutasClick={() => cambiarPagina("frutas")}
        />
      )}

      {paginaActiva === "frutas" && (
        <Frutas
          irACotizar={irACotizar}
          onAleacionesClick={() => cambiarPagina("aleaciones")}
          onRopaClick={() => cambiarPagina("ropa")}
          onFrutasClick={() => cambiarPagina("frutas")}
        />
      )}

    </div>
  );
}