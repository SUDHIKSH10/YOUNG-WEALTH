import { FaAws, FaStripe, FaReddit } from 'react-icons/fa'
import './Partners.css'

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-grid">
        <div className="partner-logo">
          <span className="partner-text">Hooli</span>
        </div>
        <div className="partner-logo">
          <span className="partner-text">Lyft</span>
        </div>
        <div className="partner-logo">
          <FaStripe className="partner-icon" />
        </div>
        <div className="partner-logo">
          <FaAws className="partner-icon" />
        </div>
        <div className="partner-logo">
          <FaReddit className="partner-icon" />
        </div>
      </div>
    </section>
  )
}

export default Partners 