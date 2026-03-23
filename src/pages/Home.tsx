import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Users, Building2, Globe2, TrendingUp, Target, Eye, Heart, ChevronRight, ChevronLeft, Quote, Calendar, ArrowUpRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { AfricaMap } from '../components/AfricaMap';
import { companies } from '../data/companies';
import { Badge } from '../components/ui/badge';

// Images for Slider - Editorial High End
const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1660283423633-21bb178b2f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbW9kZXJuJTIwY2l0eSUyMHNreWxpbmUlMjBzdW5zZXQlMjBtYWplc3RpY3xlbnwxfHx8fDE3NjM2NDkzMzh8MA&ixlib=rb-4.1.0&q=80&w=1920",
    title: "L'Excellence",
    coloredTitle: "africaine",
    subtitle: "Un conglomérat panafricain visionnaire, bâtissant l'avenir à travers 15 industries clés.",
    highlight: "Vision"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1628740106919-0a1b85f9328c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWluaW5nJTIwZXhjYXZhdGlvbiUyMG1hY2hpbmVyeSUyMHN1bnNldCUyMGRyYW1hdGljfGVufDF8fHx8MTc2MzY0OTMzOXww&ixlib=rb-4.1.0&q=80&w=1920",
    title: "Innovation",
    coloredTitle: "industrielle",
    subtitle: "Des solutions minières et industrielles de pointe, adaptées aux défis du continent.",
    highlight: "Expertise"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwYWZyaWNhbiUyMHRlYW0lMjBsZWFkZXJzaGlwJTIwbWVldGluZyUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3NjM2NDkzMzl8MA&ixlib=rb-4.1.0&q=80&w=1920",
    title: "Capital",
    coloredTitle: "humain",
    subtitle: "Plus de 15 000 collaborateurs unis par une culture de performance et d'intégrité.",
    highlight: "Talent"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1740088314470-72dd4767653c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjYXJnbyUyMHNoaXAlMjBjb250YWluZXIlMjBwb3J0JTIwYWZyaWNhJTIwYWVyaWFsfGVufDF8fHx8MTc2MzY0OTMzOXww&ixlib=rb-4.1.0&q=80&w=1920",
    title: "Connectivité",
    coloredTitle: "globale",
    subtitle: "Une présence dans 22 pays, reliant les marchés locaux aux opportunités mondiales.",
    highlight: "Réseau"
  }
];

const TEAM_IMAGE = "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYWZyaWNhbiUyMGJ1c2luZXNzJTIwdGVhbSUyMG1eXRhZXRpbnclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNjQ2OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const PARTNERS = [
  "Glencore", "Ivanhoe Mines", "Kibali Gold", "Vodacom", "Orange", "Equity Bank", "Rawbank", "Congo Airways"
];

const TESTIMONIALS = [
  {
    quote: "ITM Holding a su transformer nos défis logistiques en avantages compétitifs grâce à leur connaissance fine du terrain.",
    author: "Jean-Michel Kalala",
    role: "Directeur des opérations",
    company: "Kibali Gold Mines"
  },
  {
    quote: "Un partenaire stratégique qui allie standards internationaux et expertise locale. Indispensable pour nos projets d'infrastructure.",
    author: "Sarah O'Neil",
    role: "VP Infrastructure",
    company: "Global construction corp"
  },
  {
    quote: "Leur pôle RH nous a permis de recruter et former une élite locale rapidement, accélérant notre déploiement national.",
    author: "Patrick Mbuyi",
    role: "DRH afrique centrale",
    company: "Teleco Group"
  }
];

const NEWS = [
  {
    id: 1,
    category: "Corporate",
    date: "24 Nov 2025",
    title: "ITM Holding annonce une croissance de 15% sur le secteur minier",
    image: "https://images.unsplash.com/photo-1591622414912-34f2185618b8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "RSE",
    date: "18 Nov 2025",
    title: "Lancement du programme 'Jeunes Talents' en RDC et Zambie",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Tech",
    date: "10 Nov 2025",
    title: "Digitalisation : Nouvelle plateforme logistique intégrée",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  }
];

