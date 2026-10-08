import {
  ArrowRight,
  BadgeCheck,
  Eye,
  Fingerprint,
  LockKeyhole,
  Network,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const principles = [
  {
    icon: ShieldCheck,
    title: 'Titularidade primeiro',
    description:
      'Consultas pessoais só existirão após verificação e autorização rastreável.',
  },
  {
    icon: Network,
    title: 'Evidência explicável',
    description:
      'Cada relação deverá mostrar origem, independência, contexto e grau de confiança.',
  },
  {
    icon: LockKeyhole,
    title: 'Privacidade por padrão',
    description:
      'O produto não será um buscador de dossiês de terceiros nem reterá senhas vazadas.',
  },
] as const

const deliveryItems = [
  'React, Vite e TypeScript em modo estrito',
  'Estrutura modular preparada para Supabase',
  'Qualidade automatizada: lint, testes e build',
  'PWA preparada sem cache de relatórios sensíveis',
] as const

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="shell-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Fundação do produto · Lote 01
            </p>
            <h1 aria-label="Inteligência para proteger sua identidade digital.">
              Inteligência para proteger
              <span className="text-gradient"> sua identidade digital.</span>
            </h1>
            <p className="hero-description">
              O VALE INTELLIGENCE está sendo construído como uma plataforma de proteção
              autorizada: cobertura legítima, evidências rastreáveis e privacidade como
              requisito de arquitetura.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/demonstracao">
                Ver demonstração sintética
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a className="button button-secondary" href="#principios">
                Conhecer princípios
              </a>
            </div>
            <p className="hero-caption">
              <Eye size={15} aria-hidden="true" />
              Não há contas, pesquisas ou dados pessoais reais neste ambiente.
            </p>
          </div>

          <div
            className="hero-visual"
            aria-label="Visão conceitual da correlação autorizada"
          >
            <div className="visual-topline">
              <span>IDENTITY CORRELATION ENGINE</span>
              <span className="visual-live">
                <span className="status-dot" aria-hidden="true" />
                arquitetura
              </span>
            </div>
            <div className="identity-core">
              <span className="core-ring core-ring-one" aria-hidden="true" />
              <span className="core-ring core-ring-two" aria-hidden="true" />
              <span className="core-icon" aria-hidden="true">
                <Fingerprint size={31} />
              </span>
              <strong>Identidade verificada</strong>
              <small>Somente após confirmação de titularidade</small>
            </div>
            <div className="visual-node node-left">
              <span className="node-icon node-icon-cyan" aria-hidden="true">
                <BadgeCheck size={16} />
              </span>
              <span>
                <strong>Autorização</strong>
                <small>escopo rastreável</small>
              </span>
            </div>
            <div className="visual-node node-right">
              <span className="node-icon node-icon-green" aria-hidden="true">
                <ShieldCheck size={16} />
              </span>
              <span>
                <strong>Evidências</strong>
                <small>origem preservada</small>
              </span>
            </div>
            <div className="visual-node node-bottom">
              <span className="node-icon node-icon-amber" aria-hidden="true">
                <Network size={16} />
              </span>
              <span>
                <strong>Correlação</strong>
                <small>revisável pelo titular</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="principios" className="section">
        <div className="shell-container">
          <div className="section-heading">
            <p className="eyebrow">Arquitetura orientada por proteção</p>
            <h2>
              Resultados úteis só existem quando a confiança também é verificável.
            </h2>
            <p>
              A plataforma separa descoberta, associação, indisponibilidade de fonte e
              ausência de resultado. Ela não usa semelhança de nomes como prova de
              identidade.
            </p>
          </div>
          <div className="principle-grid">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <article className="principle-card" key={title}>
                <span className="card-index">0{index + 1}</span>
                <span className="principle-icon" aria-hidden="true">
                  <Icon size={21} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="shell-container delivery-layout">
          <div>
            <p className="eyebrow">Entrega atual</p>
            <h2>Uma fundação feita para crescer sem refazer a segurança depois.</h2>
            <p className="delivery-description">
              Esta primeira entrega estabelece o projeto, a navegação pública, a
              documentação operacional e a separação entre demonstração e futura
              operação comercial.
            </p>
          </div>
          <ul className="delivery-list">
            {deliveryItems.map((item) => (
              <li key={item}>
                <span className="check-bullet" aria-hidden="true">
                  <BadgeCheck size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
