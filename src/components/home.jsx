import { format } from "date-fns";
import locationIcon from '../assets/icon-location.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import linkIcon from '../assets/icon-website.svg'
import companyIcon from '../assets/icon-company.svg'
const Home = ({fetchedResult}) => {
    
    return (
        <div className="grid grid-cols-4 gap-5  bg-dark-main rounded-xl py-7 px-5 text-white mobile:flex mobile:flex-col">
            <section className=" col-span-1 flex justify-center h-full mobile:w-full mobile:items-center mobile:">
                <img className=" rounded-full aspect-square w-[80px] h-[80px] " src={fetchedResult && fetchedResult['avatar_url']} alt="profile pic" />
            </section>
            <section className=" col-span-3 ">
                <header className="flex justify-between gap-4 mobile:flex-col">
                    <div>
                        <h1 className=" font-bold text-xl mobile:text-center">{fetchedResult && fetchedResult['name']}</h1>
                        <p className=" text-[#1E2AB8] font-semibold text-xs mobile:text-center">@{fetchedResult && fetchedResult['login']}</p>
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
                <section className="grid grid-cols-2  gap-x-9 gap-y-5 text-xs mt-5 mobile:grid-cols-1">
                    <div className="flex gap-3">
                        <img className="h-4 w-3" src={locationIcon} alt="" />
                        <p>{fetchedResult && fetchedResult['location'] ? fetchedResult['location'] : <span className=" opacity-40">Not available</span>}</p>
                    </div>
                    <div className="flex gap-3">
                        <img className="h-4 w-3" src={twitterIcon} alt="" />
                        <p>{fetchedResult && fetchedResult['twitter_username'] ? fetchedResult['twitter_username'] : <span className=" opacity-40">Not available</span>}</p>
                    </div>
                    <div className="flex gap-3">
                        <img className="h-4 w-3" src={linkIcon} alt="" />
                        <p>{fetchedResult && fetchedResult['blog']? fetchedResult['blog'] : <span className=" opacity-40">Not available</span>}</p>
                    </div>
                    <div className="flex gap-3">
                        <img className="h-4 w-3" src={companyIcon} alt="" />
                        <p>{fetchedResult && fetchedResult['company'] ? fetchedResult['company'] :  <span className=" opacity-40">Not available</span>}</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Home