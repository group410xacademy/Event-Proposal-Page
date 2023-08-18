import { useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";
import EventCard from "../components/EventCard";
import { useState } from "react";

export default function UserHome (){
    const {username,userdata,navigation,selected,setSelected}= useOutletContext()
    console.log(username)
//    let data= userdata.length==0||userdata.images.map((element) => {
//         console.log(element,'element is')
//         return element.images.map(data=><UserCard onClick={()=>{setSelected(element);console.log(element);navigation("/user/event")}} src={data.url} budget={element.PROPOSALS?element.PROPOSALS.budget:''} eventPlace={element.PROPOSALS?element.PROPOSALS.eventPlace:''} name={element.AUTHOR?element.AUTHOR.name:''}/>)
//         });
//         console.log(data,'data is')
        let newdata= userdata.length==0||userdata.images.map((element) => {
            console.log(element,'element is')
            return <UserCard onClick={()=>{setSelected(element);console.log(element);navigation("/user/event")}} src={ element.images[0].url} budget={element.PROPOSALS?element.PROPOSALS.budget:''} eventPlace={element.PROPOSALS?element.PROPOSALS.eventPlace:''} name={element.AUTHOR?element.AUTHOR.name:''}/>
            });
      
    return <>
        <div>
            <img style={{height:"150px",width:"100%"}} src="https://wallpapercave.com/dwp2x/PKaP3xR.jpg"></img>
        </div>
        <div className="px-5">
<h5 className="my-4">Proposals</h5>
 <div className="d-flex flex-wrap">
    {
newdata
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