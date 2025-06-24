import { Link } from "react-router-dom";
import notFound from "../../assets/images/svgs/not-found.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="text-center max-w-md">
        <img
          src={notFound}
          alt="Under construction"
          className="w-full h-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! Looks like this page is still under construction or doesn't
          exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
