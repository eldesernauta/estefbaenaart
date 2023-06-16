const Footer = () => {
    return (
        <section className="container mx-auto flex justify-between items-end pb-8">
            <div className="w-9/12 flex justify-start items-center gap-5">
                <button
                    className="text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
                >
                    Home
                </button>
                <button
                    className="text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
                >
                    Bio
                </button>
                <button
                    className="text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
                >
                    Commissions
                </button>
                <button
                    className="text-black px-4 py-0 -m-3 rounded font-Josefin uppercase font-semibold tracking-widest"
                >
                    Linkedin
                </button>
            </div>
            <div className="w-3/12 flex justify-end">
                <p>2023 © Estef Baena</p>
            </div>
        </section>
    )
}

export default Footer