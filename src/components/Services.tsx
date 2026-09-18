import { atendimentos } from "../config/clinic";
import WhatsAppButton from "./WhatsAppButton";
import consultaFoto from "../assets/photos/consulta.webp";
import pediatricoFoto from "../assets/photos/pediatrico.webp";
import equipamentoFoto from "../assets/photos/equipamento.webp";

const fotos: Record<string, string> = {
  consulta: consultaFoto,
  pediatrica: pediatricoFoto,
  exames: equipamentoFoto,
};

const alts: Record<string, string> = {
  consulta: "Exame oftalmológico com autorrefrator (imagem ilustrativa)",
  pediatrica: "Atendimento oftalmológico infantil (imagem ilustrativa)",
  exames: "Equipamento de exame oftalmológico (imagem ilustrativa)",
};

export default function Services() {
  return (
    <section id="atendimentos" className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy text-center max-w-2xl mx-auto tracking-tight">
          Cuidado com a visão em cada fase da vida.
        </h2>

        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {atendimentos.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-brand-navy/10 overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <img
                  src={fotos[item.id]}
                  alt={alts[item.id] ?? "Imagem ilustrativa"}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-2 right-2 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-brand-navy/70">
                  {item.legendaFoto}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-brand-navy">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-brand-text/85 leading-relaxed flex-1">
                  {item.descricao}
                </p>
                <WhatsAppButton
                  mensagem={item.mensagemWhatsapp}
                  variant="secondary"
                  className="mt-5 w-full"
                  showIcon={false}
                >
                  Consultar atendimento
                </WhatsAppButton>
              </div>
            </div>
          ))}
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
