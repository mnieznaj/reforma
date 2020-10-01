import React from 'react';

const BreakPanel = (props) => {
    const style = {
        display: 'block',
        width: '100%',
        height: '540px',
        backgroundColor: 'black',
        backgroundImage: `url(${props.img})`,
        backgroundPosition: `left ${props.imgOffX}`,
        backgroundRepeat: "no-repeat",
        // background-size: 20px 20px;
    }
    return(
        <div className="story-break" style={style}>
        </div>
    );
}

export default BreakPanel;