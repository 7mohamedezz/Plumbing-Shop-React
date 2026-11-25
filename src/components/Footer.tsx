import { Wrench } from "lucide-react";

const footerLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "المنتجات", href: "#products" },
  { label: "من نحن", href: "#about" },
  { label: "الموقع", href: "#location" },
];

const Footer = () => {
  return (
    <footer className="border-t-4 border-brand bg-ink text-white/60">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-lg font-extrabold text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime text-ink">
                <Wrench className="h-4 w-4" />
              </span>
              معرض أحمد بدوي
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              أدوات صحية وسباكة عالية الجودة للسباكين وأصحاب المنازل في الأقصر.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm" aria-label="روابط الفوتر">
            <p className="mb-1 font-bold text-white">روابط سريعة</p>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit transition-colors duration-300 hover:text-lime"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm">
            <p className="mb-1 font-bold text-white">تواصل معنا</p>
            <p>الأقصر، مصر، الكرنك الجديد</p>
            <a
              href="tel:+201003771479"
              dir="ltr"
              className="mt-2 block w-fit text-xl font-extrabold text-lime transition-colors duration-300 hover:text-white"
            >
              +20 100 377 1479
            </a>
            <a
              href="https://wa.me/201003771479"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-fit transition-colors duration-300 hover:text-lime"
            >
              راسلنا على واتساب
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs">
          <p>© {new Date().getFullYear()} معرض أحمد بدوي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
