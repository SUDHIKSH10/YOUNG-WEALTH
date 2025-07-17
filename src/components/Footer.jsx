import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    const navbarHeight = document.querySelector('.navbar').offsetHeight
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Young Wealth</h3>
          <p>Empowering college students to build their financial future through smart investments.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Products</a></li>
            <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#cookies">Cookies</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Investment Trading</a></li>
            <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Financial Analysis</a></li>
            <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Raising Funds</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Watch a Demo</a></li>
            <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>View Plans</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Get Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get In Touch</h4>
          <ul>
            <li><a href="mailto:sudhiksh10@gmail.com">sudhiksh10@gmail.com</a></li>
            <li><a href="tel:+91 73589 43662">+91 73589 43662</a></li>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Young Wealth. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 