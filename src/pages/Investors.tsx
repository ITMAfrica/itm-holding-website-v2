
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowDown, PieChart, TrendingUp, FileText, BarChart3, Lock, Download, ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const HERO_IMAGE = "https://images.unsplash.com/photo-1758445536309-af6219bda651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGglMjBza3lzY3JhcGVyJTIwYmx1ZSUyMGdsYXNzfGVufDF8fHx8MTc2MzY0ODI2Mnww&ixlib=rb-4.1.0&q=80&w=1920";

export function Investors() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      
      {/* 1. HERO - Standardized Page Header */}
      <PageHeader
        highlight="Investisseurs"
        title={<>Performance <br/><span className="text-[#90A1B9] bg-clip-text ">durable</span></>}
        subtitle="Une gouvernance rigoureuse et une stratégie de diversification pour garantir une croissance stable à long terme."
        backgroundImage={HERO_IMAGE}
      />

      {/* 2. KEY METRICS - Data Grid */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="w-full px-8 md:px-32 lg:px-[15vw]">
           <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl shadow-slate-200/50 relative overflow-hidden border border-slate-100 rounded-sm">
              {/* Decorative top line - Thinner and more subtle */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-80"></div>
              
              {/* Metric 1 */}
              <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 relative group hover:bg-slate-50/50 transition-colors cursor-default">
                 <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-cyan-50 rounded-sm border border-cyan-100 text-cyan-700 group-hover:scale-110 transition-transform duration-500">
                      <TrendingUp size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-semibold font-mono text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-full border border-slate-100">KPI • 01</span>
                 </div>
                 
                 <div className="relative">
                    <div className="text-6xl md:text-7xl font-light text-slate-900 mb-6 tracking-tight group-hover:text-cyan-600 transition-colors duration-500 font-display">
                      +25<span className="text-3xl md:text-4xl align-top ml-1">%</span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                        Croissance Annuelle
                        <span className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-cyan-500 transition-all duration-500"></span>
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-4 group-hover:border-cyan-200 transition-colors">
                      Une performance soutenue par l'expansion de nos activités minières et l'optimisation des coûts opérationnels.
                    </p>
                 </div>
              </div>

              {/* Metric 2 */}
              <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 relative group hover:bg-slate-50/50 transition-colors cursor-default">
                 <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-blue-50 rounded-sm border border-blue-100 text-blue-700 group-hover:scale-110 transition-transform duration-500">
                      <PieChart size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-semibold font-mono text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-full border border-slate-100">KPI • 02</span>
                 </div>
                 
                 <div className="relative">
                    <div className="text-6xl md:text-7xl font-light text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors duration-500 font-display">
                      15
                    </div>
                    <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                        Flux de Revenus
                        <span className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500"></span>
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-4 group-hover:border-blue-200 transition-colors">
                      Une diversification sectorielle stratégique (Mines, Énergie, Logistique) réduisant l'exposition aux risques.
                    </p>
                 </div>
              </div>

              {/* Metric 3 */}
              <div className="p-10 md:p-12 relative group hover:bg-slate-50/50 transition-colors cursor-default">
                 <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-purple-50 rounded-sm border border-purple-100 text-purple-700 group-hover:scale-110 transition-transform duration-500">
                      <Lock size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-semibold font-mono text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-full border border-slate-100">KPI • 03</span>
                 </div>
                 
                 <div className="relative">
                    <div className="text-6xl md:text-7xl font-light text-slate-900 mb-6 tracking-tight group-hover:text-purple-600 transition-colors duration-500 font-display">
                      AAA
                    </div>
                    <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                        Solidité Financière
                        <span className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-purple-500 transition-all duration-500"></span>
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-4 group-hover:border-purple-200 transition-colors">
                      Notation interne reflétant une solvabilité exemplaire et une gestion de trésorerie rigoureuse.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 3. CONTENT & DOWNLOADS */}
      <section className="bg-white py-24">
         <div className="w-full px-8 md:px-32 lg:px-[15vw]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               
               {/* Main Content */}
               <div className="lg:col-span-8 space-y-16">
                  <div>
                     <h2 className="text-3xl font-bold text-slate-900 mb-6">Stratégie d'Investissement</h2>
                     <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed">
                        <p className="mb-6">
                           ITM Holding poursuit une stratégie d'expansion agressive mais maîtrisée, axée sur la diversification sectorielle et géographique. Nous investissons prioritairement dans des industries à fort potentiel de rendement en Afrique, tout en maintenant une structure de capital rigoureuse.
                        </p>
                        <p>
                           Notre modle repose sur l'autonomisation de nos filiales, soutenues par une gouvernance centralisée qui assure la conformité, la gestion des risques et l'optimisation des ressources partagées.
                        </p>
                     </div>
                  </div>

                  <div>
                     <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
                        <h2 className="text-3xl font-bold text-slate-900">Centre de Rapports</h2>
                     </div>
                     
                     <div className="space-y-4">
                        {[2023, 2022, 2021].map((year) => (
                           <div key={year} className="flex items-center justify-between p-6 border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all group bg-slate-50 hover:bg-white cursor-pointer">
                              <div className="flex items-center gap-6">
                                 <div className="h-12 w-12 bg-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                    <FileText size={24} />
                                 </div>
                                 <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Rapport Annuel {year}</h3>
                                    <p className="text-slate-500 text-sm">Audit complet & États financiers consolidés</p>
                                 </div>
                              </div>
                              <Button variant="ghost" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50">
                                 PDF <Download size={16} className="ml-2" />
                              </Button>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Sidebar */}
               <div className="lg:col-span-4 space-y-12">
                  
                  {/* Contact Card */}
                  <div className="bg-[#004080] text-white p-8 relative overflow-hidden">
                     <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-cyan-500 pl-3">Relations Investisseurs</h3>
                        <p className="text-blue-200 text-sm mb-8">
                           Pour toute demande d'information financière ou opportunité de partenariat en capital.
                        </p>
                        <div className="space-y-4">
                           <div className="flex items-center gap-3">
                              <Mail size={16} className="text-cyan-500" />
                              <span className="font-medium text-sm">investors@itmafrica.com</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <Phone size={16} className="text-cyan-500" />
                              <span className="font-medium text-sm">+243 81 99 99 999</span>
                           </div>
                        </div>
                     </div>
                     <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
                  </div>

                  {/* Calendar */}
                  <div className="border border-slate-200 p-8 bg-slate-50">
                     <h3 className="text-lg font-bold text-slate-900 mb-6">Calendrier Financier</h3>
                     <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                           <div className="w-12 text-center pt-1">
                              <span className="block text-xs font-bold text-slate-400 uppercase">Nov</span>
                              <span className="block text-2xl font-bold text-slate-900">15</span>
                           </div>
                           <div className="border-l border-slate-200 pl-4">
                              <h4 className="font-bold text-slate-900 text-sm">Résultats T3 2025</h4>
                              <p className="text-xs text-slate-500 mt-1">Conférence téléphonique</p>
                           </div>
                        </div>
                        
                        <div className="flex gap-4 items-start">
                           <div className="w-12 text-center pt-1">
                              <span className="block text-xs font-bold text-slate-400 uppercase">Fev</span>
                              <span className="block text-2xl font-bold text-slate-900">28</span>
                           </div>
                           <div className="border-l border-slate-200 pl-4">
                              <h4 className="font-bold text-slate-900 text-sm">Résultats Annuels 2025</h4>
                              <p className="text-xs text-slate-500 mt-1">Publication Audités</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
