interface CardProps {
  icon?: string
  title: string
  description: React.ReactNode
  tag?: string
  tagClass?: string
  gold?: boolean
  children?: React.ReactNode
}

export default function Card({
  icon,
  title,
  description,
  tag,
  tagClass = 'tag-cyan',
  gold = false,
  children,
}: CardProps) {
  return (
    <div className={`card${gold ? ' gold-accent' : ''}`}>
      {icon && <span className="card-icon">{icon}</span>}
      <div className="card-title">{title}</div>
      <div className="card-desc">{description}</div>
      {children}
      {tag && <span className={`card-tag ${tagClass}`}>{tag}</span>}
    </div>
  )
}
