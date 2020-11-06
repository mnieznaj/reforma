import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { add, remove, displayCartHandler } from '../../store/actions/cartActions';
import BasketIcon from '../BasketIcon/BasketIcon';

const Cart = (props) => {
    const hideCart = {
        right: '-760px',
        display: 'none'
    }
    const displayCart = {
        right: '0px'
    }
    
    const productsList = props.productsList ? [...props.productsList] : false;

    const products = ( productsList ? (
        <ul className="cart-prod-list">
            {
                productsList.map((prod, index) => {
                    return <div key={"cart-prod-" + index} className="product-in-cart" id={prod.id}>
                        <img className="product-in-cart__prod-img" src={prod.imgSrc} alt={prod.name}/>
                        <span className="product-in-cart__amount">
                            <button className="product-in-cart__amount-button" onClick={() => props.onAddToCart(prod)}>
                            <img src="/Assets/Imgs/icons/plus-icon.svg" alt="plus icon" />
                            </button>
                            <span className="product-in-cart__amount-text">{prod.amount} szt</span>
                            <button className="product-in-cart__amount-button" onClick={() => props.onRemoveFromCart(prod)}>
                                <img src="/Assets/Imgs/icons/minus-icon.svg" alt="minus icon" />
                            </button>
                        </span>
                        <span>{prod.price}</span>
                        <span>{prod.name}</span>
                    </div>
                })
            }
        </ul>
    ) : null
    );

    const styleCart = props.cartDisplay ? displayCart : hideCart;
    const styleOverflow = props.cartDisplay ? {display: 'block'} : {display: 'none'};
    
    return(
        <React.Fragment>
            <div className="site-overflow" style={styleOverflow} onClick={() => props.onDisplayCart(false)}></div>
            <div className="cart" style={styleCart}>
                <span className="cart-header">
                    <span className="cart-title">koszyk</span>
                    <span className="close" onClick={() => props.onDisplayCart(false)}><BasketIcon top="39px" right="73px"/></span>
                </span>
                {products}
                {productsList.length ? 
                <Link to="/order-summary" ><button className="order-summary" onClick={() => props.onDisplayCart(false)}>Dalej</button></Link> :
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