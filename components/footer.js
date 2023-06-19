import { useEffect } from 'react';
import { Link } from "react-scroll"
import { animateScroll as scroll } from 'react-scroll';

const linkStyles = "text-black px-4 py-0 -m-3 text-sm font-Josefin uppercase font-semibold tracking-widest cursor-pointer"

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
        <section className="container mx-auto flex flex-col lg:flex-row justify-between items-end gap-5 lg:gap-0 pb-10 px-0 lg:px-5 2xl:px-0">
            <div className="w-full lg:w-9/12 flex justify-center lg:justify-start items-stretch lg:items-center gap-0 lg:gap-5">
                <Link id="top-link" to="/" passhref="true" spy={true} smooth={true} offset={50} duration={500} className={linkStyles}>
                    Home
                </Link>
                <Link to="bio" spy={true} smooth={true} offset={50} duration={500}
                    className={linkStyles}>
                    Bio
                </Link>
                <Link to="commissions" spy={true} smooth={true} offset={50} duration={500}
                    className={linkStyles}>
                    Commissions
                </Link>
                <a href="https://linkedin.com" target="_blank"
                    className={linkStyles}>
                    Linkedin
                </a>
            </div>
            <div className="w-full lg:w-3/12 flex justify-center lg:justify-end">
                <p>2023 © Estef Baena</p>
            </div>
        </section>
    )
}

export default Footer