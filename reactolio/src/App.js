import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

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

  // const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

  return (
    <div>
      <Header
        navItems={navItems}
        // currentNavItem={currentNavItem}
        // setCurrentNavItem={setCurrentNavItem}
      ></Header>
      <main>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
