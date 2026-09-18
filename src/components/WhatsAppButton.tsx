import { MessageCircle } from "lucide-react";
import { buildWhatsappLink } from "../config/clinic";
import type { ReactNode } from "react";

type Props = {
  mensagem: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
  showIcon?: boolean;
};

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-brand-green-dark text-white hover:bg-brand-green shadow-sm shadow-brand-green-dark/20",
  secondary:
    "bg-brand-bg-mint text-brand-navy border border-brand-navy/10 hover:border-brand-green-dark/30 hover:bg-brand-bg-mint/70",
  onDark: "bg-white text-brand-green-dark hover:bg-brand-bg",
};

export default function WhatsAppButton({
  mensagem,
  children,
  variant = "primary",
  className = "",
  showIcon = true,
}: Props) {
  return (
    <a
      href={buildWhatsappLink(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold transition-colors min-h-11 ${variantClasses[variant]} ${className}`}
    >
      {showIcon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </a>
  );
}
