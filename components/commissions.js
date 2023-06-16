import Image from "next/image"
import CommissionButton from "./commissionButton"

const whaleImg = require("../src/img/commissions.jpg")

const Commissions = () => {
    return (
        <section className="container mx-auto flex flex-col gap-12 mb-20">
            <div className='w-full flex justify-between items-end'>
                <div className='w-4/12 text-left'>
                    <h2>Commissions</h2>
                </div>
                <div className='w-8/12 flex justify-between gap-3'>
                    <div className='w-4/12'><CommissionButton price="$100 - $200" /></div>
                    <div className='w-4/12'><CommissionButton price="$200 - $500" /></div>
                    <div className='w-4/12'><CommissionButton price="Over $500" /></div>
                </div>
            </div>
            <div className='w-full flex'>
                <div className='w-3/12 bg-white flex flex-col items-center justify-center p-4 gap-5'>
                    <h4 className='text-4xl font-semibold'>Lorem Ipsum</h4>
                    <p className="text-center my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie quis velit vel lacinia. Suspendisse ut enim non massa facilisis accumsan. Maecenas at laoreet quam, posuere convallis nisi.
                    </p>
                    <button
                        className="w-full text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
                    >
                        I want it!
                    </button>
                </div>
                <div className='w-9/12'>
                    <Image src={whaleImg} alt="Whale Commissions Image" className='w-full h-100 object-cover' />
                </div>
            </div>
        </section>
    )
}

export default Commissions