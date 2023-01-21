import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ t }) => {
    const { name, logo, total } = t;

    return (
        <div className='bg-purple-500 m-12 p-8 rounded text-center'>
            <img src={logo} alt={name} className='w-24 h-24 m-auto' />
            <p className='text-3xl'>{name}</p>
            <p>Questions: {total}</p>
            <Link to='/quizzes'><button className='bg-yellow-400 px-5 py-2 hover:bg-yellow-300 font-bold rounded-md'>Start practice</button></Link>
        </div>
    );
};

export default Topics;