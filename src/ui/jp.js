import React from 'react'
import { Typography } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
 
const Top = () => {
  return (
    <div className=" h-[100px] w-full mt-3 grid grid-cols-2">

      <div className='grid grid-flow-col '>
        <div>
      <img
       className="max-h-[100px] min-h-[80px] max-w-[90px] min-w-[60px]float-right object-cover object-center "
      src="https://www.collegenp.com/uploads/2018/02/CTEVT.png"
      alt="ctevt"
    />
     </div>
        <div className='grid grid-flow-row mt-4'>
          <Typography variant="h5" color="blue-gray">
          <h1>Rolpa polytechinic Institute
          </h1>
          <h1> रोल्पा बहुप्राविधिक शिक्षालय</h1>
          </Typography>
        </div>
        </div>


        <div className='grid grid-cols-3 items-center'>
          <Typography>
          <NavLink to='https://facebook.com'className='flex' >
<img
      className="h-[40px] w-[30px] pb-4 float-end object-cover object-center"
      src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
      alt="facebook"
    />
 <h1 >Facebook</h1>
 </NavLink>
          </Typography>
      <Typography>
        
<NavLink to='https://instagram.com' className='flex'>

<img
      className="h-[40px] w-[30px] pb-4 float-end object-cover object-center"
      src="https://png.pngtree.com/png-clipart/20180524/ourmid/pngtree-instagram-social-media-icon-png-image_3572472.png"
      alt="facebook"
    />

 <h1 >Instagram</h1>

</NavLink>
      </Typography>
      <NavLink to='https://gmail.com' className='flex'>

<img
      className="h-[40px] w-[30px] pb-4 float-end object-cover object-center"
      src="https://static.vecteezy.com/system/resources/previews/042/165/820/original/gmail-icon-transparent-free-png.png"
      alt="facebook"
    />

<h1 >Gamil</h1>
</NavLink>
      <Typography>

      </Typography>
        </div>
     
    
    </div>
  )
}

export default Top
