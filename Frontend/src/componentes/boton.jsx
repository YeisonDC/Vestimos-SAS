import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BotonWhatsapp() {
  const numero = "573168745223";

  const mensaje = encodeURIComponent(
    "Hola, quiero más información sobre sus servicios."
  );

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        hover:bg-[#1ebe5d]
        shadow-2xl
        shadow-green-500/30
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp className="text-white w-8 h-8" />
    </a>
  );
}