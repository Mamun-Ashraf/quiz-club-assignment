import React from 'react';
import { useState } from 'react';
import Link from '../Link/Link';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Statistics', path: '/statistics' },
        { id: 3, name: 'Blog', path: '/blog' }
    ]
    return (
        <nav className='bg-orange-50'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }

            </div>
            <ul className={`md:flex absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {routes.map(route => <Link
                    key={route.id}
                    route={route}
                ></Link>)}
            </ul>
        </nav>
    );
};

export default NavBar;