 
import {  useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
 
 
import '../index.css';
import axios from "axios";
const baseUrl =  'http://localhost:4000';
    
function Addclient() {
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [items, setItems] = useState([]);
    const [client, setUserDetails] = useState({
        name: "",
        amount: "",
        status: "",
 
      });
    
      const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
          ...client,
          [name]: value,
        });
      };

      const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          error.name = "Name is required";
        }
    
        if (!values.amount) {
          error.amount = "Amount is required";
        } else if (!regex.test(values.amount)) {
          error.amount = "Amount should be in number";
        }
        if(!values.status){
            error.status="status is required"
        }
        return error}
   // const transit = localStorage.getdata("transit").split(","); 
    const navigate = useNavigate();
        const handleHome = () => {
      navigate(`/Home`);
         getdata();
    }; 

   
   const getdata = () => {
        axios
          .get(`${baseUrl}/api/client`, 
        )
          .then((response) => {
            const items = response.data; 
           console.log(items);
           setItems(items);
          })
   };
   useEffect(() => {
    getdata();
  }, []);
    
  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(client));
    setIsSubmit(true);
    
  };
   fsddfsd
    return (
        <div className="flex flex-row h-screen bg-slate-500">
            <div className='flex flex-col px-8 py-8 gap-3 bg-slate-800 text-white h-screen w-72'>
                <span className=" rounded-lg h-7 w-16 font-bold text-3xl text-center">Charity</span>
                <div className='pt-10 space-y-4'>
                    <span className="flex flex-row " ><button   className=" flex flex-row bg-sky-500 hover:text-purple-600 active:bg-black-200 border-2 rounded-lg" onClick={handleHome}>Home</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-green-500 hover:text-purple-600  border-2 rounded-lg">Add New</button></span>
                    <span className="flex flex-row " > <button>Pending</button></span>
                    <span className="flex flex-row ">   <button>Payed</button></span>
                    <span className="flex flex-row "> <button>Deleted Recently</button></span>
                    <span className="flex flex-row "> <buuton > Reminders</buuton></span>
                    <span className="flex flex-row "> <button>Notes</button></span>
                    <span className="flex flex-row "><button>Reffered</button> </span>
                    <div className="py-20">
                    </div>
                    <hr />
                </div>
            </div>
            <div className="  w-screen h-screen bg-slate-700 ">
                <h2 className="bg-slate-800 text-white font-serif flex px-2 h-24 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                
                <div   className="gap-11 px-2 py-10 text-white">
                 <h1  className="font-bold  font-serif text-center  text-2xl "> Client Detail</h1>
                 <div className=" py-10 text-white"> 
                <label className="text-xl font-bold ml-20 font-family: ui-serif pl-20">Name</label> 
                <input 
                    className='h-8 w-30  outline-none text-lg text-black border-2 ml-40 border-gray-900 rounded-lg'
                                 type="text"
                                  id="name"
                                  onChange={changeHandler}
                                  value={client.name}     
                                                          />
                <p className='text-xl ml-48 pl-48 py-2 font-bold' style={{ color: 'black', fontSize: '16px'} }>{formErrors.name}</p>
                <label className="text-xl font-bold ml-20 font-family: ui-serif pl-20">Amount</label>  
                <input 
                    className='h-8 outline-none text-lg border-2 text-black border-gray-900 rounded-lg ml-36 '
                                 type="text"
                                  id="amount"
                                  onChange={changeHandler}
                                  value={client.amount}
                    />
                 <p className='text-xl ml-48 pl-48 py-2 font-bold' style={{ color: 'black', fontSize: '16px'} }>{formErrors.amount}</p>
                <label className="text-xl font-bold ml-20 font-family: ui-serif pl-20" >Status</label>
                 
                <input 
                    className='h-8 outline-none text-lg border-2 text-black border-gray-900 rounded-lg ml-40 '
                                 type="text"
                                  id="status"
                                  onChange={changeHandler}
                                  value={client.status}
                    />
          
                
                <p className='text-xl ml-48 pl-48 py-2 font-bold' style={{ color: 'black', fontSize: '16px'}  }>{formErrors.status}</p>
 
                <button className="text-xl ml-96 font-bold font-family: mt-8 ui-serif bg-green-600 border-2 rounded-lg px-2"
                   onClick={submitHandler}> Add Client</button>
                      </div> 
                </div>
            </div>
        </div>
    )
};

export default Addclient;
