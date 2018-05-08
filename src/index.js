import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Day from '.components/Day';
import FutureDay from '.components/FutureDay';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App} >
                <IndexRoute component={Day}> </IndexRoute>
                <Route path='/view/:futureday' component={FutureDay}> </Route>
            </Route>
        </Router>
    </Provider>
)


render(router, document.getElementById('root'));
registerServiceWorker();
