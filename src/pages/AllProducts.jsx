import imagePro from "../assets/manImg.jpeg"
const AllProducts = () => {
    return (
        <div className="relative max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">

            <img src={imagePro} alt="Decorative Image" className="w-20 h-20 rounded-full border-4 border-white shadow-md absolute top-0 end-0 transform translate-x-4 -translate-y-4" />

            <div className="relative z-10 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Card Title</h2>
                <p className="text-gray-700 mb-4">This is some description text inside the card. The image is absolutely positioned at the top-right corner.</p>
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Learn More
                </button>
            </div>

        </div>
    );
};

export default AllProducts;