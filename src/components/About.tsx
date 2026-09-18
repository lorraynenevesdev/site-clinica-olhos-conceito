import { MapPin, Stethoscope, Star, Baby } from "lucide-react";
import {
  unidades,
  exames,
  avaliacoesResumo,
  avaliacoesVisiveis,
  whatsapp,
} from "../config/clinic";
import WhatsAppButton from "./WhatsAppButton";

export default function About() {
  const confirmadas = unidades.filter((u) => u.confirmada);

  /** Todos os destaques vêm de dados já confirmados — nada é estimado. */
  const destaques = [
    {
      icone: MapPin,
      valor: String(confirmadas.length),
      titulo: confirmadas.length === 1 ? "unidade" : "unidades",
      descricao: confirmadas.map((u) => u.nome.replace("Unidade ", "")).join(" e "),
    },
    {
      icone: Stethoscope,
      valor: String(exames.length),
      titulo: "exames",
      descricao: "Realizados na própria clínica",
    },
    {
      icone: Baby,
      valor: "",
      titulo: "Atendimento infantil",
      descricao: "Oftalmologia pediátrica",
    },
    ...(avaliacoesVisiveis
      ? [
          {
            icone: Star,
            valor: avaliacoesResumo.nota.toFixed(1).replace(".", ","),
            titulo: "no Google",
            descricao: `${avaliacoesResumo.totalAvaliacoes} avaliações`,
          },
        ]
      : []),
  ];

  return (
    <section id="a-clinica" className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="eyebrow">A clínica</span>
            <h2 className="font-display mt-4 text-2xl sm:text-3xl md:text-4xl text-brand-navy">
              Conheça a Clínica de Olhos Conceito
            </h2>
            <p className="mt-6 text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-md">
              Um espaço dedicado ao cuidado com a saúde dos olhos. Converse
              com nossa equipe para conhecer os atendimentos e receber
              informações sobre sua visita.
            </p>
            <div className="mt-8">
              <WhatsAppButton mensagem={whatsapp.mensagens.padrao}>
                Falar com a equipe
              </WhatsAppButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {destaques.map((item) => {
              const Icon = item.icone;
              return (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-brand-navy/10 bg-white p-6 flex flex-col"
                >
                  <Icon
                    className="h-5 w-5 text-brand-green-dark"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  <p className="font-display mt-4 text-brand-navy leading-tight">
                    {item.valor && (
                      <span className="text-3xl sm:text-4xl">{item.valor} </span>
                    )}
                    <span
                      className={item.valor ? "text-base" : "text-lg"}
                    >
                      {item.titulo}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-brand-text/65">
                    {item.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
