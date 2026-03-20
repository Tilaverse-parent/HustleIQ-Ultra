export type TabId =
  | 'overview'
  | 'architecture'
  | 'ai-stack'
  | 'modules'
  | 'api'
  | 'revenue'
  | 'moat'
  | 'roadmap'

export const TABS: { id: TabId; label: string }[] = [
  { id: 'overview',     label: 'Overview' },
  { id: 'architecture', label: 'System Architecture' },
  { id: 'ai-stack',     label: 'AI Intelligence Stack' },
  { id: 'modules',      label: 'Core Modules' },
  { id: 'api',          label: 'API Design' },
  { id: 'revenue',      label: 'Revenue Engine' },
  { id: 'moat',         label: '$10B Moat Strategy' },
  { id: 'roadmap',      label: 'Execution Roadmap' },
]
