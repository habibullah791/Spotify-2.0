import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className='flex flex-row justify-start items-center bg-white mt-6 rounded-full w-60 ml-10'>
      <FiSearch aria-hidden="true" className="w-6 h-6 ml-3 mr-1 text-black" />
      <form onSubmit={handleSubmit} autoComplete="off" className=" text-gray-400 focus-within:text-gray-600">
        <div className="flex flex-row justify-start items-center">
          <input
            name="search-field"
            autoComplete="off"
            id="search-field"
            className="flex-1  rounded-full py-1.5 p-2 placeholder-gray-500 outline-none text-base text-black"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;