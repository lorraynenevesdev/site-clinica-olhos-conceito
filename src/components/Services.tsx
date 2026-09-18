import { Eye, Baby, ClipboardList } from "lucide-react";
import { atendimentos } from "../config/clinic";
import WhatsAppButton from "./WhatsAppButton";

const icons: Record<string, typeof Eye> = {
  consulta: Eye,
  pediatrica: Baby,
  exames: ClipboardList,
};

export default function Services() {
  return (
    <section id="atendimentos" className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy text-center max-w-2xl mx-auto tracking-tight">
          Cuidado com a visão em diferentes fases da vida.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {atendimentos.map((item) => {
            const Icon = icons[item.id] ?? Eye;
            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-brand-navy/10 shadow-sm p-7 flex flex-col"
              >
                <div className="h-12 w-12 rounded-2xl bg-brand-turquoise/15 text-brand-green-dark flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-brand-text/90 leading-relaxed flex-1">
                  {item.descricao}
                </p>
                <WhatsAppButton
                  mensagem={item.mensagemWhatsapp}
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  Consultar pelo WhatsApp
                </WhatsAppButton>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-brand-text/60 text-center max-w-2xl mx-auto">
          Os atendimentos acima são itens preliminares, a confirmar com a
          clínica. Fale com nossa equipe para saber quais estão disponíveis
          no momento.
        </p>
      </div>
    </section>
  );
}
