import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "../config/clinic";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-14 md:py-20 bg-brand-bg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy text-center tracking-tight">
          Perguntas frequentes
        </h2>

        <div className="mt-10 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.pergunta}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left text-base sm:text-lg font-semibold text-brand-navy min-h-11"
                  >
                    {item.pergunta}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-green-dark transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5"
                >
                  <p className="text-sm sm:text-base text-brand-text/90 leading-relaxed">
                    {item.resposta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
