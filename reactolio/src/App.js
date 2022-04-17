import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [projects] = useState([
    {
      name: 'Handle - Events',
      description: 'Example description 1',
      image: 'handle.png'
    },
    {
      name: 'Crypto Today',
      description: 'Example description 2',
      image: 'crypto.png'
    },
    {
      name: 'Run Buddy',
      description: 'Example description 3',
      image: 'runbuddy.png'
    }
  ])
  return (
    <div>
      <Header></Header>
      <main>
        <Project
          projects={projects}
        ></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
