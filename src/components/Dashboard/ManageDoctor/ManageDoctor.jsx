import React from "react";
import useDoctors from "../../Hooks/useDoctors";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageDoctor = () => {
  const { doctor, refetch } = useDoctors();
  const axiosSecure = useAxiosSecure()

  const handlerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/doctors/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-left">My Doctors: {doctor.length}</h1>
        <br />
      <div className="overflow-x-auto rounded-xl border-2 rounded-b-none">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200 font-bold text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {/* row 1 */}
            {doctor.map((item, index) => (
              <>
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="loading..." />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.doctor_Name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.specialty}</td>
                  <th>
                    <button
                      onClick={() => handlerDelete(item._id)}
                      className="btn btn-outline text-white bg-rose-600"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
