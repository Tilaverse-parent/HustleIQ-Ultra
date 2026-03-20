// ── ARCHITECTURE ──────────────────────────────────────────────────────────────

export const ARCH_LAYERS = [
  {
    label: 'CLIENT',
    labelColor: '#00e5ff',
    nodeClass: 'node-cyan',
    nodes: ['Web App (Next.js 14)', 'Mobile iOS / Android', 'Browser Extension', 'API Consumers', 'Embedded Widgets'],
    divider: '↓ HTTPS / WebSocket / gRPC',
  },
  {
    label: 'EDGE',
    labelColor: '#a988ff',
    nodeClass: 'node-purple',
    nodes: ['Cloudflare CDN + WAF', 'API Gateway (Kong)', 'Rate Limiter', 'Auth (JWT + OAuth2)'],
    divider: '↓ Internal Service Mesh (Istio)',
  },
  {
    label: 'SERVICES',
    labelColor: '#f5c842',
    nodeClass: 'node-gold',
    nodes: ['Opportunity Engine API', 'Business Model API', 'Strategy Engine API', 'Revenue Optimizer API', 'Funding Matcher API', 'User Profile API'],
    divider: '↓ Message Queue (Kafka)',
  },
  {
    label: 'AI CORE',
    labelColor: '#00e5ff',
    nodeClass: 'node-cyan',
    nodes: ['Hustle Health Score Engine', 'Predictive Revenue Model', 'Opportunity Scorer (LLM)', 'Market Intelligence Agent', 'Risk Analyzer'],
    divider: '↓ Data Pipeline (Spark + Flink)',
  },
  {
    label: 'DATA',
    labelColor: '#00e676',
    nodeClass: 'node-green',
    nodes: ['PostgreSQL (Transactional)', 'Redis (Cache + Sessions)', 'ClickHouse (Analytics)', 'Pinecone (Vector DB)', 'S3 (Object Store)'],
    divider: '↓ External Integrations',
  },
  {
    label: 'INTEGRATIONS',
    labelColor: '#ff5f57',
    nodeClass: 'node-coral',
    nodes: ['Stripe / Payment APIs', 'Open Banking (Plaid)', 'Google Trends API', 'Anthropic / OpenAI', 'Zapier / n8n', 'Shopify / Webflow'],
    divider: '↓ Observability (Datadog + OpenTelemetry)',
  },
  {
    label: 'INFRA',
    labelColor: '#f0f4ff',
    nodeClass: 'node-white',
    nodes: ['Kubernetes (EKS)', 'Terraform (IaC)', 'GitHub Actions CI/CD', 'AWS Multi-Region', 'SOC2 Compliance'],
    divider: undefined,
  },
]

// ── OVERVIEW ──────────────────────────────────────────────────────────────────

export const OVERVIEW_STATS = [
  { value: '1.1B',  label: 'TAM — Global Hustlers', cls: '' },
  { value: '$5.4T', label: 'Annual Economic Output', cls: 'gold' },
  { value: '$47B',  label: 'Serviceable Market (SAM)', cls: 'green' },
  { value: '$2.3B', label: 'SOM — Year 5 Target', cls: 'purple' },
]

export const OVERVIEW_CARDS = [
  {
    icon: '🧠', title: 'Intelligence Layer', tagClass: 'tag-gold', tag: 'Proprietary AI',
    desc: 'Not a dashboard — a cognitive engine. HustleIQ ingests behavioral, financial, and market data to produce predictive intelligence that no competitor can replicate without years of proprietary data accumulation.',
  },
  {
    icon: '🌐', title: 'Network Effects Engine', tagClass: 'tag-cyan', tag: 'Data Flywheel',
    desc: 'Every new user strengthens the model. More hustle data → better opportunity scoring → more accurate predictions → more value per user. Classic data flywheel moat, identical to how Bloomberg and LinkedIn achieved dominance.',
  },
  {
    icon: '🏛️', title: 'Infrastructure Play', tagClass: 'tag-green', tag: 'Enterprise B2B',
    desc: 'The $10B unlock is B2B2C. Banks, governments, NGOs, and accelerators pay $500K–$5M/year to deploy HustleIQ as entrepreneurial infrastructure for entire populations. This is the Bloomberg Terminal licensing model.',
  },
  {
    icon: '💰', title: 'Funding Marketplace', tagClass: 'tag-gold', tag: 'Marketplace Revenue',
    desc: 'HustleIQ becomes the match-making layer between 1.1B entrepreneurs and $400B in annual SME lending, grants, and angel capital. A 1% transaction rake on routed funding = multi-billion revenue stream.',
  },
  {
    icon: '📊', title: 'Data Monetization', tagClass: 'tag-purple', tag: 'Data Revenue',
    desc: 'Anonymized, aggregated hustle economy data is the most valuable B2B dataset that doesn\'t exist yet. Sold to hedge funds, central banks, market researchers, and policy makers at $50K–$500K per license.',
  },
  {
    icon: '🔗', title: 'API Ecosystem', tagClass: 'tag-cyan', tag: 'API-First',
    desc: 'Open the Hustle Health Score and Predictive AI as APIs. Any fintech, bank, or HR platform can embed HustleIQ intelligence, generating usage-based revenue while expanding the data network simultaneously.',
  },
]

