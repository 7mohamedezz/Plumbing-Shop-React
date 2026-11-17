import { EFFECTS, SHOWROOM_STATS } from "@/lib/effects";
import { useInView } from "@/hooks/use-in-view";
import PressureGauge from "./PressureGauge";

const ShowroomStats = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);

  if (!EFFECTS.pressureGauges) return null;

  return (
    <div
      ref={ref}
      className="showroom-stats"
      role="group"
      aria-label="أرقام المعرض"
      data-reveal
    >
      {SHOWROOM_STATS.map((stat, index) => (
        <PressureGauge
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          max={stat.max}
          active={inView}
          delay={index * 120}
        />
      ))}
    </div>
  );
};

export default ShowroomStats;
