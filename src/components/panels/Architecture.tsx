import ArchLayer from '@/components/ui/ArchLayer'
import { ARCH_LAYERS } from '@/lib/data'

export default function Architecture() {
  return (
    <section className="panel">
      <div className="section-header">
        <div className="section-tag">Architecture</div>
        <div className="section-title">7-Layer System Architecture</div>
      </div>

      <div className="arch-diagram">
        {ARCH_LAYERS.map((layer) => (
          <ArchLayer
            key={layer.label}
            label={layer.label}
            labelColor={layer.labelColor}
            nodes={layer.nodes}
            nodeClass={layer.nodeClass}
            divider={layer.divider}
          />
        ))}
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title">Tech Stack Choices — Rationale</div>
          <div className="card-desc">
            <strong style={{ color: 'var(--electric)' }}>Next.js 14</strong> — App Router, Server
            Components, edge SSR for sub-100ms global loads.
            <br /><br />
            <strong style={{ color: 'var(--electric)' }}>FastAPI (Python)</strong> — Async-native,
            Pydantic validation, auto-OpenAPI docs, ML library compatibility.
            <br /><br />
            <strong style={{ color: 'var(--electric)' }}>ClickHouse</strong> — 1000× faster than
            Postgres for analytical queries on hustle metrics at scale.
            <br /><br />
            <strong style={{ color: 'var(--electric)' }}>Kafka</strong> — Decoupled services, replay
            capability, 100M+ events/day handling.
            <br /><br />
            <strong style={{ color: 'var(--electric)' }}>Pinecone</strong> — Semantic similarity
            search for opportunity matching across 50M+ business idea vectors.
          </div>
        </div>

        <div className="card gold-accent">
          <div className="card-title">Scalability Design Principles</div>
          <div className="card-desc">
            <strong style={{ color: 'var(--gold)' }}>Stateless Services</strong> — Every API pod is
            horizontally scalable with zero shared state.
            <br /><br />
            <strong style={{ color: 'var(--gold)' }}>Event-Driven Architecture</strong> — No
            synchronous chains. All cross-service communication via Kafka events.
            <br /><br />
            <strong style={{ color: 'var(--gold)' }}>CQRS Pattern</strong> — Separate read and write
            models. Analytics never contends with transactional writes.
            <br /><br />
            <strong style={{ color: 'var(--gold)' }}>Multi-Region Active-Active</strong> — US, EU,
            Africa, Asia-Pacific. &lt;50ms latency globally.
            <br /><br />
            <strong style={{ color: 'var(--gold)' }}>Zero-Trust Security</strong> — mTLS between all
            services. No implicit trust anywhere.
          </div>
        </div>
      </div>
    </section>
  )
}
