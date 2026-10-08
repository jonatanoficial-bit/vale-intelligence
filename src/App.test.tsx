import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('apresenta a proposta de proteção autorizada', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /inteligência para proteger sua identidade digital/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /ver demonstração sintética/i }),
    ).toHaveAttribute('href', '/demonstracao')
  })
})
