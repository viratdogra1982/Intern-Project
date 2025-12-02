
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import FAQ from './components/FAQ/FAQ'
import AboutUs from './components/About Us/AboutUs'
import Blog from './components/Blog/Blog'
import Blogeco from './components/Blog-eco/Blog'
import Charitable from './components/Charitable/Charitable'
import Section7 from './components/section7'
import Section8 from './components/section8'
import Section9 from './components/section9'
import Footer from './components/Footer'
function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Shop />
     <AboutUs />
     <FAQ />
     <Blog />
     <Blogeco />
     <Charitable />
      <Section7 />
       <Section8 />
       <Section9 />
       <Footer />
    </div>
  )
}

export default App
