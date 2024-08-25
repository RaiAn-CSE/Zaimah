import mainImg from "../assets/mainImg.png"
import manImg from "../assets/manImg.jpeg"
// import { IoIosChatboxes } from "react-icons/io";

const HomePage = () => {
    return (
        <section>
            <div className="h-screen w-full grid grid-cols-12">
                <div className="col-span-4 bg-[#FDFCFA]">
                </div>

                <div className="col-span-8 bg-[#F3F1EF]">

                    <div className="flex justify-between mx-10 my-10">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input rounded-full w-24 md:w-auto" />
                        </div>
                        <div className="">
                            <button className="px-4 py-2 text-white rounded-full bg-[#FF5353] text-sm ">Create Event</button>
                        </div>
                    </div>

                    <div className="h-screen w-full grid grid-cols-12 px-10">
                        <div className="col-span-7 bg-[#FDFCFA] p-2 rounded-l-lg">
                            <img src={mainImg} alt="" />
                            <p className="font-semibold text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora consectetur</p>

                            <div className="grid grid-cols-12 mt-6">
                                <div className="relative col-span-5">
                                    <img className="h-10 w-10 rounded-full absolute top-0 left-0 border" src={manImg} alt="image profile" />
                                    <img className="h-10 w-10 rounded-full absolute top-0 left-[25px] border" src={manImg} alt="image profile" />
                                    <img className="h-10 w-10 rounded-full absolute top-0 left-[50px] border" src={manImg} alt="image profile" />
                                    <img className="h-10 w-10 rounded-full absolute top-0 left-[75px] border" src={manImg} alt="image profile" />
                                    <img className="h-10 w-10 rounded-full absolute top-0 left-[100px] border" src={manImg} alt="image profile" />
                                    <img className="h-10 w-10 rounded-full absolute top-0 left-[125px] border" src={manImg} alt="image profile" />
                                </div>
                                <div className="col-span-3">
                                    <button className="bg-[#232425] text-white px-5 py-2 text-sm rounded-lg">Chat <span></span></button>
                                </div>
                                <div className="col-span-4">
                                    <button className="bg-[#FD6058] text-white px-5 py-2 text-sm rounded-lg">Delete Event</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-5 bg-[#FDFCFA] pl-3">
                            <div className="">
                                <p className="bg-[#FD6356] rounded-t-3xl px-4 py-3 text-white text-sm">
                                    Pending Requests
                                </p>
                                <p className="text-sm font-semibold px-4 py-3 bg-[#E2E3E4]">
                                    People going to this event
                                </p>
                                <div className="px-4 py-2 flex items-center border-b-2">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={manImg}
                                        alt="image profile"
                                    />
                                    <div className="ml-4">
                                        <p>Raian Rai</p>
                                        <p className="text-xs">Location</p>
                                    </div>
                                    <button className="ml-auto bg-[#FD6356] text-white px-4 py-2 rounded">
                                        Remove
                                    </button>
                                </div>

                                <div className="px-4 py-2 flex items-center border-b-2">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={manImg}
                                        alt="image profile"
                                    />
                                    <div className="ml-4">
                                        <p>Raian Rai</p>
                                        <p className="text-xs">Location</p>
                                    </div>
                                    <button className="ml-auto bg-[#FD6356] text-white px-4 py-2 rounded">
                                        Remove
                                    </button>
                                </div>

                                <div className="px-4 py-2 flex items-center border-b-2">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={manImg}
                                        alt="image profile"
                                    />
                                    <div className="ml-4">
                                        <p>Raian Rai</p>
                                        <p className="text-xs">Location</p>
                                    </div>
                                    <button className="ml-auto bg-[#FD6356] text-white px-4 py-2 rounded">
                                        Remove
                                    </button>
                                </div>

                                <div className="px-4 py-2 flex items-center border-b-2">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={manImg}
                                        alt="image profile"
                                    />
                                    <div className="ml-4">
                                        <p>Raian Rai</p>
                                        <p className="text-xs">Location</p>
                                    </div>
                                    <button className="ml-auto bg-[#FD6356] text-white px-4 py-2 rounded">
                                        Remove
                                    </button>
                                </div>

                                <div className="px-4 py-2 flex items-center border-b-2">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={manImg}
                                        alt="image profile"
                                    />
                                    <div className="ml-4">
                                        <p>Raian Rai</p>
                                        <p className="text-xs">Location</p>
                                    </div>
                                    <button className="ml-auto bg-[#FD6356] text-white px-4 py-2 rounded">
                                        Remove
                                    </button>
                                </div>

                                <div className="px-4 py-2 flex items-center border-b-2">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={manImg}
                                        alt="image profile"
                                    />
                                    <div className="ml-4">
                                        <p>Raian Rai</p>
                                        <p className="text-xs">Location</p>
                                    </div>
                                    <button className="ml-auto bg-[#FD6356] text-white px-4 py-2 rounded">
                                        Remove
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;