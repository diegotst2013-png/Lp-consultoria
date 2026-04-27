# Grocor — Landing Page de Alta Conversão

## Original Problem Statement
Landing page de alta conversão para consultoria estratégica de negócios (Grocor) que usa IA, automação e estrutura operacional para aumentar lucro e reduzir desperdício. Objetivo: gerar leads qualificados e fechar contratos high-ticket (R$20K+). Público: corretores/imobiliárias (30+ leads/mês), clínicas, advogados, negócios locais high-ticket. CTA único: WhatsApp.

User choice: "apenas redirecione para whatsapp" — nenhum formulário, apenas links WhatsApp.

## Architecture
- **Frontend**: React 19 + Tailwind + shadcn primitives (lucide-react icons). Single page at `/`.
- **Backend**: FastAPI boilerplate inalterado (nenhum endpoint necessário — landing page estática).
- **Design**: Dark brutalist (#0A0A0A bg, #25D366 WhatsApp green, #FF3B30 danger red, #FFCC00 warning), Epilogue + Manrope + JetBrains Mono fonts.
- **WhatsApp**: centralizado em `/app/frontend/src/lib/whatsapp.js` (constante `WHATSAPP_NUMBER` = placeholder `5511999999999`).

## User Personas
- **Primária**: Corretor/imobiliária com 30+ leads/mês, já investindo em marketing, perdendo vendas na operação.
- **Secundária**: Clínicas privadas, advogados, negócios locais de ticket alto.

## Core Requirements
- 13 seções narrativas em ordem definida pelo briefing.
- Tom direto, agressivo, linguagem de dono, foco em dinheiro/lucro/perda.
- IA apresentada como ferramenta de resultado, não como tecnologia complexa.
- CTA único e repetido: WhatsApp (nav, hero, intermediário, final, floating button).
- Apelo financeiro visível (seção Impacto Financeiro com R$1,8M de perda estimada).

## What's Been Implemented (2025-12)
- ✅ Landing page completa com 13 seções + nav + footer + floating CTA
  (`/app/frontend/src/pages/LandingPage.jsx`)
- ✅ Helper de WhatsApp centralizado (`/app/frontend/src/lib/whatsapp.js`)
- ✅ Tema dark brutalist com tipografia Epilogue/Manrope/JetBrains Mono
- ✅ Todos `data-testid` em CTAs e seções principais
- ✅ Responsivo desktop (1920px) e mobile (375px)
- ✅ 100% aprovação no teste frontend (iteration_1.json)

## Backlog (P0 / P1 / P2)
- **P0** — Trocar `WHATSAPP_NUMBER` em `/app/frontend/src/lib/whatsapp.js` pelo número real antes de publicar.
- **P1** — Adicionar seção de depoimentos/cases reais quando disponíveis.
- **P1** — SEO: meta tags, Open Graph, favicon customizado da Grocor.
- **P2** — Calculadora interativa de perda (input: leads/mês + ticket → saída: R$ perdidos).
- **P2** — Pixel de conversão (Meta / Google Ads) nos cliques de WhatsApp.
- **P2** — Versão A/B do headline para teste de conversão.
- **P2** — Páginas dedicadas por nicho (imobiliário, clínicas, advogados) com copy ajustada.

## Next Tasks
1. Receber e configurar o número real de WhatsApp.
2. Coletar 2-3 cases/depoimentos reais para inserção.
3. Decidir sobre meta pixel / analytics para acompanhar conversões.
