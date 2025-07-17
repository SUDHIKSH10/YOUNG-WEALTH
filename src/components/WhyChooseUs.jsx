import { FaGraduationCap, FaChartLine, FaUsers, FaShieldAlt } from 'react-icons/fa'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Student-Focused Learning",
      description: "Tailored financial education specifically designed for college students, making complex concepts easy to understand."
    },
    {
      icon: <FaChartLine />,
      title: "Practical Experience",
      description: "Hands-on learning with real-world investment scenarios and market analysis tools."
    },
    {
      icon: <FaUsers />,
      title: "Peer Learning Community",
      description: "Connect with like-minded students, share experiences, and grow together in your investment journey."
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk-Aware Approach",
      description: "Learn to invest responsibly with our comprehensive risk management education."
    }
  ]

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-header">
        <h2>Why Choose Young Wealth?</h2>
        <p>Start your investment journey with confidence</p>
      </div>

      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              {feature.icon}
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="feature-hover">
              <span className="learn-more-text">Learn More →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-container">
        <div className="cta-content">
          <h3>Ready to Start Your Investment Journey?</h3>
          <p>Join our community of young investors and build your financial future today.</p>
          <button className="cta-button">Get Started Now</button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 