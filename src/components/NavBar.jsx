import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div>
                <h1 className='lg:text-3xl'>Griffton's Bookstore</h1>
                <nav>
                    <ul className='flex ml-5'>
                        <li>
                            <a href='/' className='mr-5 focus:text-black'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='/about' className='mr-5 focus:text-black'>
                                About
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;