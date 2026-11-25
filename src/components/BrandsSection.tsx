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
    <section className="bg-cream py-16">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold text-brand">ماركات نضمنها</p>
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">العلامات التجارية</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            نوفر منتجات من أفضل العلامات التجارية الموثوقة.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex aspect-[3/2] items-center justify-center rounded-xl border border-ink/10 bg-white p-6"
            >
              <img
                src={b.logo}
                alt={b.name}
                loading="lazy"
                className="max-h-16 w-4/5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
