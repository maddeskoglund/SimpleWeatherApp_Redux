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
        .then(data => dispatch({
            type: FETCH_WEATHER,
            payload: {
                today: {
                    iconNow: data.timeSeries[0].parameters.filter(element => element.name === 'Wsymb2')[0].values[0],
                    icon: [],
                    tempNow: data.timeSeries[0].parameters.filter(element => element.name === 't')[0].values[0],
                    // tempMax: (data.timeSeries.validTime.startsWith({ todayStr })) ? data.timeSeries.parameters.filter(element => element.name === "t") : null,
                    tempMax: data.timeSeries.map(parameters.filter(element => element.name === "t")),
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

