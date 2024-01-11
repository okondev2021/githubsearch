import searchIcon from '../assets/icon-search.svg'
const Searchbar = () => {
    return (
        <div className="bg-dark-main mb-5 rounded-xl">
            <form className="flex items-center px-3 py-2">
                <div className="inputBox flex items-center gap-2 w-full">
                    <label htmlFor="searchBox">
                        <img className=' h-4 w-4' src={searchIcon} alt="searchIcon" />
                    </label>
                    <input className='w-full h-full outline-none text-white bg-dark-main text-xs' placeholder='Search Github username...' type="text" name="searchBox" id="searchBox" />
                </div>
                <input className=' bg-dark-button text-white text-xxsm px-5 py-3 rounded-md cursor-pointer' type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Searchbar