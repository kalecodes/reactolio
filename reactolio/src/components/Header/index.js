import React, { useState } from 'react';
import Nav from '../Navigation';

function Header() {
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
        <header className='flex-row px-1'>
            <h2>Portfolio Header</h2>
            <Nav 
                navItems={navItems}
                // currentNavItem={currentNavItem}
                // setCurrentNavItem={setCurrentNavItem}
            ></Nav>
        </header>
    )
}

export default Header;