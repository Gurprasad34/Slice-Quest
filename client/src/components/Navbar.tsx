import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(auth.loggedIn()); // Track if the user is logged in
  const [isLoading, setIsLoading] = useState(true); // For handling any async state changes

  useEffect(() => {
    const updateLoginState = () => setLoginCheck(auth.loggedIn());

    // Listen for login/logout changes in localStorage and update the state
    window.addEventListener('storage', updateLoginState);

    // Check login state initially (especially important after page load)
    const checkLoginState = async () => {
      try {
        const loggedIn = await auth.loggedIn();
        setLoginCheck(loggedIn);
      } catch (error) {
        console.error('Error checking login state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginState();

    return () => {
      window.removeEventListener('storage', updateLoginState); // Clean up listener on component unmount
    };
  }, []);

  // If the state is loading, we can show a loading spinner or some placeholder UI
  if (isLoading) {
    return (
      <div className="flex items-center justify-between py-6 px-8 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 shadow-xl rounded-b-lg">
        <h1 className="text-4xl font-extrabold text-white">🍕 NYC Slice Quest 🍕</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between py-6 px-8 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 shadow-xl rounded-b-lg">
      <h1 className="text-4xl font-extrabold text-white hover:text-black transition-colors duration-300">
        🍕 NYC Slice Quest 🍕
      </h1>
      <div className="space-x-6">
        <Link
          to="/"
          className="text-xl font-semibold text-white hover:text-gray-800 transition-colors duration-300 transform hover:scale-110"
        >
          Home
        </Link>
        {!loginCheck ? (
          <>
            <Link
              to="/create-account"
              className="text-xl font-semibold text-white hover:text-gray-800 transition-colors duration-300 transform hover:scale-110"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="text-xl font-semibold text-white hover:text-gray-800 transition-colors duration-300 transform hover:scale-110"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              className="text-xl font-semibold text-white hover:text-gray-800 transition-colors duration-300 transform hover:scale-110"
            >
              Profile
            </Link>
            <button
              className="text-xl font-semibold text-white hover:text-gray-800 transition-colors duration-300 transform hover:scale-110"
              type="button"
              onClick={() => {
                auth.logout(); // Trigger logout
                setLoginCheck(false); // Update the UI immediately
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
