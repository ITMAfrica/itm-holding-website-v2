import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X, MapPin, Phone, Mail, Linkedin, Facebook, Twitter, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import logoImg from 'figma:asset/4b3e86f7aa077392f269266f96e5414dae08332d.png';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'À propos', path: '/about' },
    { label: 'Nos entreprises', path: '/companies' },
    { label: 'Industries', path: '/industries' },
    { label: 'Investisseurs', path: '/investors' },
    { label: 'Médias et impact', path: '/media' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      {/* Header */}
      <header className="absolute top-0 z-50 w-full bg-transparent border-b border-white/10">
        <div className="w-full md:px-32 lg:px-[15vw] py-[14px] flex justify-between items-center px-[215px] mt-[-1px] mr-[0px] mb-[0px] ml-[0px]">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="relative w-40 h-12">
              <img src={logoImg} alt="ITM Holding" className="absolute top-1/2 -translate-y-1/2 left-0 h-32 w-auto object-contain max-w-none" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 m-[0px] p-[0px] px-[-1px] py-[0px] px-[6px] bg-[rgba(255,255,255,0)]">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold transition-colors hover:text-cyan-400 whitespace-nowrap text-slate-300 flex items-center gap-1"
                >
                  {item.label}
                  <ExternalLink size={14} />
                </a>
              ) : (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`text-sm font-bold transition-colors hover:text-cyan-400 whitespace-nowrap ${location.pathname === item.path ? 'text-cyan-400 font-bold' : 'text-slate-300'}`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button asChild className="bg-[#004080] hover:bg-slate-900 text-white font-bold rounded-none px-8 h-10 shadow-none transition-all ml-[25px] mr-[0px] my-[0px] uppercase tracking-widest text-[11px]">
              <Link to="/contact" className="flex items-center gap-2">
                Contactez-nous
                <ArrowRight size={14} />
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-blue-950 border-t border-white/10 shadow-2xl py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium py-3 border-b border-white/5 text-slate-300 flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <ExternalLink size={16} />
                </a>
              ) : (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`text-lg font-medium py-3 border-b border-white/5 ${location.pathname === item.path ? 'text-cyan-400' : 'text-slate-300'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button asChild className="bg-[#004080] hover:bg-slate-900 text-white font-bold w-full mt-4 h-14 rounded-none shadow-none uppercase tracking-widest text-[11px]">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                Contactez-nous
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[rgb(0,8,43)] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>
        
        <div className="w-full px-8 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
             <div className="lg:max-w-xs">
               <Link to="/" className="block mb-8 group">
                  <div className="relative w-36 h-12">
                     <img src={logoImg} alt="ITM Holding" className="absolute top-1/2 -translate-y-1/2 left-0 h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
               </Link>
               <p className="text-[rgb(144,161,185)] leading-relaxed mb-8 font-light text-[16px] font-bold font-normal">
                 Leader panafricain multisectoriel, nous transformons le potentiel du continent en performance durable à travers l'excellence opérationnelle et l'innovation.
               </p>
               <div className="flex gap-4">
                 {[
                   { icon: Linkedin, href: "#" },
                   { icon: Facebook, href: "#" },
                   { icon: Twitter, href: "#" },
                   { icon: Globe, href: "#" }
                 ].map((social, i) => (
                   <a 
                     key={i} 
                     href={social.href} 
                     className="w-12 h-12 rounded-none border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300"
                   >
                     <social.icon size={20} />
                   </a>
                 ))}
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full lg:w-auto">
               <div>
                 <h4 className="font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-[0.2em] text-[11px]">
                   <span className="w-8 h-px bg-cyan-500"></span>
                   Groupe
                 </h4>
                 <ul className="space-y-4 text-slate-400 font-bold font-normal">
                   {['À Propos', 'Gouvernance', 'Nos Filiales', 'Investisseurs', 'Médias et Impact'].map((item) => (
                     <li key={item} className="font-bold">
                       <Link to="#" className="text-[17px] font-light hover:text-cyan-400 hover:translate-x-2 transition-all inline-block duration-300">{item}</Link>
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <h4 className="font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-[0.2em] text-[11px]">
                   <span className="w-8 h-px bg-cyan-500"></span>
                   Expertise
                 </h4>
                 <ul className="space-y-4 text-slate-400">
                   {['Ressources Humaines', 'Mines & Industrie', 'Logistique', 'Technologie', 'Santé', 'Construction'].map((item) => (
                     <li key={item}>
                       <Link to="#" className="text-[17px] font-light hover:text-cyan-400 hover:translate-x-2 transition-all inline-block duration-300">{item}</Link>
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <h4 className="font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-[0.2em] text-[11px]">
                   <span className="w-8 h-px bg-cyan-500"></span>
                   Contact
                 </h4>
                 <ul className="space-y-6 text-slate-400">
                   <li className="flex items-start gap-4 group">
                     <MapPin size={18} className="text-cyan-500 shrink-0 mt-1" />
                     <span className="text-[17px] font-light leading-relaxed">272, Avenue Colonel Mondjiba,<br/>Kinshasa – Ngaliema, RDC</span>
                   </li>
                   <li className="flex items-center gap-4 group">
                     <Phone size={18} className="text-cyan-500 shrink-0" />
                     <span className="text-[17px] font-light whitespace-nowrap">+243 81 000 0000</span>
                   </li>
                   <li className="flex items-center gap-4 group">
                     <Mail size={18} className="text-cyan-500 shrink-0" />
                     <a href="mailto:info@itmafrica.com" className="text-[17px] font-light hover:text-white transition-colors">info@itmafrica.com</a>
                   </li>
                 </ul>
               </div>
             </div>
          </div>

          <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[11px] font-bold uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} ITM Holding. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Confidentialité</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Conditions</Link>
              <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Plan du Site</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
