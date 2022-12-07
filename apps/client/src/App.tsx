import React from 'react';
import './index.css';

function App() {
  return (
    <div className="h-screen bg-slate-800 grid grid-flow-col p-8 overflow-hidden">
      <div className='login-left flex flex-col justify-center px-36 bg-white rounded-l-xl'>
        <div className='login-header'>
          <h1 className='text-2xl font-bold py-3'>Welcome to our application</h1>
          <p>Please login to use the application</p>
        </div>
        <form className='login-form py-6'>
          <div className='login-form '>
            <div className='login-form-content'>
              <div className='form-item'>
                <label className='' htmlFor="email"> Enter email</label>
                <input className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg' type="text" id="email" />
              </div>
              <div className='form-item'>
                <label className='' htmlFor="password">Enter password</label>
                <input className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg' type="password" id="password" />
              </div>
              <div className='form-item'>
                <div className='checkbox py-3 flex gap-3 '>
                  <input className='h-w-5 w-5' type="checkbox" id="remember" />
                  <label htmlFor="rememberMeCheckbox" id='checkboxLabel'>Remember me</label>
                </div>
              </div>
              <button className='bg-slate-500 flex rounded-lg px-10  py-1' type='submit'>Sign in</button>
            </div>
            <div className='login-form-footer py-3'>
              <p>Don't have an account? <a href='#'>Sign up</a></p>
            </div>
          </div>
        </form>
      </div>
      <div className='login-right bg-slate-400 flex justify-center rounded-r-xl'>
        <img className='w-20' src="" alt="main image" />
      </div>
    </div>
  );
}

export default App;
