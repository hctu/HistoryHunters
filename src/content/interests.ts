import type { Interest } from './types'

const image = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`

export const interests: Interest[] = [
  {
    number: '01',
    slug: 'ming-qing-china',
    title: 'Ming & Qing China',
    kicker: 'Empire, ritual, art, and contradiction',
    deck: 'How immense states preserve order, cultivate beauty, and make their own fragility difficult to see.',
    status: 'Deep study · expanding',
    theme: 'paper',
    image: image('ming-qing.jpg'),
    imageAlt: 'A scholar’s table with a landscape scroll, porcelain brush washer, papers, and seal.',
    prominence: 'major',
    premise: 'I keep returning to the tension between the polished image of imperial order and the unruly human machinery required to sustain it.',
    modules: [
      {
        type: 'essay', id: 'why', label: 'Orientation', title: 'An empire of cultivated surfaces',
        body: [
          'The Ming and Qing dynasties can appear impossibly composed from a distance: the examination system, the court calendar, the city gates, the porcelain, the language of mandate and hierarchy. Up close, the picture becomes more interesting. Institutions overlap. Officials improvise. Local loyalties resist the clean diagram of the state.',
          'That gap—between the image of order and the practice of governing—is what holds me. The art is not a decorative escape from the politics. It is one of the places where authority, taste, memory, and private feeling negotiate with one another.',
        ],
        aside: 'Current question: when does refinement become a political technology?',
      },
      {
        type: 'figure', id: 'objects', label: 'Object lesson', title: 'The world arranged at arm’s length',
        image: image('ming-qing.jpg'), alt: 'Landscape scroll and scholar’s objects on a dark wooden table.',
        caption: 'A generated study image—not a historical artifact—used here to establish the material language of the exhibit.',
        body: 'A scholar’s table is a useful scale for approaching the period. Inkstone, seal, brush, paper, and collected object make a small theatre of discernment. Private taste and public identity meet here.',
      },
      {
        type: 'timeline', id: 'turning-points', label: 'Working chronology', title: 'Four turns I keep circling',
        items: [
          { date: '1368', title: 'A native dynasty begins', detail: 'The Ming replaces the Yuan and rebuilds an idea of Chinese imperial order.' },
          { date: '1420', title: 'The capital at Beijing', detail: 'Court ritual, architecture, defense, and logistics converge in a monumental center.' },
          { date: '1644', title: 'A rupture, then a translation', detail: 'The Qing conquest creates a new dynasty that must rule through both difference and continuity.' },
          { date: '1793', title: 'Macartney at Qianlong’s court', detail: 'Two imperial systems meet and read the encounter through incompatible assumptions.' },
        ],
      },
      {
        type: 'quote', id: 'question', quote: 'What if the archive is not the empire remembered, but the empire performing memory?',
        note: 'A question in the margin of my current reading.',
      },
      {
        type: 'ledger', id: 'reading', label: 'Reading table', title: 'Open on the desk',
        items: [
          { meta: 'Theme', title: 'The late imperial state', detail: 'Bureaucracy, information, distance, and improvisation.' },
          { meta: 'Theme', title: 'Material culture', detail: 'Objects as social arguments rather than isolated masterpieces.' },
          { meta: 'Question', title: 'The politics of leisure', detail: 'Who was permitted withdrawal, taste, and cultivated idleness?' },
        ],
      },
    ],
    related: ['japanese-history-aesthetics', 'history-hunters', 'royal-navy'],
  },
  {
    number: '02',
    slug: 'not-a-human',
    title: 'No, I’m Not a Human',
    kicker: 'A game, a threshold, a test you cannot trust',
    deck: 'Domestic horror built from hospitality, suspicion, and the terrible cost of being wrong.',
    status: 'Active obsession',
    theme: 'night',
    image: image('not-human.jpg'),
    imageAlt: 'A dark domestic hallway with a closed door and an old television glowing in the next room.',
    imagePosition: 'center',
    prominence: 'feature',
    premise: 'The horror works because the door is ordinary. Every visitor asks for a human judgment from a person who no longer trusts their own.',
    modules: [
      {
        type: 'essay', id: 'why', label: 'Why it stays', title: 'The violence of making a category',
        body: [
          'The game’s central question sounds like detection: who is human? But the more unsettling question is what certainty does to the person demanding it. A home becomes a border checkpoint. Hospitality becomes evidence. A face becomes a collection of suspicious details.',
          'I am interested in horror that makes attention itself dangerous. You look harder, gather more clues, become more competent—and perhaps become less humane in exactly the same motion.',
        ],
        aside: 'The room is safe only while the door remains closed. The room is a prison for exactly the same reason.',
      },
      {
        type: 'figure', id: 'threshold', label: 'Threshold study', title: 'The door is the whole machine',
        image: image('not-human.jpg'), alt: 'A dim hallway and closed door lit by an old television.',
        caption: 'An original atmospheric study for this exhibit; no game imagery is reproduced.',
        body: 'A closed door divides the known from the merely claimed. The important action happens before it opens: listening, imagining, rehearsing a decision.',
      },
      {
        type: 'notes', id: 'notes', label: 'Field notes', title: 'Things the game makes strange',
        notes: [
          { mark: 'A', text: 'The face as unreliable document.' },
          { mark: 'B', text: 'Hospitality as a finite resource.' },
          { mark: 'C', text: 'The way repetition turns a home into procedure.' },
          { mark: 'D', text: 'How quickly “careful” and “cruel” begin to share a silhouette.' },
        ],
      },
      {
        type: 'quote', id: 'question', quote: 'If every sign can be imitated, what is suspicion actually measuring?',
        note: 'The question beneath the mechanics.',
      },
    ],
    related: ['dnd-campaign', 'current-listening', 'history-hunters'],
  },
  {
    number: '03',
    slug: 'dnd-campaign',
    title: 'The Orison Chronicle',
    shortTitle: 'Dungeons & Dragons',
    kicker: 'Campaign archive · maps, factions, and consequences',
    deck: 'A world built less from lore than from the records left behind when people make costly choices.',
    status: 'Living world · in play',
    theme: 'campaign',
    image: image('dnd-campaign.jpg'),
    imageAlt: 'A candlelit campaign table covered in a hand-drawn map, letters, journals, and small metal figures.',
    prominence: 'feature',
    premise: 'The campaign becomes real when its history stops waiting for the players and starts answering them.',
    modules: [
      {
        type: 'essay', id: 'campaign', label: 'Campaign brief', title: 'Orison remembers what you did',
        body: [
          'I want the setting to feel recorded rather than explained. A decree contradicts a folk song. A map uses the victor’s names. A saint’s official biography omits the village that still hates her. The players discover the world by handling its competing versions of itself.',
          'This also keeps worldbuilding honest. A detail matters because someone in the world needs it, fears it, taxes it, worships it, or has lied about it—not because it fills an encyclopedia entry.',
        ],
        aside: 'Campaign principle: every piece of lore should create a decision or complicate one.',
      },
      {
        type: 'figure', id: 'map-room', label: 'Map room', title: 'The realm as an argument',
        image: image('dnd-campaign.jpg'), alt: 'A fantasy campaign map surrounded by wax-sealed letters and field journals.',
        caption: 'The table is composed as a working archive, not a reliquary. Things have been moved because the world is in motion.',
        body: 'Borders on the campaign map are claims. Roads reveal what power can reach. Blank space is rarely empty; it is usually a confession by the cartographer.',
      },
      {
        type: 'ledger', id: 'factions', label: 'Faction register', title: 'Powers presently in motion',
        items: [
          { meta: 'Crown', title: 'The Regency of Glass', detail: 'Legitimate on paper, brittle in practice, and running out of heirs.' },
          { meta: 'Order', title: 'The Lantern Synod', detail: 'Keeps the roads safe and decides which stories count as miracles.' },
          { meta: 'League', title: 'The Salt Parliament', detail: 'Merchant families who discovered that logistics can embarrass armies.' },
          { meta: 'Rumor', title: 'The Choir Below', detail: 'Either a buried religion or a name used to make disappearances seem meaningful.' },
        ],
      },
      {
        type: 'timeline', id: 'chronicle', label: 'Recent chronicle', title: 'What the table now remembers',
        items: [
          { date: 'I', title: 'The false saint', detail: 'A reliquary is opened; the body inside is not the one named on the silver.' },
          { date: 'II', title: 'The winter road', detail: 'A treaty reaches the capital three days after the envoy who carried it is declared dead.' },
          { date: 'III', title: 'A crown in escrow', detail: 'The party learns that a coronation can be postponed by owning the right bridge.' },
        ],
      },
    ],
    related: ['not-a-human', 'history-hunters', 'ming-qing-china'],
  },
  {
    number: '04',
    slug: 'history-hunters',
    title: 'History Hunters',
    kicker: 'Discovery, evidence, and the stories objects refuse to tell cleanly',
    deck: 'The pleasure of following a clue until the original question has become something stranger.',
    status: 'Field notes · intermittent',
    theme: 'field',
    prominence: 'standard',
    premise: 'Research is most alive when an object resists the story I hoped it would confirm.',
    modules: [
      {
        type: 'essay', id: 'method', label: 'Method', title: 'Begin with the stubborn detail',
        body: [
          'A date that does not fit, a uniform worn incorrectly, a name crossed out twice: small resistance is often more productive than grand mystery. It forces the research to become specific.',
          'History Hunters is where I keep those pursuits. Some become essays. Some end as a corrected caption and a better question. Both outcomes count.',
        ],
        aside: 'Rule of the hunt: record what would disprove the attractive theory.',
      },
      {
        type: 'ledger', id: 'cases', label: 'Open cases', title: 'On the evidence table',
        items: [
          { meta: 'Photograph', title: 'The absent person at the edge', detail: 'A group portrait with one chair turned deliberately away.' },
          { meta: 'Map', title: 'A road that existed for six months', detail: 'Built for an expedition, erased by weather, retained in memory.' },
          { meta: 'Object', title: 'The medal with no campaign', detail: 'Official form, unofficial inscription, uncertain recipient.' },
        ],
      },
      {
        type: 'notes', id: 'principles', label: 'Working rules', title: 'Evidence before atmosphere',
        notes: [
          { mark: '01', text: 'A compelling story is a hypothesis, not a conclusion.' },
          { mark: '02', text: 'Provenance is part of the object.' },
          { mark: '03', text: 'Absence can be meaningful; it can also be ordinary loss.' },
        ],
      },
    ],
    related: ['royal-navy', 'ming-qing-china', 'dnd-campaign'],
  },
  {
    number: '05',
    slug: 'royal-navy',
    title: 'The Royal Navy After Supremacy',
    shortTitle: 'The Royal Navy',
    kicker: 'Ships, institutions, and the management of decline',
    deck: 'Not a story of one defeat, but of an institution learning that inherited scale is not the same as present power.',
    status: 'Research dossier · expanding',
    theme: 'naval',
    image: image('royal-navy.jpg'),
    imageAlt: 'A naval architect’s table with a warship blueprint, old fleet photograph, folders, and a brass instrument.',
    prominence: 'standard',
    premise: 'Decline becomes intellectually useful when it stops being a morality play and becomes a series of constrained decisions.',
    modules: [
      {
        type: 'essay', id: 'brief', label: 'Research brief', title: 'When prestige becomes infrastructure',
        body: [
          'The Royal Navy’s decline is often narrated as a fall from greatness. That language hides the more difficult questions: what commitments could Britain still afford, which capabilities mattered, and how does an institution built around supremacy redefine competence?',
          'Ships are visible, but the deeper subject is institutional metabolism—dockyards, procurement, doctrine, alliances, fuel, labor, and the political uses of memory.',
        ],
        aside: 'A fleet is also a budget, a timetable, a labor system, and an argument about the future.',
      },
      {
        type: 'figure', id: 'documents', label: 'Document table', title: 'Power reduced to paper',
        image: image('royal-navy.jpg'), alt: 'Warship plans and archival folders on a dark desk.',
        caption: 'Generated exhibit imagery. The ship plan is atmospheric and should not be read as a technical source.',
        body: 'The plan promises control: every compartment known, every line specified. The surrounding files are a reminder that no ship exists outside competing requirements and institutional compromise.',
      },
      {
        type: 'timeline', id: 'turning-points', label: 'Pressure points', title: 'Supremacy becomes selection',
        items: [
          { date: '1918', title: 'Victory at maximum extension', detail: 'The world’s largest navy emerges from war carrying the cost of maintaining what it won.' },
          { date: '1922', title: 'Washington limits', detail: 'Treaty ratios turn naval power into negotiated arithmetic.' },
          { date: '1945', title: 'Victory in a different world', detail: 'The fleet is formidable; Britain’s financial and imperial position is not.' },
          { date: '1966', title: 'East of Suez reconsidered', detail: 'Global posture collides with economic constraint and changing alliances.' },
        ],
      },
      {
        type: 'ledger', id: 'dossier', label: 'Dossier', title: 'Questions under review',
        items: [
          { meta: 'Doctrine', title: 'What counts as a balanced fleet?', detail: 'A technical phrase that contains a political worldview.' },
          { meta: 'Industry', title: 'The dockyard as strategic memory', detail: 'Capacity can disappear long before a government admits it is gone.' },
          { meta: 'Culture', title: 'The burden of Trafalgar', detail: 'How a usable past can become an impossible standard.' },
        ],
      },
    ],
    related: ['history-hunters', 'ming-qing-china', 'japanese-history-aesthetics'],
  },
  {
    number: '06',
    slug: 'japanese-history-aesthetics',
    title: 'Japanese History & Aesthetics',
    kicker: 'Form, season, impermanence, and the danger of easy elegance',
    deck: 'Looking past the polished shorthand to the historical arguments inside aesthetic form.',
    status: 'Open folio · early notes',
    theme: 'japan',
    prominence: 'minor',
    premise: 'I am interested in how aesthetic restraint becomes legible only when its excesses, labor, and historical conditions remain visible.',
    modules: [
      {
        type: 'essay', id: 'orientation', label: 'Orientation', title: 'Against the mood board',
        body: [
          'Japanese aesthetics are especially vulnerable to being reduced to a handful of exportable adjectives: minimal, serene, imperfect. I want this folio to resist that flattening.',
          'The more interesting task is to ask who made a form, for whom, under which rules, and what alternative forms existed beside it. Beauty becomes richer when it regains its arguments.',
        ],
      },
      {
        type: 'ledger', id: 'threads', label: 'Threads', title: 'Subjects waiting to grow',
        items: [
          { meta: 'Architecture', title: 'The room as a sequence of permissions' },
          { meta: 'Print', title: 'Repetition, commerce, and the circulating image' },
          { meta: 'Season', title: 'Nature as calendar, convention, and social knowledge' },
        ],
      },
    ],
    related: ['ming-qing-china', 'current-listening', 'history-hunters'],
  },
  {
    number: '07',
    slug: 'current-listening',
    title: 'Current Listening',
    kicker: 'A rotating shelf, not a ranked canon',
    deck: 'Music that has altered the temperature of the week, kept with the circumstances in which it arrived.',
    status: 'Changed often · July 2026',
    theme: 'listening',
    prominence: 'minor',
    premise: 'I remember music more clearly when I keep the room, weather, walk, or hour attached to it.',
    modules: [
      {
        type: 'essay', id: 'method', label: 'Listening note', title: 'Keep the circumstance',
        body: [
          'This is not a favorites list. It is a record of temporary gravity: the pieces I replay because they make an ordinary walk feel newly edited, or because they articulate a mood I had only noticed as weather.',
          'Entries will leave the shelf. Their disappearance is part of the record.',
        ],
      },
      {
        type: 'ledger', id: 'rotation', label: 'In rotation', title: 'Four listening conditions',
        items: [
          { meta: 'Late', title: 'Music for one lamp left on', detail: 'Sparse arrangements; the room remains audible.' },
          { meta: 'Transit', title: 'A score for looking out of trains', detail: 'Forward motion without triumph.' },
          { meta: 'Work', title: 'Repetition with a pulse beneath it', detail: 'Enough pattern to hold attention, not demand it.' },
          { meta: 'Weather', title: 'Songs that improve in rain', detail: 'A category too useful to defend.' },
        ],
      },
      {
        type: 'quote', id: 'margin', quote: 'A listening diary should preserve the listener, not merely inventory the sound.',
        note: 'Working principle for this page.',
      },
    ],
    related: ['not-a-human', 'japanese-history-aesthetics', 'dnd-campaign'],
  },
]

export const getInterest = (slug: string) => interests.find((interest) => interest.slug === slug)
