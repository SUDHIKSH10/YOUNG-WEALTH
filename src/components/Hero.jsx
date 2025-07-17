import { FaHeadset } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>International<br />Network</h1>
          <p>We guide young minds to build their financial future.<br />Start small, dream big.</p>
          <div className="hero-buttons">
            <button className="get-quote">Get Quote Now</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="hero-cards">
          <div className="service-card">
            <FaHeadset className="card-icon" />
            <h3>Investment Trading</h3>
            <p>Learn the basics of trading and investment strategies.</p>
          </div>
          <div className="service-card">
            <FaHeadset className="card-icon" />
            <h3>Raising Funds</h3>
            <p>Understand how to raise and manage your college funds.</p>
          </div>
          <div className="service-card active">
            <FaHeadset className="card-icon" />
            <h3>Financial Analysis</h3>
            <p>Master the art of analyzing financial opportunities.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero 