import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {

    const topics = useLoaderData();
    const topic = topics.data;
    console.log(topics, topic)

    return (
        <div>
            {
                topic.map(t => <p key={t.id}>
                    {t.total}
                </p>)
            }
        </div>
    );
};

export default Statistics;