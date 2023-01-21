import React from 'react';

const Blog = () => {
    return (
        <div className='w-5/6 mx-auto mt-12 p-12 bg-purple-500 rounded'>
            <p className='text-2xl font-bold'>Q-1: what is the purpose of React-Router?</p>
            <br />
            <p>
                <span className='text-2xl font-bold'>Ans:</span>
                The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.
            </p>
            <br />
            <p className='text-2xl font-bold'>Q-2: How does context API works?</p>
            <br />
            <p>
                <span className='text-2xl font-bold'>Ans:</span>
                The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.
            </p>
            <br />
            <p className='text-2xl font-bold'>Q-3: What is useRef hook?</p>
            <br />
            <p>
                <span className='text-2xl font-bold'>Ans:</span>
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </p>
        </div>
    );
};

export default Blog;