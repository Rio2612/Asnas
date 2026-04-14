import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";

export default function WhatsAppFloat() {
  return (
    <Link
      href={`${SITE.whatsappLink}?text=Halo%20Kak%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25d366] text-white px-4 py-3.5 rounded-full shadow-2xl hover:bg-[#1ebe5c] transition-all hover:scale-105 group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="font-syne font-semibold text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Konsultasi Gratis
      </span>
    </Link>
  );
}
