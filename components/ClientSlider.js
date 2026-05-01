export default function ClientSlider() {
  const clients = [
    'Ray-Ban','WFMU','Michaels','Walmart','POLITICO','DreamWorks','SONY','TISSOT','Converse','Ray-Ban'
  ]

  return (
    <div className="client-slider" aria-hidden>
      <div className="client-track">
        {clients.concat(clients).map((name, i) => (
          <div className="client" key={i} aria-hidden>
            <span className="client-logo" title={name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
