import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Day from './components/Day';
import FutureDay from './components/FutureDay';
import css from './App.css'
import store from './store';

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <div>
                    <Route component={App} > </Route>
                    <Route exact path='/' component={Day} />
                    <Route path="/tomorrow" component={FutureDay} />
                    <Route path="/tomorrowPlus1" component={FutureDay} />
                </div>
            </Switch>
        </BrowserRouter>
    </Provider >
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
