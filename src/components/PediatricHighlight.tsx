import WhatsAppButton from "./WhatsAppButton";
import { whatsapp } from "../config/clinic";
import pediatricoFoto from "../assets/photos/pediatrico.webp";

export default function PediatricHighlight() {
  return (
    <section className="relative overflow-hidden bg-brand-bg-mint py-20 md:py-28">
      <div
        aria-hidden="true"
        className="deco-arc h-64 w-64 -top-20 -left-20 border-brand-turquoise/20 border-[24px]"
      />
      <div
        aria-hidden="true"
        className="deco-arc h-40 w-40 -bottom-16 right-10 border-brand-green/15 border-[16px] hidden md:block"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden order-2 md:order-1 photo-frame">
            <img
              src={pediatricoFoto}
              alt="Atendimento oftalmológico infantil (imagem ilustrativa)"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2">
            <span className="eyebrow">Oftalmologia pediátrica</span>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl text-brand-navy max-w-md">
              Um olhar atento para os pequenos.
            </h2>
            <p className="mt-4 text-base text-brand-text/90 leading-relaxed max-w-md">
              Fale com nossa equipe para consultar a disponibilidade de
              atendimento oftalmológico infantil e receber orientações sobre
              a visita.
            </p>
            <div className="mt-7">
              <WhatsAppButton mensagem={whatsapp.mensagens.infantil}>
                Consultar atendimento infantil
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
