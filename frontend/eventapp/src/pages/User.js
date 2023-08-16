import { useEffect, useState } from "react";
import { Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function User(){
    const [isloggedin,setLoggedin]=useState(false)
    const navigation =useNavigate()
    let [userdata,setUserdata]=useState([])
    const [selected,setSelected] =useState('')
    useEffect(()=>{
        console.log('component -mounted')
        async function getData(){

    let  {data} = await axios.get("http://localhost:5000/user/allproposal",{headers:{
    Authorization:localStorage.getItem("ACCESS_TOKEN")
   
  }})
  setUserdata(data)
  setLoggedin(true)
  console.log(userdata.images)
  navigation('/user/home')
}
getData()
},[])

    return <>
    {isloggedin&&<>
       <nav className="w-100 border d-flex justify-content-between">
        <div>
            <span style={{color:"blue"}}>LOGO</span>
        </div>
        <div className="d-flex flex-row align-items-center">
        <h6 className="mx-2">username</h6>
        <img className="img-thumbnail rounded-circle" style={{width:"50px"}} src="https://pixabay.com/get/g8708fde4c1bc86e981c307ad66e3ef48b1bd9c189149f94b5414f00ed79643b4bc99d5e643d9a8d5c2788566e51218b74dccd1164438665df2c598b38bfcaa56_1280.jpg"/>
        </div>
        </nav>
        <Outlet context={{username:'saleem',isloggedin:isloggedin,userdata:userdata,navigation:navigation,selected:selected,setSelected:setSelected}}/>
        </>}
    </>
}