"use client";
import React, { useEffect, useState } from 'react';
import { Button, Navbar, MobileNav, Typography, IconButton } from "../TailWindMaterial/Material";
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { SideBar } from './SideBar';
export default function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      {['Home', 'About us', 'Service', 'Pages', 'Blog', 'Contact us'].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-normal cursor-pointer ${activeNav === item ? 'text-blue-500' : ''}`}
          onClick={() => setActiveNav(item)}
        >
          <a href="#" className="flex items-center">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full bg-white shadow-md rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer items-center py-1.5 font-medium flex"
        >
          <SideBar className="z-50"/>
        <Image src={logo} alt='' width={100} height={90}/>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 text-3xl text-[#615E68] hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>
            <Button variant="gradient" size="sm" className="hidden lg:inline-block">
              <span>Sign in</span>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm">
            <span>Sign in</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
