import React from 'react'
import About from '../src/Components/About/About'
import Contact from '../src/Components/Contact/Contact'
import Footer from '../src/Components/Footer/Footer';
import Hero from '../src/Components/Hero/Hero';
import MyWork from '../src/Components/MyWork/MyWork';
import Navbar from '../src/Components/Navbar/Navbar';
import Services from '../src/Components/Services/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About />
      <Services />
      <MyWork />
      <Contact />

      <Footer /> */}
    </div>
  );
}

export default App