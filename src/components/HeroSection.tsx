import heroImage from "@/assets/hero-plumbing.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={heroImage}
        alt="معرض أحمد بدوي للأدوات الصحية"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
            شريكك الموثوق في الأدوات الصحية
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg">
            مواسير، وصلات، محابس وأدوات سباكة احترافية لجميع الاحتياجات.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              تصفح المنتجات
            </a>
            <a
              href="#location"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              زُر معرضنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
