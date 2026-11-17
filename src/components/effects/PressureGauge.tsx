import { useEffect, useState } from "react";

type PressureGaugeProps = {
  value: number;
  suffix?: string;
  label: string;
  max: number;
  active: boolean;
  delay?: number;
};

const ARC_LENGTH = 168; // 240° of a radius-40 arc, rounded
const TICKS = Array.from({ length: 9 }, (_, index) => {
  const angle = ((150 + index * 30) * Math.PI) / 180;
  return {
    x1: 60 + 34 * Math.cos(angle),
    y1: 60 + 34 * Math.sin(angle),
    x2: 60 + 39 * Math.cos(angle),
    y2: 60 + 39 * Math.sin(angle),
  };
});

// Pressure-gauge stat: the needle sweeps and the number counts up when scrolled into view.
const PressureGauge = ({ value, suffix = "", label, max, active, delay = 0 }: PressureGaugeProps) => {
  const [display, setDisplay] = useState(0);
  const ratio = Math.min(1, Math.max(0, value / max));
  const needle = -120 + 240 * ratio;

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / 1400);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <div className="pressure-gauge">
      <div className="pressure-gauge__dial">
        <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
          <path className="pressure-gauge__arc" d="M25.36 80A40 40 0 1 1 94.64 80" />
          <path
            className="pressure-gauge__water"
            d="M25.36 80A40 40 0 1 1 94.64 80"
            strokeDasharray={ARC_LENGTH}
            strokeDashoffset={active ? ARC_LENGTH * (1 - ratio) : ARC_LENGTH}
            style={{ transitionDelay: `${delay}ms` }}
          />
          {TICKS.map((tick, index) => (
            <line key={index} className="pressure-gauge__tick" {...tick} />
          ))}
          <line
            className="pressure-gauge__needle"
            x1="60"
            y1="60"
            x2="60"
            y2="31"
            style={{
              transform: `rotate(${active ? needle : -120}deg)`,
              transitionDelay: `${delay}ms`,
            }}
          />
          <circle className="pressure-gauge__hub" cx="60" cy="60" r="5" />
        </svg>
        <span className="pressure-gauge__value" aria-hidden="true">
          {display.toLocaleString("en-US")}
          {suffix}
        </span>
      </div>
      <p className="pressure-gauge__label">{label}</p>
      <span className="sr-only">
        {value.toLocaleString("en-US")}
        {suffix} {label}
      </span>
    </div>
  );
};

export default PressureGauge;
