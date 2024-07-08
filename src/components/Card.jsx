import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';


function Card(props) {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    firebase.getImageUrl(props.imageURL).then((url) => setUrl(url));
  }, [firebase, props.imageURL]);

  return (
    <div className="max-w-70 rounded-md overflow-hidden shadow-lg bg-white flex flex-col justify-between ">
      <div>
        <img className="w-10/12 h-50 mx-auto mt-5" src={url} alt="Sample Image" />
        <div className="px-6 py-3">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">
            This Book has a title {props.name} and this book is written by {props.displayName || "Anonymous"} and this book costs ₹{props.price}
          </p>
        </div>
      </div>
      <div className="px-4  pb-2 mt-auto">
        <button 
          type="button" 
          onClick={() => navigate(`/show`, { state: { book: props, url } })}
          className="w-34 px-3 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Know More
        </button>
      </div>
    </div>
  );
}

export default Card;
