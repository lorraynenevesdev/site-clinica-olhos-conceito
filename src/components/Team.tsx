import { equipe, equipeVisivel } from "../config/clinic";
import { UserRound } from "lucide-react";

export default function Team() {
  if (!equipeVisivel || equipe.length === 0) return null;

  return (
    <section id="equipe" className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-brand-navy text-center">
          Nossa equipe
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipe.map((membro) => (
            <div
              key={membro.id}
              className="rounded-3xl bg-white border border-brand-navy/10 shadow-sm p-7 text-center"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-brand-turquoise/15 flex items-center justify-center overflow-hidden mb-4">
                {membro.fotoUrl ? (
                  <img
                    src={membro.fotoUrl}
                    alt={`Foto de ${membro.nomeCompleto}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound className="h-10 w-10 text-brand-green-dark" aria-hidden="true" />
                )}
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                {membro.nomeCompleto}
              </h3>
              <p className="text-sm text-brand-text/80 mt-1">
                {membro.areaAtuacao}
              </p>
              <p className="text-xs text-brand-text/60 mt-1">
                {membro.crm}
                {membro.rqe ? ` · ${membro.rqe}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
