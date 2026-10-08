# Modelo de dados planejado

O banco será introduzido no Lote 04 com migrações versionadas. Entidades principais: profiles, subjects, identifiers, verification_requests, authorizations, providers, provider_configurations, investigations, scan_jobs, provider_runs, findings, evidence_sources, identity_claims, identity_edges, risk_assessments, remediation_tasks, removal_requests, alerts, reports, subscriptions, usage_ledger, audit_events, deletion_requests e app_settings.

Todas as tabelas de cliente terão isolamento explícito por usuário e sujeito monitorado. A modelagem final deve definir classificação de dados, retenção, índices protegidos, chaves estrangeiras e políticas RLS antes de expor qualquer tabela ao cliente.
