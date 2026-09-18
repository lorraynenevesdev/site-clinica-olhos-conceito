import { redesSociais } from "../config/clinic";
import { InstagramIcon, WhatsAppIcon, FacebookIcon } from "./SocialIcons";

const icons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  whatsapp: WhatsAppIcon,
};

type Props = {
  className?: string;
};

export default function SocialLinks({ className = "" }: Props) {
  if (redesSociais.length === 0) return null;

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {redesSociais.map((rede) => {
        const Icon = icons[rede.id] ?? InstagramIcon;
        return (
          <li key={rede.id}>
            <a
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={rede.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy/70 hover:border-brand-green-dark hover:text-brand-green-dark transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
