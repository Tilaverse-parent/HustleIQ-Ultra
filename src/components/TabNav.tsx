import type { TabId } from '@/lib/tabs'

interface TabNavProps {
  tabs: { id: TabId; label: string }[]
  activeTab: TabId
  onTabChange: (id: TabId) => void
}

export default function TabNav({ tabs, activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
