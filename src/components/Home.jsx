import { useState } from "react";
import axios from "axios";
import './App.css';

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(username);
    console.log(password);
    axios
      .post("https://backend-for-react-fvl8.onrender.com/add", { name: username, passcode: password })
      .then((res) => {
        console.log(res);
      });
    setUsername("");
    setPassword("");
  };

  return (
    
    <div className="loginconatiner">
      <p>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter name"
        />
      </p>
      <p>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
      </p>
      <button className="btn" onClick={handleSubmit}>Show name</button>
    </div>
  );
}

export default Home;