import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  // Check if a token is present in local storage
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        {token ? (
          // If token is present, show the "Logout" button
          <li>
            <button onClick={() => {
              // Remove the token from local storage on logout
              localStorage.removeItem('token');
              navigate('/login')

              // You can also perform any other logout-related actions here
            }}>
              Logout
            </button>
          </li>
        ) : (
          // If token is not present, show the "Login" and "Register" links
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/usecases">UseCases</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
