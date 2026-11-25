import { useState } from "react";

const PipeDivider = () => {
  const [turns, setTurns] = useState(0);

  return (
    <div className="relative h-12 w-full md:h-16">
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <rect y="20" width="1440" height="24" fill="#4C230B" />
        <rect y="20" width="1440" height="6" fill="#713615" />
        <rect x="180" y="12" width="16" height="40" fill="#35170A" />
        <rect x="1180" y="12" width="16" height="40" fill="#35170A" />
      </svg>

      <button
        type="button"
        onClick={() => setTurns((current) => current + 1)}
        aria-label="لفّ صمام الماسورة"
        title="اضغط للف الصمام"
        className="absolute right-[16%] top-1/2 grid h-16 w-16 -translate-y-1/2 place-items-center rounded-full transition-transform duration-300 ease-smooth hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:h-20 md:w-20"
      >
        <svg
          viewBox="0 0 80 80"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <rect x="35" y="40" width="10" height="26" fill="#4C230B" />
        </svg>
        <svg
          viewBox="0 0 80 80"
          className="relative h-full w-full transition-transform duration-500 ease-smooth"
          style={{ transform: `rotate(${turns * 45}deg)` }}
          aria-hidden="true"
        >
          <circle cx="40" cy="40" r="24" fill="none" stroke="#BEF231" strokeWidth="8" />
          <path d="M40 16v48M16 40h48" stroke="#BEF231" strokeWidth="5" />
          <circle cx="40" cy="40" r="8" fill="#BEF231" />
        </svg>
      </button>
    </div>
  );
};

export default PipeDivider;
