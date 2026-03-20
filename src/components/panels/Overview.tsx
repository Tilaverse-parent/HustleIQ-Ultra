import Card from '@/components/ui/Card'
import StatBlock from '@/components/ui/StatBlock'
import Callout from '@/components/ui/Callout'
import { OVERVIEW_STATS, OVERVIEW_CARDS } from '@/lib/data'

export default function Overview() {
  return (
    <section className="panel">
      <div className="section-header">
        <div className="section-tag">Overview</div>
        <div className="section-title">What Makes HustleIQ a $10B Company</div>
      </div>

      <Callout gold>
        <strong>Thesis:</strong> HustleIQ is not a productivity tool. It is the world&apos;s first{' '}
        <strong>Entrepreneurial Operating System (EOS)</strong> — a data infrastructure layer for 1.1
        billion gig workers, freelancers, and micro-founders who collectively generate{' '}
        <strong>$5.4 trillion</strong> annually, yet remain entirely underserved by enterprise-grade
        intelligence.
      </Callout>

      <div className="grid-4" style={{ marginBottom: 30 }}>
        {OVERVIEW_STATS.map((s) => (
          <StatBlock key={s.label} value={s.value} label={s.label} valueClass={s.cls} />
        ))}
      </div>

      <div className="grid-3">
        {OVERVIEW_CARDS.map((c) => (
          <Card
            key={c.title}
            icon={c.icon}
            title={c.title}
            description={c.desc}
            tag={c.tag}
            tagClass={c.tagClass}
          />
        ))}
      </div>

      <Callout style={{ marginTop: 30 }}>
        <strong>Comparable companies:</strong> Bloomberg Terminal ($6B ARR, $60B valuation) serves
        330K professionals. HustleIQ&apos;s addressable base is 3,300× larger at 1.1B users. Even at
        2% penetration with $50/user/year = <strong>$1.1B ARR</strong>. At 15× ARR multiple ={' '}
        <strong>$16.5B valuation</strong>.
      </Callout>
    </section>
  )
}