const CountUp = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
  const [count, setCount] = React.useState(from);
  
  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };
    
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);
  
  return <>{count}</>;
};

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.img
            src={SLIDES[currentSlide].image}
            alt={SLIDES[currentSlide].title}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 8, ease: "linear" }}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays - Matching Careers Page */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent opacity-90"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full w-full px-8 md:px-32 lg:px-[15vw] flex flex-col justify-center z-10">
        <div className="max-w-5xl relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {/* Massive Headline */}
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:text-5xl font-bold text-white leading-[1.1] mb-8 tracking-tight text-3xl"
              >
                {SLIDES[currentSlide].title} <span style={{ color: '#90A1B9' }}>{SLIDES[currentSlide].coloredTitle}</span>
              </motion.h1>
              
              {/* Editorial Subtitle */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col md:flex-row gap-8 items-start mb-12"
              >
                <div className="hidden md:block w-px h-16 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                <p className="text-[20px] md:text-[24px] text-[#90A1B9] max-w-lg leading-relaxed font-light lowercase">
                  {SLIDES[currentSlide].subtitle}
                </p>
              </motion.div>
              
              {/* Actions */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button className="bg-white text-slate-950 hover:bg-cyan-50 rounded-none text-lg px-5 py-4 font-bold tracking-widest uppercase transition-all duration-500 hover:pl-12 group text-[13px] text-[15px]">
                  Découvrir notre impact
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white rounded-none text-lg px-5 py-4 tracking-widest uppercase bg-transparent backdrop-blur-sm transition-colors text-[15px]">
                  Nos filiales
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls - Minimalist */}
      <div className="absolute bottom-10 right-4 md:right-10 z-20 flex gap-2">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-none border border-slate-500/30 bg-slate-950/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-none border border-slate-500/30 bg-slate-950/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Indicators - Minimalist Lines */}
      <div className="absolute bottom-0 left-0 w-full z-20 flex">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-700 flex-1 ${
              currentSlide === index ? "bg-cyan-400" : "bg-slate-800 hover:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="bg-white font-sans selection:bg-cyan-200 selection:text-slate-900">
      <HeroSlider />

      {/* PORTFOLIO OVERVIEW - Editorial Style */}
      <section className="py-24 bg-white relative">
        <div className="w-full px-8 md:px-32 lg:px-[15vw] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
             <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                   <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">Notre Portefeuille</span>
                   <div className="h-px flex-1 bg-slate-200"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                   Un groupe<br/>
                   <span className="text-[#004080]">15 industries</span>
                </h2>
             </div>
             <div className="lg:col-span-7 flex flex-col justify-end">
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   De la gestion des ressources humaines à l'ingénierie minière, ITM Holding excelle grâce à une intégration verticale unique qui nous permet de contrôler la qualité à chaque étape de la chaîne de valeur.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild className="rounded-none border-slate-300 text-slate-900 hover:bg-[#0092B8] hover:text-white hover:border-[#0092B8] transition-colors">
                    <Link to="/companies">Explorer toutes les filiales</Link>
                  </Button>
                </div>
             </div>
          </div>


        </div>
      </section>

      {/* STATS SECTION - Minimalist Dark */}
      <section className="py-24 bg-[#004080] text-white">
         <div className="w-full px-8 md:px-32 lg:px-[15vw]">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
              {[
                { count: "14+", label: "Années d'Excellence", icon: TrendingUp },
                { count: "15", label: "Filiales Spécialisées", icon: Building2 },
                { count: "22", label: "Pays d'Opérations", icon: Globe2 },
                { count: "800+", label: "Partenaires de Confiance", icon: Users },
              ].map((stat, index) => (
                <div key={index} className="pt-8 lg:pt-0 lg:pl-8 first:pl-0 text-center lg:text-left group">
                   <div className="flex justify-center lg:justify-start mb-4">
                      <div className="p-3 rounded-full bg-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                        <stat.icon size={24} strokeWidth={1.5} />
                      </div>
                   </div>
                   <div className="text-5xl font-bold text-white mb-2 tracking-tighter">
                     {stat.count.includes('+') ? <><CountUp from={0} to={parseInt(stat.count)} />+</> : <CountUp from={0} to={parseInt(stat.count)} />}
                   </div>
                   <div className="text-sm text-blue-200 uppercase tracking-widest font-medium flex items-center justify-center lg:justify-start gap-2">
                      {stat.label}
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* MISSION VISION VALUES - Editorial Layout */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="w-full px-8 md:px-32 lg:px-[15vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group"
            >
              <div className="h-full relative overflow-hidden bg-slate-100">
                 <img src={TEAM_IMAGE} alt="ITM Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#90A1B9]/30"></div>
                 <div className="absolute bottom-12 left-12 bg-white p-10 border-l-4 border-[#90A1B9] shadow-2xl max-w-[90%]">
                    <Quote className="text-[#90A1B9] mb-6 opacity-20" size={40} />
                    <p className="text-2xl font-light text-slate-900 leading-tight mb-6">
                      L'Afrique n'est pas seulement notre marché, c'est notre maison.
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-px bg-[#90A1B9]"></div>
                       <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#90A1B9]">Sylva Monga, Chairman</p>
                    </div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-center py-12"
            >
              <div className="mb-16">
                 <span className="text-[#90A1B9] text-sm font-bold uppercase tracking-[0.4em] mb-4 block">Héritage & Vision</span>
                 <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">Notre identité</h2>
                 <p className="text-slate-500 text-xl leading-relaxed max-w-2xl font-light">
                   Nous sommes guidés par une ambition unique : transformer le potentiel brut du continent en performance durable. Notre approche fusionne les standards internationaux les plus rigoureux avec un ancrage local profond.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-[#90A1B9]"></div>
                       <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">Notre Mission</h3>
                    </div>
                    <p className="text-slate-500 leading-relaxed font-light pl-5 border-l border-slate-100">
                      Catalyser la croissance de nos filiales pour délivrer une valeur ajoutée exceptionnelle et pérenne sur l'ensemble de la chaîne de valeur.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-slate-300"></div>
                       <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">Notre Vision</h3>
                    </div>
                    <p className="text-slate-500 leading-relaxed font-light pl-5 border-l border-slate-100">
                      Ériger ITM Holding comme la référence absolue de l'excellence opérationnelle et éthique en Afrique d'ici 2030.
                    </p>
                 </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Editorial Style */}
      <section className="py-16 bg-slate-50">
        <div className="w-full px-8 md:px-32 lg:px-[15vw] bg-[#004080] relative overflow-hidden py-16">
           {/* Abstract HQ Pattern */}
           <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#90A1B9 1px, transparent 1px)', size: '40px 40px', backgroundSize: '40px 40px' }}></div>
           </div>
           
           <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                 <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-px bg-[#90A1B9]"></div>
                       <span className="text-[#90A1B9] font-bold tracking-[0.4em] uppercase text-xs">Voix des Partenaires</span>
                    </div>
                    <h2 className="md:text-4xl font-bold text-white leading-tight text-[54px]">
                       Ils nous font <span className="text-[#90A1B9]">confiance.</span>
                    </h2>
                 </div>

              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/10">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="group border-r border-b border-white/10 p-8 md:p-10 hover:bg-[#003366] transition-all duration-500 relative flex flex-col justify-between gap-10 min-h-[350px]">

                    
                    <div className="relative z-10">

                      <p className="text-blue-50 italic text-lg mb-8 leading-relaxed font-light">
                        "{t.quote}"
                      </p>
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-12 h-12 border border-white/20 p-1 rounded-none overflow-hidden">
                        <div className="w-full h-full bg-[#003366] flex items-center justify-center text-white font-bold text-lg">
                           {t.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white tracking-wide mb-0.5 uppercase text-xs">{t.author}</div>
                        <div className="text-[9px] text-[#90A1B9] uppercase tracking-[0.2em] font-bold mb-0.5">{t.role}</div>
                        <div className="text-[10px] text-blue-200/60 font-medium">{t.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* LATEST NEWS - Editorial Minimalist Grid */}
      <section className="py-20 bg-slate-50 relative">
        <div className="w-full px-8 md:px-32 lg:px-[15vw]">
          {/* Header */}
          <div className="mb-12">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <span className="text-cyan-600 font-bold tracking-[0.3em] uppercase text-xs">Actualités</span>
             </div>
             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
                   À la une
                </h2>
                <Button variant="outline" className="rounded-none border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all px-6 py-4 uppercase tracking-widest text-[20px] font-bold">
                   Lire l'actualités 
                </Button>
             </div>
          </div>
          
          {/* Uniform Grid - 3 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200">
             {NEWS.map((item, index) => (
                <div key={item.id} className="group cursor-pointer border-r border-b border-slate-200 bg-white hover:bg-slate-950 transition-all duration-500 relative overflow-hidden">
                   {/* Image Section */}
                   <div className="aspect-video overflow-hidden relative">
                      <img 
                         src={item.image} 
                         alt={item.title} 
                         className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-20" 
                      />
                      {/* Category Badge - Overlay on hover */}
                      <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                         <Badge className="bg-white/90 backdrop-blur-sm text-slate-900 rounded-none border-none font-bold px-3 py-1.5 uppercase text-[10px] tracking-wider">
                            {item.category}
                         </Badge>
                      </div>
                   </div>
                   
                   {/* Content Section */}
                   <div className="p-6 min-h-[220px] flex flex-col justify-between">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-500 text-[10px] uppercase tracking-widest mb-4 transition-colors">
                         <Calendar size={10} />
                         <span>{item.date}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-white leading-snug mb-6 transition-colors duration-300">
                         {item.title}
                      </h3>
                      
                      {/* CTA */}
                      <div className="flex items-center text-[11px] font-bold uppercase tracking-widest text-cyan-600 group-hover:text-cyan-400 transition-all">
                         <span className="mr-2">Lire l'article</span>
                         <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                   </div>
                   
                   {/* Hover accent line */}
                   <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                </div>
             ))}
          </div>
          
          {/* Bottom Spacing */}
          <div className="h-12"></div>
        </div>
      </section>
    </div>
  );
}