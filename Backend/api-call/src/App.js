import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get("http://localhost:5003/api/user");
      setUsers(response.data);
    }
    fetchdata();
  }, []);
  return (
    <div className="App">
      {users.map((item, i) => (
        <>
          <h1 key={i}>{item.name}</h1>
          <p key={i}>{item.username}</p>
        </>
      ))}
    </div>
  );
}

export default App;
