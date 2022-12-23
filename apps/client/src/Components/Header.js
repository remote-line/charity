import React from "react";
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const headerbtn= "flex flex-row bg-sky-500 px-2  focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg   ";
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
    <div className="absolute h-full content-between justify-between"  >
  
            <div className='flex flex-col px-8 py-8 gap-3 bg-slate-800 text-white h-screen w-40'>
                <span className=" rounded-lg  h-7 w-16 font-bold text-3xl text-center">Charity</span>
                <div className='pt-10 space-y-4'>
                    <span className="flex flex-row " ><button   className="flex flex-row bg-sky-500 px-4  focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg  "onClick={handleHome}>Home</button></span>
                    <span className="flex flex-row "> <button className="flex flex-row bg-sky-500 px-1.5  focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg  " onClick={ handleAddclient}>Add New</button></span>
                    <span className="flex flex-row "> <button className= "flex flex-row bg-sky-500 px-3  focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg  " onClick={ handleUpdateclient}>Update</button></span>
                    <span className="flex flex-row " ><button className= "flex flex-row bg-sky-500 px-2  focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg  " onClick={handlePending} >Pending</button></span>
                    <span className="flex flex-row "> <button className= "flex flex-row bg-sky-500 px-4  focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg  " onClick={handlePayed} >Payed</button></span>
                    <span className="flex flex-row "> <button className= "flex flex-row bg-sky-500 px-4 focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg  " >Delete</button></span>
                   <span className="flex flex-row text-center "> <button className="flex flex-row bg-sky-500 px-4  focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg  "  onClick={handleAddnotes}>Notes</button></span>
                    <span className="flex flex-row  text-center "><button className= "flex flex-row bg-sky-500 px-2  focus:ring-green-300 active:bg-green-700 focus:outline-none focus:ring  hover:text-green-600  border-2 rounded-lg  " >Reffered</button> </span>
                    <hr />
                    <div>
                    <a href="/facebook">
                    <img alt="" className="h-6 w-6 mt-2" src={facebook} />
                    </a>
                    <a href="/instgram">
                    <img alt="" className="h-6 w-6 mt-2" src={instagram} />
                    </a>
                    <a href="/twitter">
                    <img alt="" className="h-6 w-6 mt-2" src={twitter} />
                    </a>
                    </div>
                </div>
      
              </div> 
                                 
    </div>
  );
}
