import React from 'react';
import BreakPanel from '../BreakPanel/BreakPanel';
import { breaks } from '../BreakPanel/breaksList';
import PresentationPanel from './PresentationPanel/PresentationPanel';
import manifestStories from './manifestStories';

const Manifest = () => {
    const output = manifestStories.map((story, index) => {
        return (
            <PresentationPanel story={story} key={`manifest-${story.percentage}`}>
                <BreakPanel img={breaks[index].img} imgOffX={breaks[index].imgOffX}/>
            </PresentationPanel>
        )
    });

    return(
        <div className="manifest">
            {output}
        </div>
    )
}

export default Manifest;