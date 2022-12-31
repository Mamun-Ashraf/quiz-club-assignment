import React from 'react';
// import { Link } from 'react-router-dom';
const Link = ({ route }) => {
    return (
        <li className='mr-5 text-purple-300'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;