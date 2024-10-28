import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, LogOut} = useContext(AuthContext);
  // console.log(user.displayName)

  const img1 = "https://i.ibb.co.com/jHYkrRB/Group-2.png";
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>
          About
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/appointment"}>
          Appointment
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/reviews"}>
          Review
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/contact"}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/appointment"}>
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link to={'/'}><img src={img1} alt="" className="bg-black w-40" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? <>
            <p className="text-sm font-bold mr-2 text-[#F7A582]">{user.displayName}</p>
            <button onClick={LogOut} to="/register">
              <a className="btn text-[#F7A582] btn-outline">Sign Out</a>
            </button>
          </>
           :(
            <Link to="/register">
              <a className="btn">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
