import SplitType from 'split-type'
import { gsap } from 'gsap'

const WordAnimation = (props) => {

    const text = SplitType.create("#target")
    gsap.to(".char", {
        y:0,
        stagger: 0.05,
        delay: 0.2,
        yoyo: true,
        duration: .1,
    })

    return(
        <h4 id="target" className="text-3xl self-center">{props.word}</h4>
    )
}

export default WordAnimation