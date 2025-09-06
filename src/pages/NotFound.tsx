import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50 dark:from-stone-900 dark:to-gray-950 transition-colors duration-500">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-amber-900 dark:text-amber-100 transition-colors duration-300">404</h1>
        <p className="mb-4 text-xl text-amber-700 dark:text-amber-300 transition-colors duration-300">Oops! Page not found</p>
        <a href="/" className="text-amber-600 dark:text-amber-400 underline hover:text-amber-800 dark:hover:text-amber-200 transition-colors duration-300">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
