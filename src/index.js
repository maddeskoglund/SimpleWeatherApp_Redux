import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Day from './components/Day';
import Tomorrow from './components/Tomorrow';
import Overmorgon from './components/Overmorgon';
// import FutureDay from './components/FutureDay';
import css from './App.css'
import store from './store';

const router = (
    <Provider store={store}>
        <BrowserRouter>

            <div>
                <App />
                <Switch>
                    <Route exact path='/' component={Day} />
                    <Route path="/tomorrow" component={Tomorrow} />
                    <Route path="/tomorrowPlus1" component={Overmorgon} />
                </Switch>
            </div>

        </BrowserRouter>
    </Provider >
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
