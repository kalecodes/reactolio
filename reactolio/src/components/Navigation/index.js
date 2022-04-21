import React from "react";

function Nav(props) {
    const {
        navItems = [],
        currentSelected,
        setCurrentSelected
    } = props;

    return (
        <nav className="col-md-9 col-lg-6">
            <div className='row'>
                {navItems.map((navItem) => (
                    <span className={`col text-center ${
                        currentSelected.name === navItem.name && 'navActive'
                    }`} key={navItem.name}>
                        <span onClick={() => {
                            setCurrentSelected(navItem.name)
                        }}
                        >
                            {navItem.name}
                        </span>
                    </span>
                ))}
            </div>
        </nav>
    )
}

export default Nav;