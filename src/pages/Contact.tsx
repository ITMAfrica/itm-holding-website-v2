
import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MapPin, Phone, Mail, Send, Clock, ArrowRight, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { motion } from 'motion/react';

const HERO_IMAGE = "https://images.unsplash.com/photo-1664289262417-93f2d037adff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZnJpY2FuJTIwb2ZmaWNlJTIwY29ycG9yYXRlJTIwYnVpbGRpbmclMjBleHRlcmlvciUyMGFyY2hpdGVjdHVyZSUyMGdsYXNzfGVufDF8fHx8MTc2MzcxNzQxNXww&ixlib=rb-4.1.0&q=80&w=1920";

export function Contact() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      {/* 1. HERO - Standardized Page Header */}
      <PageHeader
        highlight="Contact"
        title={<>Parlons de <br/><span className="text-[#90A1B9] bg-clip-text ">votre avenir</span></>}
        subtitle="Notre équipe d'experts est à votre disposition pour transformer vos défis en opportunités de croissance durable."
        backgroundImage={HERO_IMAGE}
      />

      <div className="w-full px-8 md:px-32 lg:px-[15vw] py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Info - Bento Style */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[rgb(0,64,128)] text-white p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-8 border-l-4 border-cyan-500 pl-4 text-[rgb(255,255,255)]">Siège Social</h3>
                 
                 <div className="space-y-8">
                    <div className="flex gap-6 group/item">
                       <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                          <MapPin size={20} />
                       </div>
                       <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Adresse</span>
                          <p className="text-white text-lg leading-relaxed">
                            272, Avenue Colonel Mondjiba,<br />
                            Kinshasa – Ngaliema, RDC
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-6 group/item">
                       <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                          <Phone size={20} />
                       </div>
                       <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Téléphone</span>
                          <p className="text-white text-lg text-[20px]">+243 81 000 0000</p>
                       </div>
                    </div>

                    <div className="flex gap-6 group/item">
                       <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                          <Mail size={20} />
                       </div>
                       <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Email</span>
                          <p className="text-white text-lg">info@itmafrica.com</p>
                       </div>
                    </div>
                 </div>
               </div>
               
               {/* Background Pattern */}
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
            </div>

            {/* Added: Global Presence / Socials to balance the height */}
            <div className="bg-slate-50 p-8 border border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Réseaux Sociaux</h4>
                <p className="text-slate-500 text-sm">Restez connecté avec le HQ</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#004080] hover:text-white transition-all">
                  <Globe size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#004080] hover:text-white transition-all">
                  <ArrowRight size={18} className="-rotate-45" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form - Clean Minimalist */}
          <div className="lg:col-span-7">
            <div className="bg-white p-0">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Envoyez-nous un message</h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Que vous ayez une question sur nos services, besoin d'un devis ou envie de rejoindre nos équipes, nous sommes à l'écoute.
                </p>
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">Nom Complet</label>
                    <Input placeholder="Jean Dupont" className="h-14 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">Email Professionnel</label>
                    <Input type="email" placeholder="jean@entreprise.com" className="h-14 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">Téléphone</label>
                    <Input placeholder="+243 ..." className="h-14 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">NOS DIVISIONS</label>
                    <Select>
                      <SelectTrigger className="h-14 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none">
                        <SelectValue placeholder="Sélectionnez une division" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Direction Générale</SelectItem>
                        <SelectItem value="partnership">Partenariats</SelectItem>
                        <SelectItem value="hr">Ressources Humaines</SelectItem>
                        <SelectItem value="mining">ITM Mining</SelectItem>
                        <SelectItem value="energy">ITM Energy</SelectItem>
                        <SelectItem value="investors">Relations Investisseurs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">Message</label>
                  <Textarea placeholder="Détaillez votre demande..." className="min-h-[200px] bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none resize-none text-base p-6" />
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full md:w-auto bg-[rgb(0,64,128)] hover:bg-cyan-600 text-white text-lg font-bold h-16 px-12 rounded-none transition-colors flex items-center gap-3">
                    Envoyer le Message
                    <Send size={20} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section - High End Integration */}
        <div className="mt-32 w-full border-t border-gray-200 pt-24">
           {/* Header */}
           <div className="flex justify-between items-end mb-12">
              <div>
                 <h2 className="text-4xl font-light text-[#004080] mb-2">Ancrage Local</h2>
                 <p className="text-[#90A1B9] uppercase tracking-[0.2em] text-xs font-bold">Kinshasa • RDC</p>
              </div>
           </div>

           {/* Content Block */}
           <div className="bg-[#004080] w-full min-h-[500px] grid grid-cols-1 lg:grid-cols-12 border border-[#004080]">
              
              {/* Info Column */}
              <div className="lg:col-span-4 p-12 flex flex-col justify-between relative overflow-hidden">
                 {/* Decorative background element */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                 <div className="relative z-10">
                    <div className="mb-12">
                        <MapPin className="text-white mb-6" size={32} strokeWidth={1} />
                        <h3 className="text-white text-2xl font-light leading-snug mb-2">
                           Siège Social
                        </h3>
                        <p className="text-[#90A1B9] font-light">
                           Centre névralgique des opérations
                        </p>
                    </div>

                    <div className="space-y-8">
                       <div className="group/addr cursor-default">
                          <label className="text-[10px] uppercase tracking-widest text-[#90A1B9] font-bold block mb-2">Adresse Physique</label>
                          <p className="text-white text-lg font-light leading-relaxed border-l-2 border-[#90A1B9] pl-4 group-hover/addr:border-white transition-colors">
                             272, Avenue Colonel Mondjiba<br/>
                             Commune de Ngaliema<br/>
                             Kinshasa, RDC
                          </p>
                       </div>
                       

                    </div>
                 </div>

                 <div className="relative z-10 pt-12">
                    <Button className="w-full bg-white text-[#004080] hover:bg-[#90A1B9] hover:text-white rounded-none h-14 uppercase tracking-widest text-xs font-bold transition-all">
                       Ouvrir dans Maps
                    </Button>
                 </div>
              </div>

              {/* Map Column */}
              <div className="lg:col-span-8 relative bg-slate-800 border-l border-[#004080]/50 grayscale hover:grayscale-0 transition-all duration-700">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5289567324075!2d15.2652!3d-4.3118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTgnNDIuNSJTIDE1wrAxNSc1NC43IkU!5e0!3m2!1sen!2scd!4v1620000000000!5m2!1sen!2scd"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true}
                   loading="lazy"
                   title="Carte du siège"
                   className="opacity-80 hover:opacity-100 transition-opacity"
                 ></iframe>
                 {/* Tech Overlay */}
                 <div className="absolute bottom-0 right-0 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#004080] z-10">
                    Satellite Live Feed • Active
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
