import React, { useRef } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./componentes/Navbar";
import BotonWhatsapp from "./componentes/boton";
import Principal from "./frames/principal";
import TarjetasProductos from "./frames/tarjetas_productos";
import Servicios from "./frames/servicios";
import Nosotros from "./frames/nosotros";
import Exportacion from "./frames/exportacion";
import Cotizar from "./frames/Cotizar";
import Banner_final from "./componentes/Banner_final";
import AluminioAleaciones from "./componentes/Aleaciones";
import Ropa from "./componentes/Ropa";
import Frutas from "./componentes/Frutas";
function Home() {
  const navigate = useNavigate();
  const cotizarRef = useRef(null);
  const irACotizar = () => {
    cotizarRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Principal />

      <section id="productos" className="scroll-mt-28">
        <TarjetasProductos
          onAleacionesClick={() => navigate("/aleaciones")}
          onRopaClick={() => navigate("/ropa")}
          onFrutasClick={() => navigate("/frutas")}
        />
      </section>

      <Servicios />

      <section id="nosotros" className="scroll-mt-28">
        <Nosotros />
      </section>

      <section id="exportacion" className="scroll-mt-28">
        <Exportacion />
      </section>

      <section
        id="cotizar"
        ref={cotizarRef}
        className="scroll-mt-28"
      >
        <Cotizar />
      </section>

      <section id="contacto" className="scroll-mt-28">
        <Banner_final
          onAleacionesClick={() => navigate("/aleaciones")}
          onRopaClick={() => navigate("/ropa")}
          onFrutasClick={() => navigate("/frutas")}
        />
      </section>
    </>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  const irACotizar = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("cotizar")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/aleaciones"
        element={
          <AluminioAleaciones
            irACotizar={irACotizar}
            onAleacionesClick={() => navigate("/aleaciones")}
            onRopaClick={() => navigate("/ropa")}
            onFrutasClick={() => navigate("/frutas")}
          />
        }
      />

      <Route
        path="/ropa"
        element={
          <Ropa
            irACotizar={irACotizar}
            onAleacionesClick={() => navigate("/aleaciones")}
            onRopaClick={() => navigate("/ropa")}
            onFrutasClick={() => navigate("/frutas")}
          />
        }
      />

      <Route
        path="/frutas"
        element={
          <Frutas
            irACotizar={irACotizar}
            onAleacionesClick={() => navigate("/aleaciones")}
            onRopaClick={() => navigate("/ropa")}
            onFrutasClick={() => navigate("/frutas")}
          />
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#050914] text-white font-sans pt-[45px]">
        <Navbar />

        <BotonWhatsapp />

        <AppRoutes />
      </div>
    </HashRouter>
  );
}