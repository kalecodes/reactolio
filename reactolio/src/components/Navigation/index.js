import React from "react";

function Nav(props) {
    const {
        navItems = [],
        // currentNavItem,
        // setCurrentNavItem
    } = props;

    return (
        <nav className="col-sm">
            <div className='row'>
                {navItems.map((navItem) => (
                    <span className='col-sm' key={navItem.name}>
                        <span>
                            {navItem.name}
                        </span>
                    </span>
                ))}
            </div>
        </nav>
    )
}

export default Nav;