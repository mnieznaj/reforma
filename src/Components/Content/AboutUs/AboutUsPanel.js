import React from 'react';

const AboutUsPanel = (props) => {
    const story = props.story;

    return(
        <div className="about-us__panel">
            <img className="about-us__img" src={`${story.img}`} alt={`${story.imgAlt}`}/>
            <div className="about-us-panel__story">
                <h2 className="about-us-panel__title">{story.title}</h2>
                <span className="about-us-panel__description">{story.description}</span>
            </div>
        </div>
    )
}

export default AboutUsPanel;