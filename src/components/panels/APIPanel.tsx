import ApiItem from '@/components/ui/ApiItem'
import Callout from '@/components/ui/Callout'
import { API_SECTIONS } from '@/lib/data'

export default function APIPanel() {
  return (
    <section className="panel">
      <div className="section-header">
        <div className="section-tag">API Design</div>
        <div className="section-title">RESTful + Streaming API Specification</div>
      </div>

      <Callout>
        <strong>API-First strategy</strong> is how HustleIQ achieves 10× distribution. Every
        partner, bank, and fintech can embed HustleIQ intelligence in 4 lines of code. The API is
        the product for the B2B tier.
      </Callout>

      {API_SECTIONS.map((section) => (
        <div key={section.label} style={{ marginBottom: 32 }}>
          <div className="api-section-label">{section.label}</div>
          {section.endpoints.map((ep) => (
            <ApiItem
              key={ep.path}
              method={ep.method}
              path={ep.path}
              description={ep.description}
            />
          ))}
        </div>
      ))}

      <div className="grid-2">
        <div className="card">
          <div className="card-title">Authentication</div>
          <div className="card-desc">
            JWT Bearer tokens for user sessions. API Keys (SK_live_xxx) for server-to-server B2B
            calls. OAuth2 for third-party integrations. All tokens scoped with minimal-privilege
            permissions. Rate limiting: 1,000 req/min free, 50,000 req/min Enterprise.
          </div>
          <span className="card-tag tag-cyan">OAuth2 + JWT + API Keys</span>
        </div>

        <div className="card gold-accent">
          <div className="card-title">Webhooks &amp; Events</div>
          <div className="card-desc">
            Subscribe to platform events: hustle.score.updated, opportunity.new_top10,
            revenue.milestone_hit, funding.match_found. Signed with HMAC-SHA256. Automatic retry
            with exponential backoff. Full event log in dashboard.
          </div>
          <span className="card-tag tag-gold">Event-Driven Webhooks</span>
        </div>
      </div>
    </section>
  )
}
