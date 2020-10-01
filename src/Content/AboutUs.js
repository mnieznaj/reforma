import React from 'react';
import BreakPanel from './BreakPanel/BreakPanel';
import stories from './PresentationPanel/AboutUsStories';
import AboutUsPanel from './PresentationPanel/AboutUsPanel';

const AboutUs = () => {
    
    class Break {
        constructor(imgSrc, imgOffsetX){
            this.img = imgSrc;
            this.imgOffX = imgOffsetX
        }
    }
    
    const breaks = [
        new Break('./Assets/Imgs/breaks/break-1.png', "34%"),
        new Break('./Assets/Imgs/breaks/break-2.png', "0%"),
        new Break('./Assets/Imgs/breaks/break-2.png', "0%"),
        new Break('./Assets/Imgs/breaks/break-3.png', "19%")
    ];

    const output = stories.map((story, index) => {
                    if(index < stories.length - 1){
                        return (
                            <React.Fragment>
                                <AboutUsPanel story={story}/>
                                <BreakPanel img={breaks[index].img} imgOffX={breaks[index].imgOffX}/>
                            </React.Fragment>
                        )
                    } else {
                        return (
                                <AboutUsPanel story={story}/>
                        )
                    }
                });
            

    return(
        <div className="content">
            {output}
        </div>
    )
}

export default AboutUs;