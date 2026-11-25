import { useEffect, useRef, useState } from "react";
import PipeDivider from "@/components/PipeDivider";

const lines = [
  { text: "خلاطات وأطقم حمامات", highlight: false },
  { text: "اختار بينهم براحتك.", highlight: true },
];

const TaglineSection = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container">
        <p className="mb-5 text-sm font-bold text-brand">للحمام والمطبخ</p>
        <h2
          ref={ref}
          className="max-w-4xl space-y-4 text-4xl font-extrabold leading-loose text-ink md:space-y-6 md:text-6xl"
        >
          {lines.map((line, li) => {
            const offset = lines
              .slice(0, li)
              .reduce((total, previous) => total + previous.text.split(" ").length, 0);

            return (
              <span key={line.text} className="block">
                {line.text.split(" ").map((word, wi) => (
                  <span
                    key={`${word}-${wi}`}
                    style={{ transitionDelay: shown ? `${(offset + wi) * 70}ms` : "0ms" }}
                    className={`transition-colors duration-500 ease-smooth ${
                      shown
                        ? line.highlight
                          ? "text-brand"
                          : "text-ink"
                        : "text-ink/20"
                    }`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </span>
            );
          })}
        </h2>
      </div>

      <div className="mt-12 md:mt-16">
        <PipeDivider />
      </div>
    </section>
  );
};

export default TaglineSection;
