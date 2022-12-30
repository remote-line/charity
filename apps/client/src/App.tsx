import Home1 from './Components/Home1';
import SignUp from './pages/signupform';
import Login from './Components/Login';
 import Addclient1 from './Components/Addclient1'
 import Pending from './Components/Pending'
 import Payed from './Components/Payed1';
 import Updatedata from './Components/updatedata'
 import AddNotes from './Components/AddNotes';
 import DropDown1 from './Components/Dropdown';
 import TopHeader1 from './Components/TopHeader1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import React from 'react';
import TopHeader from './Components/TopHeader';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home1 />} />
          <Route path ='/add-client/' element={<Addclient1/>}/>
          <Route path ='/update-client/:id' element={<Updatedata/>}/>
          <Route path ='/pending' element={<Pending/>}/>
          <Route path='/payed' element={<Payed/>}/>
          <Route path='/update-client' element={<Updatedata/>}/>
          <Route path='/add-notes' element={<AddNotes/>} />
          <Route path='/dropdwon' element={<DropDown1/>} />
          <Route path='/TopHeader1' element={<TopHeader1/>} />
        </Routes>
      </Router>

      <div className="App">
        <header className="App-header">-
       
        </header>
      </div>
    </div>
  );
}

export default App;