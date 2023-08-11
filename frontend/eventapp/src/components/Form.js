import {TextField} from '@mui/material';
import {FormControl,FormHelperText,InputLabel,OutlinedInput,FormLabel,Button} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormControl } from '@mui/material/FormControl';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import "yup-phone-lite";
import axios from "axios"

export default function Form(){
    let [show,setShow]=useState('vendor')
    let [method,setMethod]=useState('register')
    let [loadinga,setLoadinga]=useState(false)
    let [loadingb,setLoadingb]=useState(false)
    console.log('refreshes')
    const validation = (method=="register")?(Yup.object().shape({
   email: Yup.string().required().email().test(
        'email-backend-validation',  // Name
        'email already exists',               // Msg
        async (email) => {
          // Res from backend will be flag at res.data.success, true for 
          // username good, false otherwise
          const { data: { status } } = await axios.post(
            "http://localhost:5000/person/validate", 
            { email:email,show:show}
          );
  
          return status
        }
      ),
      name: Yup.string().required(),
      phone: Yup.string().required().phone('IN','not a valid number').test(
        'phone-backend-validation',  // Name
        'number already taken',               // Msg
        async (phone) => {
          // Res from backend will be flag at res.data.success, true for 
          // username good, false otherwise
          const { data: { status } } = await axios.post(
            "http://localhost:5000/person/validate", 
            { phone:phone,show:show}
          );
  
          return status
        }
      ),
      password: Yup.string().required() .min(8, "Pasword must be 8 or more")
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "at least one uppercase and lowercase")
        .matches(/\d/, "at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "at least one special character"),
      confirm_password: Yup.string().label('confirm password').required('confirm your password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })):(Yup.object().shape({
      loginid: Yup.string().required().email().test(
           'emaillogin-backend-validation',  // Name
           'email doesnt exist',               // Msg
           async (loginid) => {
             // Res from backend will be flag at res.data.success, true for 
             // username good, false otherwise
             const { data: { status } } = await axios.post(
               "http://localhost:5000/person/validate", 
               { email:loginid,show:show}
             );
     
             return !status
           }
         ),
         loginpassword: Yup.string().required()
       }))
  
   
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone:'',
          password:'',
          confirm_password:'',
          loginid:'',
          loginpassword:''
        },
        validationSchema:validation,
        onSubmit: (values,{resetForm}) => {
          if(show=='user'){
          if(method=='register'){
          setLoadingb(true)
          axios.post('http://localhost:5000/person/registeruser',values).then(()=>{
            setTimeout(()=>setLoadingb(false),5000)
            resetForm({values:''})
          console.log('submitted')})
          }
          else if(method=='login'){
            console.log('clicked')
            setLoadinga(true)
            axios.post('http://localhost:5000/person/loginuser',values).then(()=>{
              setTimeout(()=>setLoadinga(false),2000)
            console.log('loggedin')})
          }
        }
        else if(show=='vendor'){
          if(method=='register'){
          setLoadingb(true)
          axios.post('http://localhost:5000/person/registervendor',values).then(()=>{
            setTimeout(()=>setLoadingb(false),5000)
            resetForm({values:''})
          console.log('submitted')})
          }
          else if(method=='login'){
            console.log('clicked')
            setLoadinga(true)
            axios.post('http://localhost:5000/person/loginvendor',values).then(()=>{
              setTimeout(()=>setLoadinga(false),2000)
            console.log('loggedin')})
          }
        }
        },
      }); 
    return<>
    <div className='d-flex justify-content-between w-100'>
      <Button className='w-50 rounded-0' variant={(show=='vendor')?'contained':'text'} onClick={()=>setShow('vendor')}>Vendor</Button>
      <Button className='w-50 rounded-0' variant={(show=='user')?'contained':'text'} onClick={()=>setShow('user')}>User</Button>
    </div>
    <div>
    <h6 className='signintext'>{method==='login'?'signin your account':'register your account'}</h6>
    </div>
    <form  onSubmit={formik.handleSubmit} className='mx-3'>
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
  <OutlinedInput id="phone" label="phone no" type="tel" name="phone" aria-describedby="my-helper-text"{...formik.getFieldProps('phone')}/>
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
        <InputLabel htmlFor="loginid" required>Phone no or email</InputLabel>
  <OutlinedInput id="loginid" label="phone no or email" name='loginid' type="email" aria-describedby="my-helper-text" {...formik.getFieldProps('loginid')}/>
  {(formik.touched.loginid&&formik.errors.loginid)?<FormHelperText sx={{color:'red'}}id="my-helper-text">{formik.errors.loginid}</FormHelperText>:<div className='gap'></div>}
</FormControl>
<FormControl color="primary">
        <InputLabel htmlFor="loginpassword" required>password</InputLabel>
  <OutlinedInput id="loginpassword" label="password" type="password" name='loginpassword' aria-describedby="my-helper-text"{...formik.getFieldProps('loginpassword')}/>
  {(formik.touched.loginpassword&&formik.errors.loginpassword)?<FormHelperText sx={{color:'red'}}id="my-helper-text">{formik.errors.loginpassword}</FormHelperText>:<div className='gap'></div>}
</FormControl></>} 

<div className='d-flex justify-content-between pb-4'>
<LoadingButton loading={loadinga} variant ={method=='login'?'contained':'text'} type='submit' className='mt-3'color='primary' sx={{order:()=>{if(method=='login'){return 2}
else return 1}}} onClick={()=>{setMethod('login')}}>signin</LoadingButton>
<LoadingButton loading={loadingb} variant ={method=='register'?'contained':'text'}  className='mt-3' color='primary' sx={{order:()=>{if(method=='register'){return 2}
else return 1}}} onClick={()=>{setMethod('register')
}} type='submit'>Register</LoadingButton>  
</div>
</div>

    </form>
    
    </>
}