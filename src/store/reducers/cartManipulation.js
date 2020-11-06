import * as actionTypes from '../actions/actionTypes';

const initialState = {
    display: false,
    productsList: [],
    cartItemsTotal: 0,
    thankYouMsg: ""
}

const addProdToCart = (currentCart, newProd) => {
    const indexOfProd = currentCart.findIndex(prod => prod.id === newProd.id);
    indexOfProd > -1 ? currentCart[indexOfProd].amount += 1 : currentCart.push({ ...newProd, amount: 1 });
}

const removeProdFromCart = (currentCart, prodToRemove) => {
    const indexOfProd = currentCart.findIndex(prod => prod.id === prodToRemove.id);

    if((indexOfProd > -1) && (currentCart[indexOfProd].amount > 0)){
        currentCart[indexOfProd].amount -= 1;
        return -1;
    } else {
        return 0;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD:
            let addToCart = [...state.productsList];
            const increaseTotal = 1;
            if(addToCart.length < 1){
                addToCart = [{ ...action.prod, amount: 1 }];
            } else {
                addProdToCart(addToCart, action.prod);
            }
            return {
                ...state,
                cartItemsTotal: state.cartItemsTotal + increaseTotal,
                productsList: addToCart
            }
        case actionTypes.REMOVE:
            let removeFromCart = [...state.productsList];
            let decreaseTotal = removeProdFromCart(removeFromCart, action.prod);
            return{
                ...state,
                cartItemsTotal: state.cartItemsTotal + decreaseTotal,
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
        case actionTypes.THANK_YOU_MSG:
            return {
                ...state,
                thankYouMsg: action.msg
            }
        case actionTypes.RESET_CART:
            return {
                ...state,
                cartItemsTotal: 0,
                productsList: []
            }
        case actionTypes.RESET_MSG:
            return {
                ...state,
                thankYouMsg: ""
            }
        // no default
    }
    return state;
}

export default reducer;