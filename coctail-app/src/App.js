import React from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     
      <header className="app-header">
        
        <Header/>
        
      </header>
       
      <Main/>
      
      <footer>
        <Footer/>
      </footer>
      {/* <img src="https://images.pexels.com/photos/8640338/pexels-photo-8640338.jpeg" alt="#"/> */}
    </div>
  );
}

export default App;
