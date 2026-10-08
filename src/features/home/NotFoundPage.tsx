import { ArrowLeft, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <SearchX size={38} aria-hidden="true" />
      <p className="eyebrow">Rota indisponível</p>
      <h1>Esta área ainda não existe.</h1>
      <p>O Lote 01 disponibiliza somente a apresentação e a demonstração sintética.</p>
      <Link className="button button-primary" to="/">
        <ArrowLeft size={17} aria-hidden="true" />
        Voltar ao início
      </Link>
    </section>
  )
}
