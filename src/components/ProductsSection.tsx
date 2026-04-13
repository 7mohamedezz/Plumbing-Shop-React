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
    <section id="products" className="py-20 section-gradient">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">منتجاتنا</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            كل ما تحتاجه لمشاريع السباكة السكنية والتجارية — تحت سقف واحد.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
