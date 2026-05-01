import Card from './Card'

const features = [
  {title: 'HEOR Studies', desc: 'Cost-effectiveness and outcomes evidence for payers and stakeholders.'},
  {title: 'Product Strategy', desc: 'Roadmaps, discovery, and clinical stakeholder alignment.'},
  {title: 'Design & UX', desc: 'Human-centered design for clinical workflows and providers.'},
]

export default function FeatureGrid(){
  return (
    <div className="grid features">
      {features.map((f, i) => (
        <Card key={i} title={f.title} desc={f.desc} />
      ))}
    </div>
  )
}
