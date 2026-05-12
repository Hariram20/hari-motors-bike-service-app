function Home() {
  return (

    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">

      <h1 className="text-6xl font-bold text-blue-700 mb-6">
        Welcome to Hari Motors
      </h1>

      <p className="text-2xl text-gray-700 mb-8">
        Smart Bike Service Booking Platform
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition">
        Book Service Now
      </button>

    </div>
  );
}

export default Home;