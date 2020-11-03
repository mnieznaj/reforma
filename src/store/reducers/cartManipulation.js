import * as actionTypes from '../actions/actionTypes';

const initialState = {
    display: false,
    productsList: [],
    cartItemsTotal: 0,
    thankYouMsg: ""
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
            }
            return {
                ...state,
                cartItemsTotal: state.cartItemsTotal + 1,
                productsList: addToCart
            }
        case actionTypes.REMOVE:
            let removeFromCart = [...state.productsList];
            removeProdFromCart(removeFromCart, action.prod);
            return{
                ...state,
                cartItemsTotal: state.cartItemsTotal - 1,
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
        // no default
    }
    return state;
}

export default reducer;