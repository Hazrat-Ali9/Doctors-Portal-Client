import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UsersRow from "./../Dashboard/UsersRow/UsersRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users"], () =>
    fetch("http://localhost:5000/user", {
        method:"GET",
        headers:{
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl text-teal-500 font-bold">
        All Users: {users?.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <UsersRow
                  key={index}
                  user={user}
                  index={index}
                  refetch={refetch}
                ></UsersRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
