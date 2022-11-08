import React from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header/>
        {/* <SearchForm/> */}
      </header>
      
      <Main/>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
