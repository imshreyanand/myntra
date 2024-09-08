import React from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  ecoFriendly: number; // Eco-friendly rating out of 5
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Blue Dress',
    price: 19.99,
    ecoFriendly: 5,
    image: 'https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg',
  },
  {
    id: 2,
    title: 'Sustainable Tote Bag',
    price: 12.99,
    ecoFriendly: 4,
    image: 'https://assets.ajio.com/medias/sys_master/root/20230718/DElg/64b6be4aeebac147fc7726fb/-1117Wx1400H-466368522-black-MODEL.jpg',
  },
  {
    id: 3,
    title: 'Biodegradable Phone Case',
    price: 15.49,
    ecoFriendly: 5,
    image: 'https://media.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prt12307_2_embroidered-batik-yellow-gown-dress-with-dupatta-gw0611.jpg',
  },
  {
    id: 4,
    title: 'Recycled Paper Notebook',
    price: 9.99,
    ecoFriendly: 3,
    image: 'https://assets.ajio.com/medias/sys_master/root/20230811/M5OE/64d53b45a9b42d15c9a28850/-473Wx593H-466444104-peach-MODEL.jpg',
  },
];

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <Link href="/insta">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors ml-{200}">
            Instagram
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.title} className="w-full h-100 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              {Array.from({ length: product.ecoFriendly }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5 5V8H0V5h5V0h3v5h5v3H8v7l2-2 5 5z" />
                </svg>
              ))}
              {Array.from({ length: 5 - product.ecoFriendly }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5 5V8H0V5h5V0h3v5h5v3H8v7l2-2 5 5z" />
                </svg>
              ))}
            </div>
            <Link href="/tryon">
              <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors ">
                Try On
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
