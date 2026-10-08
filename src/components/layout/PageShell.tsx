import { Menu, X } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { ValeLogo } from '../brand/ValeLogo'

const navigation = [
  { to: '/', label: 'Visão geral' },
  { to: '/demonstracao', label: 'Demonstração' },
] as const

export function PageShell({ children }: PropsWithChildren) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  const closeNavigation = () => setIsNavigationOpen(false)

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="site-header">
        <div className="shell-container header-content">
          <ValeLogo />
          <button
            className="mobile-nav-toggle"
            type="button"
            aria-expanded={isNavigationOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsNavigationOpen((open) => !open)}
          >
            {isNavigationOpen ? <X size={19} /> : <Menu size={19} />}
            <span className="sr-only">Alternar navegação</span>
          </button>
          <nav
            id="primary-navigation"
            className={
              isNavigationOpen ? 'primary-nav primary-nav-open' : 'primary-nav'
            }
            aria-label="Principal"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
                onClick={closeNavigation}
              >
                {item.label}
              </NavLink>
            ))}
            <span className="header-status">
              <span className="status-dot" aria-hidden="true" />
              Ambiente seguro em construção
            </span>
          </nav>
        </div>
      </header>
      <main id="conteudo">{children}</main>
      <footer className="site-footer">
        <div className="shell-container footer-content">
          <ValeLogo />
          <p>v0.1.0 · Base de desenvolvimento · Outubro de 2026</p>
          <p className="footer-note">
            Nenhuma consulta real é executada nesta demonstração.
          </p>
        </div>
      </footer>
    </div>
  )
}
