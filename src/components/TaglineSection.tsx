import PipeDivider from "@/components/PipeDivider";

const invoiceItems = [
  "٦ ماسورة ٣/٤ لحام",
  "٢٥ كوع ٣/٤ لحام",
  "١٠ مشترك ٣/٤ لحام",
  "محبس ٣/٤ دفن",
  "ماسورة ٤ ابيض",
  "حنفية ١/٢",
  "بكرة تفلون",
];

const TaglineSection = () => {
  return (
    <section className="overflow-hidden bg-cream pb-0 pt-16 md:pt-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-bold text-brand">لو معاك الطلبات من السباك</p>
            <h2 className="text-4xl font-extrabold leading-relaxed text-ink md:text-6xl">
              معاك طلبات السباك؟
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70 md:text-lg">
              ابعتهالنا وإحنا نقولك عاملة كام قبل ما تنزل تشتري.
            </p>
            <a
              href="https://wa.me/201003771479?text=%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%A7%D9%84%D9%81%D8%A7%D8%AA%D9%88%D8%B1%D8%A9%20%D8%AF%D9%8A%20%D9%87%D8%AA%D8%B9%D9%85%D9%84%20%D9%83%D8%A7%D9%85"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime mt-7"
            >
              ابعت الفاتورة على واتساب
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-md rotate-2">
            <div className="absolute -inset-3 rounded-2xl border-2 border-brand/20" aria-hidden="true" />
            <article className="relative rounded-2xl border border-ink/10 bg-[#fffdf5] p-6 text-ink shadow-xl md:p-8">
              <div className="flex items-start justify-between border-b-2 border-brand/30 pb-4">
                <div>
                  <p className="text-xs font-bold text-brand">معرض أحمد بدوي</p>
                  <h3 className="mt-1 text-2xl font-extrabold">عم موسي السباك</h3>
                </div>
                <span className="text-3xl text-brand/40">#</span>
              </div>

              <ul className="mt-5 space-y-3 font-hand text-xl font-bold text-brand md:text-2xl" dir="rtl">
                {invoiceItems.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-3">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t-2 border-dashed border-ink/20 pt-4 text-center text-sm font-bold text-ink/50">
                ابعت الطلبات ونعرفك حسابها
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <PipeDivider />
      </div>
    </section>
  );
};

export default TaglineSection;
