import React from 'react';
import Header from './components/Header';
import Nav from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <main>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
