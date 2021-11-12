import React, { useState, useCallback, useEffect } from 'react';

const words = [
    'Software Engineer', 'Web developer', 'Freelancer'
]

const TextAnimation = () => {
    const [index, setIndex] = useState(0);

    const shuffle = useCallback(() => {
        setIndex(previousIndex => {
            const newIndex = previousIndex >= words.length - 1 ? 0 : previousIndex + 1;
            return newIndex;
        });
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle]);

    return (
        <div id="text_div text-location">
            <div className="text-location">
                <span className="AboutText">
                    Hi, I'm Adhiraj Jain
                    <br />
                    <span className="Animated-Text">{words[index]}</span>
                    <br />
                    based in Australia
                </span>
            </div>
        </div>
    );
};

export default TextAnimation;