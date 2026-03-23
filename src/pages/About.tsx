import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Calendar, Award, Users, Target, TrendingUp, Globe, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router';
import founderImg from 'figma:asset/ee91367a767d2ed2c707479478a80f64808b443e.png';
import miningImg from 'figma:asset/9d3e8ff82e95441957fc679557a9a64c9cb8e257.png';

const HERO_IMAGE = "https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMG9mZmljZSUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzY0ODI2M3ww&ixlib=rb-4.1.0&q=80&w=1920";

export function About() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      
      {/* 1. HERO - Standardized Page Header */}
      <PageHeader
        highlight="Notre Histoire"
        title={<>Bâtir une légende <br/><span className="text-[#90A1B9] bg-clip-text">panafricaine</span></>}
        subtitle="De 2011 à aujourd'hui, découvrez comment une vision audacieuse a donné naissance à un leader continental."
        backgroundImage={HERO_IMAGE}
      />

      {/* 2. FOUNDER & ORIGIN - Magazine Interview Style */}
      <section className="py-24 bg-white">
         <div className="w-full px-8 md:px-32 lg:px-[15vw]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
               {/* Column Image */}
               <div className="lg:col-span-5 relative group sticky top-24">
                  <div className="relative overflow-hidden">
                     <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                     <img src={founderImg} alt="Sylva Monga" className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                     
                     {/* Decorative frame */}
                     <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-cyan-500/30 hidden md:block"></div>
                     <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-slate-200 hidden md:block"></div>
                  </div>
                  <div className="mt-6 border-l-2 border-cyan-500 pl-6">
                     <h3 className="text-2xl font-bold text-slate-900 leading-tight">Sylva Monga</h3>
                     <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-medium mt-1">Fondateur & Chairman</p>
                  </div>
               </div>
               
               {/* Column Content */}
               <div className="lg:col-span-7 relative">
                  <div className="absolute -top-20 -left-10 text-[12rem] font-bold text-slate-50 select-none pointer-events-none leading-none z-0 opacity-60">
                     2011
                  </div>
                  
                  <div className="relative z-10 pt-12">
                      <div className="flex items-center gap-4 mb-6">
                         <span className="w-12 h-px bg-slate-300"></span>
                         <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">Notre Histoire</span>
                      </div>
                      <h2 className="text-5xl font-bold text-slate-900 mb-5 leading-tight">
                         Une vision.<br/>
                         <span className="text-[rgb(0,64,128)] bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">un continent.</span>
                      </h2>
                      
                      <div className="relative">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="prose prose-lg prose-slate text-slate-600 leading-relaxed space-y-6 pb-12"
                        >
                           <p className="text-xl text-slate-900 font-light italic">
                              "L'Afrique avait besoin de structures capables de rivaliser avec les standards internationaux."
                           </p>
                           <p>
                              L'histoire d'ITM Holding commence avec une conviction simple mais puissante : le capital humain est la ressource la plus précieuse de l'Afrique. Ce qui a débuté comme une entreprise de formation à Lubumbashi s'est rapidement transformé en un écosystème panafricain.
                           </p>
                           <p>
                              Face aux défis logistiques et opérationnels rencontrés par nos clients miniers, nous avons compris qu'il ne suffisait pas de former. Il fallait structurer, accompagner et opérer.
                           </p>
                        </motion.div>
                        
                        {/* Enhanced Mist Effect */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
                      </div>


                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Video Section - Cinematic Experience */}
      <section className="bg-[#004080] py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        
        <div className="w-full px-8 md:px-32 lg:px-[15vw] relative z-10">
           {/* Header - Aligned with Grid System */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12 border-b border-white/10 pb-8">
              <div className="lg:col-span-5">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-px bg-[#90A1B9]"></span>
                    <span className="text-[#90A1B9] font-bold tracking-[0.3em] uppercase text-xs">Immersion</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight px-[0px] py-[-2px]">
                    Au cœur de <br/>notre excellence.
                 </h2>
              </div>
              <div className="lg:col-span-7">
                  <p className="text-blue-100/80 text-lg font-light leading-relaxed pl-8 border-l border-white/20">
                     Plongez dans le quotidien de nos équipes et découvrez comment nous façonnons l'avenir de l'industrie en Afrique.
                  </p>
              </div>
           </div>

           {/* Video Player Container */}
           <div className="relative aspect-video w-full bg-slate-900 group cursor-pointer overflow-hidden border border-white/10">
              <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                 alt="Corporate Video Cover" 
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 scale-100 group-hover:scale-105"
              />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                 </div>
              </div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent flex justify-end items-end">
                 <div className="hidden md:block">
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] border border-white/20 px-3 py-1">Watch Now</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. TIMELINE - Clean & Vertical */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
         <div className="w-full px-8 md:px-32 lg:px-[15vw]">
            <div className="text-center mb-20">
               <Badge variant="outline" className="border-slate-400 text-slate-600 mb-4 uppercase tracking-widest rounded-none px-3 py-1">Chronologie</Badge>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Une Croissance exponentielle</h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
               {/* Vertical Line */}
               <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-300"></div>

               <div className="relative space-y-24">
                  {/* Central Line */}
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

                  {[
                    { 
                       year: "2011", 
                       title: "La Genèse", 
                       desc: "Création d'ITM à Lubumbashi, RDC, avec une vision claire : transformer le capital humain par la formation d'excellence.",
                       image: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDM0MTIxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    },
                    { 
                       year: "2014", 
                       title: "Expansion Nationale", 
                       desc: "Ouverture stratégique de bureaux à Kinshasa et Kolwezi pour accompagner les grands projets miniers du pays.",
                       image: "https://images.unsplash.com/photo-1763963301694-3784effa96ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwYmx1ZSUyMHNreXxlbnwxfHx8fDE3NjQzNDEyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    },
                    { 
                       year: "2017", 
                       title: "Internationalisation", 
                       desc: "Premiers pas hors des frontières avec des implantations en Afrique du Sud et au Rwanda, marquant le début de l'ère panafricaine.",
                       image: "https://images.unsplash.com/photo-1762801157192-04ed43daa37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYWlycG9ydCUyMHRyYXZlbCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDM0MTIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    },
                    { 
                       year: "2020", 
                       title: "Diversification", 
                       desc: "Lancement des divisions ITM Mining et ITM Energy pour répondre aux besoins croissants en infrastructure et énergie.",
                       image: miningImg
                    },
                    { 
                       year: "2023", 
                       title: "Holding Unifiée", 
                       desc: "Consolidation de toutes les entités sous ITM Holding SA, un géant structuré pour les défis de demain.",
                       image: "https://images.unsplash.com/photo-1761157995927-54b10202f92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMHNreXNjcmFwZXIlMjBjb3Jwb3JhdGUlMjBoZWFkcXVhcnRlcnN8ZW58MXx8fHwxNzY0MzQxMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    },
                  ].map((item, index) => (
                     <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} relative`}
                     >
                        
                        {/* Content Side (Text) */}
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                           <span className="text-6xl md:text-8xl font-bold text-[rgb(231,231,231)] leading-none mb-4 block select-none">
                              {item.year}
                           </span>
                           <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 justify-start md:justify-end group-hover:text-cyan-500 transition-colors">
                              {index % 2 !== 0 && <span className="w-8 h-px bg-cyan-500 hidden md:block"></span>}
                              {item.title}
                              {index % 2 === 0 && <span className="w-8 h-px bg-cyan-500 hidden md:block"></span>}
                           </h3>
                           <p className="text-slate-600 leading-relaxed text-lg font-light">
                              {item.desc}
                           </p>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-cyan-500 rounded-full -translate-x-1/2 z-10 hidden md:block shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 pl-12 md:pl-0">
                           <div className={`relative overflow-hidden aspect-[4/3] shadow-2xl ${index % 2 === 0 ? 'rounded-tl-[4rem] rounded-br-none' : 'rounded-tr-[4rem] rounded-bl-none'} group`}>
                              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                              <img 
                                 src={item.image} 
                                 alt={item.title} 
                                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                              />
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. VALUES - Bento Grid Style */}
      <section className="py-24 bg-white">
         <div className="w-full px-8 md:px-32 lg:px-[15vw]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-[90px] items-end px-[12px] py-[0px] mt-[0px] mr-[-30px] ml-[-10px]">
               <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="w-12 h-px bg-[#004080]"></span>
                     <span className="text-[#004080] font-bold tracking-widest uppercase text-xs">Nos Principes</span>
                  </div>
                  <h2 className="md:text-5xl font-bold text-slate-900 leading-none uppercase tracking-tight text-[48px]">
                     Nos<br/>Valeurs
                  </h2>
               </div>
               <div className="lg:col-span-7">
                   <p className="text-slate-600 text-lg leading-relaxed font-light pl-8 border-l border-slate-200">
                      Elles ne sont pas juste des mots sur un mur. Elles définissent qui nous sommes, comment nous travaillons et ce que nous attendons les uns des autres au quotidien.
                   </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-200">
               <div className="group border-b md:border-b-0 md:border-r border-slate-200 p-12 relative overflow-hidden transition-all duration-500 cursor-default">
                  {/* Hover Background: Gradient + Image Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                     <div className="absolute inset-0 bg-gradient-to-br from-[#004080] to-[#001a33] opacity-95"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1760627927489-c0dc59976f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWwlMjBibHVlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY5MTYxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                        alt="Texture" 
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                     />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                     <div className="mb-8 text-[#90A1B9] group-hover:text-cyan-400 transition-colors duration-500">
                        <CheckCircle size={40} strokeWidth={1} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-6 uppercase tracking-widest transition-colors duration-500">
                        Intégrité<br/>
                        <span className="text-[#90A1B9] group-hover:text-blue-200/60 text-sm normal-case tracking-normal block mt-1 transition-colors duration-500">Integrity</span>
                     </h3>
                     <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed font-light transition-colors duration-500">
                        Agir avec honnêteté et transparence dans toutes nos interactions. La confiance est notre capital le plus précieux.
                     </p>
                  </div>
               </div>

               <div className="group border-b md:border-b-0 md:border-r border-slate-200 p-12 hover:bg-[#004080] transition-colors duration-500 cursor-default">
                  <div className="mb-8 text-[#90A1B9] group-hover:text-white transition-colors duration-500">
                     <Award size={40} strokeWidth={1} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-6 uppercase tracking-widest transition-colors duration-500">
                     Qualité<br/>
                     <span className="text-[#90A1B9] group-hover:text-blue-200 text-sm normal-case tracking-normal block mt-1 transition-colors duration-500">Quality</span>
                  </h3>
                  <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed font-light transition-colors duration-500">
                     Viser la plus haute qualité et ne jamais se contenter de la moyenne. L'excellence est notre standard minimum.
                  </p>
               </div>

               <div className="group p-12 hover:bg-[#004080] transition-colors duration-500 cursor-default">
                  <div className="mb-8 text-[#90A1B9] group-hover:text-white transition-colors duration-500">
                     <Users size={40} strokeWidth={1} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-6 uppercase tracking-widest transition-colors duration-500">
                     Loyauté<br/>
                     <span className="text-[#90A1B9] group-hover:text-blue-200 text-sm normal-case tracking-normal block mt-1 transition-colors duration-500">Loyalty</span>
                  </h3>
                  <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed font-light transition-colors duration-500">
                     Fidélité et engagement envers nos partenaires et notre vision. Nous ne construisons pas seulement des projets, nous construisons des vies.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. NOTRE IMPACT - New Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="w-full px-8 md:px-32 lg:px-[15vw]">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10 border-b border-slate-200 pb-10">
               <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-1 bg-cyan-500"></div>
                     <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">Impact & Responsabilité</span>
                  </div>
                  <h2 className="md:text-6xl font-light text-slate-900 leading-tight text-[64px]">
                    La performance au service<br/>
                    <span className="font-bold text-[64px]">du progrès collectif.</span>
                  </h2>
               </div>
               <div className="flex flex-col items-end gap-4">
                  <p className="text-slate-500 text-right max-w-xs text-sm leading-relaxed hidden lg:block">
                    Nos engagements sont audités annuellement selon les standards internationaux GRI et ISO 26000.
                  </p>
                  <Button variant="outline" className="rounded-none border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all px-8 py-6 uppercase tracking-widest text-xs font-bold">
                      Rapport RSE 2024 <ChevronRight size={14} className="ml-2" />
                  </Button>
               </div>
            </div>

            {/* KPI Grid - Editorial Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
               
               {/* Block 1: Education - Pure Typography */}
               <div className="border-r border-slate-200 p-8 lg:p-12 flex flex-col justify-between group hover:bg-slate-50 transition-colors duration-500">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Capital Humain</span>
                    <h3 className="text-xl font-medium text-slate-900">Formation & Excellence</h3>
                  </div>
                  <div className="mt-12">
                    <div className="text-6xl lg:text-7xl font-light text-slate-900 mb-4 tracking-tighter group-hover:text-cyan-600 transition-colors">
                      2,500<span className="text-3xl text-cyan-500 align-top font-bold">+</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-6">
                       Talents formés chaque année via l'ITM Academy, constituant le vivier de leaders de demain.
                    </p>
                  </div>
               </div>

               {/* Block 2: Environment - Image Background */}
               <div className="relative p-8 lg:p-12 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute inset-0">
                     <img 
                        src="https://images.unsplash.com/photo-1572182556191-7035e81ef95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHNvbGFyJTIwZW5lcmd5JTIwYWZyaWNhJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDI1MDMxNXww&ixlib=rb-4.1.0&q=80&w=1080" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        alt="Sustainable Energy"
                     />
                     <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Environnement</span>
                    <h3 className="text-xl font-medium text-white">Empreinte Carbone</h3>
                  </div>
                  <div className="relative z-10 mt-12">
                    <div className="text-6xl lg:text-7xl font-light text-white mb-4 tracking-tighter">
                      -30<span className="text-3xl text-cyan-400 align-top font-bold">%</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed border-t border-white/20 pt-6">
                       Réduction des émissions de CO2 sur nos sites industriels grâce à l'intégration d'énergies renouvelables.
                    </p>
                  </div>
               </div>

               {/* Block 3: Communities - Pure Typography */}
               <div className="border-r border-slate-200 p-8 lg:p-12 flex flex-col justify-between group hover:bg-slate-50 transition-colors duration-500">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Impact Local</span>
                    <h3 className="text-xl font-medium text-slate-900">Développement</h3>
                  </div>
                  <div className="mt-12">
                    <div className="text-6xl lg:text-7xl font-light text-slate-900 mb-4 tracking-tighter group-hover:text-cyan-600 transition-colors">
                      12<span className="text-3xl text-slate-300 align-top font-medium ml-2">PAYS</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-6">
                       Bénéficiant de nos programmes d'infrastructures communautaires (écoles, centres de santé, puits).
                    </p>
                  </div>
               </div>

               {/* Block 4: Parity - Image Background */}
               <div className="relative p-8 lg:p-12 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute inset-0">
                     <img 
                        src="https://images.unsplash.com/photo-1666867936058-de34bfd5b320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmVtYWxlJTIwY29ycG9yYXRlJTIwbGVhZGVyJTIwbWVldGluZ3xlbnwxfHx8fDE3NjQyNTAzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        alt="Female Leadership"
                     />
                     <div className="absolute inset-0 bg-cyan-950/90 group-hover:bg-cyan-900/80 transition-colors"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <span className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Gouvernance</span>
                    <h3 className="text-xl font-medium text-white">Femmes Dirigeantes</h3>
                  </div>
                  <div className="relative z-10 mt-12">
                    <div className="text-6xl lg:text-7xl font-light text-white mb-4 tracking-tighter">
                      40<span className="text-3xl text-white/60 align-top font-bold">%</span>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed border-t border-white/20 pt-6">
                       Taux de féminisation des instances dirigeantes, une exception notable dans le secteur industriel.
                    </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 6. FINAL CTA */}


    </div>
  );
}
