import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Quiz-Club', Path: '/quiz-club' },
        { id: 2, name: 'Home', Path: '/home' },
        { id: 3, name: 'Topics', Path: '/topics' },
        { id: 4, name: 'Statistics', Path: '/statistics' },
        { id: 5, name: 'Blog', Path: '/blog' }
    ]
    return (
        <nav>
            <ul>
                {routes.map(route => <Link
                    key={route.id}
                    route={route}
                ></Link>)}
            </ul>
        </nav>
    );
};

export default NavBar;