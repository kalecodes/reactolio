import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
// import Footer from './components/Footer';

function App() {
  const [projects] = useState([
    {
      name: 'Example 1',
      description: 'Example description 1',
      image: ''
    },
    {
      name: 'Example 2',
      description: 'Example description 2',
      image: ''
    },
    {
      name: 'Example 3',
      description: 'Example description 3',
      image: ''
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
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
