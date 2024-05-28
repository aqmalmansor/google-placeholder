import React, { useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

import AppRoot from 'containers/AppRoot';

import packageJson from '../package.json';

const App = (): JSX.Element => {
    useEffect(() => {
        console.log(`App version: ${packageJson.version} (${process.env.REACT_APP_ENV})`);
    }, []);

    return (
        <div className='app-container'>
            <AppRoot />
        </div>
    );
};

export default App;
