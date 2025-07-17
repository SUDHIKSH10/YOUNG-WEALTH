import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

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

    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Young Wealth Logo" className="logo-img" onClick={(e) => handleNavClick(e, 'home')} style={{ cursor: 'pointer' }} />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
        <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Products</a>
        <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      </div>
      <div className={`nav-buttons ${isMenuOpen ? 'active' : ''}`}>
        <button className="login-btn">Login</button>
        <button className="request-btn">Request a consultation</button>
      </div>
      <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  )
}

export default Navbar 