import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Addu from './Components/Addu/Addu'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testemonials from './Components/Testemonials/Testemonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Addu />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testemonials />
        <Title subTitle='Contact Us' title='Connect With Us' />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App