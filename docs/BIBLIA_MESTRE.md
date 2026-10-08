# VALE INTELLIGENCE — Bíblia Mestre de Desenvolvimento

**Versão:** 1.0
**Data-base:** outubro de 2026
**Produto:** SaaS de proteção de identidade digital, monitoramento autorizado de exposição e correlação explicável de evidências.

## Missão e limite do produto

O VALE INTELLIGENCE permitirá que pessoas, e futuramente organizações autorizadas, acompanhem a própria exposição digital. A plataforma parte de identificadores cuja titularidade foi demonstrada, consulta fornecedores contratualmente permitidos, normaliza evidências e apresenta riscos, limitações e ações de proteção.

O produto não é um buscador irrestrito de dossiês pessoais. Não pode pesquisar terceiros sem autorização verificável, comprar bases pessoais, reconstruir CPF a partir de fragmentos, contornar controles de provedores ou reter/exibir senhas vazadas.

## Resultados e linguagem de confiança

Toda descoberta deve ser distinguida como: informação confirmada; associação provável; informação não confirmada; ausência de registros encontrados; fonte indisponível; ou consulta não autorizada.

Ausência de resultado não prova ausência de vazamento. Semelhança de nome ou apelido nunca comprova identidade. Cópias do mesmo incidente contam como uma única origem.

## Princípios invioláveis

1. Consultar apenas identificadores de titularidade comprovada ou de autorização específica verificável.
2. Verificar posse do e-mail antes de iniciar busca associativa pessoal.
3. Exigir verificação adicional para CPF, telefone e identificadores sensíveis.
4. Documentar finalidade, base legal, necessidade e retenção de cada tratamento.
5. Respeitar licenças, termos e limites de cada provedor.
6. Não armazenar, registrar em logs, telemetria ou relatórios credenciais recuperadas.
7. Nunca confiar no identificador de usuário ou sujeito enviado pelo navegador.
8. Aplicar RLS a toda tabela acessível por clientes.
9. Manter origem, data, independência e restrições de cada evidência.
10. Permitir contestação, correção, exportação e exclusão conforme os direitos aplicáveis.

## Arquitetura-alvo

- Frontend: React, TypeScript estrito, Vite, Tailwind CSS, React Router, TanStack Query, Zod e PWA.
- Backend: Supabase Auth, PostgreSQL, RLS, Edge Functions, Cron e Storage privado.
- Serviços externos: somente APIs oficiais e licenciadas; as chaves vivem no backend.
- Comercial: Cloudflare Workers com ativos estáticos, ou infraestrutura SaaS equivalente.
- Demonstração: GitHub Pages apenas com cenário sintético, sem transações, dados pessoais ou consultas reais.

Os ambientes são independentes: development usa mocks e dados sintéticos; staging usa integrações de teste controladas; production opera somente com credenciais e políticas válidas; demo é público e estritamente sintético.

## Domínios do sistema

- auth: conta, sessão, MFA e reautenticação.
- verification: verificação de e-mail, telefone e controles de expiração/revogação.
- investigations: orquestração autorizada, jobs, limites e idempotência.
- findings: resultados normalizados e evidências.
- identity e graph: afirmações, relações e revisão pelo titular.
- monitoring: verificações periódicas e alertas.
- removal: solicitações de remoção e acompanhamento.
- reports: PDF privado e exportações protegidas.
- billing e admin: planos, consumo, integrações e governança.

## Investigation Orchestrator

Antes de qualquer saída a um provedor, o orquestrador deve validar usuário autenticado, titularidade, autorização, plano, limite, custo estimado e habilitação/licença do conector. Em seguida cria uma execução auditável, distribui tarefas, normaliza respostas, registra indisponibilidades, aciona o motor de correlação e atualiza o relatório.

Status universais: pronto, credenciais ausentes, licença necessária, não autorizado, identificador não suportado, limitado por taxa, cota excedida, temporariamente indisponível, erro de provedor, sucesso e sem descobertas. Erro e ausência de descoberta nunca compartilham o mesmo status.

## Fontes previstas

HIBP, LeakCheck, Brave Search e GitHub possuem rotas de integração planejadas. Intelligence X e DeHashed começam bloqueados e só podem ser habilitados após licença, revisão jurídica, política de retenção e testes de segurança. Nenhum conector é declarado funcional sem execução comprovada em ambiente autorizado.

## Identity Correlation Engine

O ICE trata associações como afirmações revisáveis. Seu fluxo é: coleta, normalização, deduplicação, proveniência, ancoragem em identificador comprovado, correlação de evidências independentes, detecção de conflitos, classificação, revisão pelo titular e relatório.

Classificações: confirmada, alta confiança, possível, conflitante e rejeitada. A escala interna de 0–100 mede força documentada de evidência, nunca uma probabilidade estatística não validada.

Informações sensíveis não podem ser conectadas automaticamente por correspondência textual. Uma correlação não autoriza expandir a busca para outro identificador.

## Dados, experiência e qualidade

O modelo relacional prevê perfis, sujeitos, identificadores, verificações, autorizações, provedores, investigações, jobs, execuções, achados, fontes de evidência, afirmações, relações, riscos, ações de proteção, remoções, alertas, relatórios, assinaturas, uso, auditoria e exclusões.

Campos sensíveis exigem minimização, mascaramento, criptografia apropriada, reautenticação para revelação/exportação, logs sem valores completos e retenção vinculada à finalidade. Igualdades de identificadores devem considerar HMAC de servidor e normalização; hash simples não é proteção suficiente para CPF.

O visual padrão é escuro, profissional e legível. A PWA não pode guardar relatórios pessoais sensíveis offline. Cada lote exige código executável, build, testes pertinentes, documentação sincronizada, ausência de chaves no repositório, mobile validado e checkpoint versionado.
