import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Handshake, Package, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";

export default function Exportacion() {
  const markets = [
    { code: "US", region: "Estados Unidos" },
    { code: "ES", region: "España" },
    { code: "PT", region: "Portugal" },
    { code: "NL", region: "Países Bajos" },
    { code: "TR", region: "Turquía" },
    { code: "MX", region: "México" },
  ];

  return (
    <section
      id="exportacion"
      className="relative w-full bg-[#050914] overflow-hidden py-20 font-['Montserrat',sans-serif]"
    >

      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/media/mapa-global.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-[#050914]/80 to-transparent"></div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-between">

        {/* COLUMNA IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-4xl"
        >

          <p className="text-[#3b82f6] text-[12px] uppercase tracking-[0.15em] font-bold mb-2">
            Presencia Global
          </p>

          <h2 className="text-gray-100 font-semibold text-4xl lg:text-[38px] tracking-tight leading-[1.1] mb-4 uppercase">
            LLEVAMOS NUESTRO PRODUCTO<br />
            HASTA TU EMPRESA
          </h2>

          <p className="text-[#94a3b8] text-[14px] leading-[1.6] max-w-2xl font-medium">
            Operamos en los principales mercados internacionales, conectando 
            proveedores y clientes con eficiencia, transparencia y compromiso.
          </p>

          {/* GRID ESTADÍSTICAS */}
          <div className="flex flex-wrap gap-3 mt-8">

            {[
              { icon: Globe, value: "5+", text: "Países en nuestra\nred comercial" },
              { icon: Handshake, value: "500+", text: "Clientes\nsatisfechos" },
              { icon: Package, value: "1000+", text: "Operaciones\nexitosas" },
              { icon: ShieldCheck, value: "15+", text: "Años de experiencia\nen el mercado" },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.18 }}
                  className="relative w-[155px] h-[165px] rounded-xl border border-[#1e293b]/70 bg-gradient-to-b from-[#0b1325]/90 to-[#070b18] shadow-md hover:shadow-2xl transition-all duration-200 will-change-transform"
                >
                  <div className="h-full w-full flex flex-col justify-between p-4">

                    <div className="flex justify-center">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <Icon className="w-5 h-5 text-[#cbd5e1]" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-white text-2xl font-semibold tracking-wide">
                        {item.value}
                      </h3>

                      <p className="text-[#94a3b8] text-[10.5px] leading-[1.25] mt-1 whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

        {/* COLUMNA DERECHA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[280px] shrink-0 mt-10 lg:mt-0"
        >
          <div className="bg-[#0b1325]/90 border border-[#1e293b] rounded-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">

            <p className="text-[#3b82f6] uppercase tracking-[0.1em] text-[12px] font-bold mb-5">
              Nuestros Mercados
            </p>

            <div className="flex flex-col space-y-1">

              {markets.map((market, i) => (
                <motion.div
                  key={market.code}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center justify-between py-2 cursor-pointer group border-b border-[#1e293b]/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <ReactCountryFlag
                      countryCode={market.code}
                      svg
                      style={{
                        width: '1.5em',
                        height: '1.1em',
                        borderRadius: '2px'
                      }}
                      title={market.region}
                    />
                    <span className="text-[#cbd5e1] text-[13px] font-medium group-hover:text-white transition-colors">
                      {market.region}
                    </span>
                  </div>

                  <ChevronRight className="w-4 h-4 text-[#475569] group-hover:text-[#3b82f6] transition-colors" />
                </motion.div>
              ))}

            </div>

            <button className="mt-6 w-full border border-[#334155] hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all duration-300 rounded-lg py-3 text-white uppercase tracking-[0.05em] text-[12px] font-semibold flex items-center justify-center gap-2">
              Ver todos los países
              
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}