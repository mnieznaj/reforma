import React from 'react';
import {connect} from "react-redux";


const ThankYou = props => {
    const msg = props.msg === "order" ? "Dziękujemy za złożenie zamówienia" : props.msg === "contact" ? "Wysłano" : null;

    setTimeout(() => {
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

export default connect(mapStateToProps)(ThankYou);