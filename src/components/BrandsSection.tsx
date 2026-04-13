import idealStandard from "@/assets/brand-ideal-standard.png";
import lecico from "@/assets/brand-lecico.jpg";
import aboughaly from "@/assets/brand-aboughaly.png";
import polo from "@/assets/brand-polo.jpg";
import egic from "@/assets/brand-egic.jpg";

const brands = [
  { name: "Ideal Standard", logo: idealStandard },
  { name: "Lecico", logo: lecico },
  { name: "أبو غالي", logo: aboughaly },
  { name: "Polo Egypt", logo: polo },
  { name: "EGIC", logo: egic },
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">العلامات التجارية</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            نوفر منتجات من أفضل العلامات التجارية الموثوقة
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((b) => (
            <div
              key={b.name}
              className="bg-white rounded-lg border p-4 flex items-center justify-center aspect-square hover:shadow-md transition-shadow"
            >
              <img
                src={b.logo}
                alt={b.name}
                loading="lazy"
                className="max-h-32 w-4/5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
