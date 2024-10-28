import React from "react";
import useNewAppointment from "../../Hooks/useNewAppointment";

const NewAppointment = () => {
  const { appointments } = useNewAppointment();
  return (
    <div>
        <h1 className="text-xl font-bold text-left">My Appointment : {appointments.length}</h1>
        <br />
      <div className="overflow-x-auto rounded-xl border-2 rounded-b-none">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200 font-bold text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {/* row 1 */}
            {appointments.map((item, index) => (
              <>
                <tr className="font-bold">
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.service}</td>
                  <th>
                    <button className="btn btn-outline text-white bg-[#1E1E1E] hover:bg-rose-600">
                      Pay
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

export default NewAppointment;
