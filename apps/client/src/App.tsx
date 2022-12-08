import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

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
    </div>
  );
}

export default App;
