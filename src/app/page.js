'use client';
import { useEffect } from 'react';
import Image from "next/image";

import Line from "../../components/line";
import NavBar from "../../components/navBar";
import Commission from '../../components/commissions';
import Footer from '../../components/footer';

const heroImg = require("../img/hero-image.jpg")
const bioBg = require("../img/bio-bg.jpg")
const catImg = require("../img/cat-image.jpg")

export default function Home() {
  const ele = document.querySelectorAll("span")
  for (var i = 1; i < ele.length; i++) {
    ele[i].style.transform = "rotate(" + i * 14 + "deg)"
  }
  useEffect(() => {
    const emblem = document.querySelector('.emblem');
    if (emblem) {
      emblem.innerHTML = emblem.textContent.replace(/\S/g, "<span>$&</span>")
    }
  }, []);

  return (
    <main className="w-full p-0 m-0">
      <NavBar />
      <section id="home" className="container mt-12 mx-0 md:mx-auto h-24 flex flex-col md:flex-row justify-center items-center md:items-end gap-5 z-10 relative pointer-events-none">
        <div className="w-3/6 flex justify-center items-end">
          <h1 className="font-Slackside text-8xl md:text-10xl">Welcome</h1>
        </div>
        <div className="w/full md:w-3/6 flex flex-col justify-end items-start gap-3">
          <Line />
          <h5 className="relative z-20 text-2xl tracking-title">to my site</h5>
        </div>
      </section>
      <section className="container mx-auto flex items-stretch -mt-20 relative pb-5">
        <div className="w-3/6 flex flex-col justify-between items-stretch">
          <hr />
          <h4 className="text-3xl self-center">portraits</h4>
          <div className="flex flex-col gap-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            <div className="flex">
              <Line />
              <a href='#commissions'
                className="w-2/6 text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="w-3/6 flex justify-end items-start">
          <Image src={heroImg} alt="hero image" width={500} height={100} className="relative z-0 h-100 object-cover" />
        </div>
      </section>
      <section id='bio' className="container mx-auto flex items-stretch my-20">
        <div className="relative w-6/6 md:w-3/6 flex justify-start items-center">
          <Image src={bioBg} alt="Flowers" width={500} height={100} className="relative z-0 h-100 object-cover object-top" />
          <div className="absolute right-0 w-96 h-96 flex justify-start items-center">
            <Image src={catImg} alt="Cat Image" className="w-60 h-60 rounded-full" />
            <div className="emblem text-2xl font-light absolute top-11 left-30 animate-spinText">Estef Baena ~ Display Artist ~ </div>
          </div>
        </div>
        <div className="w-3/6 flex flex-col justify-end items-center">
          <h2>Bio</h2>
          <p className="text-center my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie quis velit vel lacinia. Suspendisse ut enim non massa facilisis accumsan. Maecenas at laoreet quam, posuere convallis nisi. Praesent risus dui, pellentesque vel ligula eu, laoreet venenatis massa. Vestibulum lacinia urna non mauris tristique posuere. Praesent urna orci, pellentesque et molestie mollis, feugiat at enim.
          </p>
          <p className="text-center">
            In hac habitasse platea dictumst. Donec eu sollicitudin est. Phasellus sapien erat, suscipit in finibus eu, pellentesque at quam. Maecenas at eros quam. In cursus mi a placerat pellentesque. Donec eu nibh quis metus porttitor condimentum. Donec sed tortor sed dui facilisis suscipit fermentum quis dolor. Aliquam et felis vel nulla accumsan mollis non vitae risus. Integer fringilla leo
          </p>
        </div>
      </section>
      <Commission />
      <section id='contact' className='container mx-auto mb-32 flex flex-col gap-12'>
        <div className='w-5/12 mx-auto text-center flex flex-col gap-5'>
          <h2 className=''>Contact</h2>
          <div className='w-9/12 mx-auto'>
            <Line />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie quis velit vel lacinia.</p>
        </div>
        <div className='w-8/12 mx-auto flex justify-between items-center'>
          <div className='w-auto flex flex-col gap-5'>
            <h6>Email</h6>
            <a href='mailto:estefbaenaart@gmail.com' target='_blank'>estefbaenaart@gmail.com</a>
          </div>
          <div className='w-auto flex flex-col gap-5'>
            <h6>Phone</h6>
            <a href='tel:*17295915859' target='_blank'>+1 (720) 591-5859</a>
          </div>
          <div className='w-auto flex flex-col gap-5'>
            <h6>Location</h6>
            <a href=''>Denver, Colorado U.S</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

