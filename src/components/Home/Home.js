import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {

    const topics = useLoaderData();
    const topic = topics.data;
    console.log(topics, topic)

    return (
        <div>
            <div>

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