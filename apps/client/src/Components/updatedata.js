 
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import '../index.css';
import axios from "axios";
import Header from './Header'
import TopHeader from './TopHeader';
import backgrd from '../assets/backgrd.jpg'
const baseUrl =  'http://localhost:4000';
    
function Addclient() {
 // const sheetId = localStorage.getItem("sheetId");
  const [formErrors, setFormErrors] = useState({});
    const [ setIsSubmit] = useState(false);
    const { id } = useParams();
    // const [items, setItems] = useState([]);
  
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

  
     // console.log(sheetId)
      const validateForm = (values) => {
        const error = {};
        
        if (!values.name) {
          error.name = "Name is required";
        }
    
        if (!values.amount) {
          error.amount = "Amount is required";
        }  
        if(!values.status){
            error.status="status is required"
        }
        return error}
   // const transit = localStorage.getdata("transit").split(","); 
    const navigate = useNavigate();
        const handleHome = () => {
            navigate(`/home`);
             }; 
             const handleaddclient = () => {
                navigate(`/add-client`);
                   
              }; 
              const handlePending = () => {
                navigate(`/pending`);
              }; 
              const handlePayed=()=>{
                navigate(`/payed`);
              }
              const handleUpdateclient=()=>{
                navigate(`/update-client`);
              }
              const handleAddnotes=()=>{
                navigate(`/add-notes`);
              }
const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};          
   const getitem = () => {
    axios
      .get(`${baseUrl}/api/client/${id}`, 
           config)
      .then((response) => {
        const itemsa = response.data;
        setUserDetails(itemsa)
      })
};

  const updatedata =() => {
    axios
      .put(`${baseUrl}/api/client/${id}`, client
    )
      .then((response) => {
 
        const datee=response.data;

      })
};

 
const updateHandler = (e) => {
  e.preventDefault();
  //setFormErrors(validateForm(client));
   updatedata();
   refreshPage();
   window.alert("Update the data")
};
function refreshPage() {
    window.location.reload(false);
    }
useEffect(() => {
  getitem();
}, []);
    return (
          <>
     
      <TopHeader/>
    <div className='pt-20' > <Header /></div> 
<div className="flex flex-row h-screen gap-11  px-2 py-10 text-black"  style={{backgroundImage:`url(${backgrd})`}} >
        
        <div className='flex flex-col px-8 py-8 gap-3 bg-slate-800 text-white h-screen w-72'>
            <span className=" rounded-lg h-7 w-16 font-bold text-3xl text-center">Charity</span>
            <div className='pt-10 space-y-4'>
                  
                    <hr />
                </div>
            </div>
            <div className="  w-screen h-screen bg-slate-700 ">
                <h2 className="bg-slate-800 text-white font-serif flex px-2 h-24 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                
                <div   className=" g-slate-700  gap-11 px-2 py-10 text-white">
   
                 <h1  className="font-bold  font-serif text-center  text-2xl "> Client Add</h1>
                 <div className=" grid-flow-row gap-11 px-8 py-10 text-white"> 
                <label className="text-xl font-bold ml-20 font-family: ui-serif pl-20">Name</label> 
                <input 
                    className='h-8 w-30  outline-none text-lg text-black border-2 ml-40 border-gray-900 rounded-lg'
                                 type="text"
                                  id="name"
                                  name="name"
                                  value={client.name} 
                                  onChange={changeHandler}

                                   
                                                          />
                <p className='text-xl ml-48 pl-48 py-2 font-bold' style={{ color: 'black', fontSize: '16px'} }>{formErrors.name}</p>
                <label 
                className="text-xl font-bold ml-20 font-family: ui-serif pl-20">
                    Amount
                    </label>  
                <input 
                    className='h-8 outline-none text-lg border-2 text-black border-gray-900 rounded-lg ml-36  '
                                 type="text"
                                  id="amount"
                                  name="amount"
                                  onChange={changeHandler}
                                  value={client.amount}
                    />
                 <p className='text-xl ml-48 pl-48 py-2 font-bold' style={{ color: 'black', fontSize: '16px'} }>{formErrors.amount}</p>
                <label className="text-xl font-bold ml-20 font-family: ui-serif pl-20" >Status</label>
                 
                <input 
                    className='h-8 outline-none text-lg border-2 text-black border-gray-900 rounded-lg ml-40 '
                                 type="text"
                                  id="status"
                                  name="status"
                                  onChange={changeHandler}
                                  value={client.status}
                    />
                <p className='text-xl ml-48 pl-48 py-2 font-bold' style={{ color: 'black', fontSize: '16px'}  }>{formErrors.status}</p>
                  <div className='flex text-xl  font-bold font-family:ui-serif  '>
                     
              
                 <button
                  className="flex text-xl font-bold font-family:ui-serif ml-96 bg-green-600 mt-4 border-2 rounded-lg"
                  onClick={updateHandler}
                     >
                      Update Client
                     </button>
                     </div>
                      </div> 
                </div>
            </div>
        </div>
        </>
    )
};

export default Addclient;
