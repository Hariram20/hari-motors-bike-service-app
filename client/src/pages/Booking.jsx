import { useState } from "react";
import axios from "axios";

function Booking() {

  const [formData, setFormData] = useState({
    customerName: "",
    bikeModel: "",
    serviceType: "",
    bookingDate: "",
    problem: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:3000/book-service",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Booking Failed");
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleBooking}
        className="bg-white p-10 rounded-xl shadow-lg w-[500px]"
      >

        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          Bike Service Booking
        </h1>

        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <input
          type="text"
          name="bikeModel"
          placeholder="Bike Model"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <select
          name="serviceType"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg"
        >
          <option>Select Service Type</option>
          <option>General Service</option>
          <option>Oil Change</option>
          <option>Water Wash</option>
          <option>Engine Repair</option>
        </select>

        <input
          type="date"
          name="bookingDate"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <textarea
          name="problem"
          placeholder="Describe Problem"
          onChange={handleChange}
          className="w-full border p-3 mb-6 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
        >
          Book Service
        </button>

      </form>

    </div>
  );
}

export default Booking;