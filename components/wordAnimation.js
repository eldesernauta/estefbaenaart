import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';

const WordAnimation = (props) => {
    const textRef = useRef(null);

    useEffect(() => {
        const text = SplitType.create(textRef.current);
        const timeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });

        timeline.to('.char', {
            y: 1,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.5,
        });
    }, []);

    return (
        <h4
            ref={textRef}
            className="text-3xl self-center mask-polygon"
            id="target"
        >
            {props.word}
        </h4>
    );
};

export default WordAnimation;
