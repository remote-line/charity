import { Link, useNavigate } from 'react-router-dom';
import React, { useState, } from "react";
import '../index.css';
import axios from "axios";
const baseUrl =  'http://localhost:4000';

function Home() {

     
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
            const item = response.data; 
           // console.log(item)
          })
   };
      
    return (
        <div className="flex flex-row">
            <div className='flex flex-col px-8 py-8 gap-3 bg-slate-900 text-white h-screen w-72'>
                <span className=" rounded-lg h-7 w-16 font-bold text-3xl text-center">Charity</span>
                <div className='pt-10 space-y-4'>
                    <span className="flex flex-row " ><button onClick={handleHome}>Home</button></span>
                    <span className="flex flex-row "> Add new</span>
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
            <div className="w-screen bg-slate-700 ">
                <h2 className="bg-slate-900 text-white font-serif flex px-2 h-24 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                <div   className="gap-11 px-8 py-10 text-white">
                 <h1  className="font-bold  font-serif text-center  text-2xl "> Client Detail</h1>
                 <div className="grid grid-cols-4 grid-flow-row gap-11 px-8 py-10 text-white"> 

                <table className="table-fixed text-center  border-white"  style={{
                  width: 100}}>
                <thead className="bg-b9green2 border border-white h-14">
                <tr className="text-md font-bold">
              <th
               
                className="px-1 border border-white" style={{
                    width: 400}}
              >
                Name
              </th> 
              <th
                
                className="px-1 border border-white" style={{
                    width: 400}}
              >
                Amount
              </th> 
              </tr>                    
              </thead>
               <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
               </tbody>

              </table></div>
                </div>
            </div>
        </div>
    )
};

export default Home;
