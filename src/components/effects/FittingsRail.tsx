import { EFFECTS } from "@/lib/effects";
import { useInView } from "@/hooks/use-in-view";

const fittings = [
  {
    name: "elbow",
    // كوع
    icon: (
      <>
        <path d="M14 6v14a10 10 0 0 0 10 10h14" />
        <path d="M10 6h8M34 28v8" />
      </>
    ),
  },
  {
    name: "tee",
    // تي
    icon: (
      <>
        <path d="M6 24h36M24 24v16" />
        <path d="M14 20v8M34 20v8M20 36h8" />
      </>
    ),
  },
  {
    name: "valve",
    // محبس
    icon: (
      <>
        <circle cx="24" cy="13" r="7" />
        <path d="M24 20v8" />
        <rect x="14" y="28" width="20" height="10" rx="2" />
      </>
    ),
  },
  {
    name: "pipe",
    // ماسورة
    icon: (
      <>
        <path d="M15 6v36M33 6v36" />
        <path d="M15 14h18M15 34h18" />
      </>
    ),
  },
];

// Decorative category icons linked by a pipe that draws itself on scroll.
const FittingsRail = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  if (!EFFECTS.fittingsRail) return null;

  return (
    <div
      ref={ref}
      className={`fittings-rail${inView ? " is-drawn" : ""}`}
      aria-hidden="true"
    >
      <span className="fittings-rail__line">
        <span className="fittings-rail__line-fill" />
      </span>
      {fittings.map((fitting, index) => (
        <span
          key={fitting.name}
          className={`fittings-rail__item${index % 2 === 1 ? " fittings-rail__item--water" : ""}`}
          style={{ transitionDelay: `${220 + index * 110}ms` }}
        >
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
          >
            {fitting.icon}
          </svg>
        </span>
      ))}
    </div>
  );
};

export default FittingsRail;
