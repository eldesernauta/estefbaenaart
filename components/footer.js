import { useEffect, useRef } from 'react';
import { Link } from "react-scroll"
import { animateScroll as scroll } from 'react-scroll';

const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
    useEffect(() => {
        const handleClick = (e) => {
            e.preventDefault();
            scroll.scrollToTop({
                duration: 500,
                smooth: 'easeInOut',
            });
        };

        const topElement = document.getElementById('top-link');
        if (topElement) {
            topElement.addEventListener('click', handleClick);
        }

        return () => {
            if (topElement) {
                topElement.removeEventListener('click', handleClick);
            }
        };
    }, []);


    return (
        <section className="container mx-auto flex justify-between items-end pb-10">
            <div className="w-9/12 flex justify-start items-center gap-5">
                <Link to="/" passHref spy={true} smooth={true} offset={50} duration={500}>
                    <a id="top-link" className="text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest cursor-pointer">
                        Home
                    </a>
                </Link>
                <Link to="bio" spy={true} smooth={true} offset={50} duration={500}
                    className="text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest cursor-pointer">
                    Bio
                </Link>
                <Link to="commissions" spy={true} smooth={true} offset={50} duration={500}
                    className="text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest cursor-pointer">
                    Commissions
                </Link>
                <a href="https://linkedin.com" target="_blank"
                    className="text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest cursor-pointer">
                    Linkedin
                </a>
            </div>
            <div className="w-3/12 flex justify-end">
                <p>2023 © Estef Baena</p>
            </div>
        </section>
    )
}

export default Footer