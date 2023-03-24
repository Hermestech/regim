import { scrollReducer } from "./scroll-reducer";
import { combineReducers } from "redux";
 

export const rootReducer = combineReducers({
    scroll: scrollReducer,
})

