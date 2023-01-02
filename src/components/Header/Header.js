import React from 'react';
import { useState } from 'react';
import Chain from '../../Chain/Chain';
// import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Statistics', path: '/statistics' },
        { id: 3, name: 'Blog', path: '/blog' }
    ]
    return (
        <div className='grid grid-cols-2 h-24 bg-slate-100'>
            <h1 className='text-3xl text-purple-500'>Quiz Club</h1>
            <nav>
                <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden float-right'>
                    {
                        open ? <Bars3Icon /> : <XMarkIcon />
                    }
                </div>
                <ul className={`md:flex justify-end absolute md:static duration-500 ease-in ${open ? 'top-2 right-10' : 'top-[-120px] right-10'} `}>
                    {
                        routes.map(route => <Chain
                            key={route.id}
                            route={route}
                        ></Chain>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;