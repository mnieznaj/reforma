import React from 'react';
import BreakPanel from './BreakPanel/BreakPanel';
import PresentationPanel from './PresentationPanel/PresentationPanel';

const Manifest = () => {
    class Story {
        constructor(percentage, description, prcntgOffsetX, prcntgOffsetY, color, gifSrc, gifOffsetX, gifOffsetY){
            this.prcntg = percentage;
            this.desc = description;
            this.prcntgOffX = prcntgOffsetX;
            this.prcntgOffY = prcntgOffsetY;
            this.color = color;
            this.gif = gifSrc;
            this.gifOffX = gifOffsetX;
            this.gifOffY = gifOffsetY
        }
    }
    class Break {
        constructor(imgSrc, imgOffsetX){
            this.img = imgSrc;
            this.imgOffX = imgOffsetX
        }
    }
    const stories = [
        new Story('20',`*Przemysł odzieżowy 
        powoduje 20% globalnego 
        zanieczyszczenia wody`, "21%", "21%", "blue","./Assets/Imgs/gif/plakat-20.gif", "45.7vw", 0),
        new Story('57', `*57% ubrań trafi na wysypisko
        25% zostanie spalone
        10% zostanie poddane recyklingowi
        8% zostanie użyte ponownie`,'25%','25%', 'green','./Assets/Imgs/gif/plakat-57.gif', "52.8vw", 0),
        new Story('15', `*15% materiału trafi do 
        śmieci po samym etapie 
        krojenia`,'55%','10%', 'red','./Assets/Imgs/gif/plakat-15.gif', "12.8vw", 0),
        new Story('30', `*Nie  używamy około 
        30% ubrań, które 
        posiadamy`,'25%','30%', 'pink','./Assets/Imgs/gif/plakat-30.gif', "49vw", 0),
        new Story('10', `*Przemysł modowy 
        odpowiada za 10%
         światowego śladu 
         węglowego`,'50.5%','20%', 'grey','./Assets/Imgs/gif/plakat-10.gif', "14.7vw", 0)
    ];
    const breaks = [
        new Break('./Assets/Imgs/breaks/break-1.png', "34%"),
        new Break('./Assets/Imgs/breaks/break-2.png', "0%"),
        new Break('./Assets/Imgs/breaks/break-3.png', "19%"),
        new Break('./Assets/Imgs/breaks/break-4.png', "19%"),
    ];

    // <BreakPanel img={} imgOffX={}/>
    // <PresentationPanel prcntg={} desc={} prcntgOffX={} prcntgOffY={} color={} gif={} gifOffX={} gifOffY={}/>

    const output = (
        <div>
            {
                stories.map((story, index) => {
                    if(index < stories.length - 1){
                        return (
                            <React.Fragment>
                                <PresentationPanel prcntg={story.prcntg} desc={story.desc} prcntgOffX={story.prcntgOffX} prcntgOffY={story.prcntgOffY} color={story.color} gif={story.gif} gifOffX={story.gifOffX} gifOffY={story.gifOffY}/>
                                <BreakPanel img={breaks[index].img} imgOffX={breaks[index].imgOffX}/>
                            </React.Fragment>
                        )
                    } else {
                        return (
                                <PresentationPanel prcntg={story.prcntg} desc={story.desc} prcntgOffX={story.prcntgOffX} prcntgOffY={story.prcntgOffY} color={story.color} gif={story.gif} gifOffX={story.gifOffX} gifOffY={story.gifOffY}/>
                        )
                    }
                })
            }
        </div>
    );

    return(
        <div className="content">
            {output}
        </div>
    )
}

export default Manifest;