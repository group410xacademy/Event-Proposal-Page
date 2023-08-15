 import { Card } from "@mui/material";
 import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography} from '@mui/material'
export default function UserCard({budget,name,eventPlace}){

return <Card className="mx-2 my-4" sx={{Width: 245,height:220 }}>
<CardContent>
    <CardMedia sx={{ height: 120,width:180 }} image="https://pixabay.com/get/gacea89aaea0e8184831c1f45518c59b1dbe342e5a4c2937cc931c1d044fc5ab735c4fdca4a776879fde936deb7d5161eb3e6b06c0f5ffa50881685f937c0c469_1280.jpg"/>
    {/* <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography> */}
          <h6 className="font-weight-bold text-dark">{name}</h6>
        {/* <Typography gutterBottom variant="h6" component="div">
          {budget}
        </Typography> */}
        {/* <Typography variant="body2" color="text.secondary">
         {eventPlace}
        </Typography> */}
        <h6 className="font-weight-light text-secondary">{budget}</h6>
        <h6 className="text-primary">{eventPlace}</h6>
</CardContent>
</Card>
 }