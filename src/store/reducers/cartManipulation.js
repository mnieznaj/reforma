import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
// import { createStore } from 'redux';

const initialState = {
    display: false,
    productsList: []
}

const addProdToCart = (arrOfProd, newProd) => {
    const indexOfProd = arrOfProd.findIndex(prod => prod.id === newProd.id);
    indexOfProd > -1 ? arrOfProd[indexOfProd].amount += 1 : arrOfProd.push({ ...newProd, amount: 1 });
}

const removeProdFromCart = (arrOfProd, prodToRemove) => {
    const indexOfProd = arrOfProd.findIndex(prod => prod.id === prodToRemove.id);
    if((indexOfProd > -1) && (arrOfProd[indexOfProd].amount > 0)){
        arrOfProd[indexOfProd].amount -= 1;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD:
            let addToCart = [...state.productsList];
            if(addToCart.length < 1){
                addToCart = [{ ...action.prod, amount: 1 }];
            } else {
                addProdToCart(addToCart, action.prod);
                // const indexOfProd = addToCart.findIndex(prod => prod.id === action.prod.id);
                // indexOfProd > -1 ? addToCart[indexOfProd].amount += 1 : addToCart.push({ ...action.prod, amount: 1 }); 
            }
            return {
                ...state,
                productsList: addToCart
            }
        case actionTypes.REMOVE:
            let removeFromCart = [...state.productsList];
            removeProdFromCart(removeFromCart, action.prod);
            // const indexOfProd = removeFromCart.findIndex(prod => prod.id === action.prod.id);
            // if((indexOfProd > -1) && (removeFromCart[indexOfProd].amount > 0)){
            //     removeFromCart[indexOfProd].amount -= 1;
            // }
            return{
                ...state,
                productsList: removeFromCart
            }
        case actionTypes.SHOW_CART:
            return{
                ...state,
                display: true
            }
        case actionTypes.HIDE_CART:
            return{
                ...state,
                display: false
            }
    }
    return state;
}

export default reducer;