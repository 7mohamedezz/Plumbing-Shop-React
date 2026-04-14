import { MapPin, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 section-gradient">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">موقعنا</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            زُر معرضنا أو تواصل معنا — فريقنا جاهز لمساعدتك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden border shadow-sm h-[350px] lg:h-auto">
            <iframe
              title="موقع معرض الفتح"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7252766320366!2d31.8519499!3d26.3030046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144f4d5456f6a837%3A0x5b892541312c2fd5!2z2YXYudix2LYg2KfZhNmB2KrYrSDZhNmE2LPZitix2KfZhdmK2YMg2YjYp9mE2KPYr9mI2KfYqiDYp9mE2LXYrdmK2Kk!5e0!3m2!1sen!2seg!4v1776172393325!5m2!1sen!2seg"
              className="w-full h-full min-h-[350px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6" id="contact">
            <div className="bg-card rounded-lg border p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">معلومات المعرض</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">العنوان</p>
                    <p className="text-sm text-muted-foreground">العوامر قبلي، جرجا، محافظة سوهاج</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">الهاتف</p>
                    <p className="text-sm text-muted-foreground" dir="ltr">+201003771479</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/201003771479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">واتساب</p>
                    <p className="text-sm text-muted-foreground" dir="ltr">+201003771479</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
