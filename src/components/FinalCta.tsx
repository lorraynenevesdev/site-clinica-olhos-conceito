import WhatsAppButton from "./WhatsAppButton";
import { whatsapp } from "../config/clinic";

export default function FinalCta() {
  return (
    <section className="py-16 md:py-20 bg-brand-navy">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Vamos cuidar da sua visão?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
          Fale com nossa equipe para consultar atendimentos, disponibilidade
          e informações sobre sua visita.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton mensagem={whatsapp.mensagens.padrao} variant="onDark">
            Solicitar agendamento
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
