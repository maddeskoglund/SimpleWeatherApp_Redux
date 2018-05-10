import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Day from './components/Day';
import FutureDay from './components/FutureDay';
import Sidebar from './components/Menu';

import store from './store';

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {/* <p>{this.props.weather.today.tempNow}</p> */}
                <Route path='/' component={App} />
                <Route path='/' component={Day} />
                <Route path='/tomorrow' component={FutureDay} />
                <Route path='/tomorrowPlus1' component={FutureDay} />
            </div>
        </BrowserRouter>
    </Provider>
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
