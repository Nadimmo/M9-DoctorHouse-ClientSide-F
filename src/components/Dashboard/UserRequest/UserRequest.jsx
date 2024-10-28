import React from "react";
import userRequest from "../../Hooks/userRequest";

const UserRequest = () => {
  const { requests } = userRequest();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-bold text-xl">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {requests.map((request, index) => (
              <>
                <tr key={request._id}>
                  <th>{index+1}</th>
                  <td>{request.name}</td>
                  <td>{request.email}</td>
                  <td>{request.phone}</td>
                  <td>{request.date}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRequest;
