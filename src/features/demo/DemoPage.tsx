import {
  AlertTriangle,
  BadgeCheck,
  CircleHelp,
  Database,
  ShieldAlert,
} from 'lucide-react'

const syntheticSources = [
  {
    name: 'Fonte Exemplo A',
    status: 'Concluída',
    detail: 'Resultado estritamente sintético',
  },
  {
    name: 'Fonte Exemplo B',
    status: 'Sem registros',
    detail: 'Não equivale à ausência de exposição',
  },
  {
    name: 'Fonte Exemplo C',
    status: 'Indisponível',
    detail: 'Cobertura parcial sinalizada',
  },
] as const

const syntheticFindings = [
  {
    title: 'Exposição em serviço ilustrativo',
    label: 'Dado sintético',
    severity: 'Moderado',
    description:
      'Exemplo de incidente histórico; nenhuma fonte externa foi consultada.',
    categories: ['E-mail', 'Nome de usuário'],
  },
  {
    title: 'Associação sob revisão',
    label: 'Possível associação',
    severity: 'Indeterminado',
    description:
      'Exemplo de evidência que exige confirmação do titular antes de qualquer vínculo.',
    categories: ['Referência pública'],
  },
] as const

export function DemoPage() {
  return (
    <section className="demo-page section">
      <div className="shell-container">
        <div className="demo-banner" role="status">
          <Database size={18} aria-hidden="true" />
          <span>
            <strong>AMBIENTE DEMONSTRATIVO</strong> · Todos os dados, fontes e estados
            desta tela são fictícios.
          </span>
        </div>

        <div className="page-heading">
          <p className="eyebrow">Demonstração segura</p>
          <h1>Como a cobertura deverá ser comunicada.</h1>
          <p>
            O produto real diferenciará fontes consultadas, indisponibilidades e
            resultados sem descobertas. Esta visualização não representa uma
            investigação real.
          </p>
        </div>

        <div className="demo-summary-grid">
          <article className="metric-card">
            <span className="metric-icon metric-icon-cyan" aria-hidden="true">
              <BadgeCheck size={19} />
            </span>
            <span>Estado de exemplo</span>
            <strong>Verificado</strong>
            <small>Somente representação visual</small>
          </article>
          <article className="metric-card">
            <span className="metric-icon metric-icon-amber" aria-hidden="true">
              <ShieldAlert size={19} />
            </span>
            <span>Risco de exemplo</span>
            <strong>Moderado</strong>
            <small>Metodologia será versionada</small>
          </article>
          <article className="metric-card">
            <span className="metric-icon metric-icon-slate" aria-hidden="true">
              <CircleHelp size={19} />
            </span>
            <span>Cobertura</span>
            <strong>Parcial</strong>
            <small>Fonte indisponível no cenário</small>
          </article>
        </div>

        <div className="demo-content-grid">
          <section className="panel" aria-labelledby="fontes-title">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Transparência operacional</p>
                <h2 id="fontes-title">Fontes no cenário</h2>
              </div>
              <span className="panel-badge">Sintético</span>
            </div>
            <div className="source-list">
              {syntheticSources.map((source) => (
                <article className="source-row" key={source.name}>
                  <div>
                    <strong>{source.name}</strong>
                    <p>{source.detail}</p>
                  </div>
                  <span className="source-status">{source.status}</span>
                </article>
              ))}
            </div>
          </section>

          <aside className="panel panel-attention">
            <AlertTriangle size={21} aria-hidden="true" />
            <h2>Limite da demonstração</h2>
            <p>
              Não há APIs conectadas, identificadores submetidos, contas criadas ou
              consultas armazenadas. Conectores reais só serão incluídos a partir da
              Fase 3, após os controles de titularidade e autorização.
            </p>
          </aside>
        </div>

        <section className="findings-section" aria-labelledby="findings-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Resultados fictícios</p>
              <h2 id="findings-title">Descobertas representadas</h2>
            </div>
            <span className="panel-badge">Sem persistência</span>
          </div>
          <div className="finding-grid">
            {syntheticFindings.map((finding) => (
              <article className="finding-card" key={finding.title}>
                <div className="finding-meta">
                  <span>{finding.label}</span>
                  <span className="risk-chip">{finding.severity}</span>
                </div>
                <h3>{finding.title}</h3>
                <p>{finding.description}</p>
                <div className="category-list" aria-label="Categorias representadas">
                  {finding.categories.map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
