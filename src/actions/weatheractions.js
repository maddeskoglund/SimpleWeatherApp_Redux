import { FETCH_WEATHER } from './types';

export const fetchWeather = () => dispatch => {
    let tempNow = -Infinity;
    let iconNow = -Infinity;

    const todayIcon = [];
    const todayTemp = [];
    const todayRain = [];
    const todayWind = [];
    const tomorrowIcon = [];
    const tomorrowTemp = [];
    const tomorrowRain = [];
    const tomorrowWind = [];
    const tomorrowPlus1Icon = [];
    const tomorrowPlus1Temp = [];
    const tomorrowPlus1Rain = [];
    const tomorrowPlus1Wind = [];

    const lat = '59.65584';
    const long = '16.90267';
    const url = (`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`);
    fetch(url)
        .then(response => response.json())
        .then(data => {

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

            tempNow = data.timeSeries[0].parameters.filter(
                element => element.name === "t"
            )[0].values[0];

            iconNow = data.timeSeries[0].parameters.filter(
                element => element.name === "Wsymb2"
            )[0].values[0];


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
            });

            const todayTempMax = Math.max(...todayTemp);
            const todayTempMin = Math.min(...todayTemp);
            const tomorrowTempMax = Math.max(...tomorrowTemp);
            const tomorrowTempMin = Math.min(...tomorrowTemp);
            const tomorrowPlus1TempMax = Math.max(...tomorrowPlus1Temp);
            const tomorrowPlus1TempMin = Math.min(...tomorrowPlus1Temp);
            const sumTodayRain = Math.round(
                todayRain.reduce((total, amount) => total + amount)
            );
            const sumTomorrowRain = Math.round(
                tomorrowRain.reduce((total, amount) => total + amount)
            );
            const sumTomorrowPlus1Rain = Math.round(
                tomorrowPlus1Rain.reduce((total, amount) => total + amount)
            );
            const avTodayWind = Math.round(
                todayWind.reduce((total, amount) => total + amount) / todayWind.length
            );
            const avTomorrowWind = Math.round(
                tomorrowWind.reduce((total, amount) => total + amount) /
                tomorrowWind.length
            );
            const avTomorrowPlus1Wind = Math.round(
                tomorrowPlus1Wind.reduce((total, amount) => total + amount) /
                tomorrowPlus1Wind.length
            );

            let mf = 1;
            let m = 0;
            let mostCommonIconToday;
            for (let i = 0; i < todayIcon.length; i++) {
                for (let j = i; j < todayIcon.length; j++) {
                    if (todayIcon[i] == todayIcon[j]) m++;
                    if (mf < m) {
                        mf = m;
                        mostCommonIconToday = todayIcon[i];
                    }
                }
                m = 0;
            }

            let nf = 1;
            let n = 0;
            let mostCommonIconTomorrow;
            for (let i = 0; i < tomorrowIcon.length; i++) {
                for (let j = i; j < tomorrowIcon.length; j++) {
                    if (tomorrowIcon[i] == tomorrowIcon[j]) n++;
                    if (nf < n) {
                        nf = n;
                        mostCommonIconTomorrow = tomorrowIcon[i];
                    }
                }
                n = 0;
            }

            let hf = 1;
            let h = 0;
            let mostCommonIconTomorrowPlus1;
            for (let i = 0; i < tomorrowPlus1Icon.length; i++) {
                for (let j = i; j < tomorrowPlus1Icon.length; j++) {
                    if (tomorrowPlus1Icon[i] == tomorrowPlus1Icon[j]) h++;
                    if (hf < h) {
                        hf = h;
                        mostCommonIconTomorrowPlus1 = tomorrowPlus1Icon[i];
                    }
                }
                h = 0;
            }




            dispatch({
                type: FETCH_WEATHER,
                payload: {
                    today: {
                        iconNow: iconNow,
                        icon: mostCommonIconToday,
                        tempNow: tempNow,
                        tempMax: todayTempMax,
                        tempMin: todayTempMin,
                        rain: sumTodayRain,
                        wind: avTodayWind
                    },
                    tomorrow: {
                        icon: mostCommonIconTomorrow,
                        tempMax: tomorrowTempMax,
                        tempMin: tomorrowTempMin,
                        rain: sumTomorrowRain,
                        wind: avTomorrowWind
                    },
                    tomorrowPlus1: {
                        icon: mostCommonIconTomorrowPlus1,
                        tempMax: tomorrowPlus1TempMax,
                        tempMin: tomorrowPlus1TempMin,
                        rain: sumTomorrowPlus1Rain,
                        wind: avTomorrowPlus1Wind
                    }
                }
            })

        })

}
