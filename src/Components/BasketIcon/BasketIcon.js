import React from 'react';
import { connect } from 'react-redux';

const BasketIcon = props => {
    
        return(
            <React.Fragment>
                <svg className="basket-icon" id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 27.72">
                            <path className="cls-1" d="M22.46,5.4v-5H5.54v5H.5V21.79l5.57,5.57H21.93l5.57-5.57V5.4ZM7.35,2.18h13.3V5.4H7.35ZM25.69,21l-4.51,4.51H6.82L2.31,21V7.21H25.69Z"/>
                </svg>
                <span className="basket-icon__amount" style={{right: props.right, top: props.top}}>
                    {props.cartItems === 0 ? "" : props.cartItems < 10 ? props.cartItems : "9+"}
                </span>
            </React.Fragment>

        )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItemsTotal
    }
}

export default connect(mapStateToProps)(BasketIcon);