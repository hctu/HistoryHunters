export type ThemeName = 'paper' | 'night' | 'campaign' | 'naval' | 'field' | 'japan' | 'listening' | 'mythology'

export type EssayModule = {
  type: 'essay'
  id: string
  label: string
  title: string
  body: string[]
  aside?: string
}

export type QuoteModule = {
  type: 'quote'
  id: string
  quote: string
  attribution?: string
  note?: string
}

export type FigureModule = {
  type: 'figure'
  id: string
  label: string
  title: string
  image: string
  alt: string
  caption: string
  body?: string
}

export type TimelineModule = {
  type: 'timeline'
  id: string
  label: string
  title: string
  items: { date: string; title: string; detail: string }[]
}

export type LedgerModule = {
  type: 'ledger'
  id: string
  label: string
  title: string
  items: { meta: string; title: string; detail?: string }[]
}

export type NotesModule = {
  type: 'notes'
  id: string
  label: string
  title: string
  notes: { mark: string; text: string }[]
}

export type EditorialModule = EssayModule | QuoteModule | FigureModule | TimelineModule | LedgerModule | NotesModule

export type Interest = {
  number: string
  slug: string
  title: string
  shortTitle?: string
  kicker: string
  deck: string
  status: string
  theme: ThemeName
  image?: string
  imageAlt?: string
  imagePosition?: string
  prominence: 'major' | 'feature' | 'standard' | 'minor'
  premise: string
  modules: EditorialModule[]
  related: string[]
}