// ── AI STACK ─────────────────────────────────────────────────────────────────

export const AI_PIPELINE_COLS = [
  {
    label: '1 — Data Ingestion',
    nodeClass: 'node-coral',
    nodes: ['User Behavior Events', 'Financial Transactions', 'Market Signals (Web)', 'Social Trend Data'],
  },
  {
    label: '2 — AI Processing',
    nodeClass: 'node-cyan',
    nodes: ['Feature Engineering', 'LLM Reasoning Layer', 'Predictive Models', 'Scoring Algorithms'],
  },
  {
    label: '3 — Intelligence Output',
    nodeClass: 'node-gold',
    nodes: ['Hustle Health Score', 'Revenue Forecast', 'Opportunity Report', 'Action Recommendations'],
  },
]

// ── MODULES ───────────────────────────────────────────────────────────────────

export const MODULES = [
  {
    icon: '🧭', title: 'MODULE 1 — Opportunity Intelligence Engine', tag: 'RAG + Real-Time Scoring', tagClass: 'tag-cyan',
    desc: 'Continuously scans 20+ data sources for emerging profitable niches. Scores each opportunity across 4 dimensions and surfaces the top 10 personalized to each user\'s skills, budget, and goals.',
  },
  {
    icon: '📐', title: 'MODULE 2 — Business Model Generator', tag: 'LLM + Structured Output', tagClass: 'tag-gold',
    desc: 'Takes any raw idea and generates a complete business model canvas in 90 seconds. Powered by Claude with structured output enforcement (Pydantic schemas). Outputs: value proposition, pricing strategy, monetization model, MVP definition, go-to-market plan, 12-month revenue projection, and competitor analysis.',
  },
  {
    icon: '🗺️', title: 'MODULE 3 — Hustle Strategy Engine', tag: 'Agentic Planning', tagClass: 'tag-purple',
    desc: 'Personalized strategy generation based on user\'s capital, skills, and time availability. Produces a 30/60/90-day actionable execution roadmap with daily task breakdowns, prioritized by ROI.',
  },
  {
    icon: '📈', title: 'MODULE 4 — Revenue Optimization Engine', tag: 'Predictive Pricing ML', tagClass: 'tag-green',
    desc: 'Price elasticity modeling, conversion rate optimization, and profit scenario simulation. Trained on pricing data from 50,000+ successful digital businesses.',
  },
  {
    icon: '⚡', title: 'MODULE 5 — Automation Builder', tag: 'No-Code Automation', tagClass: 'tag-coral',
    desc: 'Visual workflow builder powered by n8n and Zapier integrations. AI suggests automation opportunities based on user\'s current manual tasks. One-click deployment of pre-built automation templates: lead gen pipeline, email follow-up sequences, invoice automation, content scheduling, customer onboarding, payment recovery.',
  },
  {
    icon: '🖥️', title: 'MODULE 6 — Hustle Command Dashboard', tag: 'Real-Time WebSocket UI', tagClass: 'tag-cyan',
    desc: 'Single-screen entrepreneurial intelligence hub. Real-time Hustle Health Score, income trajectory, opportunity feed, task pipeline, and AI advisor chat — all unified in a Bloomberg-style terminal interface with dark theme and live data streams.',
  },
]

// ── API ───────────────────────────────────────────────────────────────────────

export type HttpMethod = 'GET' | 'POST' | 'WS'

export interface ApiEndpoint {
  method: HttpMethod
  path: string
  description: string
}

