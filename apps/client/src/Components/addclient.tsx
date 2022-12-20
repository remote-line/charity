import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, } from "react";
import '../index.css';
import axios from "axios";
const baseUrl =  'http://localhost:4000';
 
function Addclient() {
    const [items, setItems] = useState<any>([]);
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
    
    return (
        <div className="flex flex-row h-screen bg-slate-500">
            <div className='flex flex-col px-8 py-8 gap-3 bg-slate-800 text-white h-screen w-72'>
                <span className=" rounded-lg h-7 w-16 font-bold text-3xl text-center">Charity</span>
                <div className='pt-10 space-y-4'>
                    <span className="flex flex-row " ><button   className=" flex flex-row bg-sky-500 hover:text-purple-600 active:bg-black-200" onClick={handleHome}>Home</button></span>
                    <span className="flex flex-row "> <button>Add New</button></span>
                    <span className="flex flex-row " > Pending</span>
                    <span className="flex flex-row ">  Payed</span>
                    <span className="flex flex-row "> Deleted Recently</span>
                    <span className="flex flex-row "> Reminders</span>
                    <span className="flex flex-row "> Notes</span>
                    <span className="flex flex-row "> Reffered</span>
                    <div className="py-20">
                    </div>
                    <hr />
                </div>
            </div>
            <div className=" h-screen bg-slate-700 ">
                <h2 className="bg-slate-800 text-white font-serif flex px-2 h-24 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                
                <div   className="gap-11 px-2 py-10 text-white">
                 <h1  className="font-bold  font-serif text-center  text-2xl "> Client Detail</h1>
                 <div className=" grid grid-cols-8 grid-flow-row gap-11 py-10 text-white"> 
                <label className="text-xl font-bold font-family: ui-serif px-16">Name</label> 
                <input></input>
                <label className="text-xl font-bold font-family: ui-serif">Amount</label>  
                <input>
                </input>
                <label className="text-xl font-bold font-family: ui-serif">Status</label>
                <button className="text-xl font-bold font-family: ui-serif"> Add Client</button>
                      </div> 
                </div>
            </div>
        </div>
    )
};

export default Addclient;