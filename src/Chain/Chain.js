import React from 'react';
import { Link } from 'react-router-dom';

const Chain = ({ route }) => {
    return (
        <div>
            <li className='mr-12 text-purple-500'>
                <Link to={route.path}> {route.name}</Link>
            </li>
        </div>
    );
};

export default Chain;