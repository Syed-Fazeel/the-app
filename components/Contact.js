export default function Contact(){
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Let's talk</h2>
        <p className="lead">Tell us about your project, HEOR needs, or collaboration opportunities.</p>
        <form className="contact-form" onSubmit={(e)=>{e.preventDefault();alert('Thanks — placeholder form')}}>
          <div className="form-row">
            <input name="name" placeholder="Name" required />
            <input name="email" placeholder="Email" type="email" required />
          </div>
          <textarea name="message" placeholder="Message" rows="4" required />
          <div style={{marginTop:12}}>
            <button className="btn primary" type="submit">Send message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
