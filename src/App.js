import About from './components/about';
import Homepage from './components/homepage';
import Projects from './components/projects';
import Navigationbar from './components/navigationbar';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Navigationbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;




