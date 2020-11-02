import React from 'react';
import {connect} from "redux";

const ThankYou = (props) => {

    const msg = props.msg === "order" ? "Dziękujemy za złożenie zamówienia" : props.msg === "contact" ? "Wysłano" : null;
    return(
        <div className="message">
            <p>{msg}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return (
        null
    )
}

export default connect(mapStateToProps)(ThankYou);