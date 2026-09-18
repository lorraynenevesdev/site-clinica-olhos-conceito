import { Stethoscope, MapPin, MessageCircle } from "lucide-react";
import { buildWhatsappLink, whatsapp } from "../config/clinic";

const links = [
  {
    icon: Stethoscope,
    label: "Conhecer os atendimentos",
    href: "#atendimentos",
    external: false,
  },
  {
    icon: MapPin,
    label: "Como chegar",
    href: "#localizacao",
    external: false,
  },
  {
    icon: MessageCircle,
    label: "Falar com a equipe",
    href: buildWhatsappLink(whatsapp.mensagens.padrao),
    external: true,
  },
];

export default function QuickLinks() {
  return (
    <section aria-label="Atalhos" className="border-y border-brand-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-navy/10">
          {links.map(({ icon: Icon, label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center justify-center gap-3 py-5 px-4 text-sm font-semibold text-brand-navy hover:text-brand-green-dark transition-colors min-h-11"
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
