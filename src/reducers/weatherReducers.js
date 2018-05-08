import { FETCH_WEATHER } from '../actions/types';

const initialState = {
    today: {
        icon: [],
        tempNow: [],
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

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;

    }
}