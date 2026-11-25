import fittingsImg from "@/assets/products-fittings.jpg";
import pipesImg from "@/assets/products-pipes.jpg";
import valvesImg from "@/assets/products-valves.jpg";
import toolsImg from "@/assets/products-tools.jpg";
import fixturesImg from "@/assets/products-fixtures.jpg";
import accessoriesImg from "@/assets/products-accessories.jpg";

const products = [
  { name: "قلوب ومحابس نحاس", desc: "قلوب Vidmar نحاس عيار 24 للمحابس والخلاطات.", image: valvesImg },
  { name: "مواسير ووصلات", desc: "مواسير PVC، وصلات Boroug وقطع صرف بمقاسات مختلفة.", image: fittingsImg },
  { name: "مواسير وأدوات صحية", desc: "لما تكون بتأسس أو بتغيّر جزء في خط المياه.", image: pipesImg },
  { name: "أطقم حمامات", desc: "أطقم حمامات كاملة للحمام الجديد أو التجديد.", image: fixturesImg },
  { name: "حلل ومراحيض", desc: "حلل Vidmar وأحواض مطابخ للاستخدام اليومي.", image: toolsImg },
  { name: "خلاطات", desc: "خلاطات حمامات ومطابخ بأشكال ومقاسات مختلفة.", image: accessoriesImg },
];

const ProductsSection = () => {
  return (
    <section id="products" className="bg-brand py-16 md:py-24">
      <div className="container">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-sm font-bold text-ink">بتجهّز ولا بتصلّح؟</p>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">شوف اللي محتاجه</h2>
          <p className="mt-3 text-white/85">
            من قلب النحاس لحد طقم الحمام، شوف الأصناف واسأل عن المقاس قبل ما تشتري.
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
