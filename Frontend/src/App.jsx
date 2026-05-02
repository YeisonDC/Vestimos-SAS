import Banner from "./componentes/banner";

function App() {
  return (
    <>
      <Banner />

      <main >

        {/* HERO CON GIF */}
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">

          {/* FONDO GIF */}
          <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          >
            <source src="public/videos/fundicion.mp4" type="video/mp4"/>
          </video>

          {/* OVERLAY OSCURO (para que se vea pro) */}
          <div className="absolute w-full h-full bg-black/60"></div>

          {/* CONTENIDO */}
          <div className="relative text-center text-white px-4">
            <h2 className="text-5xl font-bold mb-4 animate-fadeIn">
              Vestimos SAS
            </h2>
            <p className="text-xl mb-6 animate-fadeIn delay-200">
              Innovación en procesos de fundición de aluminio
            </p>

            <a 
              href="#productos"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300 animate-fadeIn delay-500"
            >
              Ver Productos
            </a>
          </div>

        </section>

      </main>
    </>
  )
}

export default App;