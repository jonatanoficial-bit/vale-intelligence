# Decisões técnicas

| ID      | Decisão                                        | Motivo e consequência                                                            |
| ------- | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| ADR-001 | React + Vite + TypeScript estrito              | Base rápida, tipada e compatível com deploy estático/comercial.                  |
| ADR-002 | Tailwind CSS v4 com tokens de CSS              | Produtividade e identidade visual própria sem tema externo.                      |
| ADR-003 | React Router e TanStack Query desde a fundação | Rotas e estado remoto preparados sem antecipar integrações reais.                |
| ADR-004 | Variáveis públicas validadas com Zod           | Evita configuração silenciosa e reforça que segredos não pertencem ao cliente.   |
| ADR-005 | Supabase apenas preparado no Lote 01           | Banco, RLS e cliente real pertencem ao Lote 04.                                  |
| ADR-006 | Demo explicitamente sintética                  | GitHub Pages não recebe dados pessoais nem consultas reais.                      |
| ADR-007 | PWA sem runtime caching                        | Impede cache offline de dados pessoais; rotas futuras sensíveis ficam excluídas. |
| ADR-008 | CI bloqueia formato, lint, testes e build      | Mantém a definição de pronto verificável desde o início.                         |
