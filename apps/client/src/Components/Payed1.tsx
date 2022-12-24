import {  useNavigate } from 'react-router-dom';
import React, { useEffect, useState, } from "react";
import '../index.css';
import axios from "axios";
import Header from './Header'
import TopHeader from './TopHeader';
import backgrd from '../assets/backgrd.jpg'
const baseUrl =  'http://localhost:4000';
 
function Payed() {
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
   const getdata = () => {
        axios
          .post(`${baseUrl}/api/client/search`, 
           {
            status:"Done"
           },config
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
<>
     
     <TopHeader/>
   <div className='pt-20' > <Header /></div> 
           <div className=" flex  h-screen item-center"  style={{backgroundImage:`url(${backgrd})`}} >

               <div   className="  gap-10 px-2 py-10" >
                <h1  className="font-bold  font-serif text-center text-black  text-2xl "> Client Detail</h1>
                <div className="   item-center gap-11 px-8 py-10 text-white"> 

               <table className="  bg-slate-600 table-fixed ml-48 text-center border-2" style={{
                   width: 600}} >
               <thead className="bg-b9green2 border border-white h-14">
               <tr className="text-md font-bold">
             <th
              
               className="px-1 border border-white bg-sky-500" 
               style={{
                   width: 300}} >
               Name
             </th> 
             <th
               
               className="px-1 border border-white bg-sky-500" style={{
                   width: 300}}
             >
               Amount
             </th> 
            <th className="px-1 border border-white bg-sky-500" style={{
                   width: 300}}
             >
               Status
             </th>
             </tr>                    
             </thead>
             {items?.map((items:any) => (
              <tbody key={items._id}>
               <tr className="px-1 border border-white"   
                   >
                   <td className="px-1 border border-white" >{items?.name}</td>
                   <td  className="px-1 border border-white">{items?.amount}</td>
                   <td  className="px-1 border border-white">{items?.status}</td>
               </tr>
              </tbody>
              ))}


             </table></div>
          
               </div>
           </div>

           </>
    )
};

export default Payed;
