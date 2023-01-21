import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {

    const topics = useLoaderData();
    const topic = topics.data;
    console.log(topics, topic)

    return (
        <div>
            <LineChart width={500} height={400} data={topic}>
                <Line type="monotone" dataKey="total" stroke='#000' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip></Tooltip>

            </LineChart>
        </div>
    );
};

export default Statistics;