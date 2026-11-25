import { useEffect, useRef, useState } from "react";
import { Menu, Phone, Wrench, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "المنتجات", href: "#products" },
  { label: "إحنا مين", href: "#about" },
  { label: "فينّا", href: "#location" },
  { label: "كلّمنا", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileNavRef.current) {
      if (mobileOpen) {
        mobileNavRef.current.removeAttribute("inert");
      } else {
        mobileNavRef.current.setAttribute("inert", "");
      }
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="container flex h-16 items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime text-ink">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold">معرض أحمد بدوي</span>
            <span className="block text-xs font-medium text-white/50">أدوات صحية وسباكة</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+201003771479"
            className="hidden h-10 items-center gap-2 rounded-lg bg-lime px-4 text-sm font-bold text-ink transition-colors duration-300 hover:bg-lime/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            اتصل الآن
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime md:hidden"
            aria-label="القائمة"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        ref={mobileNavRef}
        aria-hidden={!mobileOpen}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-ink/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col gap-1 p-6" aria-label="قائمة الجوال">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              className={`border-b border-white/10 py-4 text-2xl font-bold text-white transition duration-500 ease-smooth hover:text-lime ${
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+201003771479" className="btn btn-lime mt-6">
            <Phone className="h-5 w-5" />
            اتصل الآن
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
