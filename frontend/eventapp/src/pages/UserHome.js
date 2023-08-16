import { useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";
import EventCard from "../components/EventCard";
import { useState } from "react";

export default function UserHome (){
    const {username,userdata,navigation,selected,setSelected}= useOutletContext()
    console.log(username)
   let data= userdata.images.map((element) => {
        console.log(element,'element is')
        return element.images.map(data=><UserCard onClick={()=>{setSelected(element);console.log(element);navigation("/user/event")}} src={data.url} budget={element.PROPOSALS.budget||''} eventPlace={element.PROPOSALS.eventPlace||''} name="saleem"/>)
        });
        console.log(data,'data is')
    return <>
        <div>
            <img style={{height:"150px",width:"100%"}} src="https://pixabay.com/get/g4700d78ae5a8986e8319e4afcf1927cd8decdc8ea8926e17989faeb9b89a914f50249b2642144ee36d21a19840a4db730aaa01b4492e9db34f1f1372af928b40_1280.jpg"></img>
        </div>
        <div className="px-5">
<h5 className="my-4">Proposals</h5>
 <div className="d-flex flex-wrap">
    {
data
    }
    {/* <UserCard budget={2000} eventPlace="rajahmundry" name="saleem" />
    <UserCard budget={2000} eventPlace="rajahmundry" name="saleem" />
    <UserCard budget={2000} eventPlace="rajahmundry" name="saleem" />
    <UserCard budget={2000} eventPlace="rajahmundry" name="saleem" />
    <UserCard budget={2000} eventPlace="rajahmundry" name="saleem" />
    <UserCard budget={2000} eventPlace="rajahmundry" name="saleem" /> */}
 </div>

        </div>
    
    </>

}