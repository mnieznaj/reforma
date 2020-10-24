import React from 'react';

const BreakPanel = (props) => {
    const style = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: `left ${props.imgOffX}`,
    }
    return(
        <div className="story-break" style={style}>
        </div>
    );
}

export default BreakPanel;