import {TextField} from '@mui/material';
import {FormControl,FormHelperText,InputLabel,OutlinedInput,FormLabel,Button} from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

const validation = Yup.object().shape({
    email: Yup.string().required().email(),
    name: Yup.string().required(),
    phone: Yup.string().required(),
    password: Yup.string().required(),
    confirm_password: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

 
export default function Form(){
    let [show,setShow]=useState('vendor')
    let [method,setMethod]=useState('register')
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone:'',
          password:'',
          confirm_password:''
        },
        validationSchema:validation,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      }); 
    return<>
    <div className='d-flex justify-content-between w-100'>
      <Button className='w-50' variant='text' onClick={()=>setShow('vendor')}>Vendor</Button>
      <Button className='w-50' variant='text' onClick={()=>setShow('user')}>User</Button>
    </div>
    <div>
    <h6>{method==='login'?'signin your account':'register your account'}</h6>
    </div>
    <form  onSubmit={formik.handleSubmit}>
        <div className='d-flex flex-column'>
         {(method=='register')&&<><FormControl color="primary" >
        <InputLabel htmlFor="name" required>Name</InputLabel>
  <OutlinedInput id="name" name="name" aria-describedby="my-helper-text" label="Name"{...formik.getFieldProps('name')}/>
  {(formik.touched.name&&formik.errors.name)?<FormHelperText sx={{color:'red'}}id="my-helper-text">{formik.errors.name}</FormHelperText>:<div className='gap'></div>}
</FormControl>
        <FormControl color="primary" className='h-10'>
        <InputLabel htmlFor="email" required>Email</InputLabel>
  <OutlinedInput id="email" label="Email" name="email" type="email" aria-describedby="my-helper-text"{...formik.getFieldProps('email')}/>
  {(formik.touched.email&&formik.errors.email)?<FormHelperText sx={{color:'red'}}id="my-helper-text">{formik.errors.email}</FormHelperText>:<div className='gap'></div>}
</FormControl>
<FormControl color="primary">
        <InputLabel htmlFor="phone" required>Phone no</InputLabel>
  <OutlinedInput id="phone" label="phone no" type="number" name="phone" aria-describedby="my-helper-text"{...formik.getFieldProps('phone')}/>
  {(formik.touched.password&&formik.errors.phone)?<FormHelperText sx={{color:'red'}} id="my-helper-text">{formik.errors.phone}</FormHelperText>:<div className='gap'></div>}
</FormControl>  
<FormControl color="primary">
        <InputLabel htmlFor="password" required>password</InputLabel>
  <OutlinedInput id="password" label="password" type="password" name="password" aria-describedby="my-helper-text"{...formik.getFieldProps('password')}/>
  {(formik.touched.password&&formik.errors.password)?<FormHelperText sx={{color:'red'}} id="my-helper-text">{formik.errors.password}</FormHelperText>:<div className='gap'></div>}
</FormControl>  
<FormControl color="primary">
        <InputLabel htmlFor="confirm_password" required>confirm password</InputLabel>
  <OutlinedInput id="confirm_password" label="confirm password"name="confirm_password" type="password" aria-describedby="my-helper-text"{...formik.getFieldProps('confirm_password')}/>
  {(formik.touched.confirm_password&&formik.errors.confirm_password)?<FormHelperText sx={{color:'red'}} id="my-helper-text">{formik.errors.confirm_password}</FormHelperText>:<div className='gap'></div>}
</FormControl>
</>}
{method=='login'&&<><FormControl color="primary">
        <InputLabel htmlFor="my-input" required>Phone no or email</InputLabel>
  <OutlinedInput id="my-input" label="phone no or email" type="number" aria-describedby="my-helper-text"/>
  <FormHelperText  id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
<FormControl color="primary">
        <InputLabel htmlFor="my-input" required>password</InputLabel>
  <OutlinedInput id="my-input" label="password" type="password" aria-describedby="my-helper-text"/>
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl></>} 

<div className='d-flex justify-content-between pb-4'>
<Button variant ={method=='login'?'contained':'text'} type='submit' className='mt-3'color='primary' sx={{order:()=>{if(method=='login'){return 2}
else return 1}}} onClick={()=>setMethod('login')}>signin</Button>
<Button variant ={method=='register'?'contained':'text'}  className='mt-3' color='primary' sx={{order:()=>{if(method=='register'){return 2}
else return 1}}} onClick={()=>setMethod('register')} type='submit'>Register</Button>  
</div>
</div>

    </form>
    
    </>
}