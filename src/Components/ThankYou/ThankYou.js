import React from 'react';
import { connect } from "react-redux";
import { resetMsg } from '../../store/actions/cartActions';

const ThankYou = props => {
    const msg = props.msg === "order" ? "Dziękujemy za złożenie zamówienia" : props.msg === "contact" ? "Wysłano" : null;

    setTimeout(() => {
        props.resetMsg();
        window.location.href = window.location.origin;
    }, 2000);
    
    return(
        <div className="message">
            <p>{msg}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        msg: state.thankYouMsg
    }
}
const mapDispatchToProps = dispatch => {
    return {
        resetMsg: () => dispatch(resetMsg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);