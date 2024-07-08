import React, { useState , useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../Stylesheets/Background.css';

function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebase.signInUserWithEmailAndPassword(email, password);
      console.log("Login successful", result);
      navigate('/'); 
      alert( "Login Successful");
    } catch (error) {
      alert('Wrong Email or Password');
    
  }
  };
  useEffect(() => {

    if (firebase.isLoggedIn) {
      navigate("/");
      
    }
    
  })
  return (
    <div>
      <div className="p-5 sticky top-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Welcome to Bookify</div>
        </div>
      </div>
      <div className='flex items-center justify-center min-h-screen bg-gray-100 Background'>
        <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Log In</h2>
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Enter Your Email'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Enter Your Password'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>
            <div>
              <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                Sign In
              </button>
            </div>
          </form>
          <button
            className="w-full px-4 py-2 mt-3 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-indigo-200"
            onClick={async () => {
                await firebase.signInWithGoogle();
                navigate('/'); 
            }}
          >
            Login With Google
          </button>
          <Link to="/register" className="flex justify-center mt-1 font-semibold text-red-600 items-center">Create Your Account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
