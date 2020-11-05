import React from 'react';

const PresentationPanel = props => {
    const story = props.story;
    return(
            <div className="story-panel">
                <img className="story-panel__img" src={story.gifSrc} alt="model with a purse"/>
                <span className="story-panel_wrapper">
                    <span className="story-panel__title">
                        <span className="story-panel__stats-nmbr">{story.percentage}</span>
                        <span className="story-panel__stats-prcnt">%</span>
                        <span className="story-panel__stats-star">*</span>
                    </span>
                    <span className="story-panel__stats-desc">{story.description}</span>
                </span>
            {props.children}
            </div>
    )
}

export default PresentationPanel;