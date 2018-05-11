import { FETCH_WEATHER } from '../actions/types';

const initialState = {
    weather: {
        today: {
            date: "Hämtar",
            iconNow: "Hämtar",
            icon: "Hämtar",
            tempNow: "Hämtar",
            tempMax: "Hämtar",
            tempMin: "Hämtar",
            rain: "Hämtar",
            wind: "Hämtar"
        },
        tomorrow: {
            date: "Hämtar",
            icon: "Hämtar",
            tempMax: "Hämtar",
            tempMin: "Hämtar",
            rain: "Hämtar",
            wind: "Hämtar"
        },
        tomorrowPlus1: {
            date: "Hämtar",
            icon: "Hämtar",
            tempMax: "Hämtar",
            tempMin: "Hämtar",
            rain: "Hämtar",
            wind: "Hämtar"
        }
    }
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return {
                weather: action.payload
            }
        default:
            return state;

    }
}