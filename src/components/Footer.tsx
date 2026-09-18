import { AtSign, MapPin, Phone } from "lucide-react";
import { clinicInfo, instagram, unidades } from "../config/clinic";

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
            {/* Preencher com razão social e responsável técnico confirmados antes da publicação */}
            <p className="mt-4 text-xs text-brand-text/50">
              Razão social: a confirmar. <br />
              Responsável técnico: a confirmar.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-navy">Contato</p>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-brand-text/80 hover:text-brand-green-dark min-h-11"
            >
              <AtSign className="h-4 w-4 shrink-0" aria-hidden="true" />
              Acompanhe a clínica no Instagram
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
