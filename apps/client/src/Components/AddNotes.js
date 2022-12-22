 
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import '../index.css';
import axios from "axios";
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
        <div className="flex flex-row h-screen bg-slate-500">
        <div className='flex flex-col px-8 py-8 gap-3 bg-slate-800 text-white h-screen w-72'>
            <span className=" rounded-lg h-7 w-16 font-bold text-3xl text-center">Charity</span>
            <div className='pt-10 space-y-4'>
                    <span className="flex flex-row " ><button   className=" flex flex-row bg-sky-500 hover:text-purple-600 active:bg-black-200 border-2 rounded-lg px-4" onClick={handleHome}>Home</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={ handleaddclient}>Add New</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={ handleUpdateclient}>update</button></span>
                    <span className="flex flex-row " > <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={handlePending} >Pending</button></span>
                    <span className="flex flex-row ">  <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-4" onClick={handlePayed} >Payed</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-4" >Delete</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg " > Reminders</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-green-500 hover:text-purple-600  border-2 rounded-lg px-4" onclick={handleAddnotes}>Notes</button></span>
                    <span className="flex flex-row "><button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" >Reffered</button> </span>
                    <div className="py-20">
                    </div>
                    <hr />
                </div>
            </div>
            <div className="  w-screen h-screen bg-slate-700 ">
                <h2 className="bg-slate-800 text-white font-serif flex px-2 h-24 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                
                <div   className=" g-slate-700  gap-11 px-2 py-10 text-white">
   
                 <h1  className="font-bold  font-serif text-center  text-2xl "> Comment Add</h1>
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
                      </div> 
                </div>
            </div>
        </div>
    )
};

export default AddNotes;