import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/architecture/1920/1080"
          alt="Modern Architecture"
          className="w-full h-full object-cover grayscale-[20%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-brightness-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur-md p-10 md:p-16 max-w-3xl border border-white/20"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            ALEM VIDRIOS<br />
            <span className="text-brand-green">YERBA BUENA</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 font-light max-w-xl leading-relaxed mb-10">
            Ingeniería en cristal templado y carpintería de aluminio de alta prestación.
            Transformamos espacios con precisión técnica y estética arquitectónica.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Ver Catálogo
            </button>
            <button className="btn-outline">
              Nuestros Trabajos
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="w-40 h-40 border-2 border-brand-green/30 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border border-brand-green/20 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
