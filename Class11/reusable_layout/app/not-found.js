import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      {/* Big 404 text */}
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest animate-bounce">
        404
      </h1>

      {/* Message */}
      <p className="text-2xl mt-6 font-semibold text-gray-800">
        Oops! Page not found.
      </p>
      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow-md hover:bg-gray-300 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
