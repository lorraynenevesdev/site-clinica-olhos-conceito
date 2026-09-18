# Clínica de Olhos Conceito — Site

Site institucional em React + TypeScript + Tailwind CSS (v4) + Lucide Icons, com foco em geração de contato via WhatsApp.

## Como executar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (roda tsc + vite build)
npm run preview  # servir o build de produção localmente
```

## Estrutura

- `src/config/clinic.ts` — configuração central: WhatsApp, Instagram, unidades/endereços, atendimentos, equipe, avaliações e FAQ. Edite este arquivo para atualizar conteúdo do site.
- `src/components/` — componentes de cada seção (Header, Hero, Services, Location, Faq, etc).
- Seções **Equipe** e **Avaliações** ficam ocultas até que os dados sejam confirmados (flags `equipeVisivel` e `avaliacoesVisiveis` em `clinic.ts`).

## Verificações realizadas

- `npm run build` (tsc + vite build): concluído sem erros.
- Servidor de desenvolvimento (`vite`) iniciado e página verificada via HTTP (HTML renderizado corretamente).
- Não foi possível realizar teste manual em navegador real (sem interface gráfica neste ambiente); recomenda-se conferir visualmente menu mobile, acordeão de dúvidas e âncoras antes da publicação.

## Dados já confirmados

Confirmados a partir do Instagram oficial da clínica (@clinicasdeolhosconceito):

- WhatsApp **5531995959990** (link publicado na bio).
- Duas unidades ativas: **Centro** (Rua Raimundo Nonato de Souza, 26) e **Florença** (Av. Ida Jubeline, 650).
- Lista de exames divulgada pela clínica (topografia de córnea, mapeamento de retina, refração computadorizada, gonioscopia, pressão ocular, fundo de olho, biomicroscopia, paquimetria, CDPO).
- Logo oficial (extraída da foto de perfil — ver pendências).
- Avaliações reais aprovadas para publicação.

## Dados pendentes antes da publicação

Ver lista completa e comentada em `src/config/clinic.ts` (constante `pendencias`). Resumo:

1. Confirmar horários de funcionamento das duas unidades.
2. Fornecer telefones das unidades (o número da ficha do Google ainda não foi validado e não é exibido).
3. Confirmar se a lista de exames segue atual.
4. Substituir as fotos de banco de imagens por fotografias reais da clínica.
5. Fornecer fotos do ambiente da clínica (seção "A clínica" ainda usa placeholder).
6. Fornecer a logo em vetor (SVG/AI) ou PNG em alta resolução — a atual veio de captura do Instagram.
7. Confirmar equipe médica atual (nomes, fotos, CRM/UF e RQE) para habilitar a seção Equipe.
8. Confirmar o link do perfil no Google e atualizar nota/total de avaliações.
9. Confirmar convênios aceitos.
10. Fornecer dados do responsável técnico e razão social para o rodapé.
11. Criar página de política de privacidade antes de linkar no rodapé.
