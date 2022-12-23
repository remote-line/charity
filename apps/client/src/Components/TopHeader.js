 
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import '../index.css';
import axios from "axios";
import instagram from '../assets/instagram.png'

const baseUrl =  'http://localhost:4000';

 
function TopHeader(props) {
 // const sheetId = localStorage.getItem("sheetId");
 
    return (
    
               <div className=" flex  w-full  h-28 bg-slate-800 ">
                <h2 className="bg-slate-800 text-white font-serif flex ml-48  h-28 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                <div className='class="box-border h-28 ml-96  w-32  border-4 ...'>
                 <img alt="" className="h-8 w-8 " src={instagram} />
                    </div>
                </div>
                 
        
    )
};

export default TopHeader;
