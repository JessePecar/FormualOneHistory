import SearchBox from './SearchBox.js'

const Card = ({children, placeholder}) => {
    return(
       
        <div className="shadow-lg w-full h-full p-6 bg-white  rounded-md">
            <div className="flex justify-items-start ">
                <SearchBox placeholder={placeholder}></SearchBox>
            </div>
            {children}
        </div>
    )
}

export default Card;