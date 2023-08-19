import { useEffect, useState } from "react";
import { Outlet, useOutletContext} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import axios from "axios";
const myarry=[]
for(let i=0;i<20;i++){
myarry.push({images:[0]})
}
const initial ={images:myarry}
export default function User(){
    const navigation =useNavigate()
    let [userdata,setUserdata]=useState(initial)
    const [selected,setSelected] =useState('')
    const [loading,setLoading]=useState(true)
    const {sessiondata}=useOutletContext()
    console.log('userdata is   sdsad' ,userdata)
    useEffect(()=>{
        console.log('component -mounted')
        async function getData(){
try{
    let  {data} = await axios.get("https://api-event-proposal.onrender.com/user/allproposal",{headers:{
    Authorization:localStorage.getItem("ACCESS_TOKEN")
   
  }})
 setUserdata(data)
 setLoading(false)
  console.log(data,'imzges are')
  navigation('/user/home')
}
  catch(err){
    // navigation('/')
  }
}
getData()
},[])

    return <>
    {(sessiondata.status&&sessiondata.role=="user")&&<>
        <Outlet context={{username:'saleem',userdata:userdata,navigation:navigation,selected:selected,setSelected:setSelected,loading:loading}}/>
        </>}
    </>
}