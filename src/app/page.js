"use client";

import { useEffect, useRef } from 'react';
import Image from "next/image";
import { Link } from "react-scroll"

import Line from "../../components/line";
import NavBar from "../../components/navBar";
import Commission from '../../components/commissions';
import Footer from '../../components/footer';
import Title from '../../components/title';
import WordAnimation from '../../components/wordAnimation';

const heroBg = require("../img/hero-bg.jpg")
const bioBg = require("../img/bio-bg.jpg")
const catImg = require("../img/cat-image.jpg")

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}

export default function Home() {
  useInterval(() => {
    const ele = document.querySelectorAll("span");
    for (var i = 1; i < ele.length; i++) {
      ele[i].style.transform = "rotate(" + i * 14.5 + "deg)";
    }
  }, 100);

  useEffect(() => {
    const emblem = document.querySelector('.emblem');
    if (emblem) {
      emblem.innerHTML = emblem.textContent.replace(/\S/g, "<span>$&</span>");
    }
  }, []);

  return (
    <main className="w-full p-0 m-0">
      {/* Navigation bar */}
      <NavBar />
      {/* Title section: Welcome */}
      <Title />

      {/* Hero section */}
      <section className="container h-[calc(100vh-250px)] xs:h-[calc(100vh-300px)] sm:h-[calc(100vh-300px)] md:h-[calc(100vh-300px)] lg:h-[calc(100vh-200px)] 2xl:h-[calc(100vh-300px)] mx-auto flex flex-col-reverse lg:flex-row items-stretch -mt-4 lg:-mt-12 relative px-0 lg:px-5 2xl:px-0">
        <Image src={heroBg} alt="hero image"
          fill
          object-fit="cover"
          quality={100} className="relative z-0 opacity-50 object-cover object-bottom mix-blend-darken pointer-events-none" />

        <div className="w-full lg:w-3/6 h-52 lg:h-auto flex flex-col justify-between items-stretch px-5 lg:px-0">
          <hr className="opacity-0" />
          <WordAnimation word="display artist" />
          <div className="flex flex-col gap-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            <div className="flex">
              <Line />
              <Link to="commissions" spy={true} smooth={true} offset={50} duration={500}
                className="w-56 text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest cursor-pointer"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/6 flex justify-end items-start">
        </div>
      </section>

      {/* Biography section */}
      <section id='bio' className="container mx-auto flex flex-col lg:flex-row items-stretch my-10 lg:my-20 px-5 xl:px-0">
        <div className="relative w-6/6 lg:w-3/6 flex justify-start items-center">
          <Image src={bioBg} alt="Flowers" width={500} height={100} className="relative z-0 h-100 object-cover object-top hidden xl:block" />

          <div className="block lg:absolute lg:right-0 xl:-right-24 2xl:right-0 w-full lg:w-96 h-96 flex justify-center lg:justify-start items-center">
            <Image src={catImg} alt="Cat Image" className="w-60 h-60 rounded-full" />
            <div className="emblem text-2xl font-Josefin uppercase font-light absolute top-11 left-2/4 lg:left-30 animate-spinText">Estef Baena ~ Display Artist ~ </div>
          </div>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col justify-end items-center pr-0 xl:pr-5 2xl:pr-0">
          <h2>Bio</h2>
          <p className="text-center my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie quis velit vel lacinia. Suspendisse ut enim non massa facilisis accumsan. Maecenas at laoreet quam, posuere convallis nisi. Praesent risus dui, pellentesque vel ligula eu, laoreet venenatis massa. Vestibulum lacinia urna non mauris tristique posuere. Praesent urna orci, pellentesque et molestie mollis, feugiat at enim.
          </p>
          <p className="text-center">
            In hac habitasse platea dictumst. Donec eu sollicitudin est. Phasellus sapien erat, suscipit in finibus eu, pellentesque at quam. Maecenas at eros quam. In cursus mi a placerat pellentesque. Donec eu nibh quis metus porttitor condimentum. Donec sed tortor sed dui facilisis suscipit fermentum quis dolor. Aliquam et felis vel nulla accumsan mollis non vitae risus. Integer fringilla leo
          </p>
        </div>
      </section>

      {/* Commissions section */}
      <Commission />

      {/* Contact section */}
      <section id='contact' className='container mx-auto mb-20 lg:mb-24 2xl:mb-32 flex flex-col gap-12 px-5 lg:px-0'>
        <div className='w-full lg:w-5/12 mx-auto text-center flex flex-col gap-5'>
          <h2 className=''>Contact</h2>
          <div className='w-9/12 mx-auto'>
            <Line />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie quis velit vel lacinia.</p>
        </div>
        <div className='w-full lg:w-8/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 px-4 lg:px-0'>
          <div className='w-full lg:w-auto flex flex-col gap-2 lg:gap-5'>
            <h6>Email</h6>
            <a href='mailto:estefbaenaart@gmail.com' target='_blank'>estefbaenaart@gmail.com</a>
          </div>
          <div className='w-full lg:w-auto flex flex-col gap-2 lg:gap-5'>
            <h6>Phone</h6>
            <a href='tel:*17295915859' target='_blank'>+1 (720) 591-5859</a>
          </div>
          <div className='w-full lg:w-auto flex flex-col gap-2 lg:gap-5'>
            <h6>Location</h6>
            <a href=''>Denver, Colorado U.S</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}