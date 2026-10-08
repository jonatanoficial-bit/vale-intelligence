# Deploy

## Desenvolvimento

Use variáveis de .env.local que não sejam versionadas. Execute o script de desenvolvimento do projeto.

## Demonstração

GitHub Pages poderá publicar somente os ativos estáticos e o cenário sintético. A versão deve permanecer sem autenticação real, banco, relatórios, cobrança, identificadores ou chamadas a provedores.

O pipeline `.github/workflows/deploy-pages.yml` publica cada atualização da branch `main` em GitHub Pages. A primeira publicação deste repositório será acessível em `https://jonatanoficial-bit.github.io/vale-intelligence/`.

A variável `VITE_PUBLIC_BASE_PATH` é definida pelo pipeline para que os ativos funcionem dentro do caminho do repositório. A navegação usa fragmentos de URL (`#/…`), compatíveis com hospedagem estática.

## Comercial

A aplicação comercial será implantada em Cloudflare Workers com ativos estáticos ou infraestrutura equivalente, com HTTPS, domínio próprio, backend protegido, gestão de segredos, políticas de segurança e observabilidade.
