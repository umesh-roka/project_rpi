import React, { useState } from "react";
 
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
 
const Header=()=> {
  const nav = useNavigate();

  const [openNav, setOpenNav] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);

 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-[4px] flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 uppercase ">

     <Menu className=' relative inline-block uppercase'>
     <MenuHandler>
        
      <button
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
        className="lg:px-2 lg:py-4 uppercase text-white hover:bg-white hover:text-primary font-normal"
      >
        Programs
      </button>
  </MenuHandler>     
{isHovered && (
  <div
  
  onMouseEnter={()=> setIsHovered(true)}
  onMouseLeave={()=> setIsHovered(false)}
  className="absolute "
  >
     <MenuList>
       <NavLink ><MenuItem>Animal Science</MenuItem></NavLink>
        <MenuItem>Plant Science</MenuItem>
        <MenuItem>Information Technology</MenuItem>
      </MenuList>
      </div>
      )}
      </Menu> 

      <Typography
        as="li"
        variant="small"
        color="white"
        className="lg:px-2 lg:py-4  hover:bg-white hover:text-primary font-normal"
      >
        <NavLink to =''>Home</NavLink>
        
      </Typography>


      <Typography
        as="li"
        variant="small"
        color="white"
        className="lg:px-2 lg:py-4  hover:bg-white hover:text-primary font-normal"
      >
          <NavLink to=''>Notice</NavLink>
      </Typography>


      <Typography
        as="li"
        variant="small"
        color="white"
        className="  font-normal"
      >

        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className=" font-normal lg:px-2 lg:py-4  hover:bg-white hover:text-primary active:text-red-400"
      >
        <NavLink to=''>Facilities</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className=" font-normal lg:px-2 lg:py-4  hover:bg-white hover:text-primary"
      >
        <NavLink to ='/about'>About</NavLink>
      </Typography>
    </ul>

  )
 
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:py-0 lg:px-0 bg-primary">

    <div className="flex items-center justify-end text-blue-gray-900">
     
      <div className="flex items-center gap-4">
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button
            variant="text"
            size="sm"
            className="hidden lg:inline-block hover:bg-black bg-blue-gray-900 mr-5  text-white"
          >
            <span onClick={()=>nav('/login')}>Log In</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
    </div>
    <MobileNav open={openNav}>
      {navList}
      <div className="flex items-center gap-x-1">
        <Button  fullWidth variant="text" size="sm"    className="bg-blue-gray-900 text-white">
          <span onClick={()=>nav('/login')}>Login</span>
        </Button>
      </div>
    </MobileNav>
  </Navbar>

    
  );
}


export default Header