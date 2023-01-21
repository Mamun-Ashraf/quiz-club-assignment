
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {

    const topics = useLoaderData();
    const topic = topics.data;
    console.log(topics, topic)

    return (
        <div>
            <div className='bg-blue-200 p-8 w-5/6 mx-auto rounded text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-48 w-48 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>

                <p className='text-3xl'>Let's test your IQ !!!</p>
            </div>
            <div className='w-5/6 m-auto grid md:grid-cols-2'>
                {
                    topic.map(t => <Topics
                        key={t.id}
                        t={t}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;