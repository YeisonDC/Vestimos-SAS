import React from 'react';

const Boton = () => {
  // Aquí puedes poner tu número real (incluyendo el código de país, ej: 57 para Colombia)
  const numeroWhatsApp = "573000000000"; 
  const mensajeDefault = "¡Hola! Vengo de la página web y quiero solicitar una cotización de láminas de aluminio.";

  return (
    <a
      href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeDefault)}`}
      target="_blank"
      rel="noopener noreferrer"
      // Las clases "fixed bottom-8 right-8 z-50" son las que lo mantienen pegado abajo a la derecha por encima de todo
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      {/* Círculo animado de fondo (efecto radar/latido) */}
      <span className="absolute inline-flex w-full h-full rounded-full opacity-40 bg-[#25D366] animate-ping"></span>
      
      {/* Ícono de WhatsApp SVG puro */}
      <svg 
        className="w-9 h-9 relative z-10" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 0C5.394 0 .011 5.385.008 12.022c0 2.115.551 4.179 1.6 5.998L.028 24l6.196-1.625c1.765 1.002 3.766 1.53 5.805 1.532h.005c6.635 0 12.018-5.385 12.021-12.024A11.968 11.968 0 0 0 20.536 3.53 11.97 11.97 0 0 0 12.031 0zm7.042 17.29c-.3.843-1.737 1.611-2.433 1.714-.543.081-1.258.114-3.551-.837-2.932-1.218-4.81-4.27-4.954-4.464-.144-.194-1.183-1.576-1.183-3.003 0-1.427.743-2.128 1.008-2.399.265-.27.575-.338.766-.338.191 0 .383.003.554.011.183.008.428-.069.651.468.232.558.744 1.815.813 1.954.069.139.115.302.019.495-.096.193-.144.31-.288.479-.144.168-.302.355-.432.479-.144.139-.296.291-.132.573.164.282.729 1.205 1.564 1.95.845.753 1.761 1.047 2.049 1.186.288.139.456.113.626-.067.17-.18 1.006-1.168 1.277-1.568.27-.401.54-.334.801-.237.261.097 1.649.778 1.93.918.281.14.468.21.537.327.069.117.069.673-.231 1.516z"/>
      </svg>
    </a>
  );
};

export default Boton;