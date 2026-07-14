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
    kicker: 'War, order, spirits, images, and reinvention',
    deck: 'From Sengoku and Tokugawa rule to modern Japan—and the myths, monsters, and images carried through those transformations.',
    status: 'History and image study · expanding',
    theme: 'japan',
    prominence: 'minor',
    premise: 'I am interested in how Japan repeatedly rebuilt authority and modernity while stories, spirits, objects, and visual traditions gave those changes another language.',
    modules: [
      {
        type: 'essay', id: 'orientation', label: 'Orientation', title: 'Four transformations, one continuing argument',
        body: [
          'The Sengoku, Tokugawa, Meiji, and Shōwa periods are often presented as distinct worlds: battlefield, castle town, factory, and modern metropolis. I want to follow the arguments that pass between them—who may wield violence, what makes rule legitimate, and how a state explains sudden change as continuity.',
          'This is not a march from feudalism to modernity. Each settlement creates new forms of order and new exclusions. The interest lies in what survives a transformation, what is deliberately reinvented, and what later memory smooths away.',
        ],
        aside: 'Current question: how often does political reinvention succeed by presenting itself as restoration?',
      },
      {
        type: 'timeline', id: 'periods', label: 'Period table', title: 'Four rooms in the historical sequence',
        items: [
          { date: '1467–1615', title: 'Sengoku', detail: 'Civil war, regional power, castle building, religious leagues, and the long work of reunification.' },
          { date: '1603–1868', title: 'Tokugawa shogunate', detail: 'A durable military government turns peace into administration, hierarchy, travel, commerce, and urban culture.' },
          { date: '1868–1912', title: 'Meiji', detail: 'Restoration becomes revolution: centralization, industrialization, conscription, constitutional government, and empire.' },
          { date: '1926–1989', title: 'Shōwa', detail: 'Militarism, total war, defeat, occupation, rapid growth, and an unresolved struggle over historical memory.' },
        ],
      },
      {
        type: 'ledger', id: 'questions', label: 'Research threads', title: 'Questions across the periods',
        items: [
          { meta: 'Authority', title: 'From warrior household to governing system', detail: 'How personal military loyalty becomes bureaucracy, law, and public order.' },
          { meta: 'Exchange', title: 'Beyond the myth of isolation', detail: 'Managed foreign contact, imported knowledge, and the political meaning of the boundary.' },
          { meta: 'Modernity', title: 'Reform at imperial speed', detail: 'How institutions, industry, military power, and imperial ambition become mutually reinforcing.' },
          { meta: 'Memory', title: 'Who owns the Shōwa past?', detail: 'Defeat and prosperity sit beside incompatible accounts of responsibility and loss.' },
        ],
      },
      {
        type: 'essay', id: 'myth-and-image', label: 'Myth & image', title: 'The historical life of the supernatural',
        body: [
          'Yōkai, oni, yūrei, and other supernatural beings do not sit outside history. Court chronicles, Buddhist cosmology, shrine traditions, local stories, theatre, woodblock print, illustrated catalogues, and modern media continually rename and redesign them.',
          'That movement is what interests me. A spirit changes when it leaves oral tradition for an illustrated scroll, enters an Edo-period bestiary, becomes a mass-produced print, or returns through film and games. The creature survives, but the social work performed by its image changes.',
        ],
        aside: 'Working rule: trace the image and its historical moment before treating a being as timeless folklore.',
      },
      {
        type: 'ledger', id: 'bestiary', label: 'Image bestiary', title: 'Beings at the boundary',
        items: [
          { meta: 'Yōkai', title: 'The strange made particular', detail: 'Uncanny phenomena, transformed animals, animated objects, and local presences gathered under an intentionally unstable category.' },
          { meta: 'Oni', title: 'Punishment, disorder, and dangerous difference', detail: 'Demonic bodies that can represent hell, disease, outsiders, or forces brought under ritual control.' },
          { meta: 'Yūrei', title: 'The dead with unfinished claims', detail: 'Ghosts whose attachments, wrongs, or improper deaths disturb the expected separation between worlds.' },
          { meta: 'Tsukumogami', title: 'Material memory becomes animate', detail: 'Tools and possessions imagined as living after great age—a mythology of use, neglect, and the moral life of objects.' },
        ],
      },
      {
        type: 'notes', id: 'afterlife-art', label: 'Image cabinet', title: 'Death and the supernatural on paper',
        notes: [
          { mark: 'I', text: 'Jigoku-zōshi, the Hell Scrolls: punishment arranged as a landscape the living can inspect.' },
          { mark: 'II', text: 'Gaki-zōshi, the Scrolls of Hungry Ghosts: appetite and suffering given emaciated, unsettling form.' },
          { mark: 'III', text: 'Hyakki yagyō, the Night Parade of One Hundred Demons: a bestiary transformed into procession and social space.' },
          { mark: 'IV', text: 'Edo illustrated encyclopedias: the supernatural collected, named, standardized, and playfully redesigned through print.' },
        ],
      },
    ],
    related: ['ming-qing-china', 'royal-navy', 'digital-museum'],
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
  {
    number: '08',
    slug: 'digital-museum',
    title: 'The Digital Museum',
    kicker: 'Old machines, lost software, and environments made usable again',
    deck: 'A curated, playable archive of the digital worlds I grew up with—preserved on original hardware where possible.',
    status: 'Living archive · under construction',
    theme: 'digital',
    prominence: 'minor',
    premise: 'I want to preserve old hardware, software, games, operating systems, and websites as experiences—not just screenshots or files—before their original contexts disappear.',
    modules: [
      {
        type: 'essay', id: 'mission', label: 'Museum brief', title: 'Keep the experience, not only the evidence',
        body: [
          'The Digital Museum is my private technology-preservation project: a curated collection of old hardware, software, games, operating systems, and web experiences, especially from the Apple ecosystem and the 2000s through the early 2010s. The goal is to keep them genuinely usable rather than merely documented.',
          'This is not a random ROM dump or a gigantic drive labeled “OLD STUFF.” The museum part means selection and context. Each object should have the right version, artwork, dates, description, metadata, and—ideally—a clean way to launch it and understand why it belongs here.',
        ],
        aside: 'Acquisition rule: an artifact enters the collection with provenance, context, and a path back to use.',
      },
      {
        type: 'essay', id: 'original-hardware', label: 'Primary objects', title: 'Original hardware is part of the source',
        body: [
          'Full iOS emulation is awkward and often inauthentic. An actual iPhone 4, 5, or 5s preserves the interface, speed, touchscreen response, app behavior, battery assumptions, and limitations of its period. The friction is not incidental; it is part of what the software was.',
          'Period-appropriate iOS versions, preserved IPSWs, Legacy iOS Kit, jailbreaks, and carefully chosen downgrades make the device timeline usable. The point is not simply to own old phones. It is to keep complete relationships between hardware, operating system, application, and moment.',
        ],
        aside: 'Real UI. Real hardware. Real limitations. That is the artifact.',
      },
      {
        type: 'ledger', id: 'collection', label: 'Collection wings', title: 'What the museum preserves',
        items: [
          { meta: 'Apple timeline', title: 'iPhone, iPod, Mac, and period software', detail: 'Original devices on appropriate iOS versions, Snow Leopard-era environments, old Xcode releases, iOS SDKs, firmware, manuals, and box art.' },
          { meta: 'Lost applications', title: 'Delisted games and archived IPA files', detail: 'Applications preserved with version data, artwork, descriptions, dependencies, and a working local installation path where possible.' },
          { meta: 'Games', title: 'Flash, Wii, DS, 3DS, Xbox, and arcade', detail: 'A selective playable collection organized around experiences worth returning to, not completion for its own sake.' },
          { meta: 'Systems & web', title: 'Windows XP through 7 and the vanished web', detail: 'Old desktop environments, SWF files, archived websites, and reconstructions accessed through Wayback-style proxies.' },
        ],
      },
      {
        type: 'notes', id: 'catalogue-standard', label: 'Accession standard', title: 'What makes a folder into a museum object',
        notes: [
          { mark: '01', text: 'Correct version: firmware, application build, operating system, and compatible hardware are recorded together.' },
          { mark: '02', text: 'Context: release dates, developer, contemporary description, manuals, artwork, and the story of disappearance.' },
          { mark: '03', text: 'Integrity: original files remain untouched while working copies, patches, and restoration notes are kept separately.' },
          { mark: '04', text: 'Access: every preserved experience should have the clearest practical route from catalogue entry to launch.' },
        ],
      },
      {
        type: 'ledger', id: 'museum-system', label: 'Museum system', title: 'Archive, laboratory, and gallery',
        items: [
          { meta: 'Original artifacts', title: 'The physical device timeline', detail: 'Phones, music players, computers, consoles, media, packaging, and peripherals kept in usable condition.' },
          { meta: 'Preservation store', title: 'The canonical archive', detail: 'Firmware, software, checksums, metadata, documentation, artwork, and untouched source files.' },
          { meta: 'Modern laboratory', title: 'The M3 Mac as conservation bench', detail: 'The present-day machine used to organize, emulate, repair, convert, test, and document the collection.' },
          { meta: 'Public face', title: 'A television or Raspberry Pi terminal', detail: 'A deliberately simple museum interface that makes the collection browsable and launches prepared experiences.' },
        ],
      },
      {
        type: 'quote', id: 'definition', quote: 'A curated, playable archive of the digital environments I grew up with—preserved on original devices where possible and emulated or reconstructed where necessary.',
        note: 'The clearest definition of the project.',
      },
    ],
    related: ['current-listening', 'not-a-human', 'history-hunters'],
  },
]

export const getInterest = (slug: string) => interests.find((interest) => interest.slug === slug)
