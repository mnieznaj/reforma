import React from 'react';

const PresentationPanel = (props) => {
    const styleColor = {
        color: props.color
    }
    const styleStoryPanelStats = {
        paddingLeft: props.prcntgOffX,
        paddingTop: props.prcntgOffY
    }
    const styleQuarter1 = {
        fontFamily: 'Tulpen One',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '240px'
    }
    const styleQuarter4 = {
        color: props.color,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '150%'
    }
    const styleStoryPanel = {
        backgroundImage: `url(${props.gif})`,
        backgroundPosition: `left ${props.gifOffX} top ${props.gifOffY}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    }
    return(
        <div className="story-panel" style={styleStoryPanel}>
            <div className="story-panel__stats" style={styleStoryPanelStats}>
                <span className="quarter-1" style={styleQuarter1}>{props.prcntg}</span>
                <span className="quarter-2" style={styleQuarter1}>%<span className="quarter-colored" style={styleColor}>*</span></span>
                <span className="quarter-3"></span>
                <span className="quarter-4 quarter-colored" style={styleQuarter4}>{props.desc}</span>
            </div>
        </div>
    )
}

export default PresentationPanel;