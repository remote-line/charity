import React from "react";
import "./Header.css";
 
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
export default function Header(props) {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate(`/home`);
         }; 
         const handleAddclient = () => {
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
    return (
    <div className="absolute h-full"  >
  
            <div className='flex flex-col px-8 py-8 gap-3 bg-slate-800 text-white h-screen w-36'>
                <span className=" rounded-lg  h-7 w-16 font-bold text-3xl text-center">Charity</span>
                <div className='pt-10 space-y-4'>
                    <span className="flex flex-row " ><button   className=" flex flex-row bg-sky-500 hover:text-purple-600 active:bg-black-200 border-2 rounded-lg px-4" onClick={handleHome}>Home</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={ handleAddclient}>Add New</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={ handleUpdateclient}>update</button></span>
                    <span className="flex flex-row " > <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" onClick={handlePending} >Pending</button></span>
                    <span className="flex flex-row ">   <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-4" onClick={handlePayed} >Payed</button></span>
                    <span className="flex flex-row "> <button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-4" >Delete</button></span>
                   <span className="flex flex-row "> <button className=" flex flex-row  focus:ring-green-300 active:bg-red-300 focus:outline-none focus:ring  hover:text-purple-600  border-2 rounded-lg px-4" onClick={handleAddnotes}>Notes</button></span>
                    <span className="flex flex-row "><button className=" flex flex-row bg-sky-500 hover:text-purple-600  border-2 rounded-lg px-2" >Reffered</button> </span>
                    <div className="py-20">
                    </div>
                    <hr />
                </div>
      
                     </div> 
                                 
    </div>
  );
}
