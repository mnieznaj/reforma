import React from 'react';
import BreakPanel from '../BreakPanel/BreakPanel';
import { breaks } from '../BreakPanel/breaksList';
import stories from './AboutUsStories.json';
import AboutUsPanel from './AboutUsPanel';

const AboutUs = () => {
    const output = stories.map((story, index) => {
        if(index < stories.length - 1){
            return (
                    <AboutUsPanel key={story.title} story={story}>
                        <BreakPanel img={breaks[index].img} imgOffX={breaks[index].imgOffX}/>
                    </AboutUsPanel>
            )
        } else {
            return (
                    <AboutUsPanel key={story.title} story={story}/>
            )
        }
    });

    return(
        <div className="about-us">
            {output}
        </div>
    )
}

export default AboutUs;