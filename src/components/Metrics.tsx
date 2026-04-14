import { motion } from "framer-motion";
import { Ruler, MapPin, History, Database, ExternalLink, Zap } from "lucide-react";
import { projectData } from "../data/mockData";

// Calculate dynamic metrics from data
const totalM2 = projectData.reduce((acc, curr) => acc + curr.Metros_Cuadrados, 0).toLocaleString('es-AR', { maximumFractionDigits: 0 });
const totalProjects = projectData.length;
const installedProjects = projectData.filter(p => p.Estado === 'Instalado').length;
const efficiency = Math.round((installedProjects / totalProjects) * 100);

const metrics = [
  {
    icon: <Ruler className="w-8 h-8 text-brand-green" />,
    value: totalM2,
    unit: "m²",
    label: "Metros Cuadrados Procesados (2026)",
    details: "Segmentado por Categoria y Producto",
    chart: [30, 50, 85, 60] // Keep visual chart for aesthetic
  },
  {
    icon: <MapPin className="w-8 h-8 text-brand-green" />,
    value: totalProjects.toString(),
    unit: "",
    label: "Proyectos Activos por Localidad",
    details: "Estado de Proyectos en Tiempo Real",
    locations: [
      { name: "YERBA BUENA", value: Math.round((projectData.filter(p => p.Localidad === 'Yerba Buena' && p.Estado === 'Instalado').length / projectData.filter(p => p.Localidad === 'Yerba Buena').length) * 100) },
      { name: "SAN PABLO", value: Math.round((projectData.filter(p => p.Localidad === 'San Pablo' && p.Estado === 'Instalado').length / projectData.filter(p => p.Localidad === 'San Pablo').length) * 100) },
      { name: "BARRIO NORTE", value: Math.round((projectData.filter(p => p.Localidad === 'Barrio Norte' && p.Estado === 'Instalado').length / projectData.filter(p => p.Localidad === 'Barrio Norte').length) * 100) }
    ]
  },
  {
    icon: <History className="w-8 h-8 text-brand-green" />,
    value: "12",
    unit: "días",
    label: "Promedio de Entrega Logística",
    details: "Eficiencia operativa medida en Q1-Q2",
    badge: `Eficiencia del ${efficiency}%`
  }
];

export default function Metrics() {
  return (
    <section className="py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">Nuestro Impacto en Números</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-zinc-500 font-medium text-sm max-w-lg mx-auto uppercase tracking-widest leading-relaxed">
            Monitoreo en tiempo real de proyectos y producción operativa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-zinc-200 border border-zinc-200 mb-12">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white py-16 px-10 text-center flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-center mb-8">{m.icon}</div>
                <div className="text-6xl font-black text-zinc-900 mb-2 tracking-tighter">
                  {m.value} <span className="text-2xl text-zinc-400 font-light">{m.unit}</span>
                </div>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-tight">
                  {m.label}
                </p>
              </div>

              <div className="mt-12">
                {m.chart && (
                  <div className="flex items-end justify-center gap-3 h-24 px-4">
                    {m.chart.map((h, i) => (
                      <div
                        key={i}
                        className="w-5 bg-brand-green/20 hover:bg-brand-green transition-all duration-500 cursor-pointer relative group"
                        style={{ height: `${h}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {h}%
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {m.locations && (
                  <div className="space-y-4 px-4">
                    {m.locations.map((l, i) => (
                      <div key={i} className="w-full text-left">
                        <div className="flex justify-between text-[10px] mb-1.5 font-bold tracking-tight">
                          <span>{l.name}</span>
                          <span>{l.value}% Finalizado</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-100">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${l.value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-brand-green"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {m.badge && (
                  <div className="flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-tight mb-4">
                      <Zap className="w-3 h-3 fill-brand-green" />
                      {m.badge}
                    </div>
                  </div>
                )}

                <div className="mt-6 text-[10px] text-zinc-400 uppercase font-bold tracking-tighter">
                  {m.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Preview */}
        <div className="border border-zinc-200 bg-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-brand-green" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Vista Previa: Google Sheets Data Connector
              </span>
            </div>
            <a href="#" className="text-[10px] font-bold text-brand-green flex items-center gap-2 hover:underline tracking-widest">
              VER HOJA DE CÁLCULO <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  {['Fecha_Pedido', 'Categoria', 'Producto', 'Metros_Cuadrados', 'Estado', 'Localidad'].map(h => (
                    <th key={h} className="px-4 py-3 font-black uppercase tracking-tighter text-zinc-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-600">
                {projectData.slice(0, 10).map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-50 transition-colors">
                    <td className="px-4 py-4">{row.Fecha_Pedido}</td>
                    <td className="px-4 py-4">{row.Categoria}</td>
                    <td className="px-4 py-4 font-medium text-zinc-900">{row.Producto}</td>
                    <td className="px-4 py-4 font-mono">{row.Metros_Cuadrados.toFixed(2)}</td>
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1 rounded-full font-bold text-[9px] uppercase tracking-tighter ${row.Estado === 'Instalado' ? 'bg-green-50 text-green-600' :
                        row.Estado === 'En Producción' ? 'bg-blue-50 text-blue-600' : 'bg-zinc-100 text-zinc-500'
                        }`}>
                        {row.Estado}
                      </span>
                    </td>
                    <td className="px-4 py-4">{row.Localidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {projectData.length > 10 && (
              <div className="mt-4 text-center">
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                  Mostrando 10 de {projectData.length} registros
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
