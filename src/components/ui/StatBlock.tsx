interface StatBlockProps {
  value: string
  label: string
  valueClass?: string
}

export default function StatBlock({ value, label, valueClass = '' }: StatBlockProps) {
  return (
    <div className="stat-block">
      <div className={`stat-value${valueClass ? ' ' + valueClass : ''}`}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
