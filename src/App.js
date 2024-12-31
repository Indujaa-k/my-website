import './asserts/sass/main.scss';
import Header from "./component/Header";
import Name from './component/Name';
import Work from "./component/Work";
import About from './component/About';
import Experience from './component/Experience';
import Skills from './component/Skills';
import { Contact } from './component/Contact';

function App() {
  return (
    <>

   <Header/>
   <Name/>
   <Work/> 
   <About/>
   <Experience/>
   <Skills/>
   <Contact/>
    </>
  );
}

export default App;
