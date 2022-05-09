import React from 'react';
import { render } from 'react-dom';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
render(
    <Router>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </Router>,
    document.getElementById('root')
);
