/**
 * Created by GennadySX on @2020
 */


export const modal = (state=[], action) => {
    if (action.type === "SHOW_IT"){
        console.log('reducer is ', action);
        return action.state.modal = !action.state.modal
    } else return state
}


