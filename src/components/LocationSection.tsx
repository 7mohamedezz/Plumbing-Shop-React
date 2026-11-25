import { MapPin, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="bg-cream py-16 md:py-24">
      <div className="container">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-2 text-sm font-bold text-brand">تعالى زورنا</p>
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">موقعنا</h2>
          <p className="mt-3 text-muted-foreground">
            زُر معرضنا أو تواصل معنا — فريقنا جاهز لمساعدتك.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="h-[350px] overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
            <iframe
              title="موقع معرض أحمد بدوي"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.28303283966!2d32.65975377539933!3d25.728152177372966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1449157f8e6240eb%3A0x981b7d63732ce40e!2z2YXYudix2LYg2KfYrdmF2K8g2KjYr9mI2Yog2YTZhNin2K_ZiNin2Kog2KfZhNi12K3ZitmH!5e0!3m2!1sen!2seg!4v1775229655643!5m2!1sen!2seg"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div id="contact" className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-white md:p-8">
            <div>
              <h3 className="text-xl font-extrabold">معلومات المعرض</h3>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-lime text-ink">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white/60">العنوان</p>
                    <p className="font-bold">الأقصر، مصر، الكرنك الجديد</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-lime text-ink">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white/60">الهاتف وواتساب</p>
                    <p className="font-bold" dir="ltr">
                      +20 100 377 1479
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+201003771479" className="btn btn-lime">
                <Phone className="h-5 w-5" />
                اتصل الآن
              </a>
              <a
                href="https://wa.me/201003771479"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
