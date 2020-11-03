import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Cart from './Components/Cart/Cart';
import Manifest from './Components/Content/Manifest/Manifest';
import AboutUs from './Components/Content/AboutUs/AboutUs';
import Shop from './Components/Content/Shop/Shop';
import Contact from './Components/Content/Contact/Contact';
import OrderSummary from './Components/Content/OrderSummary/OrderSummary';
import Pay from './Components/Content/OrderSummary/Pay';
import ThankYou from './Components/ThankYou/ThankYou';
import Footer from './Components/Footer/Footer';
import Navigation from'./Components/Navigation/Navigation';
import SideText from './Components/SideText/SideText';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const App = () => {
    return (
        <BrowserRouter>
          <ScrollToTop />
          <SideText />
          <Navigation />
          <Cart />
          <Switch>
            <Route path="/" exact component={Manifest} />
            <Route path="/manifest" exact component={Manifest} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/order-summary" exact component={OrderSummary} />
            <Route path="/pay" exact component={Pay}/>
            <Route path="/contact" exact component={Contact} />
            <Route path="/thank-you" exact component={ThankYou}/>
          </Switch>
          <Footer />
        </BrowserRouter>
    );
}

export default App;