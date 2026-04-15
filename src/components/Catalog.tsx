import { motion } from "framer-motion";

const glassSolutions = [
  { title: "Templados", desc: "Resistencia e Impacto", img: "https://picsum.photos/seed/glass1/600/800" },
  { title: "DVH", desc: "Doble Vidriado Hermético", img: "https://picsum.photos/seed/glass2/600/800" },
  { title: "Mamparas", desc: "Diseño de Baños", img: "https://picsum.photos/seed/glass3/600/800" },
  { title: "Espejos", desc: "Amplitud y Reflejo", img: "https://picsum.photos/seed/glass4/600/800" },
];

const aluminumSolutions = [
  { title: "Ventanas", desc: "Sistemas de abrir y oscilobatientes con herrajes europeos.", img: "https://picsum.photos/seed/alu1/600/600" },
  { title: "Puertas Corredizas", desc: "Hojas de gran tamaño con rodamientos de alta carga.", img: "https://picsum.photos/seed/alu2/600/600" },
  { title: "Paños Fijos", desc: "Integración total de la luz natural con perfiles minimalistas.", img: "https://picsum.photos/seed/alu3/600/600" },
];

export default function Catalog() {
  return (
    <section id="productos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Soluciones en Vidrio */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-green font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Especialidades</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900">Soluciones en Vidrio</h2>
          </div>
          <div className="h-px flex-grow mx-12 bg-zinc-100 hidden md:block mb-4"></div>
          <p className="max-w-md text-zinc-500 font-light text-lg">
            Cristales procesados con los más altos estándares de seguridad y transparencia para proyectos residenciales y comerciales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-32">
          {glassSolutions.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-medium tracking-wide uppercase">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carpintería de Aluminio */}
        <div className="mb-16">
          <span className="text-brand-green font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Novedad</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900">Carpintería de Aluminio</h2>
          <p className="mt-4 text-zinc-500 font-light text-lg max-w-2xl">
            Líneas Módena y A30. Estructuras robustas con acabados premium para una arquitectura moderna y eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {aluminumSolutions.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className="bg-zinc-50 p-10 flex flex-col gap-8 border border-zinc-100"
            >
              <div className="aspect-square bg-zinc-200 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">{item.desc}</p>
                <a href="#" className="inline-flex items-center text-brand-green font-bold gap-2 group">
                  Especificaciones Técnicas
                  <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
