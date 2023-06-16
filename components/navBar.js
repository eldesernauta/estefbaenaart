import Image from 'next/image';

import NavbarButton from './navBarButton';

const logo = require('../src/img/logo.svg')

const NavBar = () => {

    return (
        <nav className="container mx-auto py-3 flex justify-between items-center text-white absolute top-0 left-10 z-50">
            <NavbarButton />

            <Image src={logo} alt="Logo" width={`250`} height={`40`} />
            <button
                className=" text-black px-4 py-2 rounded font-Josefin uppercase font-semibold tracking-widest"
            >
                Contact
            </button>
        </nav>
    );
};

export default NavBar;

