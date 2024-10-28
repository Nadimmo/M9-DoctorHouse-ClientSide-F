import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const {isAdmin} = useAdmin()
  // console.log(isAdmin)
  return (
    <div className="flex">
      <div className=" lg:w-96 min-h-screen p-5 bg-[#F7A582] text-black">
        <ul>
          {isAdmin ? (
            <>
              {/* admin dashboard */}
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/dashboard/users"}>All User</NavLink>
              </li>
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/dashboard/doctor"}>Add Doctors</NavLink>
              </li>
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/dashboard/manageDoctor"}>Manage Doctor</NavLink>
              </li>
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/dashboard/request"}>Request User</NavLink>
              </li>
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/"}>Home</NavLink>
              </li>
            </>
          ) : (
            // user dashboard
            <>
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/dashboard/review"}>Add Review</NavLink>
              </li>
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/dashboard/appointment"}>My Appointment</NavLink>
              </li>
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/dashboard/payment"}>Payment History</NavLink>
              </li>
              <li className="lg:text-xl lg:px-2 py-4 font-bold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#06b6d4] duration-300">
                <NavLink to={"/"}>Home</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* outlet */}
      <div className="flex-1 p-10 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
