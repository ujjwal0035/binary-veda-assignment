import './App.css';
import About from './components/About';
import Bot from './components/Bot';
import Discription from './components/Discription';
import Greatings from './components/Greatings';
import NaveBar from './components/NaveBar';
import ShowCase from './components/ShowCase';
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <NaveBar />
      <Greatings />
      <Discription />
      <About />
      <ShowCase />
      <Bot />
      <Footer />
    </div>
  );
}

export default App;
