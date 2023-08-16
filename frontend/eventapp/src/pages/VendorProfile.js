// import Modal from '@mui/material/Modal';
import CreateProposal from "../components/CreateProposal";
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect} from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EventCard from "../components/EventCard"
import { TextField } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useContext,createContext } from "react";
import { blue } from "@mui/material/colors";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";
// axios.defaults.headers.common
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  function find(arr,id){
    for(let i=0;i<arr.length;i++){
        if(arr[i]["_id"]==(id.toString())){
    return arr[i]
        }
    }
    }
   export const proposalContext = createContext()
export default function VendorProfile(){
    // const [open, setOpen] = useState(false);
    // const modalOpen = () => setOpen(true);
    // const modalClose = () => setOpen(false);
    // return 
   
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [proposaldata,setproposaldata]=useState([])
    const [refresh,setRefresh]=useState(false)
    const [formikdata,setFormikdata]=useState({})
    const [method,setMethod]=useState("POST")
    const [isloading,setLoading]=useState(true)
    const navigat = useNavigate()
    const {sessiondata}=useOutletContext()
    console.log(sessiondata,'session')
    useEffect(()=>{
async function getData(){
  try{const {data} =await axios.get("http://localhost:5000/proposal/getproposals",{headers:{
    Authorization:localStorage.getItem("ACCESS_TOKEN")
  }})
  setproposaldata(data)
  console.log(data,'this is data for react')
  for(let i=0;i<data.length;i++){
    console.log(data[i]["_id"])
  }
  console.log(find(data,"64da99a67560463a6fe3e101" ))
}
catch(err){
 
}

}
getData()
    },[refresh])
    console.log(formikdata,'my data is')
  
  console.log(formikdata,'formakdata is chanhed or not')
    return (<>{
    (sessiondata.status&&sessiondata.role=="vendor")&&<proposalContext.Provider value={{proposaldata:proposaldata,find:find,setFormikdata:setFormikdata,onOpen:handleOpen,method:method,setMethod:setMethod,setRefresh:setRefresh}}>
     <div className="w-100">
        
        <div className="px-5"> 
        
       <div className="d-flex justify-content-between mt-4 mb-4 align-items-center">
        
       <div className="pe-2">
          Proposals
        </div>
        <SearchIcon/>
        
        <TextField placeholder="Search projects" className="flex-fill" variant="standard"/>
        <FilterAltIcon/>
        <Button variant="contained"size="small" onClick={()=>{handleOpen();setMethod("POST")}}>Create</Button>
        </div>
        {
          proposaldata.map(data=> <EventCard {...data} onOpen={handleOpen}/>)
        }
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <CreateProposal handlerefresh={setRefresh} onClose={handleClose} formikdata={formikdata} setFormikdata={setFormikdata} id="modal-modal-title"/>
         
          </Box>
        </Modal>
        </div>
      </div>
      </proposalContext.Provider>}
      </>
    );
}