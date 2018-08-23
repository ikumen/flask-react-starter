/**
 * Entry point for frontend application. Mostly setup, boilerplate and 
 * services.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './containers/Homepage';

const App = () => {
    return ( 
        <Homepage />
    );
};

ReactDOM.render(<App />, document.getElementById('app'));