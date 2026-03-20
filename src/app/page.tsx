'use client'

import { useState } from 'react'
import { TABS, type TabId } from '@/lib/tabs'
import Header from '@/components/Header'
import TabNav from '@/components/TabNav'
import Footer from '@/components/Footer'
import Overview from '@/components/panels/Overview'
import Architecture from '@/components/panels/Architecture'
import AIStack from '@/components/panels/AIStack'
import Modules from '@/components/panels/Modules'
import APIPanel from '@/components/panels/APIPanel'
import Revenue from '@/components/panels/Revenue'
import Moat from '@/components/panels/Moat'
import Roadmap from '@/components/panels/Roadmap'

const PANEL_MAP: Record<TabId, React.ReactNode> = {
  overview:     <Overview />,
  architecture: <Architecture />,
  'ai-stack':   <AIStack />,
  modules:      <Modules />,
  api:          <APIPanel />,
  revenue:      <Revenue />,
  moat:         <Moat />,
  roadmap:      <Roadmap />,
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  return (
    <>
      <Header />
      <TabNav
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={(id) => {
          setActiveTab(id)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />
      <main>{PANEL_MAP[activeTab]}</main>
      <Footer />
    </>
  )
}
