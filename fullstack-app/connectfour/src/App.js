import React, { useState } from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    <div className="App">
    <h1>Welcome</h1>
    <form>
      <label>Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>

}

export default App;
