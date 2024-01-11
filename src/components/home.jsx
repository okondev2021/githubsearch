import { format } from "date-fns";
const Home = ({fetchedResult}) => {
    
    return (
        <div className="grid grid-cols-4 gap-5  bg-dark-main rounded-xl py-7 px-5 text-white">
            <section className=" col-span-1 flex justify-center h-full">
                <img className=" rounded-full aspect-square w-[80px] h-[80px] " src={fetchedResult && fetchedResult['avatar_url']} alt="profile pic" />
            </section>
            <section className=" col-span-3">
                <header className="flex justify-between">
                    <div>
                        <h1 className=" font-bold text-xl">{fetchedResult && fetchedResult['name']}</h1>
                        <p className=" text-[#1E2AB8] font-semibold text-xs">@{fetchedResult && fetchedResult['login']}</p>
                        <p className=" text-xs mt-4">{fetchedResult && fetchedResult['bio'] ? fetchedResult['bio'] : 'This profile has no bio'}</p>
                    </div>
                    <div>
                        <p className=" text-xs">Joined {fetchedResult && format(new Date(fetchedResult['created_at']), "d MMM yyyy") }</p>
                    </div>
                </header>
                <section className=" bg-dark-background flex justify-between items-center px-4 py-4 rounded-xl mt-6">
                    <div className="flex flex-col">
                        <span className="text-center text-xs">Repos</span>
                        <p className="text-center">{fetchedResult && fetchedResult['public_repos']}</p>
                    </div>
                    <div>
                        <span className="text-center text-xs">Followers</span>
                        <p className="text-center">{fetchedResult && fetchedResult['followers']}</p>
                    </div>
                    <div>
                        <span className="text-center text-xs">Following</span>
                        <p className="text-center">{fetchedResult && fetchedResult['following']}</p>
                    </div>
                </section>
                <section className="grid grid-cols-2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                
            </section>
        </div>
    )
}

export default Home