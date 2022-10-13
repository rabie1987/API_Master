import { useEffect, useState } from "react";
import "./App.css";
import List from "./Components/List/List";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result.data);
      setUsers(result.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <List users={users} />
    </div>
  );
}

export default App;
