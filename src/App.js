
import './App.css';
import Footer from './common/Footer';
import CustomFaq from './components/CustomFaq';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Testimonials from './components/Testinomials';
 

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Testimonials/>
      <CustomFaq />
      <Footer/>
    </>
  );
}

export default App;
