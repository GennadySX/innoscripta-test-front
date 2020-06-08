/**
 * Created by GennadySX on @2020
 */

export const showIt = (state, title) => ({
    type: "SHOW_IT",
    state,
})


export const Cart = (state, title) => ({
    type: title,
    state,
})

export const removeCart = (state, title) => ({
    type: title,
    state
})

export const decrement = (state, title) => ({
    type: title,
    state
})
