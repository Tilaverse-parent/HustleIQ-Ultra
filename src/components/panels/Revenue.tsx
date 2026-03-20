import StatBlock from '@/components/ui/StatBlock'
import Callout from '@/components/ui/Callout'
import { REVENUE_STATS, REVENUE_STREAMS } from '@/lib/data'

export default function Revenue() {
  return (
    <section className="panel">
      <div className="section-header">
        <div className="section-tag">Revenue Engine</div>
        <div className="section-title">6-Stream Revenue Architecture</div>
      </div>

      <div className="grid-4" style={{ marginBottom: 30 }}>
        {REVENUE_STATS.map((s) => (
          <StatBlock key={s.label} value={s.value} label={s.label} valueClass={s.cls} />
        ))}
      </div>

      <table className="rev-table">
        <thead>
          <tr>
            <th>Revenue Stream</th>
            <th>Model</th>
            <th>Year 1 Target</th>
            <th>Year 3 Target</th>
            <th>Year 5 Target</th>
            <th>Revenue Potential</th>
          </tr>
        </thead>
        <tbody>
          {REVENUE_STREAMS.map((stream) => (
            <tr key={stream.name}>
              <td>
                <span className="tier-name" style={{ color: stream.nameColor }}>
                  {stream.name}
                </span>
                <br />
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>{stream.sub}</span>
              </td>
              <td>
                <span className={`card-tag ${stream.tagClass}`} style={{ margin: 0 }}>
                  {stream.tag}
                </span>
              </td>
              <td>{stream.y1}</td>
              <td>{stream.y3}</td>
              <td>{stream.y5}</td>
              <td>
                <div
                  className="rev-bar"
                  style={{ width: stream.barWidth, ...stream.barStyle }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Callout gold>
        <strong>Path to $10B Valuation:</strong> Year 5 total ARR ~$1.7B across all streams. At 6×
        ARR multiple (conservative for AI infrastructure) = <strong>$10.2B.</strong> The funding
        marketplace alone, at scale, is a generational business — Stripe processes $1T/year at 2.9%
        rake. HustleIQ routes $50B in entrepreneurial capital at 1% ={' '}
        <strong>$500M/year from one stream.</strong>
      </Callout>
    </section>
  )
}
