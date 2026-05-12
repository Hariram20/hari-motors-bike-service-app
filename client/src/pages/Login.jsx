import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://hari-motors-bike-service-app.onrender.com/login",
        {
          email,
          password
        }
      );

      localStorage.setItem("token", response.data.token);

alert(response.data.message);
window.location.href = "/dashboard";

console.log(response.data.token);

    } catch (error) {

      console.log(error);

      alert(error.response.data.message);
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-xl shadow-lg w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 mb-6 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;