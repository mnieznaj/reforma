import React from 'react';

const Pay = () => {

    return(
        <div className="pay">
            <h2 className="form-title">Wybierz formę płatności</h2>
            <div className="pay-imgs-desktop">
                <img src="/Assets/Imgs/pay/pay.png"/>
            </div>
            <div className="pay-imgs-mobile">
                <img src="/Assets/Imgs/pay/pay-2.png" />
                <img src="/Assets/Imgs/pay/pay-1.png"/>
            </div>
            <button className="form-button" type="submit">Zamów</button>
        </div>
    )
}

export default Pay;