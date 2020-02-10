import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2 style={{marginTop:"50px"}}>HEALTH SCORE</h2>
                <div className="highlight_description">
                The Fit Indian calculates your health score on the basis of your lifestyle activities, starting from the food you eat to the quality of your sleep, and your current health
                conditions. Utilize it to keep record of every activity that affects your health, and the calculated score will keep you accountable to make the necessary lifestyle changes.
                </div>
            </div>
        </Fade>
    );
};

export default Description;