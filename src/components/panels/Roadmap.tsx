import Callout from '@/components/ui/Callout'
import { ROADMAP_PHASES } from '@/lib/data'

export default function Roadmap() {
  return (
    <section className="panel">
      <div className="section-header">
        <div className="section-tag">Execution Roadmap</div>
        <div className="section-title">From 0 → $10B in 60 Months</div>
      </div>

      <div className="timeline">
        {ROADMAP_PHASES.map((phase) => (
          <div key={phase.phase} className="timeline-item">
            <div
              className="timeline-dot"
              style={{ background: phase.dot, color: phase.dot }}
            />
            <div className="timeline-phase">{phase.phase}</div>
            <div className="timeline-title">{phase.title}</div>
            <ul className="timeline-items">
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Callout gold style={{ marginTop: 20 }}>
        <strong>The $10B unlock moment</strong> comes when HustleIQ is embedded in the first G20
        national SME program. That single contract — a government deploying HustleIQ as national
        entrepreneurial infrastructure for 50M citizens — is worth $500M in revenue and signals to
        the market that HustleIQ is{' '}
        <strong>category-defining infrastructure, not just a product.</strong>
      </Callout>
    </section>
  )
}
