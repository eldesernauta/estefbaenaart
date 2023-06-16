const CommissionButton = (props) => {

    return (
        <button className="w-full border-t-2 border-b-2 border-black font-Josefin font-bold p-4 bg-transparent text-black hover:bg-black hover:text-white">
            {props.price}
        </button>
    )
}

export default CommissionButton