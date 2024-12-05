import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
    Button,
} from "@material-tailwind/react";
 
const Courses = () => {
  return (
    <div className='grid grid-flow-row my-10 pb-10'>
      <div className=' text-center uppercase text-2xl p-6 font-bold italic'>
      <h1 className='font-bold text-3xl py-5'>Courses</h1>
      </div>
      <div className='grid grid-cols-3 space-x-5'>
      <div>
    <Card className="w-[280px] h-[350px]">
      <CardHeader floated={false} className="h-[250px]  w-[250px]">
        <img className='object-cover ' src="https://sigarra.up.pt/icbas/en/gessi_web.imagem?p_id=sanfeed" alt="course" />
      </CardHeader>
      <CardBody className="text-center">
      <h1 className="font-bold">Animal Science</h1>
      </CardBody>
      <Button className='mb-2 mx-5'>Know more</Button>
    </Card>

    </div>
    <div>
    <Card className="w-[280px] h-[350px]">
      <CardHeader floated={false} className="h-[250px]  w-[250px]">
        <img className='object-cover ' src="https://blog.cabi.org/wp-content/uploads/sites/5/2021/04/iStock-1182619005-1024x683.jpg" alt="course" />
      </CardHeader>
      <CardBody className="text-center">
      <h1 className="font-bold">Plant Science</h1>
      </CardBody>
      <Button className='mb-2 mx-5'>Know more</Button>
    </Card>
    
    </div>
    <div>
    <Card className="w-[280px] h-[350px]">
      <CardHeader floated={false} className="h-[250px]  w-[250px]">
        <img className='object-cover ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-sZ9Ee94g2Bw15PJG5qBWJgust1CNJiW1g&s" alt="course" />
      </CardHeader>
      <CardBody className="text-center">
      <h1 className="font-bold">IT</h1>
      </CardBody>
      <Button className='mb-2 mx-5'>Know more</Button>
    </Card>
    
    </div>
      </div>
   
    </div>
  )
}


export default Courses
