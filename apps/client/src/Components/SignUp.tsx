import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../index.css';
import axios from "axios";
const baseUrl =  'http://localhost:4000';
 function SignUp() {
    const [formErrors, setFormErrors] = useState({});
   const [username, setusername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user, setUserDetails] = useState({
    fname: "",})
    const navigate = useNavigate();
    const handleInputChange = (e:any) => {
        e.preventDefault();
        const { id, value } = e.target;
        if (id === "username") {
          e.preventDefault();
          setusername(value);
          
        }
        if (id === "email") {
          e.preventDefault();
          setEmail(value);
        }
        if (id === "password") {
          e.preventDefault();
          setPassword(value);
        }};
        const handleSubmit = (e:any) => {
            e.preventDefault();
            createAccount();
          
          };
          const createAccount = () => {
            axios
              .post(`${baseUrl}/api/user/register`, {
                username,
                email,
                password,
              })
              .then((response) => {
             
                toast.success("User Created");
              });
          };

 
    return (
        <div className="h-screen bg-slate-800 grid grid-flow-row md:grid md:grid-flow-col p-8 overflow-hidden">
            <div className='login-left flex flex-col justify-center px-36 bg-white rounded-l-xl'>
                <div className='login-header'>
                    <h1 className='text-2xl font-bold py-3'>Welcome to our application</h1>
                    <p className='font-bold'>Please Sign up to make an account</p>
                </div>
                <form className='login-form py-6'>
                    <div className='login-form '>
                        <div className='login-form-content'>
                            <div className='form-item'>
                                <label className='' htmlFor="name"> Enter your full name</label>
                                <input 
                                className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg'
                                 type="text"
                                  id="username"
                                  value={username}
                                onChange={(e) => handleInputChange(e)}
                                   />
                     
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="email"> Enter email</label>
                                <input
                                 className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg'
                                  type="text" 
                                  id="email" 
                                  value={email}
                                onChange={(e) => handleInputChange(e)}/>
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="password">Enter password</label>
                                <input 
                                className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg'
                                 type="password"
                                  id="password"
                                  value={password}
                                   onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="password">Confirm password</label>
                                <input className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg'
                                 type="password" id="password1" />
                            </div>
                            <div className='py-4'>
                                <button 
                                className='bg-slate-500 flex rounded-lg px-10  py-1 '
                                onClick={handleSubmit}
                                 type='submit'
                                 >
                                    Sign Up
                                 </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <div className='login-right bg-slate-400 flex justify-center rounded-r-xl'>
                <img className='rounded-r-lg' src={require('../assets/donate.jpg')} alt="donate" />
            </div>
        </div>
    );
}

export default SignUp;
