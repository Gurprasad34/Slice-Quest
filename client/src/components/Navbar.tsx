import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(auth.loggedIn());

  useEffect(() => {
    const updateLoginState = () => setLoginCheck(auth.loggedIn());

    // Listen for login/logout changes
    window.addEventListener('storage', updateLoginState);

    return () => {
      window.removeEventListener('storage', updateLoginState);
    };
  }, []);

  return (
    <div className="display-flex justify-space-between align-center py-2 px-5 mint-green">
      <h1>🍕 NYC Slice Quest 🍕</h1>
      <div className="nav-links">
        <Link to="/" className="btn">Home</Link>
        {!loginCheck ? (
          <>
            <Link to="/create-account" className="btn">Create Account</Link>
            <Link to="/login" className="btn">Login</Link>
          </>
   
      ) : (
      <>
        <button className='btn' type='button'>
          <Link to='/profile'>Profile</Link>
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => {
            auth.logout();
              setLoginCheck(false);
          }}
        >
          Logout
        </button>
      </>
  )}
    </div>
</div >
);
};

export default Navbar;