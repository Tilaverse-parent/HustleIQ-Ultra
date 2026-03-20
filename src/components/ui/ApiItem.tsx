type Method = 'GET' | 'POST' | 'WS'

interface ApiItemProps {
  method: Method
  path: string
  description: string
}

const METHOD_CLASS: Record<Method, string> = {
  GET:  'method-get',
  POST: 'method-post',
  WS:   'method-ws',
}

export default function ApiItem({ method, path, description }: ApiItemProps) {
  return (
    <div className="api-item">
      <span className={`api-method ${METHOD_CLASS[method]}`}>{method}</span>
      <span className="api-path">{path}</span>
      <span className="api-desc">{description}</span>
    </div>
  )
}
