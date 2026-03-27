import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

interface Slide {
  id: number;
  image: string;
  titleKey: string;
  coloredKey: string;
  subtitleKey: string;
  highlightKey: string;
}

const SLIDE_DEFS: Slide[] = [
  {
    id: 1,
    image:
      'https://auzyjcdanenhoqyrbjxg.supabase.co/storage/v1/object/public/images/users/7a23a808-8309-4bff-b922-1a9db7482400/dce573c8-48eb-4e7d-a68d-c88f9f9cec1f.png',
      
    titleKey: 'hero.slide1_title',
    coloredKey: 'hero.slide1_colored',
    subtitleKey: 'hero.slide1_subtitle',
    highlightKey: 'hero.slide1_highlight',
  },
  {
    id: 2,

      image:
      'https://auzyjcdanenhoqyrbjxg.supabase.co/storage/v1/object/public/images/users/7a23a808-8309-4bff-b922-1a9db7482400/da72549c-edb1-4ec4-b3fa-45fc92e80687.png',
    
      titleKey: 'hero.slide2_title',
    coloredKey: 'hero.slide2_colored',
    subtitleKey: 'hero.slide2_subtitle',
    highlightKey: 'hero.slide2_highlight',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbm5lbCUyMGFmcmljYW4lMjB0ZWFtJTIwbGVhZGVyc2hpcCUyMG1lZXRpbmclMjBib2FyZHJvb218ZW58MXx8fHwxNzYzNjQ5MzM5fDA&ixlib=rb-4.1.0&q=80&w=1920',
    titleKey: 'hero.slide3_title',
    coloredKey: 'hero.slide3_colored',
    subtitleKey: 'hero.slide3_subtitle',
    highlightKey: 'hero.slide3_highlight',
  },
  {
    id: 4,
    image:
      'https://auzyjcdanenhoqyrbjxg.supabase.co/storage/v1/object/public/images/users/7a23a808-8309-4bff-b922-1a9db7482400/32b76284-05f5-4909-af99-c59e321837d0.png',
    titleKey: 'hero.slide4_title',
    coloredKey: 'hero.slide4_colored',
    subtitleKey: 'hero.slide4_subtitle',
    highlightKey: 'hero.slide4_highlight',
  },
];

export const HeroSliderSection: React.FC = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const currentLng = resolveLanguageFromParams(lng);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => SLIDE_DEFS, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const s = slides[currentSlide];

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
          <motion.img
            src={s.image}
            alt={t(s.titleKey)}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 8, ease: 'linear' }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent opacity-90"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full w-full px-8 lg:px-[15vw] flex flex-col justify-center z-10">
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
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-[1.1] mb-6 md:mb-8 xl:mb-10 tracking-tight"
              >
                {t(s.titleKey)} <span style={{ color: '#90A1B9' }}>{t(s.coloredKey)}</span>
              </motion.h1>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col md:flex-row gap-3 md:gap-2 xl:gap-8 items-start mb-8 md:mb-10 xl:mb-12"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 64 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="hidden md:block w-px bg-gradient-to-b from-cyan-500/50 to-transparent"
                />
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  className="text-2xl text-[#90A1B9] max-w-lg leading-[39px] font-light"
                >
                  {t(s.subtitleKey)}
                </motion.p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 items-start sm:items-center"
              >
                <Button asChild className="w-fit max-w-full bg-white text-slate-950 hover:bg-cyan-50 rounded-none px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors group whitespace-nowrap">
                  <Link to={getLocalizedPath('/industries', currentLng)}>
                    {t('hero.ctaPrimary')}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-fit max-w-full border-slate-600/70 text-white hover:border-cyan-400/55 hover:bg-cyan-500/15 hover:text-white rounded-none px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm tracking-widest uppercase bg-transparent backdrop-blur-sm transition-colors duration-300 whitespace-nowrap">
                  <Link to={getLocalizedPath('/companies', currentLng)}>{t('hero.ctaSecondary')}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 right-4 md:right-10 z-20 flex gap-2">
        <button
          type="button"
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-none border border-slate-500/30 bg-slate-950/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} className="md:hidden" />
          <ChevronLeft size={20} className="hidden md:block" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-none border border-slate-500/30 bg-slate-950/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={16} className="md:hidden" />
          <ChevronRight size={20} className="hidden md:block" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 flex">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-700 flex-1 ${
              currentSlide === index ? 'bg-cyan-400' : 'bg-slate-800 hover:bg-slate-700'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
