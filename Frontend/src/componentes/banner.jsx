import React from "react";

const Banner = () => {
    return(
        <header className="w-full fixed top-0 left-0 z-50  text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

                <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
                    Vestimos SAS
                </h1>
                
                <nav>
                    <ul className="flex gap-6 text-sm uppercase tracking-wider">
                        <li><a href="#inicio" className="hover:text-blue-400 transition">Inicio</a></li>
                        <li><a href="#nosotros" className="hover:text-blue-400 transition">Nosotros</a></li>
                        <li><a href="#productos" className="hover:text-blue-400 transition">Productos</a></li>
                        <li><a href="#exportaciones" className="hover:text-blue-400 transition">Exportaciones</a></li>
                        <li><a href="#contacto" className="hover:text-blue-400 transition">Contacto</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Banner;