// import Modal from '@mui/material/Modal';
import CreateProposal from "../components/CreateProposal";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EventCard from "../components/EventCard"
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
export default function VendorProfile(){
    // const [open, setOpen] = useState(false);
    // const modalOpen = () => setOpen(true);
    // const modalClose = () => setOpen(false);
    // return 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div className="w-100">
          <nav className="w-100 border d-flex justify-content-between">
        <div>
            <span>LOGO</span>
        </div>
        <div className="d-flex flex-row align-items-center">
        <h6 className="mx-2">username</h6>
        <img className="img-thumbnail rounded-circle" style={{width:"50px"}} src="https://pixabay.com/get/g8708fde4c1bc86e981c307ad66e3ef48b1bd9c189149f94b5414f00ed79643b4bc99d5e643d9a8d5c2788566e51218b74dccd1164438665df2c598b38bfcaa56_1280.jpg"/>
        </div>
        </nav>
        <div className="px-5"> 
       <div className="d-flex align-button-right">
        <Button variant="contained" onClick={handleOpen}>Create</Button>
        </div>
        <EventCard/>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <CreateProposal id="modal-modal-title"/>
         
          </Box>
        </Modal>
        </div>
      </div>
    );
}