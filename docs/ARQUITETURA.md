# Arquitetura — Lote 01

## Camadas

```text
src/app          bootstrap, providers e rotas
src/components   componentes compartilháveis e layout
src/features     módulos orientados por domínio
src/lib          ambiente, utilitários e integrações futuras
src/types        contratos compartilhados
supabase         reserva para banco, Edge Functions e testes
tests            testes de ponta a ponta
```

O cliente é uma SPA React. AppProviders cria o cliente TanStack Query; AppRouter possui somente as rotas públicas do Lote 01; PageShell mantém navegação responsiva e acessível.

## Limites de segurança

- O navegador nunca recebe segredo de API.
- Não há client Supabase instanciado enquanto não há configuração autorizada.
- O estado demo não emula respostas externas.
- O manifesto PWA não define cache de runtime.
- Conteúdo futuro de relatórios e exportações está excluído de fallback de navegação.

## Ambientes

| Ambiente    | Uso                                                           |
| ----------- | ------------------------------------------------------------- |
| development | desenvolvimento local, dados sintéticos e sem custos externos |
| staging     | integrações reais de teste e acessos controlados              |
| production  | operação comercial protegida                                  |
| demo        | publicação estática com conteúdo sintético                    |
