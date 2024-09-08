import React from 'react';

const images = [
  'https://i.pinimg.com/736x/b4/3c/ee/b43cee018381afac6ceab22ef63142b9.jpg',
  'https://m.media-amazon.com/images/I/71Y2d3ZGPOL._AC_UY350_.jpg',
  'https://previews.123rf.com/images/victorias/victorias1706/victorias170600117/80484000-beautiful-girl-lady-in-luxury-lush-pink-dress-fashion-brunette-woman-in-gorgeous-long-gown-posing.jpg',
  'https://i.pinimg.com/736x/1e/34/ae/1e34ae1438c06d422aae249a764961ff.jpg',
  'https://girldpz.com/wp-content/uploads/2024/05/398Beautiful-girl-Dpz-in-black-dress.jpg',
  'https://www.fabja.com/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/g/r/grey-color-chennai-silk-beautiful-girl-wearing-dress-for-evening-party-fj14850.jpg',

  // Add more image paths here
];

const usernames = [
  '@vanishama',
  '@anusha',
  '@anushka',
  '@chahak',
  '@sakshi',
  '@shreya'
  // Add more usernames here
];

const Insta: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={image} alt={`image-${index}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <span className="bg-white text-black py-2 px-4 rounded-lg text-sm font-semibold">Myntra</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent opacity-75 p-4">
            <span className="text-black text-lg font-medium">{usernames[index]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Insta;
