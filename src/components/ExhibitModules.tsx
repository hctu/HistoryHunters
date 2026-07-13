import type { EditorialModule } from '../content/types'

export function ExhibitModule({ module }: { module: EditorialModule }) {
  switch (module.type) {
    case 'essay':
      return (
        <section className="module module--essay" id={module.id}>
          <div className="module-heading">
            <p className="eyebrow">{module.label}</p>
            <h2>{module.title}</h2>
          </div>
          <div className="essay-copy">
            {module.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {module.aside && <aside className="margin-note"><span>In the margin</span>{module.aside}</aside>}
        </section>
      )

    case 'figure':
      return (
        <section className="module module--figure" id={module.id}>
          <div className="module-heading">
            <p className="eyebrow">{module.label}</p>
            <h2>{module.title}</h2>
          </div>
          <figure className="exhibit-figure">
            <div className="figure-image-wrap"><img src={module.image} alt={module.alt} loading="lazy" /></div>
            <figcaption><span>Fig.</span>{module.caption}</figcaption>
          </figure>
          {module.body && <p className="figure-body">{module.body}</p>}
        </section>
      )

    case 'quote':
      return (
        <section className="module module--quote" id={module.id}>
          <blockquote>
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>{module.quote}</p>
            {(module.attribution || module.note) && <footer>— {module.attribution ?? module.note}</footer>}
          </blockquote>
        </section>
      )

    case 'timeline':
      return (
        <section className="module module--timeline" id={module.id}>
          <div className="module-heading">
            <p className="eyebrow">{module.label}</p>
            <h2>{module.title}</h2>
          </div>
          <ol className="timeline">
            {module.items.map((item) => (
              <li key={`${item.date}-${item.title}`}>
                <span className="timeline-date">{item.date}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </li>
            ))}
          </ol>
        </section>
      )

    case 'ledger':
      return (
        <section className="module module--ledger" id={module.id}>
          <div className="module-heading">
            <p className="eyebrow">{module.label}</p>
            <h2>{module.title}</h2>
          </div>
          <div className="ledger">
            {module.items.map((item, index) => (
              <article key={`${item.meta}-${item.title}`}>
                <span className="ledger-number">{String(index + 1).padStart(2, '0')}</span>
                <p className="ledger-meta">{item.meta}</p>
                <h3>{item.title}</h3>
                {item.detail && <p>{item.detail}</p>}
              </article>
            ))}
          </div>
        </section>
      )

    case 'notes':
      return (
        <section className="module module--notes" id={module.id}>
          <div className="module-heading">
            <p className="eyebrow">{module.label}</p>
            <h2>{module.title}</h2>
          </div>
          <div className="notes-grid">
            {module.notes.map((note) => (
              <article key={note.mark}><span>{note.mark}</span><p>{note.text}</p></article>
            ))}
          </div>
        </section>
      )
  }
}
