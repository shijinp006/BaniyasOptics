import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center px-4 py-10 text-white bg-black">
      <div className="max-w-md text-center">
        <h1 className="font-bold tracking-tight text-7xl">404</h1>

        <p className="mt-4 text-lg text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          It might have been moved or deleted.
        </p>

        <Link
          to="/home"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-[#007E8C] text-white font-semibold hover:opacity-90 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

