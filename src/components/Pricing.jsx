import { FaCheck, FaTimes } from 'react-icons/fa'
import './Pricing.css'

const Pricing = () => {
  const plans = [
    {
      name: 'FREE',
      price: '0',
      features: [
        { text: 'Basic investment lessons', included: true },
        { text: 'Community forum access', included: true },
        { text: 'Weekly market updates', included: true },
        { text: 'Personal mentor', included: false },
        { text: 'Advanced strategies', included: false }
      ]
    },
    {
      name: 'STANDARD',
      price: '19',
      features: [
        { text: 'All Free features', included: true },
        { text: 'Personal mentor', included: true },
        { text: 'Advanced strategies', included: true },
        { text: 'Portfolio review', included: true },
        { text: 'Priority support', included: true }
      ]
    }
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <h2>Pricing</h2>
        <p>Choose the perfect plan for your investment journey</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/month</span>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  {feature.included ? (
                    <FaCheck className="icon-check" />
                  ) : (
                    <FaTimes className="icon-times" />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
            <button className="plan-button">
              {plan.name === 'FREE' ? 'Try for free' : 'Buy Now'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing 