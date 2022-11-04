import Home from './components/Home';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Drinks from './components/Drinks';

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <Nav/>
      <Home/>
      <Main/>
      <Footer/>
      <Drinks/>
    </div>
  );
}

export default App;
