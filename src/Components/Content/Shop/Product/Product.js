import React from 'react';

import { connect } from 'react-redux';
import { add } from '../../../../store/actions/cartActions';

const Product = props => {
    const prod = props.product;

    return(
        <div className="product-section">
            <img className="product-img" src={prod.imgSrc} alt=""/>
            <div className="product">
                <span className="product-price">{prod.price}</span>
                <span className="product-description">{prod.name}</span>
                <button className="product-add-to-cart" onClick={() => props.onAddToCart(prod)}>dodaj do koszyka</button>
            </div>
            <img className="product-presentation" src={prod.presentationImgSrc} alt={prod.name}/>
        </div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);