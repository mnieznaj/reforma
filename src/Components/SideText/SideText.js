import React from 'react';
import './SideText.scss';

const SideText = () => {
    return(
        <React.Fragment>
            <span className="side-text side-text-left" style={{mixBlendMode: "difference"}}>czas na reformę czas na reformę czas na reformę</span>
            <span className="side-text side-text-right" style={{mixBlendMode: "difference"}}>czas na reformę czas na reformę czas na reformę</span>
        </React.Fragment>
    )
}

export default SideText;