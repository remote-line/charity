 
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
const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};
   const getdata = () => {
        axios
          .post(`${baseUrl}/api/client/register`, client,config 
        )
          .then((response) => {
            console.log("data enter")
            refreshPage()
          })
   };
 
    

const submitHandler = (e) => {
  e.preventDefault();
  setFormErrors(validateForm(client));
 getdata();
};
 

function refreshPage() {
window.location.reload(false);
}
 
    return (
      <>
     
      <TopHeader/>
    <div className='pt-20' > <Header /></div> 
<div className="flex flex-row h-screen gap-11  px-2 py-10 text-black"  style={{backgroundImage:`url(${backgrd})`}} >
             
                <div   className="ml-80 ">
   
                 <h1  className="font-bold  font-serif text-center  text-2xl "> Client Add</h1>
                 <div className=" grid-flow-row gap-11 px-8 py-10  "> 
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
                  <div className='flex text-xl  font-bold font-family:ui-serif'>
                    <button 
                className="flex  text-xl ml-96 font-bold font-family:ui-serif mt-4 bg-green-600 border-2 rounded-lg px-2"
                   onClick={submitHandler}>
                     Add Client
                     </button>
            
                     </div>
                      </div> 
                </div>
            </div>
     
        </>
    )
};

export default Addclient;
