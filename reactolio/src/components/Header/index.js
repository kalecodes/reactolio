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
        <header className='container-fluid'>
          <div className="row mt-1 p-3 align-items-center">
            <h2 className="col-sm">Kalen Wiley</h2>
            <Nav 
                navItems={navItems}
                // currentNavItem={currentNavItem}
                // setCurrentNavItem={setCurrentNavItem}
            ></Nav>
          </div>

        </header>
    )
}

export default Header;