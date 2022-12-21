import { Link, useNavigate } from 'react-router-dom';
import React, { useState} from "react";
import '../index.css';
import axios from "axios";
const baseUrl =  'http://localhost:4000';

function Login() {
    const navigate = useNavigate();
   
     
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
      email: "",
      password: "",
    });
  
    const changeHandler = (e:any) => {
      const { name, value } = e.target;
      setUserDetails({
        ...user,
        [name]: value,
      });
    };
 
  
    const loginHandler = (e:any) => {
      e.preventDefault();
      setIsSubmit(true);
      createlogin();
    }; 
  
    const createlogin = () => {
        axios
          .post(`${baseUrl}/api/user/login`, user
        )
          .then((response) => {
            navigate('/home'); 
          })
          .catch((error) => {
        //    console.log(error.response.data.error)
            console.log(error.response.data);  
            alert(error.response.data)
        })
      };
  
    return (
        <div className="h-screen bg-slate-800 grid grid-flow-row md:grid md:grid-flow-col p-8 overflow-hidden">
            <div className='login-left flex flex-col justify-center px-36 bg-white rounded-l-xl'>
                <div className='login-header'>
                    <h1 className='text-2xl font-bold py-3'>Welcome to our application</h1>
                    <p className='font-bold'>Please login to use the application</p>
                </div>
                <form className='login-form py-6'>
                    <div className='login-form '>
                        <div className='login-form-content'>
                            <div className='form-item'>
                                <label className='' htmlFor="email"> Enter email</label>
                                <input 
                                className='h-14  w-6 outline-none text-lg border-2 border-gray-900 rounded-lg' 
                                type="text"
                                 id="firstName"
                                 value={user.email}
                                   name="email"
                                 onChange={changeHandler}
                                  />
                                 
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="password">Enter password</label>
                                <input
                                 className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg'
                                  type="password"
                                   id="password" 
                                   name="password"
                                   onChange={changeHandler}
                                 value={user.password} />
                            </div>
                            <div className='form-item'>
                                <div className='checkbox py-3 flex gap-3 '>
                                    <input className='h-w-5 w-5' type="checkbox" id="remember" />
                                    <label htmlFor="rememberMeCheckbox" id='checkboxLabel'>Remember me</label>
                                </div>
                            </div>
                            <button className='bg-slate-500 flex rounded-lg px-10  py-1' type='submit'
                               onClick={loginHandler} >Sign in</button>
                        </div>
                        <div className='login-form-footer py-3'>
                            <p>Don't have an account? <Link to='/signup' className='font-bold underline'>SignUp</Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <div className='login-right bg-slate-400 flex justify-center rounded-r-xl'>
                <img className='rounded-r-lg' src={require('../assets/main.jpg')} alt="main" />
            </div>
        </div>
        
    );
}

export default Login;
