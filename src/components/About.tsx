import { Building2 } from "lucide-react";

export default function About() {
  return (
    <section id="a-clinica" className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight">
              Conheça a Clínica de Olhos Conceito
            </h2>
            <p className="mt-5 text-base sm:text-lg text-brand-text/90 leading-relaxed">
              Um espaço dedicado ao cuidado com a saúde dos olhos. Converse
              com nossa equipe para conhecer os atendimentos e receber
              informações sobre sua visita.
            </p>
          </div>

          <div className="aspect-[4/3] w-full rounded-3xl bg-brand-bg border border-brand-navy/10 flex items-center justify-center overflow-hidden">
            {/* Placeholder neutro: substituir por fotos reais do ambiente da clínica */}
            <div className="flex flex-col items-center gap-3 text-brand-navy/40 p-8 text-center">
              <Building2 className="h-14 w-14" aria-hidden="true" strokeWidth={1.5} />
              <span className="text-sm font-medium">
                Espaço reservado para fotos do ambiente da clínica
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
