import Line from "./line"

const Title = () => {
    return (
        <section id="home" className="container mt-12 mx-0 md:mx-auto h-24 flex flex-col md:flex-row justify-center items-center md:items-end gap-5 z-10 relative pointer-events-none">
            <div className="w-3/6 flex justify-center items-end">
                <h1 className="font-Slackside text-8xl md:text-10xl">Welcome</h1>
            </div>
            <div className="w/full md:w-3/6 flex flex-col justify-end items-start gap-3">
                <Line />
                <h5 className="relative z-20 text-2xl tracking-title">to my site</h5>
            </div>
        </section>
    )
}

export default Title