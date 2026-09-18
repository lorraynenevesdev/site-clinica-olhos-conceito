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

## Dados pendentes antes da publicação

Ver lista completa e comentada em `src/config/clinic.ts` (constante `pendencias`). Resumo:

1. Confirmar número de WhatsApp oficial.
2. Confirmar unidade(s) ativa(s) e horários de funcionamento.
3. Confirmar telefone fixo da unidade Florença.
4. Fornecer fotos reais do ambiente da clínica (placeholders estão nos componentes `Hero` e `About`).
5. Fornecer logo oficial (arquivo vetorial), se houver — atualmente o nome da clínica é exibido em texto no cabeçalho.
6. Confirmar equipe médica atual (nomes, fotos, CRM/UF e RQE) para habilitar a seção Equipe.
7. Fornecer avaliações reais aprovadas e link do perfil no Google para habilitar a seção Avaliações.
8. Confirmar lista oficial de atendimentos/exames e convênios aceitos.
9. Fornecer dados do responsável técnico e razão social para o rodapé.
10. Criar página de política de privacidade antes de linkar no rodapé.
