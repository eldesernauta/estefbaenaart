const Footer = () => {
    return (
        <section className="container mx-auto flex justify-between items-end pb-10">
            <div className="w-9/12 flex justify-start items-center gap-5">
                <a href="#home"
                    className="text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest"
                >
                    Home
                </a>
                <a href="#bio"
                    className="text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest"
                >
                    Bio
                </a>
                <a href="#commissions"
                    className="text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest"
                >
                    Commissions
                </a>
                <a href="https://linkedin.com" target="_blank"
                    className="text-black px-4 py-0 -m-3 text-sm rounded font-Josefin uppercase font-semibold tracking-widest"
                >
                    Linkedin
                </a>
            </div>
            <div className="w-3/12 flex justify-end">
                <p>2023 © Estef Baena</p>
            </div>
        </section>
    )
}

export default Footer