export const SET_SCROLL_POSITION = "SET_SCROLL_POSITION";
export const SET_EMAIL = "SET_EMAIL";
export const SET_CONFETTI_VISIBLE = "SET_CONFETTI_VISIBLE";

export const setScrollPosition = (scrollPosition: string) => ({
    type: SET_SCROLL_POSITION,
    payload: scrollPosition,
})

export const setEmail = (email: string) => ({
    type: SET_EMAIL,
    payload: email,
})

export const setConfettiVisible = (visible: boolean) => ({
    type: SET_CONFETTI_VISIBLE,
    payload: visible,
})