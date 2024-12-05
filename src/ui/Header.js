import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Slice/userSlice";

const Header = () => {
  const {user} = useSelector((state)=>state.userSlice);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(Logout());
    nav('/')
  }
  const location = useLocation(); // Hook to access the current URL
  const [openNav, setOpenNav] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Event handlers for Programs dropdown hover
  const handleProgramsMouseEnter = () => {
    setProgramsDropdownOpen(true);
  };

  const handleProgramsMouseLeave = () => {
    setProgramsDropdownOpen(false);
  };

  // Event handlers for Facilities dropdown hover
  const handleFacilitiesMouseEnter = () => {
    setFacilitiesDropdownOpen(true);
  };

  const handleFacilitiesMouseLeave = () => {
    setFacilitiesDropdownOpen(false);
  };

  const navList = (
    <ul className="mt-2 mb-[4px] flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2 uppercase">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="lg:px-2 lg:py-4 hover:bg-white hover:text-primary text-xl"
      >
        <NavLink to="/">Home</NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="text-xl lg:px-2 lg:py-4 hover:bg-white hover:text-primary"
      >
        <NavLink to="/notice">Notice</NavLink>
      </Typography>

      {/* Hover-based Dropdown for Programs */}
      <div
        className="relative"
        onMouseEnter={handleProgramsMouseEnter}
        onMouseLeave={handleProgramsMouseLeave}
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className="text-xl lg:px-2 lg:py-4 hover:bg-white hover:text-primary cursor-pointer"
        >
          Programs
        </Typography>
        {programsDropdownOpen && (
          <ul className="absolute top-full mt-2 bg-white text-black shadow-lg p-2 rounded-lg w-40">
            <li className="hover:bg-primary hover:text-white p-2 rounded">
              <NavLink to="">Diploma in IT</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-white p-2 rounded">
              <NavLink to="">Diploma in Animal Science</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-white p-2 rounded">
              <NavLink to="">Diploma in Plant Science</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-white p-2 rounded">
              <NavLink to="/programs/online">Short term program</NavLink>
            </li>
          </ul>
        )}
      </div>

      {/* Hover-based Dropdown for Facilities */}
      <div
        className="relative"
        onMouseEnter={handleFacilitiesMouseEnter}
        onMouseLeave={handleFacilitiesMouseLeave}
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className="text-xl lg:px-2 lg:py-4 hover:bg-white hover:text-primary cursor-pointer"
        >
          Facilities
        </Typography>
        {facilitiesDropdownOpen && (
          <ul className="absolute top-full mt-2 bg-white text-black shadow-lg p-2 rounded-lg w-40">
            <li className="hover:bg-primary hover:text-white p-2 rounded">
              <NavLink to="/facilities/library">Library</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-white p-2 rounded">
              <NavLink to="/facilities/lab">Laboratory</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-white p-2 rounded">
              <NavLink to="/facilities/gym">Girls Hostel</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-white p-2 rounded">
              <NavLink to="/facilities/cafeteria">Canteen</NavLink>
            </li>
          </ul>
        )}
      </div>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="text-xl lg:px-2 lg:py-4 hover:bg-white hover:text-primary"
      >
        <NavLink to="/about">About</NavLink>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:py-0 lg:px-0 bg-primary">
        <div className="flex items-center justify-end text-blue-gray-900">
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {/* Conditionally render the login button */}
              {location.pathname.includes('/admin') ? (
               
               <button onClick={() => nav("/login")}  className=" text-white mr-3 text-xl">Log In</button>
                
              ):""}
              {user ? user.isAdmin ? <button onClick={handleClick} className=" text-white mr-3 text-xl">Logout</button>: "":""}
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
          {/* Conditionally render the login button */}
          {location.pathname.includes('/admin') && (
            <div className="flex items-center gap-x-1">
              <Button
                fullWidth
                variant="text"
                size="sm"
                className="bg-blue-gray-900 text-white"
              >
                <span onClick={() => nav("/login")}>Login</span>
              </Button>
            </div>
          )}
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Header;