export const API_SECTIONS: { label: string; endpoints: ApiEndpoint[] }[] = [
  {
    label: 'Opportunity Intelligence',
    endpoints: [
      { method: 'POST', path: '/v1/opportunities/score',        description: 'Score a niche or business idea across demand, competition, and scalability' },
      { method: 'GET',  path: '/v1/opportunities/trending',     description: 'Get top 20 trending niches updated every 6 hours from web data' },
      { method: 'GET',  path: '/v1/opportunities/personalized', description: 'Personalized opportunities based on user skills, capital, and goals' },
    ],
  },
  {
    label: 'Hustle Health Score',
    endpoints: [
      { method: 'GET',  path: '/v1/health-score/{venture_id}', description: 'Retrieve the current composite Hustle Health Score for a venture' },
      { method: 'POST', path: '/v1/health-score/compute',      description: 'Trigger a fresh score computation with the latest data' },
      { method: 'GET',  path: '/v1/health-score/history',      description: '30-day score trend with dimension breakdowns' },
    ],
  },
  {
    label: 'AI Strategy Engine',
    endpoints: [
      { method: 'POST', path: '/v1/strategy/generate',         description: 'Generate a full hustle strategy with roadmap and task breakdown' },
      { method: 'POST', path: '/v1/business-model/generate',   description: 'Transform an idea into a complete business model canvas' },
      { method: 'WS',   path: '/v1/advisor/stream',            description: 'Real-time streaming AI advisor conversation (WebSocket)' },
    ],
  },
  {
    label: 'Revenue & Funding',
    endpoints: [
      { method: 'POST', path: '/v1/revenue/optimize',          description: 'Optimal pricing and revenue projection for a given business model' },
      { method: 'GET',  path: '/v1/funding/matches',           description: 'Top 10 funding sources matched to the venture\'s current profile' },
      { method: 'POST', path: '/v1/funding/readiness-score',   description: 'Evaluate investor/lender readiness and return gap analysis' },
    ],
  },
]

// ── REVENUE ───────────────────────────────────────────────────────────────────

export const REVENUE_STATS = [
  { value: '$29',     label: 'Pro Monthly',       cls: 'green' },
  { value: '$99',     label: 'Elite Monthly',     cls: 'gold' },
  { value: '$5K–50K', label: 'Enterprise Annual', cls: '' },
  { value: '1–3%',    label: 'Funding Rake',      cls: 'purple' },
]

export const REVENUE_STREAMS = [
  {
    nameColor: '#00e5ff', name: '1. SaaS Subscriptions', sub: 'Pro + Elite tiers',
    tagClass: 'tag-cyan', tag: 'Recurring MRR',
    y1: '$1.2M ARR', y3: '$24M ARR', y5: '$180M ARR',
    barWidth: '90%', barStyle: {},
  },
  {
    nameColor: '#f5c842', name: '2. Enterprise Licensing', sub: 'Banks, govts, incubators',
    tagClass: 'tag-gold', tag: 'Annual Contract',
    y1: '$400K ARR', y3: '$15M ARR', y5: '$350M ARR',
    barWidth: '80%', barStyle: { background: 'linear-gradient(90deg, #f5c842, #f5c842aa)' },
  },
  {
    nameColor: '#00e676', name: '3. Funding Marketplace', sub: 'Transaction rake on matched capital',
    tagClass: 'tag-green', tag: 'Take Rate',
    y1: '$180K', y3: '$12M', y5: '$800M+',
    barWidth: '100%', barStyle: { background: 'linear-gradient(90deg, #00e676, #00e67655)' },
  },
  {
    nameColor: '#a988ff', name: '4. API Monetization', sub: 'Usage-based for B2B devs',
    tagClass: 'tag-purple', tag: 'Usage-Based',
    y1: '$60K', y3: '$8M', y5: '$120M',
    barWidth: '60%', barStyle: { background: 'linear-gradient(90deg, #7c4dff, #a988ff55)' },
  },
  {
    nameColor: '#ff5f57', name: '5. Data Intelligence', sub: 'Anonymized hustle economy data',
    tagClass: 'tag-coral', tag: 'License Fees',
    y1: '—', y3: '$3M', y5: '$200M',
    barWidth: '70%', barStyle: { background: 'linear-gradient(90deg, #ff5f57, #ff5f5755)' },
  },
  {
    nameColor: '#f0f4ff', name: '6. Premium Add-Ons', sub: 'Sector AI, white-label, reports',
    tagClass: 'tag-white', tag: 'Modular',
    y1: '$80K', y3: '$5M', y5: '$60M',
    barWidth: '45%', barStyle: { background: 'linear-gradient(90deg, #f0f4ff, #f0f4ff55)' },
  },
]

// ── MOAT ──────────────────────────────────────────────────────────────────────

