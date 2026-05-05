import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Navbar from './componentes/Navbar'; 
import Productos from './frames/productos';
import Historia from './frames/Historia'; 
import Exportaciones from './frames/Exportaciones';
import Cotizacion from './frames/Cotizacion';
import Boton from './componentes/boton';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,    
      offset: 100,   
    });
  }, []);

  return (
    // Sin overflow-hidden aquí para no dañar el sticky
    <div className="App relative bg-slate-100">
      {/* El Navbar va de primero para que controle la navegación de toda la página */}
      <Navbar />
      <Productos />
      <Historia />
      <Exportaciones />
      <Cotizacion />
      <Boton />
    </div>
  );
}

export default App; 