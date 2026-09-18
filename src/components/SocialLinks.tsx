import { Camera, ThumbsUp, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { redesSociais } from "../config/clinic";

const icons: Record<string, LucideIcon> = {
  instagram: Camera,
  facebook: ThumbsUp,
  whatsapp: MessageCircle,
};

type Props = {
  className?: string;
};

export default function SocialLinks({ className = "" }: Props) {
  if (redesSociais.length === 0) return null;

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {redesSociais.map((rede) => {
        const Icon = icons[rede.id] ?? Camera;
        return (
          <li key={rede.id}>
            <a
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={rede.label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-turquoise to-brand-blue text-white hover:opacity-90 transition-opacity"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
