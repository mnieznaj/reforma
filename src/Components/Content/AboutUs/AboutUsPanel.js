import React from 'react';

const AboutUsPanel = props => {
    const story = props.story;

    return(
        <React.Fragment>
            <div className="about-us__panel">
                <img className="about-us__img about-us__img--mobile" src={story.imgMobile} alt={`${story.imgAlt}`}/>
                <img className="about-us__img about-us__img--desktop" src={story.imgDesktop} alt={`${story.imgAlt}`}/>
                <div className="about-us-panel__story">
                    <h2 className="about-us-panel__title">{story.title}</h2>
                    <span className="about-us-panel__description">{story.description}</span>
                </div>
            </div>
            {props.children}
        </React.Fragment>
    )
}

export default AboutUsPanel;