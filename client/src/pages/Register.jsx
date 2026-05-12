import { useState } from "react";
import axios from "axios";


function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(
      "http://localhost:3000/register",
      formData
    );

    alert(response.data.message);

    console.log(response.data);

  } catch (error) {

    console.log(error);

    alert("Registration Failed");
  }
};

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-xl shadow-lg w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 mb-6 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;