import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../Stylesheets/Background.css';

function Register() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (e) => {
  
    const parseFirebaseError = (error) => {
      if (error.includes('auth/weak-password')) {
          return 'Password should be at least 6 characters.';
      }
      if (error.includes('auth/email-already-in-use')) {
        return 'The email address is already in use by another account.';
    }
    if (error.includes('auth/invalid-email')) {
      return ' The email address is not valid.';
  }
    
      // Add other error cases as needed
      return 'An error occurred. Please try again.';
  };

    e.preventDefault();
    try{
    const result = await firebase.signUpUserWithEmailAndPassword(email, password);
    console.log("sigup successfull",result)
    alert("Account Created Successfull")
    navigate('/');
    }catch(error){
      const errorMessage = parseFirebaseError(error.message);
            alert(errorMessage);
     
    }
   
  }


  return (
    <div>
      <div className=" p-5 sticky top-0  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Welcome to Bookify</div>
        </div>
      </div >
      <div className='flex items-center justify-center min-h-screen bg-gray-100 Background'>
        <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Register</h2>
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email:</label>
              <input type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Enter Your Email'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password:</label>
              <input type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Enter Your Password'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" />
            </div>
            <div>
              <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">

                Create Account
              </button>
              <Link to="/login" className="flex justify-center mt-1 font-semibold text-red-600 items-center">Already have an Account?</Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register