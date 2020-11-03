import React from 'react';
import { Link } from 'react-router-dom';

const Pay = () => {

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
                <Link to="/thank-you">Zamów</Link>
            </button>
        </div>
    )
}

export default Pay;