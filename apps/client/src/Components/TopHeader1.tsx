import {  useNavigate } from 'react-router-dom';
import React, { useEffect, useState, } from "react";
import '../index.css';
import axios from "axios";
import Header from './Header'
import TopHeader from './TopHeader';
import backgrd from '../assets/backgrd.jpg'
const baseUrl =  'http://localhost:4000';
function Home() {
const [items, setItems] = useState<any>([]);      
 
   const getdata = () => {
        axios
          .get(`${baseUrl}/api/auth/63a9bb7358139a0f1c005048`, {
            responseType: "arraybuffer"
          }      
        )
          .then((response) => {
          const items = response.data; 
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              '' )
       //   setItems(items);
          )
          setItems(base64)
          })
   };
   useEffect(() => {
    getdata();
  }, []);
    
 
 
    return (
 
            <div className="item-center "  style={{backgroundImage:`url(${backgrd})`}} >
                <div   className=" gap-10 item center border-2  px-2 py-10" >
                 <div className="  grid-flow-row item-center gap-11 px-8 py-10 text-white"> 

                <table className="  bg-slate-600 table-fixed ml-48 text-center border-2" style={{
                    width: 600}} >
              
        
               <tbody>
                <tr className="px-1 border border-white" >
                    <td className="px-1 border border-white" >{items?.username}</td>
                    <td  className="px-1 border border-white">{items?.email}</td>
                    <td><img src={items.productImage}></img></td>
                </tr>
               </tbody>
               


              </table></div>
           
                </div>
            </div>
            
    )
};

export default Home;