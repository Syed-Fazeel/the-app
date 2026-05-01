export default function Card({title, desc}){
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <a className="card-link" href="#">Learn more →</a>
    </article>
  )
}
