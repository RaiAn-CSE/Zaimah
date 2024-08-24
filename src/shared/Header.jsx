import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <Link to="/" className="mr-3"><a>Home</a></Link>
                        <Link to="/allProduct"><a>All Product</a></Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <a href=""><Link to="/" className="mr-3">Home</Link></a>
                    <a href=""><Link to="/allProduct">All Product</Link></a>
                </ul>
            </div>
        </div>
    );
};

export default Header;