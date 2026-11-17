import { useEffect, useState } from "react";
import { EFFECTS, LOADER_SESSION_KEY } from "@/lib/effects";

const shouldShow = () => {
  if (!EFFECTS.loader) return false;
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return sessionStorage.getItem(LOADER_SESSION_KEY) === null;
  } catch {
    // Storage can be blocked (private mode) — still show the loader once.
    return true;
  }
};

// Session-only loader: the showroom name fills with water, then the overlay
// fades out. Pure CSS animation, pointer-events: none, hard 1.2s cap.
const WaterLoader = () => {
  const [visible, setVisible] = useState(shouldShow);

  useEffect(() => {
    if (!visible) return;
    try {
      sessionStorage.setItem(LOADER_SESSION_KEY, "1");
    } catch {
      // ignore blocked storage
    }
    const timer = window.setTimeout(() => setVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="water-loader" aria-hidden="true">
      <div className="water-loader__inner">
        <div className="water-loader__brand">
          <span className="water-loader__name">معرض أحمد بدوي</span>
          <span className="water-loader__fill">
            <span>معرض أحمد بدوي</span>
          </span>
        </div>
        <span className="water-loader__sub">للأدوات الصحية</span>
        <span className="water-loader__wave" />
      </div>
    </div>
  );
};

export default WaterLoader;
