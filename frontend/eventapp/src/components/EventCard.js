import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { grey } from "@mui/material/colors";
import { proposalContext } from "../pages/VendorProfile";
import { useContext } from "react";
// UUID
// let eventName="suraj marriage"
// let eventPlace="rajahmundry"
// let proposalType="contract"
// let eventType="marriage"
// let budget=2932032
// let from="tuesday"
// let to="monday"
// description
// foodPreferences
// events  

export default function EventCard(eventdata){
    const {proposaldata,find,setFormikdata,onOpen}=useContext(proposalContext)
return (<div className="d-flex flex-column border border-dark mx-2 mb-2">
    <div className="d-flex flex-column px-3">
 
<h5>{eventdata.eventName}</h5>
<h6>{eventdata.eventPlace}</h6>
</div>
<div  className="d-flex justify-content-between border px-2">
    <div className="d-flex justify-content-around">
<span  className="px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>Event Type</h6><h5>{eventdata.eventType}</h5></span>
<span className="border px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>Proposal Type</h6><h5>{ eventdata.proposalType}</h5></span>
<span className="border px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>From Date</h6><h5>{eventdata.from}</h5></span>
<span className="border px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>To Date</h6><h5>{eventdata.to}</h5></span>
<span className="border px-2 py-1 d-flex flex-column"><h6 style={{color:"grey"}}>Budget</h6><h5>{eventdata.budget}</h5></span>
    </div>
    <div className="d-flex align-items-center">
        <span onClick={(prop)=>{
          console.log(eventdata,'ok')
        setFormikdata(eventdata)
            onOpen()
        }}>
  <EditIcon  className="px-1" sx={{color:"grey"}}/>
  </span>
  <span>
<DeleteIcon  className="px-1" sx={{color:"grey"}}/>
</span>
    </div>
</div>
    
</div>)

}