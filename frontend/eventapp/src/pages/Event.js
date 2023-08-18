import { Button } from "@mui/material"
import UserCard from "../components/UserCard"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import UserBigCard from "../components/UserBigCard";
import { useOutletContext } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    }
  ];
export default function Event(){
  const {loading} =useOutletContext()
  let data =useOutletContext()
  const {selected:{PROPOSALS:{budget,eventName,eventPlace,description,from,to,eventType,foodPreferences,events,proposalType},images,AUTHOR:{name,email,phone}}} = !loading?data:{selected:{
    "_id": "",
    "UUID": "",
    "images": [
        {
            "id": "",
            "url": "",
            "_id": ""
        },
        {
            "id": "",
            "url": "",
            "_id": ""
        }
    ],
    "AUTHOR": {
        "_id": "",
        "name": "",
        "email": "",
        "phone": "",
        "password": "",
        "role": "",
        "PROPOSALS": [],
        "IMAGES": [],
        "__v": 0
    },
    "PROPOSALS": {
        "_id": "",
        "UUID": "",
        "eventName": "",
        "eventPlace": "",
        "proposalType": "",
        "eventType": "",
        "budget": 0,
        "from": "",
        "to": "",
        "description": "",
        "foodPreferences": "",
        "events": "",
        "AUTHOR": "",
        "__v": 0
    },
    "__v": 0
  }
}
  
return <>
 <div className="d-flex justify-content-between mt-4 mb-4 align-items-center">
         <div className="pe-2">
           {loading?<Skeleton/>:<>Proposals&lt; &nbsp;<span className="text-primary h4" >{name}</span></>}
         </div>
    
         <Button variant="outlined" size="small" >Select</Button>
         </div>
         <div className="row">
            <div className="col-3 mx-2 border" style={{fontSize:"x-small",lineHeight:"130%"}}>
                <div className="">
       <img style={{width:"100%",height:"auto"}} src={images[0].url} className="img-fluid"></img>
            </div>
            {loading?<Skeleton/>:<div className="px-2" style={{backgroundColor:"grey"}}>ID:001</div>}
           <div className="d-flex px-2">
           {loading?<Skeleton/>:<> <div className="">name</div>
            <div className="mx-3" style={{fontWeight:"bold"}}>{name}</div>
            </>}
           </div>
           <div className="d-flex px-2">
            <div>email</div>
            <div className="mx-3"  style={{fontWeight:"bold"}}>{email}</div>
           </div>
           <div className="d-flex">
           <div className="d-flex px-2">
            <div className="me-2">
             {loading?<Skeleton/>:<> startDate</>}
            </div>
            <div  style={{fontWeight:"bold"}}>
                {loading?<Skeleton/>:from}
            </div>
           </div>

           <div className="d-flex px-1">
           <div className="me-2">
                {loading?<Skeleton/>:<>endDate</>}
            </div>
            <div  style={{fontWeight:"bold"}}>
                {loading?<Skeleton/>:to}
            </div>
           </div>
           </div>
           <div className="d-flex px-2">
            <div>
              {loading?<Skeleton/>:<div>EventType</div>}
                <div className="border text-primary" style={{backgroundColor:"skyblue"}}>{loading?<Skeleton/>:eventType}</div>
            </div>
            <div className="mx-4">
            <div >{loading?<Skeleton/>:<>EventClass</>}</div>
                <div  style={{fontWeight:"bold"}}>{proposalType}</div>

            </div>

           </div>
            </div>
            <div className="col-9 row">
                <div className="col-6">
      {loading?<Skeleton/>:<h5>Venues and Arrangements</h5>}
      <p>{loading?<Skeleton/>:description}</p>
      </div>
      <div className="col-6">
      <h5>{loading?<Skeleton/>:<>Food Preferences</>}</h5>
      <p>{loading?<Skeleton/>:foodPreferences}</p>
      </div>
      
            </div>

         </div>
         <div className="row px-2">
            <div className="col-3 d-flex flex-column">
            <p>MyAlbums</p>
            <div  className="w-100 d-flex flex-wrap" style={{margin: "5px",
        border: "1px",
        width: "180px"}}>
      {images.map((item) => (
     
          loading?<Skeleton/>:<img
          className="ms-1 mt-1"
      style={{width:"30%",height:"auto",aspectRatio:"1.2"}}
          
            src={item.url}
         
          />
   
      ))}
         </div>
 
            </div>
            <div className="col-9 row">
            <div className="col-6">
      <h5>Contacts</h5>
      <p>{phone}</p>
      </div>
      <div className="col-6">
      <h5>Events</h5>
      <p>{events}</p>
      </div>
            </div>

         </div>

</>
}