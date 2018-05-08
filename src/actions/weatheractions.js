import { FETCH_WEATHER } from './types';

export const fetchWeather = () => dispatch => {
    const today = new Date();
    const todayStr = today.toLocaleString().slice(0, 10);

    const lat = '59.65584';
    const long = '16.90267';
    const url = (`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`);
    fetch(url)
        .then(response => response.json())
        .then((data) => dispatch({
            type: FETCH_WEATHER,
            payload: {
                today: {
                    icon: data.timeSeries[0].parameters.filter(element => element.name === 'Wsymb2')[0].values[0],
                    tempNow: data.timeSeries[0].parameters.filter(element => element.name === 't')[0].values[0],
                    tempMax: [],
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

