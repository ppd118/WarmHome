import { INIT_CITY, CHANGE_CITY, UPDATE_KEYWORDS } from "../constants";

export function initCity(cityName) {
    return {
        type: INIT_CITY,
        cityName
    }
}

export function changeCity(cityName) {
    return {
        type: CHANGE_CITY,
        cityName
    }
}

export function updateKeywords(keywords) {
    return {
        type: UPDATE_KEYWORDS,
        keywords
    }
}