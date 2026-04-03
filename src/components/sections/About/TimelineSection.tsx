import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import miningImg from 'figma:asset/9d3e8ff82e95441957fc679557a9a64c9cb8e257.png';

interface TimelineTextItem {
  year: string;
  title: string;
  desc: string;
}

const IMAGES = [
  'https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDM0MTIxNXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1763963301694-3784effa96ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwYmx1ZSUyMHNreXxlbnwxfHx8fDE3NjQzNDEyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1762801157192-04ed43daa37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYWlycG9ydCUyMHRyYXZlbCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDM0MTIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
  miningImg,
  'https://images.unsplash.com/photo-1761157995927-54b10202f92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMHNreXNjcmFwZXIlMjBjb3Jwb3JhdGUlMjBoZWFkcXVhcnRlcnN8ZW58MXx8fHwxNzY0MzQxMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
];

export const TimelineSection: React.FC = () => {
  const { t } = useTranslation();
  const textItems = t('timeline.items', { returnObjects: true }) as TimelineTextItem[];
  const timelineItems = useMemo(
    () => textItems.map((item, i) => ({ ...item, image: IMAGES[i] ?? IMAGES[0] })),
    [textItems],
  );

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="w-full px-8 lg:px-[15vw]">
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-slate-400 text-slate-600 mb-4 uppercase tracking-widest rounded-none px-3 py-1">
            {t('timeline.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('timeline.title')}</h2>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300"></div>

          <div className="relative space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-0 w-3 h-3 bg-white border-4 border-cyan-500 rounded-full -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>

                {/* Content */}
                <div className="space-y-4">
                  <span className="text-5xl font-bold text-[rgb(231,231,231)] leading-none block select-none">{item.year}</span>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <span className="w-6 h-px bg-cyan-500"></span>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3] shadow-2xl rounded-lg group">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Alternating */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2"></div>

          <div className="relative space-y-24">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "-200px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-row items-center gap-24 ${index % 2 === 0 ? '' : 'flex-row-reverse'} relative`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="text-6xl md:text-8xl font-bold text-[rgb(231,231,231)] leading-none mb-4 block select-none">{item.year}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 justify-end group-hover:text-cyan-500 transition-colors">
                    {index % 2 !== 0 && <span className="w-8 h-px bg-cyan-500"></span>}
                    {item.title}
                    {index % 2 === 0 && <span className="w-8 h-px bg-cyan-500"></span>}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">{item.desc}</p>
                </div>

                <div className="absolute left-1/2 w-4 h-4 bg-white border-4 border-cyan-500 rounded-full -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>

                <div className="w-1/2">
                  <div
                    className={`relative overflow-hidden aspect-[4/3] shadow-2xl ${
                      index % 2 === 0 ? 'rounded-tl-[4rem] rounded-br-none' : 'rounded-tr-[4rem] rounded-bl-none'
                    } group`}
                  >
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
