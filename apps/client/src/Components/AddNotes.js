 
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import '../index.css';
import axios from "axios";
import Header from './Header'
import TopHeader from './TopHeader';
 
const baseUrl =  'http://localhost:4000';
    
function AddNotes() {
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
    
        return error}
   // const transit = localStorage.getdata("transit").split(","); 
    const navigate = useNavigate();
   const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};  
 
   const getitem = () => {
    axios
      .get(`${baseUrl}/api/client/${id}`, 
    )
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
      <div className='pt-20'> <Header /></div> 
                <div   className=" g-slate-700  gap-11 px-2 py-10 text-white">
   
                 <h1  className="font-bold  font-serif text-center text-black text-2xl "> Comment Add</h1>
                 <div className=" grid-flow-row gap-11 px-8 py-10 text-black"> 
               
                <textarea
                 // className='h-36 px-64 outline-none  text-black border-2 ml-30 border-gray-900 rounded-lg'
                                 type="text"
                                  id="name"
                                  name="name"
                                  value={client.name} 
                                  onChange={changeHandler}

                                   
                                                          />
               
                  <div className='flex text-xl  font-bold font-family:ui-serif  '>
                     
              
                 <button
                  className="flex text-xl font-bold font-family:ui-serif text-white ml-96 bg-green-600 mt-4 border-2 rounded-lg"
                  onClick={updateHandler}
                     >
                      Update Client
                     </button>
                     </div>
                    <div className='item-center px-96'>  </div>
                      </div> 
                </div>
                </>
      
        
    )
};

export default AddNotes;
