import { useState } from "react"
import Form from "../components/Form"
import './Home.css'
import { Outlet, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

export default function Home(){
const navigatelogout=useNavigate()
  console.log(JSON.parse(localStorage.getItem("sessiondata")),'local storage')
  const [sessiondata,setSessiondata]=useState(JSON.parse(localStorage.getItem("sessiondata"))||{status:false,data:{},role:''})
console.log('home is mounted')
const Logout=()=>{
  localStorage.removeItem("sessiondata")
  setSessiondata({status:false,data:{},role:''})
}
const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
    return <>{sessiondata.status||<div className="partyimage container"><div>logo</div>
    <img  className="partyimage" src="background.png"/>
    <div className="d-flex flex-row justify-content-between px-5">
    
      <div>
        text will be displayed here
      </div>
      <div className='bg-white'>
       <Form setSessiondata={setSessiondata}/>
      </div>
    </div>

    </div>}
    {sessiondata.status&&<>
      <nav className="w-100 border d-flex justify-content-between">
        <div>
            <span style={{color:"blue"}}>LOGO</span>
        </div>
        <div className="d-flex flex-row justify-content-around align-items-center">
        <h6 className="mx-2">{sessiondata.data.loginname}</h6>
        <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{handleClose();Logout();navigatelogout('/')}}>Logout</MenuItem>
      </Menu>
    </div>
        </div>
        </nav>
    <Outlet context={{sessiondata:sessiondata}}/></>}
    </>
}