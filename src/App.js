import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <h2> </h2>
      </footer>
    </div>
  );
}

export default App;
