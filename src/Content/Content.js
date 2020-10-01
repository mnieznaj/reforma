import React from 'react';
import Manifest from './Manifest';
import AboutUs from './AboutUs';
import Shop from './Shop';

const Content = (props) => {
    let output;
    if(props.site === 'Manifest'){
        output = <Manifest />;
    }else if(props.site === 'AboutUs'){
        output = <AboutUs />
    }else if(props.site === 'Shop'){
        output = <Shop />
    }
        return(
            <div>
                {output}
            </div>
        );
}

export default Content;