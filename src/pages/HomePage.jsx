import mainImg from "../assets/mainImg.png"
import manImg from "../assets/manImg.jpeg"
import { IoIosChatboxes } from "react-icons/io";
import UserItem from "../miniComponent/UserItem";
import ProfileImageStack from "../miniComponent/ProfileImageStack ";

const userData = [
    { name: "Raian Rai", location: "Location", imgSrc: manImg },
    { name: "Raian Rai", location: "Location", imgSrc: manImg },
    { name: "Raian Rai", location: "Location", imgSrc: manImg },
    { name: "Raian Rai", location: "Location", imgSrc: manImg },
    { name: "Raian Rai", location: "Location", imgSrc: manImg },
    { name: "Raian Rai", location: "Location", imgSrc: manImg },
];

const images = [manImg, manImg, manImg, manImg, manImg, manImg];

// const handleRemove = (index) => {
//     console.log(`Remove user at index ${index}`);
// };

const HomePage = () => {
    return (
        <section>
            <div className="h-full w-full flex lg:flex-row flex-col">
                <div className="basis-[25%] bg-[#FDFCFA]">
                    <div className="flex">
                        <div className="basis-[75%] p-4 bg-blue-500">75%</div>
                        <div className="basis-[25%] p-4 bg-green-500">25%</div>
                    </div>
                </div>

                <div className="basis-[75%] bg-[#F3F1EF]">
                    <div className="flex justify-between mx-10 my-10">
                        <div className="w-[50%]">
                            <form className="max-w-md mx-auto">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Mockups, Logos..." required />
                                    <button type="submit" className="text-white absolute end-2.5 top-1/2 transform -translate-y-1/2 bg-[#FF5353] hover:bg-[#c33f3f] focus:ring-4 focus:outline-none focus:ring-[#d14d4d] font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                </div>
                            </form>
                        </div>
                        <button className="px-4 py-2 text-white rounded-full bg-[#FF5353] text-sm ">Create Event</button>
                    </div>

                    <div className="h-screen w-full grid grid-cols-12 px-10">
                        <div className="col-span-7 bg-[#FDFCFA] p-2 rounded-l-lg">
                            <img src={mainImg} alt="" />
                            <p className="font-semibold text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora consectetur</p>

                            <div className="flex lg:flex-row flex-col mt-6">
                                <ProfileImageStack images={images} />
                                <button className="bg-[#232425] text-white px-5 py-2 text-sm rounded-lg flex items-center mr-4 basis-[10%]">Chat <span className="ml-2"><IoIosChatboxes className="text-[20px]" /></span></button>
                                <button className="bg-[#FD6058] text-white px-5 py-2 text-sm rounded-lg basis-[25%]">Delete Event</button>
                            </div>
                        </div>

                        <div className="col-span-5 bg-[#FDFCFA] pl-3">
                            <p className="bg-[#FD6356] rounded-t-3xl px-4 py-3 text-white text-sm">
                                Pending Requests
                            </p>
                            <p className="text-sm font-semibold px-4 py-3 bg-[#E2E3E4]">
                                People going to this event
                            </p>
                            {userData.map((user, index) => (
                                <UserItem key={index} name={user.name} location={user.location} imgSrc={user.imgSrc}
                                // onRemove={() => handleRemove(index)}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;