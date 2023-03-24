import { SET_SCROLL_POSITION } from "../actions";

const initialState = {
    position: 'top',
}

export const scrollReducer = (state = initialState, action: any) => { 
    switch(action.type) {
        case SET_SCROLL_POSITION:
            return {
                ...state,
                position: action.payload,
            }
        default:
            return state;
    }
}