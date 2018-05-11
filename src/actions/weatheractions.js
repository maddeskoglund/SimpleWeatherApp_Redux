import { FETCH_WEATHER } from './types';

export const fetchWeather = () => dispatch => {
    const today = new Date();
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    const todayStr = today.toLocaleString().slice(0, 10);
    const todayDatumStr = today.toLocaleString("sv-SE", options);
    const tomorrow = new Date(today.setDate(today.getDate() + 1));
    const tomorrowDatumStr = tomorrow.toLocaleString("sv-SE", options);
    const tomorrowStr = tomorrow.toLocaleString().slice(0, 10);
    const tomorrowPlus1 = new Date(tomorrow.setDate(tomorrow.getDate() + 1));
    const tomorrowPlus1DatumStr = tomorrowPlus1.toLocaleString("sv-SE", options);
    const tomorrowPlus1Str = tomorrowPlus1.toLocaleString().slice(0, 10);


    const lat = '59.65584';
    const long = '16.90267';
    const url = (`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`);
    fetch(url)
        .then(response => response.json())
        .then(data =>

            data.timeSeries.map(listItem => {
                const { validTime, parameters } = listItem;
                // Temp
                let temperature = parameters.filter(element => {
                    return element.name === "t";
                })[0].values[0];

                let rainfall = parameters.filter(element => {
                    return element.name === "pmean";
                })[0].values[0];

                // Wind
                let windspeed = parameters.filter(element => {
                    return element.name === "ws";
                })[0].values[0];

                let icon = parameters.filter(element => {
                    return element.name === "Wsymb2";
                })[0].values[0];

                /***** ska detta vara med, kan man ha push? */
                if (validTime.startsWith(todayStr)) {
                    todayTemp.push(temperature);
                    todayRain.push(rainfall);
                    todayWind.push(windspeed);
                    todayIcon.push(icon);
                } else if (validTime.startsWith(tomorrowStr)) {
                    tomorrowTemp.push(temperature);
                    tomorrowRain.push(rainfall);
                    tomorrowWind.push(windspeed);
                    tomorrowIcon.push(icon);
                } else if (validTime.startsWith(tomorrowPlus1Str)) {
                    tomorrowPlus1Temp.push(temperature);
                    tomorrowPlus1Rain.push(rainfall);
                    tomorrowPlus1Wind.push(windspeed);
                    tomorrowPlus1Icon.push(icon);
                }
            }),



            dispatch({
                type: FETCH_WEATHER,
                payload: {
                    today: {
                        iconNow: data.timeSeries[0].parameters.filter(element => element.name === 'Wsymb2')[0].values[0],
                        icon: [],
                        tempNow: data.timeSeries[0].parameters.filter(element => element.name === 't')[0].values[0],

                        // tempMax: validTime.startsWith(todayDatumStr),

                        tempMin: [],
                        rain: [],
                        wind: []
                    },
                    tomorrow: {
                        icon: [],
                        tempMax: [],
                        tempMin: [],
                        rain: [],
                        wind: []
                    },
                    tomorrowPlus1: {
                        icon: [],
                        tempMax: [],
                        tempMin: [],
                        rain: [],
                        wind: []
                    }
                }
            })
        )
}

