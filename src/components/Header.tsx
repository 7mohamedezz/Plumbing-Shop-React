import { useRef, useState } from "react";
import { Menu, X, Droplets } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "المنتجات", href: "#products" },
    { label: "من نحن", href: "#about" },
    { label: "الموقع", href: "#location" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <>
      {/* Main nav */}
      <header
        className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm"
        onKeyDown={(e) => {
          if (e.key !== "Escape" || !mobileOpen) return;
          setMobileOpen(false);
          // Focus would be lost with the unmounted nav link; hand it back to the toggle
          toggleRef.current?.focus();
        }}
      >
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Droplets className="w-5 h-5" />
            </span>
            <span className="text-xl font-extrabold text-primary tracking-tight">
              معرض أحمد بدوي
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="القائمة"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav id="mobile-nav" className="md:hidden border-t bg-card pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
