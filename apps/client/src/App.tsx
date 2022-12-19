import Home1 from './Components/Home1';
import SignUp from './pages/signupform';
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
          <Route path='/Home' element={<Home1 />} />
        </Routes>
      </Router>

      <div className="App">
        <header className="App-header">
       
        </header>
      </div>
    </div>
  );
}

export default App;