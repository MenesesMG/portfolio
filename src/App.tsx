import './App.css'
import DXT011Hero from './components/DXT-011Hero'
import DXT012Projects from './components/DXT-012Projects'
import DXT01211ProjectsStat from './components/DXT-01211ProjectsStat'
import DXTT0130Contact from './components/DXT-0130 Contact'
import DXT013Footer from './components/DXT-013 Footer'
import Section from './components/Sections';

function App() {
  return (
    <>      
      <Section bg="dark">
        <DXT011Hero />
      </Section>  

      <Section bg="light">
        <DXT01211ProjectsStat />
      </Section>

      <Section bg="light">
        <DXT012Projects />
      </Section>
      
      <Section bg="light">
        <DXTT0130Contact />
      </Section>
      
      <Section bg="light">
        <DXT013Footer />
      </Section>
    </>
  );
}


export default App
