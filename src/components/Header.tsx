import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsapp } from "../config/clinic";
import WhatsAppButton from "./WhatsAppButton";
import logo from "../assets/logo-conceito.png";

const navItems = [
  { label: "A clínica", href: "#a-clinica" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-brand-navy/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <a href="#topo" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Clínica de Olhos Conceito"
              className="h-11 w-auto shrink-0"
              width={315}
              height={375}
            />
            <span className="leading-none font-display">
              <span className="block text-[1.05rem] font-semibold text-brand-navy">
                Clínica de Olhos
              </span>
              <span className="block text-[1.05rem] font-semibold text-brand-green-dark -mt-0.5">
                Conceito
              </span>
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-text hover:text-brand-green-dark transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <WhatsAppButton
              mensagem={whatsapp.mensagens.padrao}
              className="!px-5 !py-2.5 text-sm"
            >
              Agendar consulta
            </WhatsAppButton>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl text-brand-navy hover:bg-brand-bg"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-brand-navy/10 bg-white ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="flex flex-col px-4 py-4 gap-1"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-brand-text hover:bg-brand-bg min-h-11 flex items-center"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppButton
            mensagem={whatsapp.mensagens.padrao}
            className="mt-2 w-full"
          >
            Agendar consulta
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}
