import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-scroll"
import Image from 'next/image';

import NavbarButton from './navBarButton';

const logo = require('../src/img/logo.svg')

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
        const menu = menuRef.current;
        if (!showMenu) {
            gsap.to(menu, { x: '0%', duration: 0.3, ease: 'power2.out' });
        } else {
            gsap.to(menu, { x: '-100%', duration: 0.3, ease: 'power2.out' });
        }
    };

    useEffect(() => {
        const menu = menuRef.current;
        gsap.set(menu, { x: '-100%' });
    }, []);

    return (
        <nav className="container mx-auto py-3 flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-center text-white">
            <NavbarButton action={handleToggleMenu} showMenu={showMenu} />
            <div
                ref={menuRef}
                className="fixed inset-y-0 left-0 box-border flex flex-col bg-gray-900 w-[calc(100%-15px)] md:w-64 p-6 text-white z-50 justify-between items-start"
                >
                <button
                    className="text-white font-bold text-lg mb-4 absolute top-4 right-4"
                    onClick={handleToggleMenu}
                >
                    &#10005;
                </button>
                <ul className="font-Josefine">
                    <li className="mb-2">
                        <Link to="/" spy={true} smooth={true} offset={50} duration={500} className="text-white  text-xl cursor-pointer" onClick={handleToggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="bio" spy={true} smooth={true} offset={50} duration={500} className="text-white  text-xl cursor-pointer" onClick={handleToggleMenu} >
                            Bio
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="commissions" spy={true} smooth={true} offset={50} duration={500} className="text-white  text-xl cursor-pointer" onClick={handleToggleMenu} >
                            Commission
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="text-white  text-xl cursor-pointer" onClick={handleToggleMenu} >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className='w-full flex flex-col gap-5'>
                    <Image src={logo} alt="Logo" width={`250`} height={`40`} className='invert mx-auto' />
                    <ul className='w-full flex justify-center items-center gap-3'>
                        <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faFacebookF} style={{ fontSize: 15 }} /></li>
                        <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15 }} /></li>
                        <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 15 }} /></li>
                    </ul>
                </div>

            </div>
            <Image src={logo} alt="Logo" width={`250`} height={`40`} />
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}
                className="text-black px-4 py-0 m-0 md:-m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest cursor-pointer"
            >
                Contact
            </Link>
        </nav>
    );
};

export default NavBar;


