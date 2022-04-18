import React from 'react';
import Nav from '../Navigation';

function Header(props) {
    const {
      navItems = [],
      currentSelected,
      setCurrentSelected
    } = props;

    
      // const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

    return (
        <header className='container-fluid sticky-top bg-white'>
          <div className="row mt-1 p-3 align-items-center">
            <h2 className="col-sm">Kalen Wiley</h2>
            <Nav 
                navItems={navItems}
                currentSelected={currentSelected}
                setCurrentSelected={setCurrentSelected}
            ></Nav>
          </div>

        </header>
    )
}

export default Header;