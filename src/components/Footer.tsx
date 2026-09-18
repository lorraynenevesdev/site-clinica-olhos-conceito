import { MapPin, Phone } from "lucide-react";
import { clinicInfo, instagram, unidades } from "../config/clinic";
import SocialLinks from "./SocialLinks";
import logo from "../assets/logo-conceito.png";

export default function Footer() {
  const confirmadas = unidades.filter((u) => u.confirmada);

  return (
    <footer className="bg-white border-t border-brand-navy/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-12 w-auto shrink-0"
                width={430}
                height={512}
              />
              <p className="font-display text-lg text-brand-navy leading-snug">
                {clinicInfo.nome}
              </p>
            </div>
            <p className="mt-2 text-sm text-brand-text/70">
              {clinicInfo.cidade}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-navy">
              Acompanhe a clínica
            </p>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-brand-text/60 hover:text-brand-green-dark transition-colors"
            >
              {instagram.handle}
            </a>
            <SocialLinks className="mt-3" />
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
                        <a
                          href={`tel:${u.telefone.replace(/\D/g, "")}`}
                          className="hover:text-brand-green-dark transition-colors"
                        >
                          {u.telefone}
                        </a>
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
