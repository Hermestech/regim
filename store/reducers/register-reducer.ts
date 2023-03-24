import { SET_EMAIL, SET_CONFETTI_VISIBLE } from "../actions";

const initialState = {
    email: '',
    confettiVisible: false,
}

export const waitlistReducer = (state = initialState, action: any) => { 
    switch(action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            }
        case SET_CONFETTI_VISIBLE:
            return {
                ...state,
                confettiVisible: action.payload,
            }
        default:
            return state;
    }
}