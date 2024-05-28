import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Root element is hardcoded in the index.html file so this will never be null.
const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Provider
            store={store}
        >
            <App />
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
