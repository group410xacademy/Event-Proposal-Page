import { Button } from "@mui/material"
import UserCard from "../components/UserCard"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import UserBigCard from "../components/UserBigCard";
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
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
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
export default function Event({description,events,foodPreferences}){
return <>
 <div className="d-flex justify-content-between mt-4 mb-4 align-items-center">
         <div className="pe-2">
           Proposals
         </div>
    
         <Button variant="outlined" size="small" >Select</Button>
         </div>
         <div className="row">
            <div className="col-3 mx-2 border" style={{fontSize:"x-small",lineHeight:"130%"}}>
                <div className="">
       <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" className="img-fluid"></img>
            </div>
            <div className="px-2" style={{backgroundColor:"grey"}}>ID:001</div>
           <div className="d-flex px-2">
            <div className="">name</div>
            <div className="mx-3" style={{fontWeight:"bold"}}>saleem</div>
           </div>
           <div className="d-flex px-2">
            <div>email</div>
            <div className="mx-3"  style={{fontWeight:"bold"}}>md.saleem@gmail.com</div>
           </div>
           <div className="d-flex">
           <div className="d-flex px-2">
            <div className="me-2">
                startDate
            </div>
            <div  style={{fontWeight:"bold"}}>
                26dec1
            </div>
           </div>

           <div className="d-flex px-1">
            <div className="me-2">
                endDate
            </div>
            <div  style={{fontWeight:"bold"}}>
                27dec1
            </div>
           </div>
           </div>
           <div className="d-flex px-2">
            <div>
                <div>EventType</div>
                <div className="border text-primary" style={{backgroundColor:"skyblue"}}>Marriage</div>
            </div>
            <div className="mx-4">
            <div >EventClass</div>
                <div  style={{fontWeight:"bold"}}>Class A</div>

            </div>

           </div>
            </div>
            <div className="col-9 row">
                <div className="col-6">
      <h5>Venues and Arrangements</h5>
      <p>{description}</p>
      </div>
      <div className="col-6">
      <h5>Food Preferences</h5>
      <p>{foodPreferences}</p>
      </div>
      
            </div>

         </div>
         <div className="row px-2">
            <div className="col-3 d-flex flex-column">
            <p>MyAlbums</p>
            <ImageList sx={{ width: 290, height: 200 }} cols={3} rowHeight={50}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
            </div>
            <div className="col-9 row">
            <div className="col-6">
      <h5>Contacts</h5>
      <p>contacts</p>
      </div>
      <div className="col-6">
      <h5>Events</h5>
      <p>{events}</p>
      </div>
            </div>

         </div>

</>
}