import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Building2,
  MessageSquare,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

export default function Cotizar() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    categoria: "Exportar Aluminio",
    mensaje: "",
  });

  const numerosWhatsapp = {
    "Exportar Aluminio": "573000000001",
    "Exportar Fruta": "573000000002",
    "Exportar Prendas de Vestir": "573000000003",
    Importar: "573000000004",
    "Asesoría en comercio exterior": "573000000005",
  };

  const categorias = Object.keys(numerosWhatsapp);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numeroDestino = numerosWhatsapp[formData.categoria];

    const mensajeTexto = `Hola, quisiera solicitar una cotización.

Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Servicio: ${formData.categoria}

Detalles:
${formData.mensaje}`;

    const mensajeCodificado = encodeURIComponent(mensajeTexto);

    const urlWhatsapp = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;

    window.open(urlWhatsapp, "_blank");
  };

  return (
    <section id="cotizar" className="relative overflow-hidden py-24 bg-[#050816]">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{
          backgroundImage: "url('/media/cotizar.png')",
        }}
      />

      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-[#050816]/88" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#3b82f6]/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_55%)]" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 rounded-[32px] overflow-hidden border border-white/10 bg-[#0b1220]/75 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
        >

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10"
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3b82f6]/20 bg-[#3b82f6]/10 text-[#93c5fd] text-xs tracking-[0.18em] uppercase font-semibold">
              Comercio Internacional
            </div>

            <h2 className="mt-8 text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white">
              Solicita una cotización profesional
            </h2>

            <p className="mt-6 text-[#94a3b8] leading-relaxed text-[15px] max-w-xl">
              Nuestro equipo especializado en importaciones y exportaciones
              responderá tu solicitud de forma rápida y personalizada vía
              WhatsApp.
            </p>

            {/* Features */}
            <div className="mt-12 space-y-5">

              {[
                "Atención especializada",
                "Respuesta inmediata",
                "Gestión logística global",
              ].map((title, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 w-11 h-11 rounded-2xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#60a5fa]" />
                  </div>

                  <div>
                    <h3 className="text-white font-medium">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm text-[#94a3b8] leading-relaxed">
                      Asesoría profesional para operaciones internacionales.
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

            <div className="mt-16 pt-6 border-t border-white/10">
              <p className="text-sm text-[#64748b]">
                Importaciones • Exportaciones • Comercio Exterior
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="p-10 lg:p-14"
          >

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Nombre completo
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />

                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Juan David López"
                    className="w-full h-14 rounded-2xl bg-[#111827]/90 border border-white/10 pl-12 pr-4 text-white placeholder:text-[#64748b]"
                  />
                </div>
              </div>

              {/* Empresa */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Empresa
                </label>

                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />

                  <input
                    type="text"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ej: Industrias López S.A.S"
                    className="w-full h-14 rounded-2xl bg-[#111827]/90 border border-white/10 pl-12 pr-4 text-white placeholder:text-[#64748b]"
                  />
                </div>
              </div>

              {/* Categoría */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Servicio requerido
                </label>

                <div className="relative">
                  <select
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="appearance-none w-full h-14 rounded-2xl bg-[#111827]/90 border border-white/10 px-4 pr-12 text-white"
                  >
                    {categorias.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Detalles de la solicitud
                </label>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#64748b]" />

                  <textarea
                    name="mensaje"
                    required
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Ej: Necesito una cotización para exportar aluminio hacia Estados Unidos."
                    className="w-full rounded-2xl bg-[#111827]/90 border border-white/10 pl-12 pr-4 py-4 text-white resize-none placeholder:text-[#64748b]"
                  />
                </div>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="group w-full h-14 rounded-2xl bg-[#3b82f6] text-white flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                Solicitar cotización
              </button>

            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}