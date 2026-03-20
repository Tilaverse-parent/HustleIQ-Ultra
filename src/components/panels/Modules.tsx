import { MODULES } from '@/lib/data'

export default function Modules() {
  return (
    <section className="panel">
      <div className="section-header">
        <div className="section-tag">Product Modules</div>
        <div className="section-title">6 Core Intelligence Modules</div>
      </div>

      <div className="grid-2">
        {/* Module 1 — custom layout with sample output */}
        <div className="card">
          <span className="card-icon">🧭</span>
          <div className="card-title">MODULE 1 — Opportunity Intelligence Engine</div>
          <div className="card-desc">
            Continuously scans 20+ data sources for emerging profitable niches. Scores each
            opportunity across 4 dimensions and surfaces the top 10 personalized to each user&apos;s
            skills, budget, and goals.
            <br /><br />
            <strong style={{ color: 'var(--white)', fontSize: 11, fontFamily: 'var(--font-mono)' }}>
              Sample Output:
            </strong>
            <br /><br />
            <div
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 3,
                padding: 14,
                fontSize: 11,
                lineHeight: 2,
              }}
            >
              <span style={{ color: 'var(--electric)' }}>Opportunity:</span> AI Resume Optimization Service
              <br />
              <span style={{ color: 'var(--gold)' }}>Demand Score:</span> 8.7&nbsp;&nbsp;
              <span style={{ color: 'var(--green)' }}>Revenue Potential:</span> High
              <br />
              <span style={{ color: 'var(--coral)' }}>Competition:</span> 5.2&nbsp;&nbsp;
              <span style={{ color: '#a988ff' }}>Startup Difficulty:</span> Medium
            </div>
          </div>
          <span className="card-tag tag-cyan">RAG + Real-Time Scoring</span>
        </div>

        {/* Module 2 */}
        <div className="card">
          <span className="card-icon">📐</span>
          <div className="card-title">MODULE 2 — Business Model Generator</div>
          <div className="card-desc">
            Takes any raw idea and generates a complete business model canvas in 90 seconds. Powered
            by Claude with structured output enforcement (Pydantic schemas). Produces investor-grade
            business frameworks.
            <br /><br />
            <strong style={{ color: 'var(--white)', fontSize: 11 }}>Outputs:</strong> Value
            proposition, pricing strategy, monetization model, MVP definition, go-to-market plan,
            12-month revenue projection, and competitor analysis.
          </div>
          <span className="card-tag tag-gold">LLM + Structured Output</span>
        </div>

        {/* Module 3 */}
        <div className="card">
          <span className="card-icon">🗺️</span>
          <div className="card-title">MODULE 3 — Hustle Strategy Engine</div>
          <div className="card-desc">
            Personalized strategy generation based on user&apos;s capital, skills, and time
            availability. Produces a 30/60/90-day actionable execution roadmap with daily task
            breakdowns, prioritized by ROI.
            <br /><br />
            <strong style={{ color: 'var(--white)', fontSize: 11 }}>Input:</strong>{' '}
            &ldquo;I have $200 and 10 hours/week&rdquo;
            <br />
            <strong style={{ color: 'var(--electric)', fontSize: 11 }}>Output:</strong> Full launch
            strategy → MVP roadmap → first $1,000 plan
          </div>
          <span className="card-tag tag-purple">Agentic Planning</span>
        </div>

        {/* Module 4 — custom layout with sample output */}
        <div className="card">
          <span className="card-icon">📈</span>
          <div className="card-title">MODULE 4 — Revenue Optimization Engine</div>
          <div className="card-desc">
            Price elasticity modeling, conversion rate optimization, and profit scenario simulation.
            Trained on pricing data from 50,000+ successful digital businesses.
            <br /><br />
            <div
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 3,
                padding: 14,
                fontSize: 11,
                lineHeight: 2,
              }}
            >
              <span style={{ color: 'var(--gold)' }}>Recommended Price:</span> $19/month
              <br />
              <span style={{ color: 'var(--electric)' }}>Expected Conversion:</span> 3.2%
              <br />
              <span style={{ color: 'var(--green)' }}>Est. Monthly Revenue:</span> $18,000
            </div>
          </div>
          <span className="card-tag tag-green">Predictive Pricing ML</span>
        </div>

        {/* Module 5 */}
        <div className="card">
          <span className="card-icon">⚡</span>
          <div className="card-title">MODULE 5 — Automation Builder</div>
          <div className="card-desc">
            Visual workflow builder powered by n8n and Zapier integrations. AI suggests automation
            opportunities based on user&apos;s current manual tasks. One-click deployment of
            pre-built automation templates.
            <br /><br />
            <strong style={{ color: 'var(--white)', fontSize: 11 }}>Templates:</strong> Lead gen
            pipeline, email follow-up sequences, invoice automation, content scheduling, customer
            onboarding, payment recovery.
          </div>
          <span className="card-tag tag-coral">No-Code Automation</span>
        </div>

        {/* Module 6 */}
        <div className="card">
          <span className="card-icon">🖥️</span>
          <div className="card-title">MODULE 6 — Hustle Command Dashboard</div>
          <div className="card-desc">
            Single-screen entrepreneurial intelligence hub. Real-time Hustle Health Score, income
            trajectory, opportunity feed, task pipeline, and AI advisor chat — all unified in a
            Bloomberg-style terminal interface with dark theme and live data streams.
          </div>
          <span className="card-tag tag-cyan">Real-Time WebSocket UI</span>
        </div>
      </div>
    </section>
  )
}
