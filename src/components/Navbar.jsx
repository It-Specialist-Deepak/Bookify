import React from 'react';
import { signOut } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../context/Firebase';

function MyNav() {
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(firebaseAuth).then((val) => {
      console.log(val);
      navigate("/intro");
    });
  };
  const validRoutes = ["/", "/about", "/book/list" ,"/show" ];

  if (!validRoutes.includes(location.pathname)) {
    return null; // Do not render the nav bar for invalid paths
  }
  
  return (
    <>
      <nav className=" p-5 sticky top-0  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="text-white text-2xl font-bold">Bookify</NavLink>
          <input type="checkbox" id="menu-toggle" className="hidden menu-toggle" />
          <label htmlFor="menu-toggle" className="block md:hidden text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>
          <div className="hidden md:flex space-x-4 menu items-center">
            <NavLink to="/" className="text-white hover:text-gray-300"> Home </NavLink>
            <NavLink to="/about" className="text-white hover:text-gray-300"> About </NavLink>
            <NavLink to="/book/list" className="text-white hover:text-gray-300"> Add listing </NavLink>
            <button onClick={handleClick} className="w-26 px-4 py-2 font-semibold text-white bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-blue-500 rounded-md hover:to-green-500 focus:outline-none focus:ring focus:ring-indigo-200"> Logout </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNav;
