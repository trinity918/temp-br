import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
     return <>
  <Navbar/>
  <Hero/>
  <About/>
  <Services/>
  <Tours/>
  <Footer/>
     </>;
}

export default App;
