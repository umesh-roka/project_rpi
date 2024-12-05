import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import { useUserLoginMutation } from './userApi'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../../Slice/userSlice'

const LoginForm = () => {
const dispatch = useDispatch();
const nav =useNavigate();
const [userlogin,{isloading,data }] = useUserLoginMutation();

const {handleChange,handleSubmit,values} = useFormik({
initialValues:{
  email:'',
  password:''
},
onSubmit:async (val)=>{
try {
 const response = await userlogin(val).unwrap();
   dispatch(addUser(response));
 toast.success('login successful');
  nav('/')
  
} catch (err) {
  toast.error(`${err.data?.message}`);
}
}
})
  return (
    <div className='flex items-center justify-center'>
      <Card color="transparent" className='mt-8 p-4'>
      <Typography variant="h4" color="blue-gray">
        Login Your Account
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
    
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input

          name='email'
            onChange={handleChange}
            value={values.value}
            label='Email'
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
          type='password'
          name='password'
          onChange={handleChange}
          value={values.password}
           label='Password'
          />
        </div>
       
        <Button loading={isloading} disabled={isloading} className="mt-6" fullWidth type='submit'>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Doesn't have an account? <button onClick={()=>nav('/signup')}>Sign Up</button>
          
        </Typography>
      </form>
    </Card>
    </div>
  )
}

export default LoginForm
