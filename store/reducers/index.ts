import { scrollReducer } from "./scroll-reducer";
import { combineReducers } from "redux";
import { waitlistReducer } from "./register-reducer";

export const rootReducer = combineReducers({
    scroll: scrollReducer,
    waitlist: waitlistReducer,
})

