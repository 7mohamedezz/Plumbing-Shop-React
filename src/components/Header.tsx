import { useState } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-extrabold text-primary tracking-tight">
            🔧 معرض الفتح
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
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t bg-card pb-4">
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
