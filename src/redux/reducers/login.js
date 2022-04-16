import { LOGIN, LOGOUT } from "../constants"

const defaultState = {
    user: {
        token: "",
        nickName: ""
    }

}

export default function login(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.user
            }
        case LOGOUT:
            return defaultState
        default:
            return state
    }
}