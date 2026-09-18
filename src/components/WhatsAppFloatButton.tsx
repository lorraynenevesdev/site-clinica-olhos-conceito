import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, whatsapp } from "../config/clinic";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsappLink(whatsapp.mensagens.padrao)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Clínica de Olhos Conceito pelo WhatsApp"
      className="fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 h-14 w-14 rounded-full bg-brand-green-dark text-white shadow-lg shadow-brand-green-dark/30 flex items-center justify-center hover:bg-brand-green transition-colors"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
