import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>

      <div className="App">
        <header className="App-header">
          <h1> Charity</h1>
          <label> UserName   <input className='input' placeholder='Enter UserName'></input></label>

          <label>Password <input className='input' placeholder='Enter Password'></input>  </label>
          <a href='/home.tsx'>sd</a>
          <button type="submit" className="btn"> Login</button>
        </header>
      </div>
    </div>
  );
}

export default App;
