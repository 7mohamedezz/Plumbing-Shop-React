import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-button fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 animate-pulse hover:animate-none"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
