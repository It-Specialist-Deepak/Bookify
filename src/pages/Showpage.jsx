import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Stylesheets/Background.css'; 

function Showpage() {
  const location = useLocation();
  const { book, url } = location.state || {};

  if (!book) {
    return (
      <div className='p-10 w-full h-screen bg-zinc-800'>
        <h1 className='text-white text-center'>No book selected</h1>
      </div>
    );
  }

  return (
    <div className='p-10 w-full h-screen Background text-white'>
      <div className='max-w-2xl mx-auto  p-5 rounded shadow flex flex-col justify-center items-center bg-zinc-800'>
        <img className="w-9/12 h-3/6	items-center " src={url} alt="Book Cover" />
        <h1 className='text-2xl font-bold mb-4'>{book.name}</h1>
        <p className='mb-2'>Written by: {book.displayName || "Anonymous"}</p>
        <p className='mb-2'>Price: ₹{book.price}</p>
        <p>ISBN: {book.isbn}</p>
      </div> 
    </div>
  );
}

export default Showpage;
