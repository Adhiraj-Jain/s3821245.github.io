import React from 'react';
import "../../Stylesheets/Quote.css";

const Quote = () => {
    return (
        <div id="Quote">
            <div className="inside">
                <span className="quote">“Whenever I am in a difficult situation where there seems to be no way out, I think about all the times I have been in such situations and say to myself: I did it before, so I can do it again.”</span>
                <span className="author">- Idowu Koyenikan</span>
            </div>
        </div>
    );
};

export default Quote;