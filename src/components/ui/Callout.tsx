interface CalloutProps {
  children: React.ReactNode
  gold?: boolean
  style?: React.CSSProperties
}

export default function Callout({ children, gold = false, style }: CalloutProps) {
  return (
    <div className={`callout${gold ? ' gold-call' : ''}`} style={style}>
      {children}
    </div>
  )
}
