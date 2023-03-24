export const SET_SCROLL_POSITION = "SET_SCROLL_POSITION";

export const setScrollPosition = (scrollPosition: string) => ({
    type: SET_SCROLL_POSITION,
    payload: scrollPosition,
})