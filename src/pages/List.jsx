import React ,{ useState } from 'react';
import { useFirebase } from '../context/Firebase';
import '../Stylesheets/Background.css';

function List() {
    const firebase = useFirebase();
        const [name, setName] = useState('');
        const [isbnNumber, serIsbnNumber] = useState('');
        const [price, setPrice] = useState('');
        const [coverpic, setCoverpic] = useState('');
        const [displayName, setDisplayName] = useState('');


        const handleSubmit = async (e) => {
            e.preventDefault();
           await firebase.handleCreateListing(name , isbnNumber , price , coverpic , displayName)
           
     

            }
        

        return (
            <div className='flex items-center justify-center min-h-screen Background '>
                <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md items-center">
                    <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Book Details</h2>
                    <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Book Name</label>
                            <input type="text" id="text" name="text" required
                               
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">ISBN</label>
                            <input type="text" name="ISBN" required
                                onChange={(e) => serIsbnNumber(e.target.value)}
                                value={isbnNumber}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Writter</label>
                            <input type="text" name="Writter" required
                                onChange={(e) => setDisplayName(e.target.value)}
                                value={displayName}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" />
                        </div>
                        
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Price</label>
                            <input type="text" required
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Choose cover File</label>
                            <input type="file" required
                                onChange={(e) => setCoverpic(e.target.files[0])}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" />
                        </div>
                        <div>
                            <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

export default List