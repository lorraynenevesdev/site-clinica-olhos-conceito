import { atendimentos, exames, whatsapp } from "../config/clinic";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";
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
    <section id="atendimentos" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-3xl md:max-w-none">
          <div>
            <span className="eyebrow">Atendimentos</span>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl text-brand-navy max-w-xl">
              Cuidado com a visão em <span className="text-brand-green-dark">cada fase</span> da vida.
            </h2>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {atendimentos.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 90}
              className="photo-zoom rounded-2xl bg-white border border-brand-navy/10 overflow-hidden flex flex-col hover:border-brand-navy/20 transition-colors"
            >
              <div className="relative h-48 photo-frame">
                <img
                  src={fotos[item.id]}
                  alt={alts[item.id] ?? "Imagem ilustrativa"}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute z-10 bottom-2 right-2 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-brand-navy/70">
                  {item.legendaFoto}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg text-brand-navy">
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
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-brand-navy/10 bg-brand-bg p-7 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h3 className="font-display text-xl sm:text-2xl text-brand-navy">
              Exames realizados na clínica
            </h3>
            <WhatsAppButton
              mensagem={whatsapp.mensagens.exames}
              variant="secondary"
              showIcon={false}
              className="shrink-0 !px-5 !py-2.5 text-sm"
            >
              Tirar dúvidas sobre exames
            </WhatsAppButton>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {exames.map((exame) => (
              <li
                key={exame.nome}
                className="border-t border-brand-navy/10 pt-4"
              >
                <p className="text-sm font-medium text-brand-navy">
                  {exame.nome}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-text/65">
                  {exame.descricao ?? (
                    <span className="italic text-brand-text/45">
                      Consulte a recepção para detalhes.
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs sm:text-sm text-brand-text/55 max-w-2xl">
            As descrições são informativas e não substituem a avaliação
            médica. A disponibilidade pode variar — confirme com a recepção
            pelo WhatsApp antes da sua visita.
          </p>
        </div>
      </div>
    </section>
  );
}
