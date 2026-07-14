import { Link, Navigate, useParams } from 'react-router-dom'
import { CollectionMark } from '../components/CollectionMark'
import { ExhibitModule } from '../components/ExhibitModules'
import { getInterest, interests } from '../content/interests'
import type { Interest } from '../content/types'

function Rail({ interest, previous, next }: { interest: Interest; previous: Interest; next: Interest }) {
  return (
    <aside className="collection-rail">
      <Link className="rail-back" to="/"><span aria-hidden="true">←</span> Back to the collection</Link>
      <div className="rail-title">
        <span>Currently in</span>
        <p>{interest.number}</p>
        <h2>{interest.shortTitle ?? interest.title}</h2>
        <CollectionMark compact />
      </div>
      <nav className="rail-sections" aria-label="On this exhibit page">
        {interest.modules.map((module, index) => (
          <button type="button" onClick={() => document.getElementById(module.id)?.scrollIntoView({ behavior: 'smooth' })} key={module.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {module.type === 'quote' ? 'Question' : 'label' in module ? module.label : 'Note'}
          </button>
        ))}
      </nav>
      <nav className="rail-neighbors" aria-label="Adjacent exhibits">
        <Link to={`/interest/${previous.slug}`}><span>Prev · {previous.number}</span>{previous.shortTitle ?? previous.title}</Link>
        <Link to={`/interest/${next.slug}`}><span>Next · {next.number}</span>{next.shortTitle ?? next.title}</Link>
      </nav>
      <div className="rail-foot"><CollectionMark /></div>
    </aside>
  )
}

export function ExhibitPage() {
  const { slug } = useParams()
  const interest = slug ? getInterest(slug) : undefined

  if (!interest) return <Navigate to="/" replace />

  const index = interests.indexOf(interest)
  const previous = interests[(index - 1 + interests.length) % interests.length]
  const next = interests[(index + 1) % interests.length]
  const related = interest.related.map(getInterest).filter((item): item is Interest => Boolean(item))

  return (
    <div className={`exhibit-page theme-${interest.theme}`}>
      <Rail interest={interest} previous={previous} next={next} />

      <div className="mobile-locator">
        <Link to="/">← Collection</Link>
        <span>{interest.number} / {String(interests.length).padStart(2, '0')}</span>
        <Link to={`/interest/${next.slug}`} aria-label={`Next exhibit: ${next.title}`}>Next →</Link>
      </div>

      <main className="exhibit-main" id="main-content" tabIndex={-1}>
        <header className={`exhibit-hero${interest.image ? ' exhibit-hero--image' : ''}`}>
          {interest.image && (
            <div className="exhibit-hero-image">
              <img src={interest.image} alt={interest.imageAlt ?? ''} style={{ objectPosition: interest.imagePosition ?? 'center' }} />
            </div>
          )}
          <div className="exhibit-hero-copy">
            <p className="eyebrow">Folio {interest.number} · {interest.status}</p>
            <h1>{interest.title}</h1>
            <p className="exhibit-kicker">{interest.kicker}</p>
            <p className="exhibit-premise">{interest.premise}</p>
          </div>
          <span className="hero-coordinate" aria-hidden="true">HC—{interest.number} / 26</span>
        </header>

        {interest.theme === 'digital' && (
          <div className="digital-statusbar" aria-hidden="true">
            <span><i /> Archive system</span>
            <span>Collection 08</span>
            <span>Local catalogue</span>
            <span>Ready</span>
          </div>
        )}

        <article className="exhibit-body">
          {interest.modules.map((module) => <ExhibitModule module={module} key={module.id} />)}
        </article>

        <section className="related-interests" aria-labelledby="related-title">
          <div className="related-heading">
            <p className="eyebrow">Passages</p>
            <h2 id="related-title">Related interests</h2>
          </div>
          <div className="related-list">
            {related.map((item) => (
              <Link to={`/interest/${item.slug}`} key={item.slug}>
                <span>{item.number}</span>
                <strong>{item.shortTitle ?? item.title}</strong>
                <small>{item.kicker}</small>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </section>

        <footer className="exhibit-footer">
          <div><CollectionMark /><span>Hunter’s Collection</span></div>
          <p>Last arranged · July 2026</p>
          <Link to="/">Return to the full collection ↑</Link>
        </footer>
      </main>
    </div>
  )
}
