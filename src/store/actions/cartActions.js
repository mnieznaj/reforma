import * as actionTypes from './actionTypes';

export const add = (prod) => {
    return {
        type: actionTypes.ADD,
        prod: prod
    }
}

export const remove = (prod) => {
    return {
        type: actionTypes.REMOVE,
        prod: prod
    }
}

export const displayCartHandler = (display) => {
    return display ? {type: actionTypes.SHOW_CART} : {type: actionTypes.HIDE_CART}
}

export const thankYou = msg => {
    return {
        type: actionTypes.THANK_YOU_MSG,
        msg: msg
    }
}