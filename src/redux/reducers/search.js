import { UPDATE_KEYWORDS } from "../constants/index"

const defaultState = {
    search_keywords: ""
}

const search_keywords = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_KEYWORDS:
            return {
                keywords: action.keywords
            }
        default:
            return state
    }
}

export default search_keywords