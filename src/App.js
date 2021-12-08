import './App.css';
import Navbar from './navbar';
import Aboutme from './aboutme';
import Project from './projects';
import Contact from './contact';
import Footer from './footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Aboutme></Aboutme>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
