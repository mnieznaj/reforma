import React from 'react';
import { Link } from 'react-router-dom';
import { resetCart } from "../../../store/actions/cartActions";
import { connect } from "react-redux";

const Pay = (props) => {
    return(
        <div className="pay">
            <h2 className="form-title">Wybierz formę płatności</h2>
            <div className="pay-imgs-desktop">
                <img src="/Assets/Imgs/pay/pay.png" alt="payment methods"/>
            </div>
            <div className="pay-imgs-mobile">
                <img src="/Assets/Imgs/pay/pay-2.png" alt="payment methods"/>
                <img src="/Assets/Imgs/pay/pay-1.png" alt="payment methods"/>
            </div>
            <button className="form-button" type="submit">
                <Link to="/thank-you" onClick={props.resetCart}>
                    Zamów
                </Link>
            </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        resetCart: () => dispatch(resetCart())
    }
}

export default connect(null, mapDispatchToProps)(Pay);