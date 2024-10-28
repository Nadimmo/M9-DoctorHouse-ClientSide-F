import React, { useContext } from "react";
import useAllUser from "../../Hooks/useAllUser";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
  const { users, refetch } = useAllUser();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handlerAdmin = (user) => {
    axiosSecure
      .patch(`/user/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handlerDelete = (id) => {
    axiosSecure
      .delete(`/users/${id}`)
      .then((res) => {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Delete Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-left">
        All Users : {users.length}
      </h1>
      <br />
      <div className="overflow-x-auto rounded-xl border-2 rounded-b-none">
        <table className="table">
          <thead className="bg-base-200 font-bold text-lg">
            <tr>
              <th></th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handlerAdmin(user)}
                      className="btn btn-outline text-white bg-[#07332F]"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handlerDelete(user._id)}
                    className="btn btn-outline text-white bg-[#07332F] hover:bg-rose-600"
                  >
                    Remove User
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
