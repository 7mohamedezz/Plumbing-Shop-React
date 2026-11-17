import { ADDRESS, PHONE } from "@/lib/contact";
import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background">
              <Droplets className="w-5 h-5 text-water" />
            </span>
            <div>
              <p className="text-lg font-bold text-background">معرض أحمد بدوي</p>
              <p className="text-sm mt-1">أدوات صحية وسباكة عالية الجودة.</p>
            </div>
          </div>
          <div className="text-sm text-center md:text-left">
            <p>{ADDRESS}</p>
            <a href={`tel:${PHONE}`} dir="ltr" className="hover:text-background transition-colors">
              {PHONE}
            </a>
            <p className="mt-2 text-background/50">© {new Date().getFullYear()} معرض أحمد بدوي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
