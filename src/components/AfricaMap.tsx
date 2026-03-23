
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const regions = [
  {
    name: "Afrique Centrale",
    countries: ["RDC", "Congo", "Cameroun", "Gabon"],
    color: "bg-blue-500"
  },
  {
    name: "Afrique de l'Est",
    countries: ["Rwanda", "Burundi", "Kenya", "Tanzanie", "Ouganda"],
    color: "bg-cyan-500"
  },
  {
    name: "Afrique de l'Ouest",
    countries: ["Nigeria", "Bénin", "Togo", "Ghana", "Sénégal", "Côte d'Ivoire", "Guinée"],
    color: "bg-green-500"
  },
  {
    name: "Afrique Australe",
    countries: ["Angola", "Zambie", "Afrique du Sud"],
    color: "bg-orange-500"
  },
  {
    name: "Afrique du Nord",
    countries: ["Algérie", "Tunisie"],
    color: "bg-red-500"
  },
  {
    name: "International",
    countries: ["Allemagne"],
    color: "bg-slate-500"
  }
];

export function AfricaMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="w-full bg-white border border-slate-200 p-8 lg:p-12 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Key Stat */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[300px] border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-8">
           <div>
             <div className="flex items-baseline gap-2 mb-2">
                <span className="text-9xl font-bold text-slate-900 tracking-tighter leading-none">22</span>
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500 -translate-y-8">Pays</span>
             </div>
             <h3 className="text-2xl font-light text-slate-900 mb-6 uppercase tracking-widest">Présence<br/>Globale</h3>
             <p className="text-slate-400 text-sm leading-relaxed font-light max-w-xs">
               Une empreinte stratégique multisectorielle permettant d'accompagner la croissance sur l'ensemble du continent.
             </p>
           </div>
           <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900">
             <div className="w-8 h-[1px] bg-cyan-500"></div>
             ITM Holding
           </div>
        </div>

        {/* Right: Regions List */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 content-start">
          {regions.map((region) => (
            <div 
              key={region.name}
              className="group/region cursor-default"
              onMouseEnter={() => setActiveRegion(region.name)}
            >
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2 group-hover/region:border-cyan-400 transition-colors">
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest group-hover/region:text-cyan-600 transition-colors">{region.name}</h4>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-full">{region.countries.length}</span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {region.countries.map(country => (
                  <span key={country} className="text-xs text-slate-500 hover:text-slate-800 transition-colors">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
