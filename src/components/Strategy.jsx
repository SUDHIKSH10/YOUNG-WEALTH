import { FaChartLine, FaLightbulb, FaUsers } from 'react-icons/fa'
import './Strategy.css'

const Strategy = () => {
  const strategies = [
    {
      icon: <FaChartLine />,
      title: "Investment Basics",
      description: "Learn the fundamentals of investing and how to make informed financial decisions for your future."
    },
    {
      icon: <FaLightbulb />,
      title: "Smart Saving Strategies",
      description: "Discover effective ways to save money while in college and build a strong financial foundation."
    },
    {
      icon: <FaUsers />,
      title: "Peer Learning",
      description: "Join a community of like-minded students to share experiences and learn from each other."
    },
    {
      icon: <FaChartLine />,
      title: "Market Analysis",
      description: "Understand how to analyze market trends and make data-driven investment decisions."
    },
    {
      icon: <FaLightbulb />,
      title: "Risk Management",
      description: "Learn how to identify and manage financial risks in your investment journey."
    },
    {
      icon: <FaUsers />,
      title: "Mentorship Program",
      description: "Get guidance from experienced investors and financial advisors in your learning journey."
    }
  ]

  return (
    <section className="strategy">
      <div className="strategy-header">
        <h2>Better Strategy</h2>
        <h3>With Quality Business</h3>
        <p>Empowering young investors to develop the mindset and skills needed for financial success.</p>
      </div>

      <div className="strategy-grid">
        {strategies.map((strategy, index) => (
          <div key={index} className="strategy-card">
            <div className="strategy-icon">
              {strategy.icon}
            </div>
            <h4>{strategy.title}</h4>
            <p>{strategy.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Strategy 