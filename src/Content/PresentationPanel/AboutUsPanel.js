import React from 'react';

const AboutUsPanel = (props) => {
    const story = props.story;
    const marginTop = `${story.offsetY * window.innerHeight}px`;
    const marginRight = `${story.offsetX * window.innerWidth}px`;
    console.log(story.imgStyle);

    return(
        <div className="story-panel about-us-panel">
            <img src={`${story.img}`} alt={`${story.imgAlt}`} style={{...story.imgStyle}} />
            <div className="about-us-panel__story" style={story.textStyle}>
                <h2 className="about-us-panel__title">{story.title}</h2>
                <span className="about-us-panel__subtitle">{story.subtitle}</span>
                <span className="about-us-panel__description">{story.description}</span>
            </div>
        </div>
    )
}

export default AboutUsPanel;