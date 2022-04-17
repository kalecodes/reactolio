import React from "react";

function Nav(props) {
    const {
        navItems = [],
        currentSelected,
        setCurrentSelected
    } = props;

    return (
        <nav className="col-sm">
            <div className='row'>
                {navItems.map((navItem) => (
                    <span className={`col-sm ${
                        currentSelected.name === navItem.name && 'navActive'
                    }`} key={navItem.name}>
                        <span onClick={() => {
                            setCurrentSelected(navItem.name)
                            console.log(currentSelected)
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