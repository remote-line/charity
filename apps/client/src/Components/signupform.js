import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../index.css';
import axios from "axios";
const baseUrl =  'http://localhost:4000';
 function SignUp() {
    
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const [user, setUserDetails] = useState({
  });
  const [username, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [Image, setFile] = useState();
  const [imageurl , setImageurl]= useState("")
   
  function handleChange(e) {

   //imageurl=URL.createObjectURL(e.target.files[0])
     setImageurl(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
  }


  const handleInputChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    if (id === "username") {
      e.preventDefault();
      setFirstName(value);
    }
    if (id === "email") {
      e.preventDefault();
      setEmail(value);
    }
    if (id === "password") {
      e.preventDefault();
      setPassword(value);
    }
    if (id === "cpassword") {
      e.preventDefault();
      setCPassword(value);
    }
  }
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      error.username = "UserName is required";
    }

    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 3) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
     } 

    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
    //createAccount();
   //goBack();
   uploaddata()
    
  };

  const createAccount = () => {
    axios
      .post(`${baseUrl}/api/user/register`,{
        username,
        email,
        password,
        productImage
      }
    )
      .then((response) => {
     
        toast.success("User Created");
        alert(response.data.message);
                
      });
  };
  const uploaddata= useCallback(async (e) => {
    
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("Image", Image);
      const url = `${baseUrl}/api/user/register`;
      const options = {
        url: url,
        method: "POST",
        headers: {
          "content-type": "multipart/form-data"
        },
        data: formData,
      };
      try {
        await axios(options);
        setFile(null);
        toast.success("File uploaded successfully.");
        goBack();
      } catch (error) {
        
        toast.error(error.response.data.message)
      }

    }  );
  const goBack = () => {
    navigate(-1);}

    return (
        <div className="h-screen bg-slate-800 grid grid-flow-row md:grid md:grid-flow-col p-8 overflow-hidden">
            <div className='login-leftw-96 flex flex-col justify-center px-36 bg-white rounded-l-xl'>
                <div className='login-header'>
                    <h1 className='text-2xl font-bold py-3'>Welcome to our application</h1>
                    <p className='font-bold'>Please Sign up to make an account</p>
                </div>
                <form className='login-form py-6'>
                    <div className='login-form '>
                        <div className='login-form-content'>
                            <div className='form-item'>
                                <label className='' htmlFor="name"> Enter  name</label>
                                <input 
                                className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg'
                                 type="text"
                                 name="username" 
                                id="username"
                                onChange={handleInputChange }
                              value={username}
                                   />
                                <p className='color-red' style={{ color: 'red', fontSize: '14px' } }>{formErrors.username}</p>
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="email"> Enter email</label>
                                <input
                                 className='h-14  w-full   outline-none text-lg border-2 border-gray-900 rounded-lg'
                                  name="email" 
                                 type="text" 
                                  id="email" 
                                  value={email}
                                  onChange={handleInputChange }/>
                                  <p className='color-red' style={{ color: 'red', fontSize: '14px'} }>{formErrors.email}</p>
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="password">Enter password</label>
                                <input 
                                className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg'
                                 type="password"
                                 name="password"
                                  id="password"
                                  value={password}
                                  onChange={handleInputChange } />
                                  <p className='color-red' style={{ color: 'red', fontSize: '14px'} }>{formErrors.password}</p>
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="password">Confirm password</label>
                                <input className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg'
                                 type="password" 
                                 id="cpassword"
                                 name="cpassword" 
                                  value={cpassword}
                                  onChange={handleInputChange }/>
                                  <p className='color-red' style={{ color: 'red', fontSize: '14px'} }>{formErrors.cpassword}</p>
                            </div>
                            <div className='py-4'>
                                <button 
                                className='bg-slate-500 flex rounded-lg px-10  py-1 '
                                onClick={signupHandler}
                                 type='submit'
                                 >
                                    Sign Up
                                 </button>
                                
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <div className='login-right bg-white flex justify-center rounded-r-xl'  method="POST"  enctype="multipart/form-data">
            <div className="mt-20 ml-10">
            <img className="w-40 h-40   rounded-full" src={imageurl} />  
            <input type="file"  onChange={handleChange} />
          </div>
                <img className='rounded-r-lg ' src={require('../assets/donate.jpg')} alt="donate" />
            </div>
        </div>
    );
}

export default SignUp;
