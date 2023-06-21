import { useState } from 'react';
import gsap from 'gsap';
import Image from "next/image"
import CommissionButton from "./commissionButton"

const whaleImg = require("../src/img/commissions_the-whale.jpg")
const elephantImg = require("../src/img/commissions_the-elephant.jpg")
const chimpanzeeImg = require("../src/img/commissions_the-chimpanzee.jpg")

const Commissions = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const animateContent = (contentRef) => {
        gsap.from(contentRef, { opacity: 0, x: '-100%', duration: 1, ease: "elastic.out(1, 1)" });
    };

    return (
        <section id="commissions" className="container mx-auto flex flex-col gap-5 lg:gap-12 mb-10 2xl:mb-20 px-5 2xl:px-0">
            <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end gap-5 lg:gap-0'>
                <div className='w-full lg:w-4/12 text-center lg:text-left'>
                    <h2>Commissions</h2>
                </div>
                <div className='w-full lg:w-8/12 flex justify-between items-stretch lg:items-center gap-1 lg:gap-3'>
                    <div className='w-4/12'
                        onClick={() => handleTabChange(0)}><CommissionButton active={activeTab} price="$100 - $200" /></div>
                    <div className='w-4/12'
                        onClick={() => handleTabChange(1)}><CommissionButton active={activeTab} price="$200 - $500" /></div>
                    <div className='w-4/12'
                        onClick={() => handleTabChange(2)}><CommissionButton active={activeTab} price="Over $500" /></div>
                </div>
            </div>
            <div
                className={`w-full flex flex-col lg:flex-row ${activeTab === 0 ? '' : 'hidden'}`}
                ref={animateContent}>
                <div className='w-full lg:w-3/12 bg-white flex flex-col items-center justify-center py-8 lg:py-4 px-5 lg:px-2 xl:px-4 gap-3 lg:gap-5'>
                    <h4 className='text-4xl text-center font-semibold'>Lorem Ipsum</h4>
                    <p className="text-center my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie quis velit vel lacinia. Suspendisse ut enim non massa facilisis accumsan. Maecenas at laoreet quam, posuere convallis nisi.
                    </p>
                    <button
                        className="w-full text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
                    >
                        I want it!
                    </button>
                </div>
                <div className='w-full lg:w-9/12'>
                    <Image src={whaleImg} alt="Whale Commissions Image" className='w-full h-100 object-cover' />
                </div>
            </div>
            <div
                className={`w-full flex flex-col lg:flex-row ${activeTab === 1 ? '' : 'hidden'}`}
                ref={animateContent}>
                <div className='w-full lg:w-3/12 bg-white flex flex-col items-center justify-center py-8 lg:py-4 px-5 lg:px-2 xl:px-4 gap-3 lg:gap-5'>
                    <h4 className='text-4xl text-center font-semibold'>Lorem Ipsum</h4>
                    <p className="text-center my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie quis velit vel lacinia. Suspendisse ut enim non massa facilisis accumsan. Maecenas at laoreet quam, posuere convallis nisi.
                    </p>
                    <button
                        className="w-full text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
                    >
                        I want it!
                    </button>
                </div>
                <div className='w-full lg:w-9/12'>
                    <Image src={chimpanzeeImg} alt="Whale Commissions Image" className='w-full h-100 object-cover' />
                </div>
            </div>
            <div
                className={`w-full flex flex-col lg:flex-row ${activeTab === 2 ? '' : 'hidden'}`}
                ref={animateContent}>
                <div className='w-full lg:w-3/12 bg-white flex flex-col items-center justify-center py-8 lg:py-4 px-5 lg:px-2 xl:px-4 gap-3 lg:gap-5'>
                    <h4 className='text-4xl text-center font-semibold'>Lorem Ipsum</h4>
                    <p className="text-center my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie quis velit vel lacinia. Suspendisse ut enim non massa facilisis accumsan. Maecenas at laoreet quam, posuere convallis nisi.
                    </p>
                    <button
                        className="w-full text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
                    >
                        I want it!
                    </button>
                </div>
                <div className='w-full lg:w-9/12'>
                    <Image src={elephantImg} alt="Whale Commissions Image" className='w-full h-100 object-cover object-top' />
                </div>
            </div>
        </section>
    )
}

export default Commissions