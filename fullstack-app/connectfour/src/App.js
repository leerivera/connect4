import React, { useState } from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div className="App">
    <h1>Welcome</h1>
    <form>
      <label>Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>Password:
        <input type="text" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );

}

export default App;
