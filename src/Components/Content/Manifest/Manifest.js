import React from 'react';
import BreakPanel from '../BreakPanel/BreakPanel';
import PresentationPanel from './PresentationPanel/PresentationPanel';
import manifestStories from './manifestStories';

const Manifest = () => {
    class Break {
        constructor(imgSrc, imgOffsetX){
            this.img = imgSrc;
            this.imgOffX = imgOffsetX
        }
    }
    const breaks = [
        new Break('./Assets/Imgs/breaks/break-1.png', "34%"),
        new Break('./Assets/Imgs/breaks/break-2.png', "0%"),
        new Break('./Assets/Imgs/breaks/break-3.png', "19%"),
        new Break('./Assets/Imgs/breaks/break-4.png', "19%"),
        new Break('./Assets/Imgs/breaks/break-4.png', "19%"),
    ];

    const output = (
        <div>
            {
                manifestStories.map((story, index) => {
                    return (
                        <React.Fragment>
                            <PresentationPanel story={story}>
                                <BreakPanel img={breaks[index].img} imgOffX={breaks[index].imgOffX}/>
                            </PresentationPanel>
                        </React.Fragment>
                    )
                })
            }
        </div>
    );

    return(
        <div className="manifest">
            {output}
        </div>
    )
}

export default Manifest;