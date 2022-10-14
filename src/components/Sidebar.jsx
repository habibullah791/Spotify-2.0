import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup, HiPlay } from 'react-icons/hi';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];


const NavLinks = () => (
  <div className='mt-10'>
    {links.map((link) => (
      <NavLink
      as={Link}
        key={link.name}
        to={link.to}
        className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-spotify'
      >
        <link.icon className='w-6 h-6 mr-2' />
        {link.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='h-full m-0 pb-10'>
      <div className='md:flex hidden flex-col py-3 px-4 w-[160px] bg-[#100F0F]'>
        <img
          src={logo}
          className='mt-10 h-14 w-full object-contain'
        />
        <NavLinks />
      </div>
      <div className='absolute md:hidden mt-5 block top-10 right-3 z-10'>
        {mobileMenuOpen ? (
          <RiCloseLine className='h-10 w-10 text-white mt-5' onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <HiOutlineMenu className='h-10 w-10 text-white mt-5' onClick={() => setMobileMenuOpen(true)} />
        )}
      </div>
      <div className={`px-10 absolute z-10 h-screen w-2/4 md:hidden bg-[#100F0F] backdrop-blur-lg p-10 ease-in-out duration-500 ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img
          src={logo}
          className='h-14 w-full object-contain'
        />
        <NavLinks onClick={() => setMobileMenuOpen(false)} />
      </div>
    </div>
  );
};

export default Sidebar;
