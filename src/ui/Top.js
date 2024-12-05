import React from 'react'
import { Typography } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

 
const Top = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <>
    {isDesktopOrLaptop ? "" : <> {isRetina &&  
//to show in mobile format
  <div className=" h-[60px] w-full mt-3 xl:h-[100px] grid grid-cols-2">
  <div className='grid grid-flow-col   '>
        
        <div>
          
      <img
       className="max-h-[40px]  max-w-[50px] mt-[10px] float-right object-cover object-center "
      src="https://www.collegenp.com/uploads/2018/02/CTEVT.png"
      alt="ctevt"
    />
     </div>
        <div className='grid grid-flow-row mt-4'>
          <Typography  className='font-bold text-[10px] ' color="blue-gray">
          <h1>Rolpa polytechinic Institute
          </h1>
          <h1> रोल्पा बहुप्राविधिक शिक्षालय</h1>
          </Typography>
        </div>
        </div>

        
<div className='grid grid-cols-3 items-center '>
<Typography>
<NavLink to='https://facebook.com'className='flex  text-[10px]' >
<img
className="h-[30px] w-[30px] pb-4 float-end object-cover object-center"
src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
alt="facebook"
/>
<h1 >Facebook</h1>
</NavLink>
</Typography>
<Typography>

<NavLink to='https://instagram.com' className='flex  text-[10px]'>

<img
className="h-[30px] w-[30px] pb-4 float-end object-cover object-center"
src="https://png.pngtree.com/png-clipart/20180524/ourmid/pngtree-instagram-social-media-icon-png-image_3572472.png"
alt="facebook"
/>

<h1 >Instagram</h1>

</NavLink>
</Typography>
<NavLink to='https://gmail.com' className='flex  text-[10px]'>

<img
className="h-[30px] w-[20px] pb-4 float-end object-cover object-center"
src="https://static.vecteezy.com/system/resources/previews/042/165/820/original/gmail-icon-transparent-free-png.png"
alt="facebook"
/>

<h1 >Gamil</h1>
</NavLink>
</div>


</div>
}</>}



{isDesktopOrLaptop &&  
//to show in desktop and laptop
  <div className=" h-[80px] w-full grid grid-cols-2">
<div className='grid grid-flow-col   '>
        
        <div>
          
      <img
       className="max-h-[70px]  max-w-[70px] mt-[5px] float-right object-cover object-center "
      src="https://www.collegenp.com/uploads/2018/02/CTEVT.png"
      alt="ctevt"
    />
     </div>
        <div className='grid grid-flow-row mt-[11px]'>
          <Typography  className='font-bold text-[20px] ' color="blue-gray">
          <h1>Rolpa polytechinic Institute
          </h1>
          <h1> रोल्पा बहुप्राविधिक शिक्षालय</h1>
          </Typography>
        </div>
        </div>

<div className='grid grid-cols-3 items-center uppercase '>
<Typography>
<NavLink to='https://facebook.com'className='flex  text-[14]' >
<img
className="h-[40px] w-[40px] pb-4 float-end object-cover object-center"
src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
alt="facebook"
/>
<h1 >Facebook</h1>
</NavLink>
</Typography>
<Typography>

<NavLink to='https://instagram.com' className='flex  text-[14]'>

<img
className="h-[40px] w-[40px] pb-4 float-end object-cover object-center"
src="https://png.pngtree.com/png-clipart/20180524/ourmid/pngtree-instagram-social-media-icon-png-image_3572472.png"
alt="facebook"
/>

<h1 >Instagram</h1>

</NavLink>
</Typography>
<NavLink to='https://gmail.com' className='flex  text-[14]'>

<img
className="h-[40px] w-[40px] pb-4 float-end object-cover object-center"
src="https://static.vecteezy.com/system/resources/previews/042/165/820/original/gmail-icon-transparent-free-png.png"
alt="facebook"
/>

<h1 >Gamil</h1>
</NavLink>
</div>


</div>
}
  
</>
  )
}

export default Top
