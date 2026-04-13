const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-4">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-background">🔧 معرض أحمد بدوي</p>
            <p className="text-sm mt-1">أدوات صحية وسباكة عالية الجودة.</p>
          </div>
          <div className="text-sm text-center md:text-left">
            <p>الأقصر، مصر، الكرنك الجديد</p>
            <p dir="ltr">+201003771479</p>
            <p className="mt-2 text-background/50">© {new Date().getFullYear()} معرض أحمد بدوي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
