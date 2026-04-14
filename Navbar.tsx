

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tighter text-zinc-900">
            ALEM VIDRIOS <span className="text-brand-green">YERBA BUENA</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Productos', 'Servicios', 'Portfolio', 'Nosotros'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-600 hover:text-brand-green transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="btn-primary py-2 px-6 text-xs">
          Cotizar Proyecto
        </button>
      </div>
    </nav>
  );
}
