import React from 'react';
import { useTranslation } from 'react-i18next';
import { CountUp } from './CountUp';

interface Stat {
  count: string;
  labelKey: string;
}

const stats: Stat[] = [
  { count: '14+', labelKey: 'stats.years' },
  { count: '15', labelKey: 'stats.subsidiaries' },
  { count: '22', labelKey: 'stats.countries' },
  { count: '800+', labelKey: 'stats.partners' },
];

export const StatsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#003366] text-white">
      <div className="w-full px-8 lg:px-[15vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:items-stretch lg:divide-x lg:divide-white/[0.12]">
          {stats.map((stat) => (
            <article
              key={stat.labelKey}
              className="mx-auto flex w-full max-w-md min-h-0 flex-col sm:mx-0 sm:max-w-none lg:px-3 xl:px-2.5 2xl:px-1.5 min-[1920px]:px-1"
            >
              <div className="flex min-h-[12rem] w-full flex-1 flex-col items-center justify-center border border-white/[0.1] bg-white/[0.02] px-6 py-10 text-center sm:px-8 sm:py-12 lg:min-h-[14rem]">
                <p
                  className="text-5xl sm:text-6xl font-extralight tabular-nums tracking-tight text-white mb-5"
                  aria-label={`${stat.count.replace('+', '')} ${t(stat.labelKey)}`}
                >
                  {stat.count.includes('+') ? (
                    <>
                      <CountUp from={0} to={parseInt(stat.count, 10)} />+
                    </>
                  ) : (
                    <CountUp from={0} to={parseInt(stat.count, 10)} />
                  )}
                </p>
                <span
                  className="mx-auto mb-5 block h-px w-12 bg-white/30"
                  aria-hidden
                />
                <p className="text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.22em] text-white/55">
                  {t(stat.labelKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
