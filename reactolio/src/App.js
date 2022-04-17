import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [navItems] = useState([
    {
      name: 'About me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ])

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

  const [currentSelected, setCurrentSelected] = useState('');

  return (
    <div>
      <Header
        navItems={navItems}
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      ></Header>
      <main>
        <>
          <Project
            projects={projects}
          ></Project>
          <Resume></Resume>
          <ContactForm></ContactForm>
          <About></About>
        </>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
