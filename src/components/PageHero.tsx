
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: string;
}

export function PageHero({ 
  title, 
  subtitle, 
  image, 
  height = "60vh" 
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden" style={{ height }}>
      {/* Background Image with Parallax-like fixed attachment could be problematic on mobile, so using absolute */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/30"></div>
      </div>

      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="h-1 w-20 bg-cyan-400 mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light border-l-4 border-white/20 pl-6">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
