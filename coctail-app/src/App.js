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
    </div>
  );
}

export default App;
