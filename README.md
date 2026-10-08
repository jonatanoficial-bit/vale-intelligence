# VALE INTELLIGENCE

Plataforma em desenvolvimento para proteção autorizada de identidade digital, monitoramento de exposição e correlação explicável de evidências.

> Estado atual: Lote 01 concluindo validação. Esta base não possui autenticação, banco, conectores, contas ou consultas reais.

## Segurança e escopo

- A demonstração usa somente conteúdo sintético e não representa resultados reais.
- Nenhum segredo deve ser incluído no repositório ou em variáveis expostas ao navegador.
- Pesquisas de terceiros, coleta de dados privados e retenção de senhas vazadas são proibidas.
- A operação comercial será separada do GitHub Pages.

## Tecnologias

React, Vite, TypeScript estrito, Tailwind CSS, React Router, TanStack Query, Zod, Supabase preparado, Vitest, Testing Library, Playwright, ESLint e Prettier.

## Como executar

1. Instale uma versão recente de Node.js e pnpm.
2. Copie .env.example para .env.local e mantenha a configuração demo.
3. Instale as dependências com pnpm install.
4. Inicie com pnpm dev.

## Verificações

| Comando       | Finalidade                            |
| ------------- | ------------------------------------- |
| pnpm format   | verifica formatação                   |
| pnpm lint     | verifica regras estáticas             |
| pnpm test     | executa testes unitários              |
| pnpm build    | valida TypeScript e gera distribuição |
| pnpm test:e2e | executa o teste inicial no navegador  |

## Documentação

- docs/BIBLIA_MESTRE.md — regras e escopo do produto.
- docs/PLANO_DE_LOTES.md — roteiro oficial de 36 lotes.
- docs/STATUS_PROJETO.md — estado verificável atual.
- docs/DECISOES_TECNICAS.md — decisões arquiteturais.
- docs/ARQUITETURA.md — camadas e limites de segurança.

Leia a Bíblia Mestre, o status e as decisões antes de iniciar qualquer novo lote.
