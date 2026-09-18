import { Quote, Star } from "lucide-react";
import { avaliacoes, avaliacoesResumo, avaliacoesVisiveis } from "../config/clinic";

export default function Reviews() {
  if (!avaliacoesVisiveis || avaliacoes.length === 0) return null;

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="flex justify-center">
            <span className="eyebrow">Com a palavra</span>
          </div>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Nossos pacientes
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(avaliacoesResumo.nota)
                      ? "fill-brand-green-dark text-brand-green-dark"
                      : "text-brand-navy/20"
                  }`}
                />
              ))}
            </span>
            <span className="font-semibold text-brand-navy">
              {avaliacoesResumo.nota.toFixed(1)}
            </span>
            <span className="text-brand-text/60 text-sm">
              ({avaliacoesResumo.totalAvaliacoes} avaliações no Google)
            </span>
          </div>
          <p className="mt-1 text-xs text-brand-text/45">
            {avaliacoesResumo.fonteTexto}
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avaliacoes.map((avaliacao) => (
            <blockquote
              key={avaliacao.id}
              className="relative rounded-2xl bg-white border border-brand-navy/10 p-6 flex flex-col"
            >
              <Quote
                className="h-7 w-7 text-brand-turquoise/40"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <p className="mt-3 text-sm text-brand-text/90 leading-relaxed flex-1">
                {avaliacao.texto}
              </p>
              <footer className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-navy">
                  {avaliacao.autor}
                </span>
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: avaliacao.nota }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-brand-green-dark text-brand-green-dark"
                    />
                  ))}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        {avaliacoesResumo.linkGoogle && (
          <div className="mt-8 text-center">
            <a
              href={avaliacoesResumo.linkGoogle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-green-dark hover:underline"
            >
              Ver todas as avaliações no Google
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
