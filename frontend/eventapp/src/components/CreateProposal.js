import { FormControl } from '@mui/base';
import { Button, FormLabel, InputLabel, OutlinedInput } from '@mui/material';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const places = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
export default function CreatePropsal(){
    return <div>
<h1 className='text-center'>create propoasal</h1>
<div className='d-flex flex-row justify-content-around'>

    <div className='w-50'>
        <FormControl className='mx-2'>
        <InputLabel htmlFor='name'>hi saleem</InputLabel>
        <OutlinedInput fullWidth type='text' id="name"/>
        </FormControl>
        <div className='d-flex flex-row justify-content-between w-100'>
        <TextField
        className='w-50 mx-2'
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select "
        >
          {places.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        className='w-50 mx-2'
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select "
        >
          {places.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className='d-flex flex-row justify-content-between w-100'>
        <TextField
          className='w-50 mx-2'
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select "
        >
          {places.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField   className='w-50 mx-2' id="standard-basic" label="Standard" variant="standard" />
        </div>
<div className='d-flex flex-row w-100'>
    <div className='w-50 mx-2'>
<LocalizationProvider  dateAdapter={AdapterDayjs}>
        <DatePicker label="Basic date picker" />
 </LocalizationProvider>
 </div>
 <div className="w-50 mx-2" >
 <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Basic date picker" />
 </LocalizationProvider>
 </div>
    
</div>
<FormControl className='mx-2'>
        <InputLabel htmlFor='name'>hi saleem</InputLabel>
        <OutlinedInput multiline rows={5} fullWidth type='text' id="name"/>
        </FormControl>
    </div>
    <div className='d-flex flex-column w-50 px-2'>
<div className='d-flex justify-content-end'>
    <Button variant='contained' color='primary' size='small'>add</Button>
</div>
<div>
    <div className='width-image d-flex flex-row my-2' >
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    </div>
    <div className='width-image d-flex flex-row my-2' >
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    <div className='width-image-20 mx-2'></div>
    </div>
</div>
<FormControl>
        <InputLabel htmlFor='name'>hi saleem</InputLabel>
        <OutlinedInput multiline rows={5} fullWidth type='text' id="name"/>
        </FormControl>
        <FormControl>
        <InputLabel htmlFor='name'>hi saleem</InputLabel>
        <OutlinedInput multiline rows={5} fullWidth type='text' id="name"/>
        </FormControl>
    </div>

</div>
<div className='d-flex justify-content-center'>
<Button variant="contained" color='primary' size='large'>ADD</Button>
</div>
    </div>

}