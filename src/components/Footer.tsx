import { Camera, MapPin, Phone } from "lucide-react";
import { clinicInfo, instagram, unidades } from "../config/clinic";
import WhatsAppButton from "./WhatsAppButton";
import { whatsapp } from "../config/clinic";

export default function Footer() {
  const confirmadas = unidades.filter((u) => u.confirmada);

  return (
    <footer className="bg-white border-t border-brand-navy/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-extrabold text-brand-navy">
              {clinicInfo.nome}
            </p>
            <p className="mt-2 text-sm text-brand-text/70">
              {clinicInfo.cidade}
            </p>
            <div className="mt-4">
              <WhatsAppButton
                mensagem={whatsapp.mensagens.padrao}
                className="!px-4 !py-2.5 text-sm"
              >
                Falar no WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-navy">
              Acompanhe a clínica
            </p>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-brand-navy/10 px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-turquoise hover:text-brand-green-dark transition-colors min-h-11"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-turquoise to-brand-blue text-white">
                <Camera className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                Siga no Instagram
                <span className="block text-xs font-normal text-brand-text/60">
                  {instagram.handle}
                </span>
              </span>
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-navy">
              Localização
            </p>
            {confirmadas.length === 0 ? (
              <p className="mt-3 text-sm text-brand-text/70 leading-relaxed">
                Fale com nossa equipe para confirmar a unidade e receber
                orientações de chegada.
              </p>
            ) : (
              <ul className="mt-3 space-y-3">
                {confirmadas.map((u) => (
                  <li key={u.id} className="text-sm text-brand-text/80">
                    <span className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-green-dark" aria-hidden="true" />
                      {u.endereco}
                    </span>
                    {u.telefone && (
                      <span className="flex items-center gap-2 mt-1">
                        <Phone className="h-4 w-4 shrink-0 text-brand-green-dark" aria-hidden="true" />
                        {u.telefone}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-text/50">
            © {new Date().getFullYear()} {clinicInfo.nome}. Todos os direitos
            reservados.
          </p>
          {/* Link de política de privacidade só deve ser exibido quando a página existir */}
        </div>
      </div>
    </footer>
  );
}
