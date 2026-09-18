import WhatsAppButton from "./WhatsAppButton";
import { whatsapp } from "../config/clinic";
import equipamentoFoto from "../assets/photos/equipamento.webp";

export default function Hero() {
  return (
    <section id="topo" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="grid md:grid-cols-2 md:min-h-[640px] items-stretch overflow-hidden rounded-3xl border border-brand-navy/10 bg-brand-bg">
          {/* No mobile a imagem vem depois do texto; no desktop fica à esquerda */}
          <div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-auto photo-frame">
            <img
              src={equipamentoFoto}
              alt="Equipamento de exame oftalmológico (imagem ilustrativa)"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-24 hidden md:block bg-gradient-to-r from-transparent to-white z-10"
            />
          </div>

          <div className="order-1 md:order-2 flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12 md:py-0 bg-white">
            <span className="eyebrow">Ribeirão das Neves, MG</span>
            <h1 className="font-display mt-4 text-[2.25rem] leading-[1.08] sm:text-5xl md:text-[3.75rem] text-brand-navy max-w-[560px]">
              Um novo olhar
              <br />
              para cuidar da
              <br />
              sua <span className="text-brand-green-dark">visão</span>.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-brand-text/85 leading-relaxed max-w-md">
              Atendimento oftalmológico em Ribeirão das Neves. Solicite seu
              agendamento com nossa equipe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <WhatsAppButton mensagem={whatsapp.mensagens.padrao}>
                Agendar consulta
              </WhatsAppButton>
              <a
                href="#atendimentos"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-base font-semibold text-brand-navy border border-brand-navy/15 hover:bg-white hover:border-brand-navy/25 transition-colors min-h-11"
              >
                Ver atendimentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
