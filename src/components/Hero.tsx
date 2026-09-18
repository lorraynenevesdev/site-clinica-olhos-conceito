import { Eye } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { whatsapp } from "../config/clinic";

export default function Hero() {
  return (
    <section
      id="topo"
      className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-brand-bg to-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* No mobile o texto aparece primeiro; no desktop a imagem fica à esquerda */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-brand-turquoise/15 via-brand-blue/10 to-brand-green/15 border border-brand-navy/10 flex items-center justify-center overflow-hidden">
              {/* Placeholder neutro: substituir por fotografia real do equipamento oftalmológico da clínica */}
              <div className="flex flex-col items-center gap-3 text-brand-navy/50 p-8 text-center">
                <Eye className="h-16 w-16" aria-hidden="true" strokeWidth={1.5} />
                <span className="text-sm font-medium">
                  Espaço reservado para fotografia real da clínica
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green-dark mb-3">
              Clínica oftalmológica em Ribeirão das Neves
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight">
              Um novo olhar para o cuidado com a sua visão.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-brand-text/90 leading-relaxed max-w-xl">
              Conheça a Clínica de Olhos Conceito. Fale com nossa equipe para
              consultar atendimentos e solicitar seu agendamento.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <WhatsAppButton mensagem={whatsapp.mensagens.padrao}>
                Agendar pelo WhatsApp
              </WhatsAppButton>
              <a
                href="#a-clinica"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-base font-semibold text-brand-navy border border-brand-navy/15 hover:bg-brand-bg transition-colors min-h-11"
              >
                Conhecer a clínica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
