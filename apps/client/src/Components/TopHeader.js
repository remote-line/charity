 
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import '../index.css';
import axios from "axios";
import Header from './Header'
const baseUrl =  'http://localhost:4000';
    
function TopHeader(props) {
 // const sheetId = localStorage.getItem("sheetId");
 
    return (
        
      
        <div className="  bg-slate-700 ">
                <h2 className="bg-slate-800 text-white font-serif flex px-48 h-24 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                </div>
                 
              
      
        
    )
};

export default TopHeader;
