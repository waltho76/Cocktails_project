import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <Nav/>
     
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;
