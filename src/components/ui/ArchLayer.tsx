interface ArchLayerProps {
  label: string
  labelColor: string
  nodes: string[]
  nodeClass: string
  divider?: string
}

export default function ArchLayer({ label, labelColor, nodes, nodeClass, divider }: ArchLayerProps) {
  return (
    <>
      <div className="arch-layer">
        <div className="layer-label" style={{ color: labelColor }}>{label}</div>
        <div className="layer-content">
          {nodes.map((node) => (
            <div key={node} className={`arch-node ${nodeClass}`}>{node}</div>
          ))}
        </div>
      </div>
      {divider && <div className="arch-divider">{divider}</div>}
    </>
  )
}
