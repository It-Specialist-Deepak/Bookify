import React ,{useEffect , useState} from 'react';
import {useFirebase } from '../context/Firebase';
import Card from '../components/Card';
import '../Stylesheets/Home.css'

function Home() {

    const firebase = useFirebase();
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
            
        }, [])
    
  return (
    <div className=' p-10 pl-16 w-full h-fit Home '>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7'>
        {books.map((book) => (
           <Card key={book.id}  { ...book.data()}/>
        ))}
        </div>
       
       
    </div>
  )
}

export default Home ;





