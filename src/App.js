import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Day from './components/Day';
import FutureDay from './components/FutureDay';
import Sidebar from './components/Menu';

import store from './store';
// import weatherReducer from './reducers/weatherReducers';
// import { connect } from 'react-redux';
// import { fetchWeather } from './actions/weatheractions';



class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/* <p>{this.props.weather.today.tempNow}</p> */}
            <Route path='/' component={Day} />
            <Route path='/' component={FutureDay} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}



export default App;













// class App extends Component {


  // getLongitudeAndLatitude() {
  //   let options = {
  //     enableHighAccuracy: false,
  //     timeout: 5000,
  //     maximumAge: 0
  //   };
  //   const self = this;
  //   function success(pos) {
  //     let crd = pos.coords;

  //     console.log(self);
  //     const latitude = crd.latitude.toFixed(5);
  //     const longitude = crd.longitude.toFixed(5);
  //     // console.log(latitude);
  //     // console.log(longitude);
  //     self.setState((prevState) => {
  //       prevState.latitude = latitude;
  //       prevState.longitude = longitude;
  //       return prevState;
  //     });
  //     return { long: longitude, lat: latitude };
  //   }


  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }
  //   const myPosition = navigator.geolocation.getCurrentPosition(success, error, options);
  // }

  // componentDidMount() {
    // Geolocation
    // this.getLongitudeAndLatitude();


    // const long = { this.state.longitude };
    // const lat = { this.state.latitude };
    //     let tempNow = -Infinity;
    //     let iconNow = -Infinity;

    //     const todayIcon = [];
    //     const todayTemp = [];
    //     const todayRain = [];
    //     const todayWind = [];
    //     const tomorrowIcon = [];
    //     const tomorrowTemp = [];
    //     const tomorrowRain = [];
    //     const tomorrowWind = [];
    //     const tomorrowPlus1Icon = [];
    //     const tomorrowPlus1Temp = [];
    //     const tomorrowPlus1Rain = [];
    //     const tomorrowPlus1Wind = [];

    //     {


    //       const today = new Date();
    //       const options = {
    //         weekday: 'long',
    //         month: 'long',
    //         day: 'numeric'
    //       };
    //       // const todayStr = today.toLocaleString().slice(0, 10);
    //       const todayDatumStr = today.toLocaleString('sv-SE', options);
    //       const tomorrow = new Date(today.setDate(today.getDate() + 1));
    //       const tomorrowDatumStr = tomorrow.toLocaleString('sv-SE', options);
    //       const tomorrowStr = tomorrow.toLocaleString().slice(0, 10);
    //       const tomorrowPlus1 = new Date(tomorrow.setDate(tomorrow.getDate() + 1));
    //       const tomorrowPlus1DatumStr = tomorrowPlus1.toLocaleString(
    //         'sv-SE',
    //         options
    //       );
    //       const tomorrowPlus1Str = tomorrowPlus1.toLocaleString().slice(0, 10);

    //       // tempNow = data.timeSeries[0].parameters.filter(element => element.name === 't')[0].values[0];

    //       // iconNow = data.timeSeries[0].parameters.filter(element => element.name === 'Wsymb2')[0].values[0];

    //       data.timeSeries.map((listItem) => {
    //       const { validTime, parameters } = listItem;
    //       // Temp
    //       const temperature = parameters.filter(element => element.name === 't')[0].values[0];

    //       const rainfall = parameters.filter(element => element.name === 'pmean')[0].values[0];

    //       // Wind
    //       const windspeed = parameters.filter(element => element.name === 'ws')[0].values[0];

    //       const icon = parameters.filter(element => element.name === 'Wsymb2')[0].values[0];

    //       if (validTime.startsWith(todayStr)) {
    //         todayTemp.push(temperature);
    //         todayRain.push(rainfall);
    //         todayWind.push(windspeed);
    //         todayIcon.push(icon);
    //       } else if (validTime.startsWith(tomorrowStr)) {
    //         tomorrowTemp.push(temperature);
    //         tomorrowRain.push(rainfall);
    //         tomorrowWind.push(windspeed);
    //         tomorrowIcon.push(icon);
    //       } else if (validTime.startsWith(tomorrowPlus1Str)) {
    //         tomorrowPlus1Temp.push(temperature);
    //         tomorrowPlus1Rain.push(rainfall);
    //         tomorrowPlus1Wind.push(windspeed);
    //         tomorrowPlus1Icon.push(icon);
    //       }
    //     });

    //     const todayTempMax = Math.max(...todayTemp);
    //     const todayTempMin = Math.min(...todayTemp);
    //     const tomorrowTempMax = Math.max(...tomorrowTemp);
    //     const tomorrowTempMin = Math.min(...tomorrowTemp);
    //     const tomorrowPlus1TempMax = Math.max(...tomorrowPlus1Temp);
    //     const tomorrowPlus1TempMin = Math.min(...tomorrowPlus1Temp);
    //     const sumTodayRain = Math.round(todayRain.reduce((total, amount) => total + amount));
    //     const sumTomorrowRain = Math.round(tomorrowRain.reduce((total, amount) => total + amount));
    //     const sumTomorrowPlus1Rain = Math.round(tomorrowPlus1Rain.reduce((total, amount) => total + amount));
    //     const avTodayWind = Math.round(todayWind.reduce((total, amount) => total + amount) / todayWind.length);
    //     const avTomorrowWind = Math.round(tomorrowWind.reduce((total, amount) => total + amount) /
    //       tomorrowWind.length);
    //     const avTomorrowPlus1Wind = Math.round(tomorrowPlus1Wind.reduce((total, amount) => total + amount) /
    //       tomorrowPlus1Wind.length);

    //     let mf = 1;
    //     let m = 0;
    //     let mostCommonIconToday;
    //     for (let i = 0; i < todayIcon.length; i++) {
    //       for (let j = i; j < todayIcon.length; j++) {
    //         if (todayIcon[i] == todayIcon[j]) m++;
    //         if (mf < m) {
    //           mf = m;
    //           mostCommonIconToday = todayIcon[i];
    //         }
    //       }
    //       m = 0;
    //     }

    //     let nf = 1;
    //     let n = 0;
    //     let mostCommonIconTomorrow;
    //     for (let i = 0; i < tomorrowIcon.length; i++) {
    //       for (let j = i; j < tomorrowIcon.length; j++) {
    //         if (tomorrowIcon[i] == tomorrowIcon[j]) n++;
    //         if (nf < n) {
    //           nf = n;
    //           mostCommonIconTomorrow = tomorrowIcon[i];
    //         }
    //       }
    //       n = 0;
    //     }

    //     let hf = 1;
    //     let h = 0;
    //     let mostCommonIconTomorrowPlus1;
    //     for (let i = 0; i < tomorrowPlus1Icon.length; i++) {
    //       for (let j = i; j < tomorrowPlus1Icon.length; j++) {
    //         if (tomorrowPlus1Icon[i] == tomorrowPlus1Icon[j]) h++;
    //         if (hf < h) {
    //           hf = h;
    //           mostCommonIconTomorrowPlus1 = tomorrowPlus1Icon[i];
    //         }
    //       }
    //       h = 0;
    //     }


    //     const backgroundImages = {
    //       spring: <img src="images/spring.jpg" alt="" />,
    //       winter: <img src="images/winter.png" alt="" />,
    //       road: <img src="images/road.png" alt="" />,
    //       bridge: <img src="images/bridge.png" alt="" />,
    //       lavendel: <img src="images/lavendel.png" alt="" />,
    //     };

    //     const background =
    //       (tempNow >= 20) ? backgroundImages.lavendel :
    //         (tempNow >= 15 || tempNow <= 20) ? backgroundImages.spring :
    //           (tempNow >= 10 || tempNow <= 15) ? backgroundImages.bridge :
    //             (tempNow >= 0 || tempNow <= 10) ? backgroundImages.road :
    //               (tempNow <= 0) ? backgroundImages.winter : null;


    //     this.setState((prevState) => {
    //       prevState.background = background;
    //       prevState.today.iconNow = iconNow;
    //       prevState.today.icon = mostCommonIconToday;
    //       prevState.tomorrow.icon = mostCommonIconTomorrow;
    //       prevState.tomorrowPlus1.icon = mostCommonIconTomorrowPlus1;
    //       prevState.todayDate = todayDatumStr;
    //       prevState.tomorrowDate = tomorrowDatumStr;
    //       prevState.tomorrowPlus1Date = tomorrowPlus1DatumStr;
    //       prevState.today.tempNow = tempNow;
    //       prevState.today.tempMax = todayTempMax;
    //       prevState.today.tempMin = todayTempMin;
    //       prevState.tomorrow.tempMax = tomorrowTempMax;
    //       prevState.tomorrow.tempMin = tomorrowTempMin;
    //       prevState.tomorrowPlus1.tempMax = tomorrowPlus1TempMax;
    //       prevState.tomorrowPlus1.tempMin = tomorrowPlus1TempMin;
    //       prevState.today.rain = sumTodayRain;
    //       prevState.tomorrow.rain = sumTomorrowRain;
    //       prevState.tomorrowPlus1.rain = sumTomorrowPlus1Rain;
    //       prevState.today.wind = avTodayWind;
    //       prevState.tomorrow.wind = avTomorrowWind;
    //       prevState.tomorrowPlus1.wind = avTomorrowPlus1Wind;

    //       //   // city

    //       return prevState;
    //     });

    //     // .catch((error) => console.log(error));
    //   };
    // }

  //   render() {
  //     return (
  //       <Provider store={store}>
  //         <BrowserRouter>
  //           <div>
  //             <div className="background"> {this.state.background}</div>
  //             <Sidebar
  //               TodayTempMax={this.state.today.tempMax}
  //               TodayTempMin={this.state.today.tempMin}
  //               TodayIcon={this.state.today.icon}
  //               TomorrowTempMax={this.state.tomorrow.tempMax}
  //               TomorrowTempMin={this.state.tomorrow.tempMin}
  //               TomorrowIcon={this.state.tomorrow.icon}
  //               TomorrowPlus1TempMax={this.state.tomorrowPlus1.tempMax}
  //               TomorrowPlus1TempMin={this.state.tomorrowPlus1.tempMin}
  //               TomorrowPlus1Icon={this.state.tomorrowPlus1.icon}
  //             />

  //             <Route
  //               path="/"
  //               exact
  //               render={props => (
  //                 <Day
  //                   // Idag
  //                   myLongitude={this.state.longitude}
  //                   myLatitude={this.state.latitude}
  //                   IconNow={this.state.today.iconNow}
  //                   datum={this.state.todayDate}
  //                   TempNow={this.state.today.tempNow}
  //                   TempMax={this.state.today.tempMax}
  //                   TempMin={this.state.today.tempMin}
  //                   Rain={this.state.today.rain}
  //                   Wind={this.state.today.wind}
  //                 />
  //               )}
  //             />
  //             <Route
  //               path="/tomorrow"
  //               exact
  //               render={props => (
  //                 <FutureDay
  //                   // Imorgon
  //                   Icon={this.state.tomorrow.icon}
  //                   datum={this.state.tomorrowDate}
  //                   TempMax={this.state.tomorrow.tempMax}
  //                   TempMin={this.state.tomorrow.tempMin}
  //                   Rain={this.state.tomorrow.rain}
  //                   Wind={this.state.tomorrow.wind}
  //                 />
  //               )}
  //             />
  //             <Route
  //               path="/tomorrowPlus1"
  //               exact
  //               render={props => (
  //                 <FutureDay
  //                   // Övermorgon
  //                   Icon={this.state.tomorrowPlus1.icon}
  //                   datum={this.state.tomorrowPlus1Date}
  //                   TempMax={this.state.tomorrowPlus1.tempMax}
  //                   TempMin={this.state.tomorrowPlus1.tempMin}
  //                   Rain={this.state.tomorrowPlus1.rain}
  //                   Wind={this.state.tomorrowPlus1.wind}
  //                 />
  //               )}
  //             />
  //           </div>
  //         </BrowserRouter>
  //       </Provider>

  //     );
  //   }
  // }

  // export default App;
