import { MapPin, Phone, Clock } from "lucide-react";
import { unidades, mapsSearchUrl } from "../config/clinic";

export default function Location() {
  const confirmadas = unidades.filter((u) => u.confirmada);
  const listaExibida = confirmadas.length > 0 ? confirmadas : unidades;

  return (
    <section id="localizacao" className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy text-center tracking-tight">
          Localização
        </h2>

        {confirmadas.length === 0 && (
          <p className="mt-4 text-center text-brand-text/80 max-w-xl mx-auto">
            Fale com nossa equipe para confirmar a unidade e receber
            orientações de chegada.
          </p>
        )}

        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {listaExibida.map((unidade) => (
            <div
              key={unidade.id}
              className="rounded-3xl bg-white border border-brand-navy/10 shadow-sm p-7"
            >
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-green-dark shrink-0" aria-hidden="true" />
                {unidade.nome}
              </h3>
              <p className="mt-3 text-sm text-brand-text/90 leading-relaxed">
                {unidade.endereco}
              </p>

              {unidade.telefone && (
                <p className="mt-2 flex items-center gap-2 text-sm text-brand-text/90">
                  <Phone className="h-4 w-4 text-brand-green-dark shrink-0" aria-hidden="true" />
                  {unidade.telefone}
                </p>
              )}

              {unidade.horarioTexto ? (
                <p className="mt-2 flex items-center gap-2 text-sm text-brand-text/90">
                  <Clock className="h-4 w-4 text-brand-green-dark shrink-0" aria-hidden="true" />
                  {unidade.horarioTexto}
                </p>
              ) : (
                <p className="mt-2 text-sm text-brand-text/60 italic">
                  Horário de funcionamento a confirmar com a recepção.
                </p>
              )}

              {!unidade.confirmada && (
                <p className="mt-3 text-xs text-brand-text/50">
                  Endereço a confirmar ({unidade.fonte}).
                </p>
              )}

              <a
                href={mapsSearchUrl(unidade.endereco)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-navy transition-colors min-h-11 w-full"
              >
                Como chegar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
