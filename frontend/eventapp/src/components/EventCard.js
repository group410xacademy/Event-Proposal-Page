import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { grey } from "@mui/material/colors";
// UUID
let eventName="suraj marriage"
let eventPlace="rajahmundry"
let proposalType="contract"
let eventType="marriage"
let budget=2932032
let from="tuesday"
let to="monday"
// description
// foodPreferences
// events  
export default function EventCard(){
return (<div className="d-flex flex-column border border-dark mx-5">
    <div className="d-flex flex-column px-3">
 
<h5>{eventName}</h5>
<h6>{eventPlace}</h6>
</div>
<div  className="d-flex justify-content-between border px-2">
    <div className="d-flex justify-content-around">
<span  className="px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>Event Type</h6><h5>{eventType}</h5></span>
<span className="border px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>Proposal Type</h6><h5>{ proposalType}</h5></span>
<span className="border px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>From Date</h6><h5>{from}</h5></span>
<span className="border px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>To Date</h6><h5>{to}</h5></span>
<span className="border px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>Budget</h6><h5>{budget}</h5></span>
    </div>
    <div className="d-flex align-items-center">
  <EditIcon className="px-1" sx={{color:"grey"}}/>
<DeleteIcon  className="px-1" sx={{color:"grey"}}/>
    </div>
</div>
    
</div>)

}