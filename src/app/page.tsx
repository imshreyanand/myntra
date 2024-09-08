import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/0b/46/ce/0b46ceb1581581d7ca5069c7120d269b.jpg)' }}>
      <div className="p-10 bg-white bg-opacity-70 rounded-lg shadow-lg text-center">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Myntra</h1>
        <div className="space-y-4">
          <Link href="/login">
            <button className="w-full px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Login
            </button>
          </Link>
          <br />
          <Link href="/signup">
            <button className="w-full px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600">
              Signup
            </button>
          </Link>
          <br />
          <Link href="/login">
            <button className="w-full px-6 py-2 text-white bg-purple-500 rounded hover:bg-purple-600">
              Influencer Login
            </button>
          </Link>
          <br />
          <Link href="/signup">
            <button className="w-full px-6 py-2 text-white bg-pink-500 rounded hover:bg-pink-600">
              Influencer Signup
            </button>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}
