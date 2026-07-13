import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CollectionIndex } from './pages/CollectionIndex'
import { ExhibitPage } from './pages/ExhibitPage'
import { getInterest } from './content/interests'

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const slug = pathname.split('/').filter(Boolean).at(-1)
    const interest = slug ? getInterest(slug) : undefined
    document.title = interest ? `${interest.shortTitle ?? interest.title} — Hunter's Collection` : "Hunter's Collection"
  }, [pathname])

  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to the collection</a>
      <RouteEffects />
      <div className="route-frame" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<CollectionIndex />} />
          <Route path="/interest/:slug" element={<ExhibitPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}
