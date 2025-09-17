
import React from 'react';

import './Header.css';
import {
  FiLogOut,
  FiMenu,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth()
  const firstLetter = user?.name.split("")[0]

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <header className="header">
      {/* Left Section: Menu + Logo */}
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FiMenu />
        </button>
        <h5 className="header-title">Dashboard</h5>
      </div>

      {/* Right Section: Actions */}
      <div className="header-right">
        {/* 🔔 Notifications */}
        {/* <div
          className="notification"
          onClick={() => navigate("/dashboard/notification")}
        >
          🔔
          <span className="badge">3</span>
        </div> */}

        {/* 👤 Admin Profile */}
        <div
          className="admin-profile"
          onClick={() => navigate("/dashboard/profile")}
        >
          <div className="admin-avatar">{firstLetter}</div>
          <span className="admin-name">{user?.name}</span>
        </div>

        {/* 🚪 Logout */}
        <div className="logout-icon" onClick={handleLogout}>
          <FiLogOut />
          <span className="tooltip">Sign out</span>
        </div>
      </div>
    </header>
  );
}
