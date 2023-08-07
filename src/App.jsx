import Navigation from './Components/Navigation/Navigation';
import Intro from './Sections/Intro/Intro';
import About from './Sections/About/About';
import Resume from './Sections/Resume/Resume';
import FloatingButton from './Components/Accessibility/FloatingButton';
import Contact from './Sections/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Intro />
      <FloatingButton />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
