'use client';
import NavBar from "../../components/navBar"
import Image from "next/image";
import Line from "../../components/line";
import ReactPlayer from 'react-player'

const heroImg = require("../img/estef.jpg")
const video = require("../img/estef_display.mp4")
export default function Home() {
  return (
    <main className="w-full p-0 m-0">
      <NavBar />
      <section id="s1" className="container mt-24 mx-0 md:mx-auto h-24 flex flex-col md:flex-row justify-center items-center md:items-end gap-5 z-10 relative">
        <div className="w-3/6 flex justify-center items-end">
          <h1 className="font-Slackside text-8xl md:text-10xl">Welcome</h1>
        </div>
        <div className="w/full md:w-3/6 flex flex-col justify-end items-start gap-3">
          <Line />
          <h6 className="relative z-20 tracking-title">to my site</h6>
        </div>
      </section>
      <section className="container mx-auto flex items-stretch -mt-20 relative pb-5">
        <div className="w-3/6 flex flex-col justify-between items-center">
          <hr />
          <h4 className="text-3xl">portraits</h4>
          <div className="flex flex-col gap-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            <div className="flex">
              <Line />
              <button
                className="w-2/6 text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/6 flex justify-end items-start">
          <Image src={heroImg} alt="hero image" width={500} height={100} className="relative z-0" />
        </div>
      </section>
      <section className="container mx-auto flex items-stretch ">
        <div className="w-3/6 flex justify-start items-center">
          <ReactPlayer url={video} />
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
      <section className="container mx-auto flex items-end">
        <div>
          <h2>Commisions</h2>
        </div>
        <div>
          <table>
            <tr>
              <td><button>Hola</button></td>
              <td><button>Hola</button></td>
              <td><button>Hola</button></td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
}

