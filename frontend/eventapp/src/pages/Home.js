import { useState } from "react"
import Form from "../components/Form"
import './Home.css'
import { Outlet } from "react-router-dom"
export default function Home(){
  const [sessiondata,setSessiondata]=useState({status:false,data:{},role:""})

    return <>{sessiondata.status&&<div className="partyimage container"><div>logo</div>
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
    <Outlet value={sessiondata}/>
    </>
}