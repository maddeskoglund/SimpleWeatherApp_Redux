import { FETCH_WEATHER } from '../actions/types';

const initialState = {
    today: {
        iconNow: "Hämtar",
        icon: "Hämtar",
        tempNow: "Hämtar",
        tempMax: "Hämtar",
        tempMin: "Hämtar",
        rain: "Hämtar",
        wind: "Hämtar"
    },
    tomorrow: {
        icon: "Hämtar",
        tempMax: "Hämtar",
        tempMin: "Hämtar",
        rain: "Hämtar",
        wind: "Hämtar"
    },
    tomorrowPlus1: {
        icon: "Hämtar",
        tempMax: "Hämtar",
        tempMin: "Hämtar",
        rain: "Hämtar",
        wind: "Hämtar"
    }
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return {
                ...state,

                today: action.payload,
                tomorrow: action.payload,
                tomorrowPlus1: action.payload
            }
        default:
            return state;

    }
}