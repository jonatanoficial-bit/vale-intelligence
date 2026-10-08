# Configuração de APIs

O arquivo .env.example contém somente nomes de variáveis públicas. Segredos, tokens de fornecedores, credenciais de webhook e chaves de criptografia não devem aparecer em variáveis expostas ao cliente, commits, logs ou capturas.

No Lote 04 serão configuradas URL e chave pública do Supabase por ambiente. Credenciais dos conectores serão introduzidas somente em Edge Functions e cofre de segredos nos lotes autorizados. Um conector sem chave, licença ou aprovação deve retornar estado operacional explícito e permanecer desabilitado.
