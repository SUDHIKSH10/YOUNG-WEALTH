import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Strategy from './components/Strategy'
import WhyChooseUs from './components/WhyChooseUs'
import Partners from './components/Partners'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="products">
        <Strategy />
        <WhyChooseUs />
        <Partners />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Newsletter />
      </section>
      <Footer />
    </div>
  )
}

export default App
