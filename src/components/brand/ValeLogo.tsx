import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

type ValeLogoProps = {
  withTagline?: boolean
}

export function ValeLogo({ withTagline = false }: ValeLogoProps) {
  return (
    <Link className="brand" to="/" aria-label="VALE INTELLIGENCE — página inicial">
      <span className="brand-mark" aria-hidden="true">
        <ShieldCheck size={20} strokeWidth={2.25} />
      </span>
      <span>
        <span className="brand-name">VALE</span>
        <span className="brand-name brand-name-muted">INTELLIGENCE</span>
        {withTagline ? (
          <span className="brand-tagline">
            Digital Exposure & Identity Intelligence
          </span>
        ) : null}
      </span>
    </Link>
  )
}
