/**
 * Configuração central da Clínica de Olhos Conceito.
 *
 * Todo dado marcado como "confirmado: false" é uma informação obtida de
 * referências (Google/Instagram) e AINDA NÃO foi validada pela clínica.
 * Ajuste os valores e troque para "confirmado: true" (ou remova o item)
 * somente após validação com a recepção/gestão da clínica.
 */

export const whatsapp = {
  numero: "5531995959990",
  confirmado: false,
  mensagens: {
    padrao:
      "Olá! Acessei o site da Clínica de Olhos Conceito e gostaria de solicitar um agendamento.",
    infantil:
      "Olá! Gostaria de consultar a disponibilidade para atendimento oftalmológico infantil.",
    exames:
      "Olá! Gostaria de informações sobre os exames realizados na clínica.",
  },
};

export function buildWhatsappLink(mensagem: string): string {
  return `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}

export const instagram = {
  url: "https://www.instagram.com/clinicasdeolhosconceito/",
  handle: "@clinicasdeolhosconceito",
};

export const clinicInfo = {
  nome: "Clínica de Olhos Conceito",
  cidade: "Ribeirão das Neves/MG",
};

export type Unidade = {
  id: string;
  nome: string;
  endereco: string;
  telefone?: string;
  horarioTexto?: string;
  confirmada: boolean;
  fonte: string;
};

/**
 * Unidades identificadas em referências. Mantidas com confirmada:false
 * até validação. Enquanto nenhuma estiver confirmada, a seção de
 * Localização exibe uma mensagem genérica pedindo contato com a equipe.
 */
export const unidades: Unidade[] = [
  {
    id: "florenca",
    nome: "Unidade Florença",
    endereco:
      "Av. Ida Jubeline, 650 — Florença, Ribeirão das Neves/MG — CEP 33823-730",
    telefone: "(31) 3627-1219",
    horarioTexto: undefined,
    confirmada: false,
    fonte: "Google (ficha da empresa)",
  },
  {
    id: "centro",
    nome: "Unidade Centro",
    endereco: "Rua Raimundo Nonato de Souza, 26 — Centro, Ribeirão das Neves/MG",
    telefone: undefined,
    horarioTexto: undefined,
    confirmada: true,
    fonte: "Instagram (@clinicasdeolhosconceito)",
  },
];

export function mapsSearchUrl(endereco: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
}

/** URL de incorporação (iframe) do Google Maps para um endereço, sem necessidade de chave de API. */
export function mapsEmbedUrl(endereco: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`;
}

export type Atendimento = {
  id: string;
  titulo: string;
  descricao: string;
  mensagemWhatsapp: string;
  /** Legenda discreta indicando que a foto é ilustrativa, não da equipe da clínica */
  legendaFoto: string;
};

/**
 * Itens preliminares — a confirmar com a clínica antes da publicação.
 * Não representam lista oficial/completa de serviços. As fotos usadas
 * são ilustrativas (banco de imagens fornecido como referência) e não
 * retratam pacientes ou profissionais reais da clínica.
 */
export const atendimentos: Atendimento[] = [
  {
    id: "consulta",
    titulo: "Consulta oftalmológica",
    descricao:
      "Avaliação com nossa equipe para conversar sobre a saúde da sua visão e orientações gerais.",
    mensagemWhatsapp: whatsapp.mensagens.padrao,
    legendaFoto: "Imagem ilustrativa",
  },
  {
    id: "pediatrica",
    titulo: "Oftalmologia pediátrica",
    descricao:
      "Atendimento voltado ao público infantil, com acompanhamento próximo da família.",
    mensagemWhatsapp: whatsapp.mensagens.infantil,
    legendaFoto: "Imagem ilustrativa",
  },
  {
    id: "exames",
    titulo: "Exames oftalmológicos",
    descricao:
      "Fale com a equipe para saber quais exames estão disponíveis e como se preparar.",
    mensagemWhatsapp: whatsapp.mensagens.exames,
    legendaFoto: "Imagem ilustrativa",
  },
];

