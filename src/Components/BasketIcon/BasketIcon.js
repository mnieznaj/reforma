import React from 'react';
import { connect } from 'react-redux';

class BasketIcon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prodsNo: this.props.cartItems
        }
    }

    render(){
        return(
            <div className="basket-icon" style={{width: `${this.props.px}px`, height: `${this.props.px}px`}}>
                <svg className="basket-icon__icon" data-name="basket icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 27.72">
                    <path className="cls-1" d="M22.46,5.4v-5H5.54v5H.5V21.79l5.57,5.57H21.93l5.57-5.57V5.4ZM7.35,2.18h13.3V5.4H7.35ZM25.69,21l-4.51,4.51H6.82L2.31,21V7.21H25.69Z"/>
                </svg>
                <span className="basket-icon__amount">{this.state.prodsNo}</span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItemsTotal
    }
}

export default connect(mapStateToProps)(BasketIcon);