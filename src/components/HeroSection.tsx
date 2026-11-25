import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-bathroom.jpg";
import PipeDivider from "@/components/PipeDivider";

const stats = [
  { value: "60+", label: "ماركات موجودة" },
  { value: "توصيل", label: "جوه المنطقة" },
  { value: "اسأل", label: "قبل ما تشتري" },
];

const WaterFlood = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] overflow-hidden transition-opacity duration-700 ease-smooth ${
      isOpen ? "opacity-100" : "opacity-0"
    }`}
    aria-hidden="true"
  >
    <div
      className={`water-flood absolute inset-x-0 bottom-0 h-full transition-transform duration-700 ease-smooth ${
        isOpen ? "translate-y-0" : "translate-y-[70%]"
      }`}
    >
      <svg
        viewBox="0 0 2880 360"
        preserveAspectRatio="none"
        className="water-wave absolute -inset-y-2 left-0 h-[calc(100%+1rem)] w-[250%]"
      >
        <path
          d="M0 145C180 95 360 195 540 145S900 95 1080 145S1260 195 1440 145V360H0Z"
          fill="#56E4F2"
          opacity="0.88"
        />
        <path
          d="M0 185C180 135 360 235 540 185S900 135 1080 185S1260 235 1440 185V360H0Z"
          fill="#159BC1"
          opacity="0.72"
        />
        <path
          d="M0 220C180 180 360 260 540 220S900 180 1080 220S1260 260 1440 220V360H0Z"
          fill="#087AA5"
          opacity="0.5"
        />
        <g transform="translate(1440 0)">
          <path
            d="M0 145C180 95 360 195 540 145S900 95 1080 145S1260 195 1440 145V360H0Z"
            fill="#56E4F2"
            opacity="0.88"
          />
          <path
            d="M0 185C180 135 360 235 540 185S900 135 1080 185S1260 235 1440 185V360H0Z"
            fill="#159BC1"
            opacity="0.72"
          />
          <path
            d="M0 220C180 180 360 260 540 220S900 180 1080 220S1260 260 1440 220V360H0Z"
            fill="#087AA5"
            opacity="0.5"
          />
        </g>
      </svg>
      <span className="water-bubble absolute bottom-10 left-[10%] h-2 w-2 rounded-full bg-white/70" />
      <span className="water-bubble absolute bottom-24 left-[20%] h-3 w-3 rounded-full bg-white/60 [animation-delay:400ms]" />
      <span className="water-bubble absolute bottom-14 left-[34%] h-2 w-2 rounded-full bg-white/70 [animation-delay:800ms]" />
      <span className="water-bubble absolute bottom-28 left-[48%] h-4 w-4 rounded-full bg-white/60 [animation-delay:1200ms]" />
      <span className="water-bubble absolute bottom-12 left-[62%] h-2 w-2 rounded-full bg-white/70 [animation-delay:1600ms]" />
      <span className="water-bubble absolute bottom-24 right-[24%] h-3 w-3 rounded-full bg-white/60 [animation-delay:600ms]" />
      <span className="water-bubble absolute bottom-10 right-[12%] h-2 w-2 rounded-full bg-white/70 [animation-delay:1000ms]" />
      <span className="water-bubble absolute bottom-32 right-[5%] h-3 w-3 rounded-full bg-white/60 [animation-delay:1500ms]" />
    </div>
  </div>
);

const HeroSection = () => {
  const [isFlooding, setIsFlooding] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-brand">
      <img
        src={heroImage}
        alt="حمام مودرن بتجهيزات صحية"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        width={1200}
        height={800}
      />
      <div className="absolute inset-0 z-[1] bg-brand/45" aria-hidden="true" />
      <WaterFlood isOpen={isFlooding} />
      <div className="container relative z-10 pb-10 pt-12 md:pt-20">
        <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-bold text-white/80">
              <span className="h-2.5 w-2.5 rounded-full bg-lime" />
              معرض أحمد بدوي · الكرنك الجديد، الأقصر
            </p>

            <h1 className="space-y-2 text-4xl font-extrabold leading-relaxed text-white sm:text-5xl md:space-y-4 md:text-6xl lg:text-7xl">
              <span className="block">عايز تجهز سباكة شقتك؟</span>
              <span className="block text-ink">ابدأ من هنا.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              بتجهّز شقتك؟ من أول الماسورة لحد الخلاط، عندنا أصناف التأسيس والتشطيب.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="btn btn-lime">
                شوف الأصناف
                <ArrowLeft className="h-5 w-5" />
              </a>
              <a href="#location" className="btn btn-outline-light">
                كلّمنا
              </a>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/25 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-xl font-extrabold text-ink md:text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-sm text-ink">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
      </div>
      </div>

      <p
        aria-hidden="true"
        className="display-outline pointer-events-none -mb-3 select-none whitespace-nowrap px-4 font-display text-4xl font-extrabold leading-none opacity-70 md:px-8 md:text-6xl lg:text-7xl"
      >
        أحمد بدوي · أدوات صحية · سباكة
      </p>

      <PipeDivider onOpenChange={setIsFlooding} />
    </section>
  );
};

export default HeroSection;
