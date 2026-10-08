import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'
import { DemoPage } from '../features/demo/DemoPage'
import { HomePage } from '../features/home/HomePage'
import { NotFoundPage } from '../features/home/NotFoundPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demonstracao" element={<DemoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  )
}
