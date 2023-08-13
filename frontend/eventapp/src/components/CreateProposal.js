import { FormControl } from '@mui/base';
import { Button, FormControlLabel, FormLabel, InputLabel, OutlinedInput, Select,IconButton} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { useFormik } from 'formik';
import ImageUploading from "react-images-uploading";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import UpdateIcon from '@mui/icons-material/Update';
import Fingerprint from '@mui/icons-material/Fingerprint';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import axios from 'axios';
const places = [

    {
      value: 'RAJAHMUNDRY',
      label: 'RJY',
    },
    {
      value: 'VIJAYAWADA',
      label: 'VJY',
    },
    {
      value: 'VISAKHAPATNAM',
      label: 'VSP',
    },
    {
      value: 'HYDERABAD',
      label: 'HYD',
    },
  ];
export default function CreatePropsal(){
  const [focused,setFocused] = useState(false)
  const [images, setImages] = useState([]);
  const [uploading,setUploading]=useState(false)
  const maxNumber = 10;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    setImages(imageList);}
  const formik = useFormik({
    initialValues: {
    },
    onSubmit: async (values) => {
      setUploading(true)
      
      const formData=new FormData()
      for(let i=0;i<images.length;i++){
        console.log(images[i].file)
        formData.append("eventimages",images[i].file)
      }
      try{
const datauploading =await axios.post('http://localhost:5000/proposal/createproposal',values)
}
catch(err){
  console.log(err,'error while uploading images')
}
try{
const imagesuploading = await axios.post('http://localhost:5000/proposal/uploadimages',formData,{   
  headers: { "Content-Type": "multipart/form-data" }})
}
catch(err){
  console.log(err)
}
setUploading(false)
  //  axios.post('http://localhost:5000/proposal/createproposal',formData,{   
  //   headers: { "Content-Type": "multipart/form-data" }}).then((data)=>{
  //   console.log(data)
  //  setUploading(false)})
  //  .catch(err=>console.log(err))
   
    },
  });
    return <form  onSubmit={formik.handleSubmit}>
