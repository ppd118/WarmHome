import { combineReducers } from "redux"
import city from "./city"
import search from "./search"
import login from "./login"

const rootReducer = combineReducers({
    city,
    search,
    login
})

export default rootReducer