const CommissionButton = (props) => {

    return (
        <button className={`w-full h-20 sm:h-auto border-t-2 border-b-2 border-black font-Josefin font-light md:font-bold p-4  bg-transparent text-black hover:bg-black hover:text-white transition duration-500`}>
            {props.price}
        </button>
    )
}

export default CommissionButton



