import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>{error.data}</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;