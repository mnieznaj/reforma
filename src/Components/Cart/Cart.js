import React from 'react';
import { connect } from 'react-redux';
import { add, remove, displayCartHandler } from '../../store/actions/cartActions';
import './Cart.css';

const Cart = (props) => {

    const hideCart = {
        position: 'fixed',
        height: '100vh',
        width: '760px',
        right: '-760px'
    }
    const displayCart = {
        position: 'fixed',
        height: '100vh',
        width: '760px',
        right: '0px'
    }
    
    const productsList = [...props.productsList];

    const products = ( productsList ? (
        <ul className="cart-prod-list">
            {
                productsList.map(prod => {
                    return <div className="product-in-cart" id={prod.id}>
                        <img src={prod.img} alt={prod.name}/>
                        <span>{prod.name}</span>
                        <span>{prod.price}</span>
                        <span className="product-in-cart__amount">
                            <button className="product-in-cart__amount-button" onClick={() => props.onAddToCart(prod)}>+</button>
                            <span className="product-in-cart__amount-text">Ilość: {prod.amount}</span>
                            <button className="product-in-cart__amount-button" onClick={() => props.onRemoveFromCart(prod)}>-</button>
                        </span>
                    </div>
                })
            }
        </ul>
    ) : null
    );

    const cartItemsCounter = () => {
        const itemsSum = props.productsList.reduce((prevProd, currProd) => {
            return prevProd.amount + currProd.amount
        }, 0)
        return itemsSum
    }

    let style = props.cartDisplay ? displayCart : hideCart;
    let styleOverflow = props.cartDisplay ? {display: 'block'} : {display: 'none'};
    
    return(
        <React.Fragment>
            <div className="site-overflow" style={styleOverflow} onClick={() => props.onDisplayCart(false)}></div>
            <div className="cart" style={style}>
                <span className="cart-header">
                    <span className="cart-title">koszyk</span>
                    <span className="close" onClick={() => props.onDisplayCart(false)}>X</span>
                    {/* X zastąpić koszykiem */}
                </span>
                {products}
                {props.productsList.length > 0 ? 
                <button className="order-summary">Dalej</button> :
                <span>Twój koszyk jest pusty</span>}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        cartDisplay: state.display,
        productsList: state.productsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (prod) => dispatch(add(prod)),
        onRemoveFromCart: (prod) => dispatch(remove(prod)),
        onDisplayCart: (display) => dispatch(displayCartHandler(display)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);