const Home = ({fetchedResult}) => {
    
    return (
        <div className="grid grid-cols-3 gap-2  bg-dark-main">
            <section className=" col-span-1 flex justify-center items-center">
                <img className=" rounded-full aspect-square w-[70%] " src={fetchedResult && fetchedResult['avatar_url']} alt="profile pic" />
            </section>
            <section className=" col-span-2 bg-red-700">
                <header>
                    <div></div>
                    <div></div>
                </header>
                <p></p>
                <div>
                    <div>
                        <span></span>
                        <h1></h1>
                    </div>
                    <div>
                        <span></span>
                        <h1></h1>
                    </div>
                    <div>
                        <span></span>
                        <h1></h1>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h2></h2>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2></h2>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2></h2>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2></h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home