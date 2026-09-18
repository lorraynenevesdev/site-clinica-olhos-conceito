/**
 * Configuração central da Clínica de Olhos Conceito.
 *
 * Todo dado marcado como "confirmado: false" é uma informação obtida de
 * referências (Google/Instagram) e AINDA NÃO foi validada pela clínica.
 * Ajuste os valores e troque para "confirmado: true" (ou remova o item)
 * somente após validação com a recepção/gestão da clínica.
 */

export const whatsapp = {
  // Confirmado: é o link publicado pela própria clínica na bio do Instagram
  // oficial (wa.me/5531995959990).
  numero: "5531995959990",
  confirmado: true,
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

export type RedeSocial = {
  id: "instagram" | "facebook" | "whatsapp";
  label: string;
  url: string;
};

/**
 * Redes sociais confirmadas para exibição em botões de ícone. Adicione um
 * item aqui apenas quando o link for real e confirmado — links vazios ou
 * ausentes simplesmente não aparecem no rodapé.
 */
export const redesSociais: RedeSocial[] = [
  { id: "instagram", label: "Instagram da clínica", url: instagram.url },
  {
    id: "whatsapp",
    label: "WhatsApp da clínica",
    url: `https://wa.me/${whatsapp.numero}`,
  },
];

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
 * Ambas as unidades são confirmadas: a bio do Instagram oficial da clínica
 * lista as duas ("Conheça nossas unidades"). O telefone da unidade
 * Florença foi validado pela clínica. Os horários seguem pendentes.
 */
export const unidades: Unidade[] = [
  {
    id: "centro",
    nome: "Unidade Centro",
    endereco: "Rua Raimundo Nonato de Souza, 26 — Centro, Ribeirão das Neves/MG",
    telefone: undefined,
    horarioTexto: undefined,
    confirmada: true,
    fonte: "Instagram oficial (@clinicasdeolhosconceito)",
  },
  {
    id: "florenca",
    nome: "Unidade Florença",
    endereco:
      "Av. Ida Jubeline, 650 — Florença, Ribeirão das Neves/MG — CEP 33823-730",
    telefone: "(31) 3627-1219",
    horarioTexto: undefined,
    confirmada: true,
    fonte: "Instagram oficial (@clinicasdeolhosconceito)",
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

export type Exame = {
  nome: string;
  /**
   * Descrição neutra do que o exame observa. Deve dizer apenas o que é
   * avaliado — nunca preparo, indicação clínica, resultado esperado ou
   * qualquer orientação que caiba ao médico. Deixe indefinida quando o
   * significado do item ainda não tiver sido confirmado pela clínica.
   */
  descricao?: string;
};

/**
 * Exames divulgados pela própria clínica em publicação no Instagram
 * oficial. A disponibilidade pode mudar — o site orienta a confirmar com
 * a recepção antes da visita.
 */
export const exames: Exame[] = [
  {
    nome: "Topografia de córnea",
    descricao: "Mapeia a curvatura e o formato da superfície da córnea.",
  },
  {
    nome: "Mapeamento de retina",
    descricao: "Examina a retina e as estruturas do fundo do olho.",
  },
  {
    nome: "Refração computadorizada",
    descricao: "Mede o grau de forma automatizada, como apoio à consulta.",
  },
  {
    nome: "Gonioscopia",
    descricao: "Avalia o ângulo de drenagem interno do olho.",
  },
  {
    nome: "Pressão ocular",
    descricao: "Mede a pressão interna do olho (tonometria).",
  },
  {
    nome: "Fundo de olho",
    descricao: "Observa a retina, o nervo óptico e os vasos do fundo do olho.",
  },
  {
    nome: "Biomicroscopia",
    descricao: "Observa as estruturas do olho na lâmpada de fenda.",
  },
  {
    nome: "Paquimetria",
    descricao: "Mede a espessura da córnea.",
  },
  {
    // Sigla divulgada pela clínica; o significado ainda não foi confirmado,
    // por isso segue sem descrição em vez de receber uma suposição.
    nome: "CDPO",
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
 * Avaliações reais, reunidas a partir de capturas de tela do Google
 * fornecidas pela clínica para publicação. A nota/quantidade abaixo
 * refletem uma captura pontual e NÃO são atualizadas automaticamente —
 * atualize periodicamente com a equipe e, assim que possível, troque
 * `linkGoogle` pelo link real do perfil da clínica no Google.
 */
export const avaliacoesVisiveis = true;
export const avaliacoesResumo = {
  nota: 4.0,
  totalAvaliacoes: 13,
  fonteTexto: "Com base em avaliações reunidas pela equipe no Google",
  linkGoogle: "",
};
export const avaliacoes: Avaliacao[] = [
  {
    id: "paula-silva",
    autor: "Paula Silva",
    texto:
      "Excelente atendimento, levo sempre meus pais lá para acompanhamento, já fiz minha consulta também e gostei muito, agora vou levar minha filha pra consultar também! Estão todos de parabéns, excelente clínica, super recomendo.",
    nota: 5,
  },
  {
    id: "jean-carlo",
    autor: "Jean Carlo",
    texto:
      "Descobri esta clínica há mais ou menos 2 anos e gostei muito, já levei minha mulher e filha e já marquei para minha mãe. Excelentes profissionais desde a recepção até os médicos. Nota 10.",
    nota: 5,
  },
  {
    id: "alice-rodrigues",
    autor: "Alice Rodrigues",
    texto:
      "Foi uma das melhores experiências que já tive com oftalmologista, um serviço prestado com qualidade de verdade! A estrutura física do consultório é perfeita e impecável para o atendimento. Indico sempre.",
    nota: 5,
  },
];

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
      "Entre os exames divulgados pela clínica estão topografia de córnea, mapeamento de retina, refração computadorizada, gonioscopia, pressão ocular, fundo de olho, biomicroscopia, paquimetria e CDPO. A disponibilidade pode variar — confirme com a recepção pelo WhatsApp antes da sua visita.",
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
  "Confirmar horários de funcionamento das duas unidades (Centro e Florença).",
  "Fornecer o telefone da unidade Centro (hoje só a unidade Florença tem telefone publicado).",
  "Confirmar se a lista de exames divulgada no Instagram segue atual.",
  "Confirmar o significado da sigla CDPO para descrevê-la no site (hoje aparece sem descrição).",
  "Validar com a responsabilidade técnica as descrições dos exames exibidas no site.",
  "Substituir as fotos de banco de imagens (abertura, cartões de atendimento e destaque infantil) por fotografias reais da clínica, equipamentos e equipe.",
  "Fornecer fotos reais do ambiente da clínica (seção 'A clínica').",
  "Confirmar equipe médica atual (nomes, fotos, CRM/UF e RQE).",
  "Confirmar o link correto do perfil da clínica no Google e atualizar nota/total de avaliações periodicamente.",
  "Confirmar link do Facebook (se houver) para exibir no rodapé junto ao Instagram.",
  "Confirmar lista oficial de atendimentos/exames e convênios aceitos.",
  "Fornecer dados do responsável técnico e razão social para o rodapé.",
  "Criar página de política de privacidade, se aplicável, antes de linkar no rodapé.",
];
