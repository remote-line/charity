import {  useNavigate } from 'react-router-dom';
import React, { useEffect, useState, } from "react";
import '../index.css';
import axios from "axios";
const baseUrl =  'http://localhost:4000';
 
function Home() {
    const [items, setItems] = useState<any>([]);
   // const transit = localStorage.getdata("transit").split(","); 
    const navigate = useNavigate();
        const handleHome = () => {
      navigate(`/home`);
         getdata();
    }; 
    const handleAddclient = () => {
  navigate(`/add-client`);
}; 
const handlePayed=()=>{
  navigate(`/payed`);
}
const handlePending = () => {
    navigate(`/pending`);
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
   
  const handleRow=( id: any)=>{
   // console.log(id);
  // localStorage.setItem("sheetId", id);
    navigate(`/update-client/${id}`);
  }
  const handleUpdateclient=()=>{
    navigate(`/update-client`);
  }
  const handleAddnotes=()=>{
    navigate(`/add-notes`);
  }
    return (
        <div className="flex flex-row h-screen bg-slate-500">
            <div className='flex flex-col px-8 py-8 gap-3 bg-slate-800 text-white h-screen w-72'>
                <span className=" rounded-lg h-7 w-16 font-bold text-3xl text-center">Charity</span>
                <div className='pt-10 space-y-4'>
                    <span className="flex flex-row " ><button   className=" flex flex-row bg-green-500 hover:text-purple-600 active:bg-black-200 border-2 rounded-lg px-4" onClick={handleHome}>Home</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={ handleAddclient}>Add New</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={ handleUpdateclient}>update</button></span>
                    <span className="flex flex-row " > <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={handlePending} >Pending</button></span>
                    <span className="flex flex-row ">   <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-4" onClick={handlePayed} >Payed</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-4" >Delete</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg " > Reminders</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-4" onClick={handleAddnotes}>Notes</button></span>
                    <span className="flex flex-row "><button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" >Reffered</button> </span>
                    <div className="py-20">
                    </div>
                    <hr />
                </div>
            </div>
            <div className="  bg-slate-700 ">
                <h2 className="bg-slate-800 text-white font-serif flex px-2 h-24 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                <div   className=" g-slate-800  gap-11 px-2 py-10 text-white">
                 <h1  className="font-bold  font-serif text-center  text-2xl "> Client Detail</h1>
                 <div className=" grid grid-cols-3 grid-flow-row gap-11 px-8 py-10 text-white"> 

                <table className="  table-fixed text-center  border-white" style={{
                    width: 600}} >
                <thead className="bg-b9green2 border border-white h-14">
                <tr className="text-md font-bold">
              <th
               
                className="px-1 border border-white bg-sky-600" 
                style={{
                    width: 300}} >
                Name
              </th> 
              <th
                
                className="px-1 border border-white bg-sky-600" style={{
                    width: 300}}
              >
                Amount
              </th> 
             <th className="px-1 border border-white bg-sky-600" style={{
                    width: 300}}
              >
                Status
              </th>
              </tr>                    
              </thead>
              {items?.map((items:any) => (
               <tbody key={items._id}>
                <tr className="px-1 border border-white"   onClick={() =>
                      handleRow(items._id)
                    }>
                    <td className="px-1 border border-white" >{items?.name}</td>
                    <td  className="px-1 border border-white">{items?.amount}</td>
                    <td  className="px-1 border border-white">{items?.status}</td>
                </tr>
               </tbody>
               ))}


              </table></div>
           
                </div>
            </div>
        </div>
    )
};

export default Home;
