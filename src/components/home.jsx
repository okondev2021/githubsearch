import { format } from "date-fns";
const Home = ({fetchedResult}) => {
    
    return (
        <div className="grid grid-cols-4 gap-10  bg-dark-main rounded-xl py-7 px-4 text-white">
            <section className=" col-span-1 flex justify-center items-center">
                <img className=" rounded-full aspect-square w-[100%] " src={fetchedResult && fetchedResult['avatar_url']} alt="profile pic" />
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
                <section className=" bg-dark-background">
                    helllo
                </section>
                
            </section>
        </div>
    )
}

export default Home