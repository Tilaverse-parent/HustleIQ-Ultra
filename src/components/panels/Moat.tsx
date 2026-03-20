import Callout from '@/components/ui/Callout'
import { MOAT_ITEMS } from '@/lib/data'

export default function Moat() {
  return (
    <section className="panel">
      <div className="section-header">
        <div className="section-tag">Competitive Moat</div>
        <div className="section-title">7 Unfair Advantages That Make HustleIQ Unbeatable</div>
      </div>

      <div className="moat-grid">
        {MOAT_ITEMS.map((item) => (
          <div key={item.num} className="moat-item">
            <div className="moat-num">{item.num}</div>
            <div className="moat-text">
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout style={{ marginTop: 30 }}>
        <strong>Investor Narrative:</strong> &ldquo;We are building the credit infrastructure for
        the hustle economy. Just as FICO unlocked consumer lending and Bloomberg unlocked financial
        markets, HustleIQ&apos;s Hustle Health Score will unlock a{' '}
        <strong>$400B/year SME capital market</strong> that currently operates on intuition. This is
        not a productivity app. This is financial infrastructure.&rdquo;
      </Callout>
    </section>
  )
}
