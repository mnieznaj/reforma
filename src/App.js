import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Cart from './Components/Cart/Cart';
import Manifest from './Components/Content/Manifest/Manifest';
import AboutUs from './Components/Content/AboutUs/AboutUs';
import Shop from './Components/Content/Shop/Shop';
import Footer from './Components/Footer/Footer';
import Navigation from'./Components/Navigation/Navigation';
import SideText from './Components/SideText/SideText';

const App = () => {
    return (
        <BrowserRouter>
          <SideText />
          <Navigation />
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

export default App;