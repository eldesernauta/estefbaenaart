import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

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

    return (
        <nav className="container mx-auto py-3 flex justify-between items-center text-white">
            <NavbarButton action={handleToggleMenu} showMenu={showMenu} />
            <div
                ref={menuRef}
                className="fixed inset-y-0 left-0  flex flex-col bg-black w-64 p-6 text-white z-50 justify-between items-start"
            >
                <button
                    className="text-white font-bold text-lg mb-4 absolute top-4 right-4"
                    onClick={handleToggleMenu}
                >
                    &#10005;
                </button>
                <ul className="font-Josefine">
                    <li className="mb-2">
                        <a className="text-white  text-xl" href="#home">
                            Home
                        </a>
                    </li>
                    <li className="mb-2">
                        <a className="text-white  text-xl" href="#bio">
                            Bio
                        </a>
                    </li>
                    <li className="mb-2">
                        <a className="text-white  text-xl" href="#commissions">
                            Commission
                        </a>
                    </li>
                    <li className="mb-2">
                        <a className="text-white  text-xl" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className='w-full flex justify-center items-center gap-3'>
                    <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faFacebookF} size='15' /></li>
                    <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faInstagram} size='15' /></li>
                    <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faLinkedinIn} size='15' /></li>
                </ul>

            </div>
            <Image src={logo} alt="Logo" width={`250`} height={`40`} />
            <a
                href="#contact"
                className="text-black px-4 py-2 rounded font-Josefin uppercase font-semibold tracking-widest"
            >
                Contact
            </a>
        </nav>
    );
};

export default NavBar;


