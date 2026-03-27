import React from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  highlight?: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, highlight, backgroundImage, children }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={backgroundImage}
          alt={String(title)}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent opacity-90"></div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full w-full px-8 lg:px-[15vw] flex flex-col justify-center z-10">
        <div className="w-full mt-[122px] mb-[31px] max-w-7xl relative z-10 mr-[0px] ml-[0px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {highlight && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="hidden md:block w-12 h-px bg-cyan-500/60" />
                <span className="text-cyan-400 font-bold tracking-[0.35em] uppercase text-xs">{highlight}</span>
              </motion.div>
            )}

            {/* Massive Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="md:text-5xl font-bold text-white leading-[1.1] mb-10 tracking-tight max-w-5xl text-3xl"
            >
              {title}
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row gap-5 items-start mb-5"
            >
              <div className="hidden md:block w-px h-28 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
              <p className="md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light text-[24px]">
                {subtitle}
              </p>
            </motion.div>

            {/* Actions */}
            {children && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
