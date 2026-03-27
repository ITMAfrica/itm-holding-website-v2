import React from 'react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true }) as Testimonial[];

  return (
    <section className="py-16 bg-slate-50">
      <div className="w-full px-8 lg:px-[15vw] bg-[#004080] relative overflow-hidden py-16">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: 'radial-gradient(#90A1B9 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          ></div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-[#90A1B9]"></div>
                <span className="text-[#90A1B9] font-bold tracking-[0.4em] uppercase text-xs">{t('testimonials.label')}</span>
              </div>
              <h2 className="md:text-4xl font-bold text-white leading-tight text-[54px]">
                {t('testimonials.title')}
                <span className="text-[#90A1B9]">{t('testimonials.titleAccent')}</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/10">
            {items.map((item, i) => (
              <div
                key={i}
                className="group border-r border-b border-white/10 p-8 md:p-10 hover:bg-[#003366] transition-all duration-500 relative flex flex-col justify-between gap-10 min-h-[350px]"
              >
                <div className="relative z-10">
                  <p className="text-blue-50 italic text-lg mb-8 leading-relaxed font-light">&quot;{item.quote}&quot;</p>
                </div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 border border-white/20 p-1 rounded-none overflow-hidden">
                    <div className="w-full h-full bg-[#003366] flex items-center justify-center text-white font-bold text-lg">{item.author.charAt(0)}</div>
                  </div>
                  <div>
                    <div className="font-bold text-white tracking-wide mb-0.5 uppercase text-xs">{item.author}</div>
                    <div className="text-[9px] text-[#90A1B9] uppercase tracking-[0.2em] font-bold mb-0.5">{item.role}</div>
                    <div className="text-[20px] text-blue-200/60 font-medium">{item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
