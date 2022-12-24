 

import React, {useState, useEffect, useRef} from 'react';
import edit from '../assets/edit.png'
import setting from '../assets/settings.png' 
import logout from '../assets/logout.png'
import help from '../assets/help.png'
import user from '../assets/user.png'
import Dropdown from '../assets/dropdown-caret.png'
function DropDown1() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
 
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger text-black' onClick={()=>{setOpen(!open)}}>
           
           <img src={Dropdown}></img>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
       <h3>The Kiet<br/><span>Website Designer</span></h3>
       <img  className='h-24 w-24'  src={user}></img>
          <ul>
            <DropdownItem  img={user} text = {"My Profile"}/>
            <DropdownItem  img = {edit} text = {"Edit Profile"}/>
            <DropdownItem  img={setting}  text = {"Settings"}/>
            <DropdownItem  img={help} text = {"Helps"}/>
            <DropdownItem  img={logout} text = {"Logout"}/>
          </ul>
        </div>
      </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default DropDown1;