import { Star } from "lucide-react";
import { avaliacoes, avaliacoesResumo, avaliacoesVisiveis } from "../config/clinic";

export default function Reviews() {
  if (!avaliacoesVisiveis || avaliacoes.length === 0) return null;

  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            O que dizem sobre a clínica
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-brand-navy">
            <Star className="h-5 w-5 fill-brand-green-dark text-brand-green-dark" />
            <span className="font-semibold">{avaliacoesResumo.nota.toFixed(1)}</span>
            <span className="text-brand-text/60 text-sm">
              ({avaliacoesResumo.totalAvaliacoes} avaliações no Google)
            </span>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avaliacoes.map((avaliacao) => (
            <blockquote
              key={avaliacao.id}
              className="rounded-3xl bg-brand-bg border border-brand-navy/10 p-6"
            >
              <p className="text-sm text-brand-text/90 leading-relaxed">
                “{avaliacao.texto}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-brand-navy">
                {avaliacao.autor}
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
