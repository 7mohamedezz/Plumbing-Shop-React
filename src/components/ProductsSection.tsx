import fittingsImg from "@/assets/products-fittings.jpg";
import pipesImg from "@/assets/products-pipes.jpg";
import valvesImg from "@/assets/products-valves.jpg";
import toolsImg from "@/assets/products-tools.jpg";
import fixturesImg from "@/assets/products-fixtures.jpg";
import accessoriesImg from "@/assets/products-accessories.jpg";

const products = [
  { name: "قلوب ومحابس نحاس", desc: "قلوب Vidmar نحاس عيار 24 — جودة ألمانية 100%.", image: valvesImg },
  { name: "مواسير ووصلات", desc: "مواسير PVC، وصلات Boroug وقطع صرف بجميع المقاسات.", image: fittingsImg },
  { name: "مواسير وأدوات صحية", desc: "مياه نظيفة تبدأ من المواسير الصح.", image: pipesImg },
  { name: "أطقم حمامات", desc: "أطقم حمامات كاملة بتصميمات عصرية وأنيقة.", image: fixturesImg },
  { name: "حلل ومراحيض", desc: "حلل Vidmar وأحواض مطابخ — رقم 1 في مصر.", image: toolsImg },
  { name: "خلاطات", desc: "خلاطات حمامات ومطابخ بتصميمات حديثة.", image: accessoriesImg },
];

const ProductsSection = () => {
  return (
    <section id="products" className="bg-brand py-16 md:py-24">
      <div className="container">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-sm font-bold text-ink">كل ما تحتاجه تحت سقف واحد</p>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">منتجاتنا</h2>
          <p className="mt-3 text-white/85">
            كل ما تحتاجه لمشاريع السباكة السكنية والتجارية — بجودة تختارها مرة واحدة.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-xl bg-rust text-white transition-transform duration-500 ease-smooth hover:-translate-y-1"
            >
              <div className="p-6 pb-5">
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{p.desc}</p>
              </div>
              <div className="mt-auto aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