<h1 className='text-center'>create propoasal</h1>
<div className='d-flex flex-row justify-content-around'>

    <div className='w-50'>
        <FormControl className='mx-2'>
        <InputLabel htmlFor='name'>Event Name</InputLabel>
        <OutlinedInput  onChange={formik.handleChange}
          onBlur={formik.handleBlur} fullWidth type='text' id="name" name="eventName"/>
        </FormControl>
        <div className='d-flex flex-row justify-content-between w-100 my-2'>
        <FormControl  className='w-50 mx-2'>
        <InputLabel id='outlined-select-currency' focused={focused} >Place of Event</InputLabel>
        <Select   
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
          name='eventPlace'   
          fullWidth
          onOpen={()=>setFocused(true)}
          onClose={()=>setFocused(false)}
          displayEmpty
          renderValue={(selected) => {
            if (selected == undefined) {
              return <div style={{color:'grey'}}>select</div>;
            }
            return selected
          }}
        >
          <MenuItem value="">select</MenuItem>
          {places.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl  className='w-50 mx-2'>
        <InputLabel id="simple-select-label" htmlFor='outlined-select-currency' focused={focused}>Proposal Type</InputLabel>
       
      
        <Select
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        name="proposalType"      
          fullWidth
          onOpen={()=>setFocused(true)}
          onClose={()=>setFocused(false)}
          displayEmpty
          renderValue={(selected) => {
            if (selected == undefined) {
              return <div style={{color:'grey'}}>select</div>;
            }
            return selected
          }}
        >
           <MenuItem value="">select</MenuItem>
          {places.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
          ))}
        </Select>
        </FormControl>

        </div>
        <div className='d-flex flex-row justify-content-between w-100 my-2'>
        <FormControl  className='w-50 mx-2'>
        <InputLabel id="simple-select-label" htmlFor='outlined-select-currency' focused={focused}>Event Type</InputLabel>
        <Select
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        name='eventType'      
          fullWidth
          onOpen={()=>setFocused(true)}
          onClose={()=>setFocused(false)}
          displayEmpty
       
          renderValue={(selected) => {
            if (selected == undefined) {
              return <div style={{color:'grey'}}>select</div>;
            }
            return selected
          }}
        >
          <MenuItem disabled value="">select</MenuItem>
          {places.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
       
        <TextField   onChange={formik.handleChange}
          onBlur={formik.handleBlur} type='number' className='w-50 mx-2 align-self-end' id="standard-basic" name="budget" label="Budget" variant="standard" />
        </div>
<div className='d-flex flex-row w-100 my-2'>
    <div className='w-50 mx-2'>
<LocalizationProvider  dateAdapter={AdapterDayjs}>
  <InputLabel htmlFor="datepick1">From</InputLabel>
        <DatePicker onChange={(e)=>formik.setFieldValue('from',e)}
         onBlur={formik.handleBlur}
          id="datepick1"/>
 </LocalizationProvider>
 </div>
 <div className="w-50 mx-2" >
 <InputLabel htmlFor="datepick2">To</InputLabel>
 <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker name="to" type="date" onChange={(e)=>formik.setFieldValue('to',e)}
          onBlur={formik.handleBlur} id="datepick2" />
 </LocalizationProvider>
 </div>
    
</div>
<FormControl className='mx-2'>
        <InputLabel htmlFor='name'>Description</InputLabel>
        <OutlinedInput  onChange={formik.handleChange}
          onBlur={formik.handleBlur} multiline rows={5} placeholder='Description' name='description' fullWidth type='text' id="description"/>
        </FormControl>
    </div>
    <div className='d-flex flex-column w-50 px-2'>
      <div>
        <ImageUploading
         multiple
         value={images}
         onChange={onChange}
         maxNumber={maxNumber}
         dataURLKey="data_url"
         acceptType={["jpg"]}
        >
{({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        })=>
  <><div className='d-flex justify-content-end'>
    <Button   onClick={onImageUpload}
              {...dragProps} variant='contained' color='primary' size='small'>add</Button>
</div>
<div>
 
    <div className='width-image d-flex flex-wrap my-2'  >
    
    {imageList.map((image,index) => {
      return (
     
        // <ImageListItem key={image.data_url}>
        //   <img
        //     src={`${image.data_url}?w=164&h=164&fit=crop&auto=format`}
        //     srcSet={`${image.data_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        //     alt={index}
        //     loading="lazy"
        //   />
        // </ImageListItem>
 <div className='width-image-20 mx-2 d-flex flex-column align-items-center giveborder'>
  <img  className="imagelist"src={image.data_url}/>
  <div className='d-flex flex-row justify-content-center'>
  <IconButton aria-label="updateicon" onClick={() => onImageUpdate(index)} color="primary" sx={{width:"30px",height:"20px"}}>
        <UpdateIcon color='primary' sx={{width:"100%"}} />
      </IconButton>
      <IconButton onClick={() => onImageRemove(index)} aria-label="deleteicon" color="secondary" sx={{width:"30px",height:"20px"}}>
        <DeleteIcon  sx={{width:"100%",color:red[500]}} />
      </IconButton>
      </div>
  </div>

    )}
      )}
 
    {/* <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div> */}
    </div>
    {/* <div className='width-image d-flex flex-wrap my-2' >
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    </div> */}
    </div>
    </>
    }
    </ImageUploading>
</div>
<FormControl>
        <InputLabel htmlFor='name'>Food Preferences</InputLabel>
        <OutlinedInput onChange={formik.handleChange}
          onBlur={formik.handleBlur} multiline rows={5} fullWidth type='text' id="foodPreferences" name="foodPreferences"/>
        </FormControl>
        <FormControl>
        <InputLabel htmlFor='name'>Events</InputLabel>
        <OutlinedInput onChange={formik.handleChange}
          onBlur={formik.handleBlur} multiline rows={5} fullWidth type='text' id="events" name="events"/>
        </FormControl>
    </div>

</div>
<div className='d-flex justify-content-center'>
<LoadingButton variant="contained" loading={uploading} color='primary' size='large' type='submit'>ADD</LoadingButton>
</div>
    </form>

}