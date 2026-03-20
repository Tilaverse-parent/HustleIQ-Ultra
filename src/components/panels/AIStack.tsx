import Callout from '@/components/ui/Callout'
import { AI_PIPELINE_COLS } from '@/lib/data'

export default function AIStack() {
  return (
    <section className="panel">
      <div className="section-header">
        <div className="section-tag">AI Intelligence</div>
        <div className="section-title">The HustleIQ Intelligence Engine</div>
      </div>

      <Callout>
        <strong>Core insight:</strong> The AI stack is HustleIQ&apos;s moat. Every user interaction
        trains the model. The longer HustleIQ operates, the more accurate and differentiated its
        intelligence becomes — making it <strong>exponentially harder to replicate</strong> over time.
      </Callout>

      <div className="grid-2" style={{ marginBottom: 24 }}>
        {/* HHS card */}
        <div className="card">
          <span className="card-icon">🎯</span>
          <div className="card-title">Hustle Health Score (HHS) — Proprietary</div>
          <div className="card-desc">
            A composite index computed across 5 dimensions using weighted ML models trained on real
            venture outcomes:
            <br /><br />
            • <strong style={{ color: 'var(--gold)' }}>Financial Health (30%)</strong> — Revenue
            trend, burn rate, profit margin
            <br />
            • <strong style={{ color: 'var(--electric)' }}>Market Momentum (25%)</strong> — Search
            trends, niche growth, competition velocity
            <br />
            • <strong style={{ color: 'var(--green)' }}>Operational Efficiency (20%)</strong> — Task
            completion rate, automation coverage
            <br />
            • <strong style={{ color: '#a988ff' }}>Founder Fitness (15%)</strong> — Consistency
            score, learning velocity, skill-gap index
            <br />
            • <strong style={{ color: 'var(--coral)' }}>Funding Readiness (10%)</strong> — Profile
            completeness, pitch strength, investor-fit score
          </div>

          {/* Score ring demo */}
          <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="hustle-score" style={{ width: '100%', maxWidth: 260 }}>
              <div className="score-ring">
                <div className="score-inner">
                  <div className="score-num">78</div>
                  <div className="score-max">/100</div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 2, textTransform: 'uppercase' }}>
                Strong Momentum
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>
                Updated in real-time
              </div>
            </div>
          </div>
          <span className="card-tag tag-gold">Proprietary Algorithm</span>
        </div>

        {/* Right column cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card">
            <span className="card-icon">🔮</span>
            <div className="card-title">Predictive Revenue Model</div>
            <div className="card-desc">
              Transformer-based time-series model (TFT architecture) fine-tuned on 2M+ hustle revenue
              trajectories. Produces 90-day income forecasts with confidence intervals. Achieves 84%
              accuracy on 30-day predictions in validation testing.
            </div>
            <span className="card-tag tag-cyan">Temporal Fusion Transformer</span>
          </div>

          <div className="card">
            <span className="card-icon">🕵️</span>
            <div className="card-title">Opportunity Intelligence Engine</div>
            <div className="card-desc">
              RAG pipeline over real-time web data (Reddit, Google Trends, Product Hunt, App stores,
              Marketplace listings). LLM scores each niche on Demand × Competition × Scalability
              matrix. Refreshed every 6 hours.
            </div>
            <span className="card-tag tag-purple">RAG + LLM Reasoning</span>
          </div>

          <div className="card">
            <span className="card-icon">💼</span>
            <div className="card-title">Funding Recommender</div>
            <div className="card-desc">
              Collaborative filtering model matching entrepreneur profiles to funding sources. Trained
              on 500K+ successful funding applications. Integrates with 2,000+ grant databases, 50+
              microloan programs, and angel investor networks.
            </div>
            <span className="card-tag tag-green">Collaborative Filtering</span>
          </div>
        </div>
      </div>

      {/* AI Pipeline */}
      <div className="section-header" style={{ marginTop: 40 }}>
        <div className="section-tag">AI Pipeline</div>
        <div className="section-title" style={{ fontSize: 22 }}>Data → Intelligence → Action</div>
      </div>

      <div className="arch-diagram">
        <div className="ai-pipeline-grid">
          {AI_PIPELINE_COLS.map((col) => (
            <div key={col.label}>
              <div className="pipeline-col-label">{col.label}</div>
              {col.nodes.map((node) => (
                <div key={node} className={`arch-node ${col.nodeClass} pipeline-node`}>
                  {node}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
