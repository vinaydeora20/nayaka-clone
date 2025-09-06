import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ankit Sharma',
      text: 'I recently purchased items during the Big Billian Sale, and the discounts were amazing! The quality of the products exceeded my expectations, and the delivery was super fast.',
      imgSrc: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
   
    {
      name: 'Ravi Patel',
      text: 'I’ve been following South Side for a while, and their Big Billian Sale was perfect for me. I got top-notch fitness apparel, and I couldn’t be happier with the purchase. Highly recommended!',
      imgSrc: 'https://randomuser.me/api/portraits/men/12.jpg',
    },

    {
      name: 'Priya Reddy',
      text: 'The Big Billian Sale was a game-changer for me! I got high-quality workout gear at unbeatable prices. Their customer service is excellent, and everything was delivered on time.',
      imgSrc: 'https://randomuser.me/api/portraits/women/29.jpg', // Indian South person
    },   
    {
      name: 'Neha Nair',
      text: 'I found the perfect pair of shoes during the Big Billian Sale. The prices were unbeatable, and the delivery was so fast. Definitely recommend checking out their offers!',
      imgSrc: 'https://randomuser.me/api/portraits/women/18.jpg', // Indian South person
    },
    
   
    
  ];

  return (
    <section className="bg-white px-4 py-12 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className=" font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12" style={{margin:"10px"}}>
          What Our Customers Are Saying
        </h2>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative gap-8 p-8" style={{margin:"10px"}}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={` rounded-lg text-center md:w-1/3 flex flex-col justify-between ${index > 0 ? 'mt-0' : ''}`}
            >
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <p className="font-bold uppercase">{testimonial.name}</p>
              <p className="text-xl font-light italic text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                {/* Rating Stars */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
