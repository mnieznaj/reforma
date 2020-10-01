import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// import Navigation from './Navigation/Navigation';
import Cart from './Cart/Cart';
import Manifest from './Content/Manifest';
import AboutUs from './Content/AboutUs';
import Shop from './Content/Shop';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';

import { displayCartHandler } from './store/actions/cartActions';


const App = (props) => {
    const isActive = {display: 'inline-blick', borderBottom: "1px solid #000", paddingBottom: "10px"};
    const navMarginRight = props.cartDisplay ? {marginRight: "760px", zIndex: 2} : null;
    const hideCartIcon = props.cartDisplay ? {display: 'none'} : null;


    return (
        <BrowserRouter>
        {/* #root musi mieć backgruond white ale narazie nei działa scss */}
        {/* <span class="side-text">czas na reformę</span> */}
        {/* <span class="side-text">czas na reformę</span> */}

          <span className="side-text side-text-left" style={{mixBlendMode: "difference"}}>czas na reformę czas na reformę czas na reformę</span>
          <span className="side-text side-text-right" style={{mixBlendMode: "difference"}}>czas na reformę czas na reformę czas na reformę</span>
          
          <nav className="nav">
            <span className="nav-logo" style={{mixBlendMode: "difference", color: "white", position: "fixed"}}>
                <Link to="/">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                <path d="M0 0V40H40V0H0ZM39.182 8.23449V39.182H12.1609V27.8391L23.9127 16.0873L31.9564 8.26176H39.182V8.23449ZM16.0873 8.23449L12.1609 12.1336V0.817996H23.5037L16.0873 8.23449Z" fill="black"/>
                </g>
                </svg>
                </Link>
            </span>
          </nav>
            <ul className="nav-list">
                <li className="nav-list-item"><NavLink activeStyle={isActive} to="/manifest">manifest</NavLink></li>
                <li className="nav-list-item"><NavLink activeStyle={isActive} to="/about-us">o nas</NavLink></li>
                <li className="nav-list-item"><NavLink activeStyle={isActive} to="/shop">sklep</NavLink></li>
                <li className="nav-list-item" style={hideCartIcon} onClick={() => props.onDisplayCart(true)}>
                    <svg className="nav-basket-logo" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path d="M29 6.25H1V23.3125L6.56291 29H23.3907L29 23.3125V6.25Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M23.75 1H6.25V6.25H23.75V1Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10"/>
                    </g>
                    </svg>
                </li>
            </ul>
          <Cart />
          <Switch>
            <Route path="/" exact component={Manifest} />
            <Route path="/manifest" exact component={Manifest} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/shop" exact component={Shop} />
          </Switch>
          <Footer />
        </BrowserRouter>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);