export type MembroEquipe = {
  id: string;
  nomeCompleto: string;
  areaAtuacao: string;
  crm: string;
  rqe?: string;
  fotoUrl?: string;
};

/**
 * SEÇÃO CONDICIONAL — mantida oculta (equipeVisivel = false) até que
 * dados completos e confirmados (nome, foto real, CRM/UF, RQE quando
 * aplicável) sejam fornecidos pela clínica. Nomes citados em avaliações
 * (ex.: Dra. Renata Nobre, Dra. Larissa, Dra. Carolina/Carol Paes) NÃO
 * confirmam a equipe atual e não devem ser publicados sem validação.
 */
export const equipeVisivel = false;
export const equipe: MembroEquipe[] = [];

export type Avaliacao = {
  id: string;
  autor: string;
  texto: string;
  nota: number;
};

/**
 * SEÇÃO CONDICIONAL — mantida oculta (avaliacoesVisiveis = false) até
 * receber conteúdo aprovado para publicação e o link correto do perfil
 * no Google. A nota/quantidade abaixo refletem apenas uma captura de
 * tela pontual e NÃO devem ser exibidas como dado atualizado
 * automaticamente.
 */
export const avaliacoesVisiveis = false;
export const avaliacoesResumo = {
  nota: 4.0,
  totalAvaliacoes: 13,
  fonteTexto: "Referente a uma captura de tela do Google (data não confirmada)",
  linkGoogle: "",
};
export const avaliacoes: Avaliacao[] = [];

export const faq = [
  {
    pergunta: "Como solicitar um agendamento?",
    resposta:
      "Você pode solicitar um agendamento pelo WhatsApp. Nossa equipe confirma disponibilidade e orienta os próximos passos.",
  },
  {
    pergunta: "Como consultar atendimento infantil?",
    resposta:
      "Envie uma mensagem pelo WhatsApp informando que é para atendimento infantil. A equipe verifica a disponibilidade com você.",
  },
  {
    pergunta: "Quais exames são realizados?",
    resposta:
      "A lista de exames disponíveis pode variar. Fale com a recepção pelo WhatsApp para confirmar quais exames são realizados atualmente.",
  },
  {
    pergunta: "A clínica atende por convênios?",
    resposta:
      "Consulte a recepção pelo WhatsApp para confirmar quais convênios são aceitos no momento.",
  },
  {
    pergunta: "Como confirmar a unidade e os horários?",
    resposta:
      "As informações de endereço e horário desta página estão sujeitas à confirmação. Fale com nossa equipe para confirmar a unidade mais próxima e o horário de atendimento antes da sua visita.",
  },
];

/**
 * Dados pendentes que devem ser resolvidos antes da publicação do site.
 * Usado apenas como referência para a equipe — não é exibido aos
 * visitantes do site.
 */
export const pendencias = [
  "Confirmar número de WhatsApp oficial (5531995959990).",
  "Confirmar horário de funcionamento da unidade Centro.",
  "Fornecer telefone da unidade Centro.",
  "Confirmar se a unidade Florença (Google) também está ativa e, se sim, seu telefone fixo.",
  "Substituir as fotos de banco de imagens (abertura, cartões de atendimento e destaque infantil) por fotografias reais da clínica, equipamentos e equipe.",
  "Fornecer fotos reais do ambiente da clínica (seção 'A clínica').",
  "Fornecer logo oficial em arquivo vetorial/alta resolução (se houver).",
  "Confirmar equipe médica atual (nomes, fotos, CRM/UF e RQE).",
  "Fornecer avaliações reais aprovadas para publicação e link do perfil no Google.",
  "Confirmar lista oficial de atendimentos/exames e convênios aceitos.",
  "Fornecer dados do responsável técnico e razão social para o rodapé.",
  "Criar página de política de privacidade, se aplicável, antes de linkar no rodapé.",
];
