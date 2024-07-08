import React from 'react';
import '../Stylesheets/Background.css';
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <div className='Background w-full min-h-screen'>
            <div className="p-5 sticky top-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">Bookify</div>
                </div>
            </div>
            <div className='flex flex-col justify-end text-center items-center  p-8 pl-20 md:p-20  lg:p-40'>
                <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500'>Welcome to Bookify</h1>
                <h2 className=' text-2xl md:text-4xl lg:text-4xl font-md text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 mt-4'>Making Path of Young Programmers</h2>
                <h3 className=' text-xl md:text-2xl lg:text-2xl font- text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 mt-4'>Bookify is your go-to app for discovering and exploring a vast collection of books from various genres, tailored to your reading preferences. We have a diverse collection of books available for you to choose from.</h3>
                
                <div className='flex flex-col md:flex-row justify-end gap-2 mt-6 items-center'>
                    <Link to={"/login"} className="w-full p-4 md:w-28  flex justify-center py-2 font-semibold text-white bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-blue-500 rounded-full hover:to-green-500 focus:outline-none focus:ring focus:ring-indigo-200 mb-4 md:mb-0">Login</Link>
                    <Link to={"/register"} className="w-full p-4 md:w-28 flex justify-center py-2 font-semibold text-white bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-blue-500 rounded-full hover:to-green-500 focus:outline-none focus:ring focus:ring-indigo-200">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Intro;
