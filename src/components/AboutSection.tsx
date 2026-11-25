import { Award, Users, Truck, ShieldCheck } from "lucide-react";

const features = [
  { icon: Award, title: "خبرة طويلة", desc: "موثوق من العملاء والفنيين منذ سنوات." },
  { icon: Users, title: "فريق متخصص", desc: "فريق خبير يساعدك في اختيار القطع المناسبة." },
  { icon: Truck, title: "توصيل سريع", desc: "توصيل سريع في المنطقة." },
  { icon: ShieldCheck, title: "ماركات موثوقة", desc: "نوفر فقط المنتجات من الشركات المصنعة الموثوقة." },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-ink py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-2 text-sm font-bold text-lime">ليه أحمد بدوي؟</p>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              لماذا معرض أحمد بدوي؟
            </h2>
          </div>
          <p className="max-w-md text-white/70">
            نحن أكثر من مجرد معرض — نحن شريكك في السباكة، من الإصلاحات البسيطة إلى المشاريع
            الكبيرة.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-lime text-ink">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-white">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
