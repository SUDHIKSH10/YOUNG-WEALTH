import './Newsletter.css'

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h3>Subscribe For Latest Newsletter</h3>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Your Email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter 