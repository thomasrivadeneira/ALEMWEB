export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-xl font-black tracking-tighter text-zinc-900">
            ALEM VIDRIOS <span className="text-brand-green">YERBA BUENA</span>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {['Productos', 'Servicios', 'Portfolio', 'Contacto', 'Privacidad'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-green transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-zinc-200">
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
            © 2024 Alem Vidrios Yerba Buena. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-zinc-300 uppercase tracking-widest">Tucumán, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
