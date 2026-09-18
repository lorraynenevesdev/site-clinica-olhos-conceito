import { MapPin, Phone, Clock } from "lucide-react";
import { unidades, mapsSearchUrl, mapsEmbedUrl, whatsapp } from "../config/clinic";
import WhatsAppButton from "./WhatsAppButton";

export default function Location() {
  const confirmadas = unidades.filter((u) => u.confirmada);

  return (
    <section id="localizacao" className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-brand-navy/10 bg-brand-bg p-6 sm:p-10">
          <div className="text-center">
            <div className="flex justify-center">
              <span className="eyebrow">Como chegar</span>
            </div>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl text-brand-navy">
              Localização
            </h2>
          </div>

          {confirmadas.length === 0 ? (
            <div className="mt-6 text-center max-w-lg mx-auto">
              <p className="text-brand-text/85 leading-relaxed">
                Fale com nossa equipe para confirmar a unidade e receber
                orientações de chegada.
              </p>
              <div className="mt-6 flex justify-center">
                <WhatsAppButton mensagem={whatsapp.mensagens.padrao}>
                  Consultar localização pelo WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          ) : (
            <div
              className={`mt-8 grid gap-6 mx-auto ${
                confirmadas.length > 1
                  ? "sm:grid-cols-2 max-w-4xl"
                  : "max-w-xl"
              }`}
            >
              {confirmadas.map((unidade) => (
                <div
                  key={unidade.id}
                  className="rounded-2xl bg-white border border-brand-navy/10 overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/3] w-full shrink-0">
                    <iframe
                      title={`Mapa de localização — ${unidade.nome}`}
                      src={mapsEmbedUrl(unidade.endereco)}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-lg text-brand-navy flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-brand-green-dark shrink-0" aria-hidden="true" />
                      {unidade.nome}
                    </h3>
                    <p className="mt-3 text-sm text-brand-text/90 leading-relaxed">
                      {unidade.endereco}
                    </p>

                    {unidade.telefone && (
                      <p className="mt-2 flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-brand-green-dark shrink-0" aria-hidden="true" />
                        <a
                          href={`tel:${unidade.telefone.replace(/\D/g, "")}`}
                          className="text-brand-text/90 hover:text-brand-green-dark transition-colors"
                        >
                          {unidade.telefone}
                        </a>
                      </p>
                    )}

                    {unidade.horarioTexto && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-brand-text/90">
                        <Clock className="h-4 w-4 text-brand-green-dark shrink-0" aria-hidden="true" />
                        {unidade.horarioTexto}
                      </p>
                    )}

                    <div className="mt-auto pt-5">
                      <a
                        href={mapsSearchUrl(unidade.endereco)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-navy transition-colors min-h-11 w-full"
                      >
                        Como chegar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
