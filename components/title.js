import Line from "./line"

const Title = () => {
    return (
        <section id="home" className="container mt-0 lg:-mt-4 xl:mt-8 mx-0 lg:mx-auto h-24 flex flex-col lg:flex-row justify-center items-center lg:items-end gap-5 z-10 relative pointer-events-none">
            <div className="w-full lg:w-3/6 flex justify-center items-end">
                <h1 className="font-Slackside text-8xl lg:text-9xl xl:text-10xl">Welcome</h1>
            </div>
            <div className="w/full lg:w-3/6 flex flex-col justify-end items-start gap-3">
                <Line />
                <h5 className="relative mt-1 z-20 text-2xl tracking-title">to my site</h5>
            </div>
        </section>
    )
}

export default Title