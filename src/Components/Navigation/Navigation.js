import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { displayCartHandler } from '../../store/actions/cartActions';

import BasketIcon from '../BasketIcon/BasketIcon';

const Navigation = props => {
    const hideCartIcon = props.cartDisplay ? {display: 'none'} : null;

    const showMenu = () => {
        const nav = document.getElementById("nav-list");
        nav.classList.toggle("nav-list--show");
    }

    return(
        <React.Fragment>
            <nav className="nav">
                <Link to="/">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="white" className="nav-logo" style={{mixBlendMode: "difference"}} xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V40H40V0H0ZM39.182 8.23449V39.182H12.1609V27.8391L23.9127 16.0873L31.9564 8.26176H39.182V8.23449ZM16.0873 8.23449L12.1609 12.1336V0.817996H23.5037L16.0873 8.23449Z" fill="white"/>
                    </svg>
                </Link>
            
                <ul className="nav-list" id="nav-list">
                    <li className="nav-list-item" onClick={showMenu}><NavLink to="/manifest">manifest</NavLink></li>
                    <li className="nav-list-item" onClick={showMenu}><NavLink to="/about-us">o nas</NavLink></li>
                    <li className="nav-list-item" onClick={showMenu}><NavLink to="/shop">sklep</NavLink></li>
                    <li className="nav-list-item" style={hideCartIcon} onClick={() => props.onDisplayCart(true)}>
                        <BasketIcon right="100px" top="4px" />
                    </li>
                </ul>
            </nav>

            <svg className="nav-hamburger" onClick={showMenu} width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="30" height="29" stroke="white"/>
                <rect x="5.25" y="22.25" width="20.5" height="0.5" fill="white"/>
                <rect x="5.25" y="22.25" width="20.5" height="0.5" stroke="white" strokeWidth="0.5"/>
                <rect x="5.25" y="15.25" width="20.5" height="0.5" fill="white"/>
                <rect x="5.25" y="15.25" width="20.5" height="0.5" stroke="white" strokeWidth="0.5"/>
                <rect x="5.25" y="8.25" width="20.5" height="0.5" fill="white"/>
                <rect x="5.25" y="8.25" width="20.5" height="0.5" stroke="white" strokeWidth="0.5"/>
            </svg>
            <div id="basket-icon-mobile" className="basket-icon-mobile" onClick={() => props.onDisplayCart(props.cartDisplay ? false : true)}>
                <BasketIcon right="0px" top="5px" />
            </div>
            </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        cartDisplay: state.display
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDisplayCart: (display) => dispatch(displayCartHandler(display))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);