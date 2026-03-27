import React from 'react';

interface CountUpProps {
  from: number;
  to: number;
  duration?: number;
}

/** ease-out expo: rapide au début, forte décélération sur la valeur finale */
function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export const CountUp: React.FC<CountUpProps> = ({ from, to, duration = 2.2 }) => {
  const [value, setValue] = React.useState(from);
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);
  const frameRef = React.useRef<number>(0);
  const hasStartedRef = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      setVisible(true);

      let startTime: number | null = null;

      const tick = (now: number) => {
        if (startTime === null) startTime = now;
        const elapsed = (now - startTime) / (duration * 1000);
        const t = Math.min(elapsed, 1);
        const eased = easeOutExpo(t);
        const current = from + (to - from) * eased;
        setValue(Math.round(current));

        if (t < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setValue(to);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) run();
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [from, to, duration]);

  return (
    <span
      ref={ref}
      className={
        visible
          ? 'inline-block opacity-100 transition-opacity duration-500 ease-out'
          : 'inline-block opacity-0'
      }
    >
      {value}
    </span>
  );
};
