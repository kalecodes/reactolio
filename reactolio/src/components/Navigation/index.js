import React from "react";

function Nav(props) {
    const {
        navItems = [],
        // currentNavItem,
        // setCurrentNavItem
    } = props;

    <nav>
        <ul className='flex-row'>
            {navItems.map((navItem) => {
                <li className='mx-1' key={navItem.name}>
                    <span>
                        {navItem.name}
                    </span>
                </li>
            })}
        </ul>
    </nav>
}

export default Nav;