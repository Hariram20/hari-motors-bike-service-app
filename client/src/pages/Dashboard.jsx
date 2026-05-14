import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Welcome to Hari Motors Dashboard
      </h1>

      <button
  onClick={() => {
    navigate("/booking");
  }}
  className="bg-green-600 text-white px-6 py-3 rounded-lg mb-4"
>
  Book Bike Service
</button>

      <button
        onClick={() => {

          localStorage.removeItem("token");

          navigate("/login");
        }}
        className="bg-red-600 text-white px-6 py-3 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;