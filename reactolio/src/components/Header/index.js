import React from 'react';
import Nav from '../Navigation';

function Header(props) {
    const {
        navItems = [],
        // currentNavItem,
        // setCurrentNavItem
    } = props;

    return (
        <header className='flex-row px-1'>
            <h2>Portfolio Header</h2>
            <Nav 
                navItems={navItems}
                // currentNavItem={currentNavItem}
                // setCurrentNavItem={setCurrentNavItem}
            />
        </header>
    )
}

export default Header;