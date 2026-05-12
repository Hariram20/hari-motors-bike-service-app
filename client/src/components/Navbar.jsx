import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="bg-black text-white px-8 py-4 shadow-lg">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-yellow-400">
          Hari Motors
        </h1>

        <div className="flex gap-6 text-lg">

          <Link
            to="/"
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-yellow-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hover:text-yellow-400 transition"
          >
            Register
          </Link>

          <Link
            to="/booking"
            className="hover:text-yellow-400 transition"
          >
            Book Service
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;