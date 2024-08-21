import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5007/api/getusers", {
      method: "GET",
    });
    const data = await response.json();
    setUsers(data);
  };
  return (
    <div>
      {/* list all the users */}
      <button onClick={fetchUsers}>Get Users</button>
      {users &&
        users.map((user, index) => (
          <div key={index}>
            <div> {user.name} </div>
            <div> {user.email} </div>
          </div>
        ))}
    </div>
  );
}

export default Users;
