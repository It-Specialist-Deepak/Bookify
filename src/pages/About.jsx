import React from 'react';
import '../Stylesheets/Background.css'

const AboutPage = () => {
  return (
    <div className=" font-sans leading-normal tracking-normal Background">
     

      {/* Main Content */}
      <main className="container mx-auto  rounded-lg   ">
        {/* Introduction */}
        <div className='bg-white bg-opacity-30 p-12 shadow-md'>
        <section className="mb-8 text-white  ">
          <h2 className="text-3xl font-bold mb-4 text-white">Welcome to Bookify</h2>
          <p className=" leading-relaxed  text-gray-600 text-lg">
            Our booksApp is your one-stop destination for all your reading needs. We offer a wide range of books from various genres, ensuring there's something for every book lover. Whether you're looking for the latest bestseller, a classic novel, or a niche publication, we've got you covered.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className=" leading-relaxed text-gray-600 text-lg">
            Our mission is to foster a love for reading and make books accessible to everyone. We believe in the power of books to educate, inspire, and transform lives. We are dedicated to providing a welcoming and inclusive environment for all readers.
          </p>
        </section>
        </div>

        {/* Team Members */}
        <section className="mb-7 p-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2IjXd4wXsjYxcFF70Oycq0CE-pv3xl_XeQ&s" alt="Team Member 1" />
              <h3 className="text-xl font-semibold mb-2">Deepak Rathore</h3>
              <p className="text-white-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://via.placeholder.com/150" alt="Team Member 2" />
              <h3 className="text-xl font-semibold mb-2">Bob Smith</h3>
              <p className="text-white-600">Head of Marketing</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://via.placeholder.com/150" alt="Team Member 3" />
              <h3 className="text-xl font-semibold mb-2">Carol Davis</h3>
              <p className="text-white-600">Writter</p>
            </div>
          </div>
        </section>
        </main>
        {/* Contact Information */}
        <section className='text-white bg-gray-800 w-full mx-auto  p-6  rounded-lg shadow-md flex flex-col items-center justify-center '>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-white-700 leading-relaxed mb-4">
            Have any questions or need assistance? Feel free to reach out to us!
          </p>
          <p className="text-white-700">
            <strong>Email:</strong> support@bookify.com<br />
            <strong>Phone:</strong> (123) 456-7890<br />
            <strong>Address:</strong> 123 Book St, New York City, BK 12345
          </p>
        </section>
      
    </div>
  );
};

export default AboutPage;