export const MOAT_ITEMS = [
  {
    num: '01',
    title: 'Proprietary Hustle Health Score Algorithm',
    body: 'The HHS is trained on real venture outcomes — success and failure patterns from 2M+ hustles. No competitor can replicate this without 5+ years of data accumulation. It becomes MORE accurate as the user base grows, creating an unbridgeable gap over time.',
  },
  {
    num: '02',
    title: 'Data Network Effect',
    body: 'More users = more hustle data = better AI predictions = more user value = more users. This compounding loop, once established, is the same defensive flywheel that made Google\'s search monopoly unbreakable. HustleIQ becomes smarter with every signup.',
  },
  {
    num: '03',
    title: 'Institutional Lock-In (Enterprise)',
    body: 'When governments and banks deploy HustleIQ as infrastructure, switching cost approaches ∞. A ministry of SME development doesn\'t migrate its national entrepreneurial monitoring system. These are 10–20 year contracts worth $5M–$50M each.',
  },
  {
    num: '04',
    title: 'Funding Marketplace Network Liquidity',
    body: 'Marketplaces have winner-take-all dynamics. The lender/investor network that joins HustleIQ gets access to the largest vetted entrepreneur database globally. Once HustleIQ has 10M+ scored ventures, competing marketplaces cannot attract the same deal flow quality.',
  },
  {
    num: '05',
    title: 'Behavioral Switching Costs',
    body: 'HustleIQ users build their entire financial and operational history in the platform. Their HHS score is their entrepreneurial credit score. Leaving means starting their score from zero. This is the same retention mechanism as FICO scores and LinkedIn profiles.',
  },
  {
    num: '06',
    title: 'Real-Time Market Signal Processing',
    body: 'Processing 20+ data sources in real-time for opportunity intelligence requires significant engineering investment and API partnerships. By the time a competitor builds equivalent infrastructure, HustleIQ will have 3 years of model training advantage on top.',
  },
  {
    num: '07',
    title: 'Brand Equity as the "Bloomberg for Hustlers"',
    body: 'Bloomberg Terminal has a $6B brand that took 40 years to build. HustleIQ can establish the equivalent brand in entrepreneurial intelligence within 7–10 years by moving fast across the 1.1B user TAM. First-mover brand dominance in this category is priceless.',
  },
]

// ── ROADMAP ───────────────────────────────────────────────────────────────────

export const ROADMAP_PHASES = [
  {
    dot: '#00e5ff',
    phase: 'Phase 1 — Months 0–6',
    title: 'Foundation & MVP',
    items: [
      'Ship MVP: Dashboard + Opportunity Engine + Business Model Generator',
      'Deploy Hustle Health Score v1 (rule-based, pre-ML)',
      '100 closed beta users. Obsessive iteration on core loop',
      'Raise $2M pre-seed from operator angels (ex-Stripe, Notion, Figma founders)',
      'Target: 500 paying users, $15K MRR',
    ],
  },
  {
    dot: '#f5c842',
    phase: 'Phase 2 — Months 6–18',
    title: 'Product-Market Fit',
    items: [
      'Launch HHS v2 with ML-powered scoring on real venture data',
      'Open waitlist → 10,000+ user growth via creator community (Twitter/LinkedIn)',
      'Predictive Revenue Model launches — first differentiator no competitor has',
      'Raise $8M Seed. Hire 15: 8 engineers, 3 AI/ML, 2 growth, 2 ops',
      'Target: 5,000 paying users, $150K MRR, NPS > 70',
    ],
  },
  {
    dot: '#00e676',
    phase: 'Phase 3 — Months 18–30',
    title: 'Enterprise & Marketplace Launch',
    items: [
      'Launch Enterprise tier: first 5 pilot deals with African banks + 2 US accelerators',
      'Funding Marketplace beta: 50 lending partners, 500K+ matched capital',
      'API platform opens to third-party developers',
      'Raise $25M Series A. Team grows to 60',
      'Target: 30K users, $800K MRR, 3 Enterprise contracts signed',
    ],
  },
  {
    dot: '#a988ff',
    phase: 'Phase 4 — Months 30–48',
    title: 'Regional Scaling',
    items: [
      'Launch in Nigeria, Kenya, India, UK, Brazil — 5 markets simultaneously',
      'Government partnerships: 3 national-level entrepreneurship program deployments',
      'Funding marketplace hits $50M in matched capital — rake revenue becomes meaningful',
      'Raise $75M Series B. Team grows to 200',
      'Target: 250K users, $5M MRR, $60M ARR run-rate',
    ],
  },
  {
    dot: '#ff5f57',
    phase: 'Phase 5 — Months 48–60',
    title: 'Global Infrastructure Status',
    items: [
      '1M+ active users across 30+ countries',
      '$150M+ ARR across all 6 revenue streams',
      'Funding marketplace processes $2B+ in annual capital routing',
      'Data intelligence licensing to 20+ hedge funds and 5 central banks',
      'Raise $200M Series C at $1.5–2B valuation. Position for $10B exit by Year 8',
      'Target: HustleIQ = the default operating system for 1.1B entrepreneurs',
    ],
  },
]
