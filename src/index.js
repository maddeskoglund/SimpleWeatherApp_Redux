import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Day from './components/Day';
import FutureDay from './components/FutureDay';
import css from './App.css'

import store from './store';

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/' component={Day} />
                <Route component={App} > </Route>
                <Route path='/tomorrow' component={FutureDay} />
                <Route path='/tomorrowPlus1' component={FutureDay} />
            </div>
        </BrowserRouter>
    </Provider >
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
