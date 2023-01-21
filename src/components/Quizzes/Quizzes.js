import React from 'react';
import { Link } from 'react-router-dom';

const Quizzes = () => {
    return (
        <div className='text-3xl w-1/2 mx-auto'>
            <div className='bg-purple-500 rounded p-12 mt-10'>
                <Link to='/react'>Quizzes of React</Link>
            </div>
            <div className='bg-purple-500 rounded p-12 mt-10'>
                <Link to='/js'>Quizzes of JavaScript</Link>
            </div>
            <div className='bg-purple-500 rounded p-12 mt-10'>
                <Link to='/css'>Quizzes of CSS</Link>
            </div>
            <div className='bg-purple-500 rounded p-12 my-10'>
                <Link to='/git'>Quizzes of Git</Link>
            </div>
        </div>
    );
};

export default Quizzes;