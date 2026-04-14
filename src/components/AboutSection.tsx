import { Award, Users, Truck, ShieldCheck } from "lucide-react";

const features = [
  { icon: Award, title: "خبرة طويلة", desc: "موثوق من العملاء والفنيين منذ سنوات." },
  { icon: Users, title: "فريق متخصص", desc: "فريق خبير يساعدك في اختيار القطع المناسبة." },
  { icon: Truck, title: "توصيل سريع", desc: "توصيل سريع في المنطقة." },
  { icon: ShieldCheck, title: "ماركات موثوقة", desc: "نوفر فقط المنتجات من الشركات المصنعة الموثوقة." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">لماذا معرض الفتح؟</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            نحن أكثر من مجرد معرض — نحن شريكك في السباكة. من الإصلاحات البسيطة إلى المشاريع الكبيرة، نحن هنا لمساعدتك.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-lg bg-background border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
