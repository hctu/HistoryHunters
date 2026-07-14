import { Link } from 'react-router-dom'
import { CollectionMark } from '../components/CollectionMark'
import { interests } from '../content/interests'
import type { Interest } from '../content/types'

function InterestTile({ interest }: { interest: Interest }) {
  const style = interest.image
    ? ({ '--tile-image': `url(${interest.image})`, '--tile-position': interest.imagePosition ?? 'center' } as React.CSSProperties)
    : undefined

  return (
    <Link
      className={`interest-tile interest-tile--${interest.prominence} interest-tile--${interest.theme}`}
      to={`/interest/${interest.slug}`}
      style={style}
      aria-label={`Enter exhibit ${interest.number}: ${interest.shortTitle ?? interest.title}`}
    >
      <span className="tile-surface" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-number">{interest.number}</span>
        <span className="tile-status">{interest.status}</span>
        <span className="tile-title">{interest.shortTitle ?? interest.title}</span>
        <span className="tile-deck">{interest.deck}</span>
        <span className="tile-enter">Enter exhibit <span aria-hidden="true">↗</span></span>
      </span>
    </Link>
  )
}

export function CollectionIndex() {
  const scrollToCollection = () => document.getElementById('collection-index')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="collection-page">
      <header className="collection-masthead">
        <nav className="masthead-nav" aria-label="Collection identity">
          <Link className="wordmark" to="/">
            <CollectionMark compact />
            <span><strong>Hunter’s Collection</strong><small>Private folio · Vol. I</small></span>
          </Link>
          <button type="button" onClick={scrollToCollection}>Index <span aria-hidden="true">↓</span></button>
        </nav>

        <div className="masthead-image" aria-hidden="true" />
        <div className="masthead-copy">
          <p className="folio-label">Currently occupying my mind</p>
          <h1>A collection of interests, obsessions, and unanswered questions.</h1>
          <p className="masthead-intro">Not a fixed portrait. More like a desk left open: subjects arrive, gather notes, interrupt one another, and sometimes disappear.</p>
          <button className="text-link" type="button" onClick={scrollToCollection}>Browse the current folios <span aria-hidden="true">↓</span></button>
        </div>
        <div className="masthead-notation" aria-hidden="true"><span>H</span><i /><small>MMXXVI</small></div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="collection-intro" id="collection-index" aria-labelledby="collection-title">
          <div>
            <p className="eyebrow">The present collection</p>
            <h2 id="collection-title">{interests.length} open folios</h2>
          </div>
          <p>Scale reflects present attention, not permanent importance. This arrangement will change.</p>
          <span className="collection-date">Recorded · 14 July 2026</span>
        </section>

        <section className="interest-composition" aria-label="Current interests">
          {interests.map((interest) => <InterestTile interest={interest} key={interest.slug} />)}
        </section>
      </main>

      <footer className="collection-footer">
        <p>This is a living collection,<br />not a final answer.</p>
        <CollectionMark />
        <p>Selected and arranged<br />by Hunter.</p>
      </footer>
    </div>
  )
}
