import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              Iniciá tu próximo proyecto de arquitectura con nosotros.
            </h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              Asesoramiento técnico personalizado para arquitectos, constructoras y particulares en Yerba Buena y alrededores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-shrink-0"
          >
            <button className="bg-brand-green text-white px-14 py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-zinc-900 transition-all duration-500 rounded-none shadow-2xl shadow-brand-green/20">
              Contactar Ahora
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
