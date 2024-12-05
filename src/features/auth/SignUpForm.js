import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router'
import { useUserSignupMutation } from './userApi'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

const SignUpForm = () => {


  const [userSignup,{isloading}] = useUserSignupMutation();

  const {handleChange,handleSubmit,values} = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },
    onSubmit: async (val)=>{
      try {
        const response = await userSignup(val).unwrap();
        toast.success('signup successfully');
      } catch (err) {;

        console.log(err);
      }

    }
  })
  const nav = useNavigate();
  return (
    <div className='flex items-center justify-center'>
      <Card color="transparent" className='mt-8 p-4 mb-10 '>
      <Typography variant="h4" color="blue-gray">
        Enter your detail to Signup
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
    
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            username
          </Typography>
          <Input
          name='username'
          onChange={handleChange}
          value={values.username}
            label='Email'
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
          name='email'
          onChange={handleChange}
          value={values.email}
            label='Email'
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
          name='password'
          onChange={handleChange}
          value={values.password}
          type='password'
           label='Password'
          />
        </div>
        <Button type='submit' className="mt-6" fullWidth>
          Signup
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account? <button onClick={()=>nav('/login')}>login</button>
          
        </Typography>
      </form>
    </Card>
    </div>
  )
}

export default SignUpForm
