import About from './components/About'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Service from './components/Service'
import Technology from './components/Technology'
import './styles/app.sass'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Service/>      
      <About/>
      <Technology/>
      <Projects/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
