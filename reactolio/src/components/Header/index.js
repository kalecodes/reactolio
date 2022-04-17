import React from 'react';

function Header() {
    return (
        <header className='flex-row px-1'>
            <h2>Portfolio Header</h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>About me</li>
                    <li className='mx-2'>Portfolio</li>
                    <li className='mx-2'> Contact</li>
                    <li className='mx-2'>Resume</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;