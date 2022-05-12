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
      name: 'Maker',
      description: 'MERN-Stack Social & Ecommerce app for artists',
      image: 'maker.png',
      drlink: 'https://kw-maker.herokuapp.com/',
      rlink: 'https://github.com/kalecodes/maker '
    },
    {
      name: 'Crypto Today',
      description: 'Example description 2',
      image: 'crypto.png',
      dlink: 'https://kalecodes.github.io/markets-today/',
      rlink: 'https://github.com/kalecodes/markets-today'
    },
    {
      name: 'Handle - Events',
      description: 'Example description 1',
      image: 'handle.png',
      dlink: 'https://handle-events.herokuapp.com/',
      rlink: 'https://github.com/kalecodes/raising-the-handlebars'
    },
    {
      name: 'Weather Dashboard',
      description: 'Example description 3',
      image: 'weather.png',
      dlink: 'https://kalecodes.github.io/weather-dashboard/',
      rlink: 'https://github.com/kalecodes/weather-dashboard'
    },
    {
      name: 'Notable',
      description: 'Example description 3',
      image: 'notable.png',
      dlink: 'https://guarded-bastion-63529.herokuapp.com/',
      rlink: 'https://github.com/kalecodes/notable'
    },
    {
      name: 'Work Day Scheduler',
      description: 'Example description 3',
      image: 'schedulerr.png',
      dlink: 'https://kalecodes.github.io/schedulerr/',
      rlink: 'https://github.com/kalecodes/schedulerr'
    },
    {
      name: 'Original Porfolio',
      description: 'Example description 3',
      image: 'ogportfolio.png',
      dlink: 'https://kalecodes.github.io/portfolio/',
      rlink: 'https://github.com/kalecodes/portfolio'
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
        {currentSelected === 'Portfolio' ? (
          <Project
            projects={projects}
          ></Project>
        ): currentSelected === 'Contact' ? ( 
          <ContactForm></ContactForm>
        ): currentSelected === 'Resume' ? (
          <Resume></Resume>
        ):(
          <About></About>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
