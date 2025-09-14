import './Navbar.css';

import React, {
  useContext,
  useState,
} from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '../axios/axiosInstance';
import { AppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { cart, setUser } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useAuth()
  console.log(user);

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/auth/logout");
      if (res.data.success) {
        toast.success(res.data.message || "Logged out successfully");
        setUser(null); // clear user info in context
        navigate("/login"); // redirect immediately
      } else {
        toast.error(res.data.message || "Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Something went wrong during logout");
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isOpen ? "navbar-open" : ""}`}>
      <div className="container-lg">
        <Link className="navbar-brand fw-bold" to="/" onClick={() => setIsOpen(false)}>
          FurShield
        </Link>
        <button
          className={`navbar-toggler ${isOpen ? "active" : ""}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/products" role="button" data-bs-toggle="dropdown">
                Products
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/products" onClick={() => setIsOpen(false)}>
                    All Products
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pet-profiles" onClick={() => setIsOpen(false)}>Pet Profiles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart" onClick={() => setIsOpen(false)}>
                <FaShoppingCart size={18} />
                {cart.length > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Login + Logout Icon */}
            <li className="nav-item d-flex align-items-center gap-2">
              {!user ? (
                <Link className="nav-link login-btn" to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              ) : (
                <>
                  <span className="nav-link">{user.name}</span>
                  <div className="logout-icon" onClick={handleLogout}>
                    <FiLogOut size={20} />
                    <span className="tooltip">Sign out</span>
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
