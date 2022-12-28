 
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from "react";
import '../index.css';
import axios from "axios";
import styled from 'styled-components'
import logo from '../assets/logo.jpg'
import user from '../assets/user.png' 
import DropDown1 from './Dropdown';
import activestatus from '../assets/activestatus.png'
const baseUrl =  'http://localhost:4000';

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 72px;
    position: fixed;
    align-items: center;
    //background-color: #29d2bf;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;
const [base64, setBase64] = useState();
function TopHeader(props) {
    const [items, setItems] = useState([]);
    const getdatauser = () => {
        axios
          .get(`${baseUrl}/api/auth/63ab24aa8aaae005e7504bfa`, 
                          )
          .then((response) => {
            Buffer.from(response.data, 'binary').toString('base64')
            const items = response.data; 
           console.log(items);
           setItems(items);
          })
   };
   useEffect(() => {
    getdatauser();
  }, []);
 
    return (
        <HeaderBar>
             <img src={logo} className="h-12 ml-6 w-12  rounded-lg  " alt="Xcelvations Logo" height="40" />
               <div className=" flex    ">
                <h2 className=" text-Black font-bold  font-serif pl-96 ml-24 flex  text-2xl">
                    Manage Your Beneficiary List
                </h2>
                <button onClick={getdatauser}>check</button>
                {items?.map((items) => (<img  className='h-10 w-12 ml-80'  src={items?.productImage}></img>))}
                <img src={`data:image/jpeg;charset=utf-8;base64,${base64}`} />
              <img  className='h-3 w-3'  src={activestatus}></img>
                <DropDown1/>
                    
                </div>
                 </HeaderBar>
    )
};

export default TopHeader;
