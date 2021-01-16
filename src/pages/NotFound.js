import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Link to="/" className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Go to home</Link>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">404 Not Found</p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Sorry you seem lost</p>
                   <span role="img" aria-label="loose">🧐</span>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
