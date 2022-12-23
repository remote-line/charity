 
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import '../index.css';
import axios from "axios";
import styled from 'styled-components'
import instagram from '../assets/instagram.png'
import logo from '../assets/logo.jpg'

const baseUrl =  'http://localhost:4000';

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 72px;
    position: fixed;
    align-items: center;
    background-color: #29d2bf;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;
 
function TopHeader(props) {

 
    return (
        <HeaderBar>
             <img src={logo} className="h-12 ml-6 w-12  rounded-lg  " alt="Xcelvations Logo" height="40" />
               <div className=" flex   bg-slate-800 ">
                <h2 className="bg-slate-800 text-white font-serif pl-96 ml-24 flex  text-2xl">
                    Manage Your Beneficiary List
                </h2>
                <div className=''>
                 <img alt="" className="h-8 w-8 ml-96"  src={instagram} />
                    </div>
                </div>
                 </HeaderBar>
        
    )
};

export default TopHeader;
