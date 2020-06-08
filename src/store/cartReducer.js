/**
 * Created by GennadySX on @2020
 */

const get = () => localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const set = (state) => {
    localStorage.setItem('cart', JSON.stringify(state))
    return state
}

const counter = (item, count) => {
    item.count += count
    return item
}

const checkIt = (purchase, item) =>  (JSON.stringify(purchase.item) === JSON.stringify(item.item) && JSON.stringify(purchase.addition) === JSON.stringify(item.addition)
    && JSON.stringify(purchase.type) === JSON.stringify(item.type) &&  purchase.sum === item.sum ) ? purchase : null

const isSame = (state, item, i = null) => {
    return state.length && state.filter((purchase) => checkIt(purchase, item)).length ?
        state.map((purchase) => checkIt(purchase, item) ? counter(purchase, 1) : purchase)
        : [...state, item]
}



export const cart = (state = get(), action) => {
    switch (action.type) {
        case "ADD_CART":
            state = isSame(state, action.state)
            return set(state);
        case "REMOVE_IT":
            state = state.filter((item) => JSON.stringify(item) !== JSON.stringify(action.state))
            return set(state)
        case "DECREMENT_CART":
            state = state.map((purchase, i) => action.state.index === i && purchase.count > 1 ? counter(purchase, -1) : purchase )
            return set(state)
        default:
            return state
    }
}
