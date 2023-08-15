import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography} from '@mui/material'
export default function UserBigCard({from,name,eventPlace}){

return <Card className="mx-2 my-4">
<CardContent>
   <CardMedia sx={{ height: 100,width:300 }} image="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"/>
   {/* <Typography gutterBottom variant="h6" component="div">
         {name}
       </Typography> */}
         <span><h7>from</h7><h6 className="font-weight-bold text-dark">name</h6></span>
      <span><h7>to</h7><h6 className="font-weight-light text-secondary">email</h6></span>
       <div></div>
</CardContent>
</Card>
}